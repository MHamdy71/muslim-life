import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react";
import Button from "./components/Button";
import Card from "./components/Card";
import ProgressBar, {
  type ProgressBarSize,
  type ProgressBarStyle,
} from "./components/ProgressBar";
import Tag, { type TagSize, type TagStyle } from "./components/Tag";

const tagStyles: TagStyle[] = [
  "neutral",
  "success",
  "warning",
  "error",
  "info",
];

const tagSizes: TagSize[] = ["xSmall", "small", "medium", "large"];

const progressBarStyles: ProgressBarStyle[] = [
  "primary",
  "neutral",
  "warning",
  "error",
  "info",
];

const progressBarSizes: ProgressBarSize[] = ["small", "medium", "large"];

const progressStyleLabel: Record<ProgressBarStyle, string> = {
  primary: "Primary",
  neutral: "Neutral",
  warning: "Warning",
  error: "Error",
  info: "Info",
};

const styleLabel: Record<TagStyle, string> = {
  neutral: "Neutral",
  success: "Success",
  warning: "Warning",
  error: "Error",
  info: "Info",
};

function App() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 p-6">
      <section className="flex flex-col gap-6">
        <h1 className="text-lg font-bold text-gray-900">Card playground</h1>
        <div className="flex gap-4 flex-wrap">
          <Card
            type="favorite"
            featuredIcon={
              <CheckCircleIcon
                size={24}
                weight="duotone"
                className="text-success-700"
                aria-hidden
              />
            }
            title={<b>Card Title</b>}
            body={<p>Card content placeholder text goes here</p>}
            footer={
              <div className="flex gap-4">
                <Button variant="secondarySolid">Button</Button>
                <Button variant="primary">Button</Button>
              </div>
            }
          />
          <Card
            type="favorite"
            featuredIcon={
              <CheckCircleIcon
                size={24}
                weight="duotone"
                className="text-success-700"
                aria-hidden
              />
            }
            title={<b>Card Title</b>}
            body={<p>Card content placeholder text goes here</p>}
            footer={
              <div className="flex gap-4">
                <Button variant="secondarySolid">Button</Button>
                <Button variant="primary">Button</Button>
              </div>
            }
          />
          <Card
            type="favorite"
            featuredIcon={
              <CheckCircleIcon
                size={24}
                weight="duotone"
                className="text-success-700"
                aria-hidden
              />
            }
            title={<b>Card Title</b>}
            body={<p>Card content placeholder text goes here</p>}
            footer={
              <div className="flex gap-4">
                <Button variant="secondarySolid">Button</Button>
                <Button variant="primary">Button</Button>
              </div>
            }
            tags={
              <div className="flex w-full max-w-full flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {tagStyles.map((s) => (
                    <Tag
                      key={`fill-${s}`}
                      size="small"
                      style={s}
                      variant="filled"
                    >
                      {styleLabel[s]}
                    </Tag>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {tagStyles.map((s) => (
                    <Tag
                      key={`outline-${s}`}
                      size="small"
                      style={s}
                      variant="outline"
                    >
                      {styleLabel[s]}
                    </Tag>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {tagSizes.map((sz) => (
                    <Tag
                      key={`sz-${sz}`}
                      size={sz}
                      style="neutral"
                      variant="filled"
                    >
                      {sz}
                    </Tag>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {tagStyles.map((s) => (
                    <Tag
                      key={`pill-${s}`}
                      size="small"
                      style={s}
                      variant="filled"
                      rounded
                    >
                      {styleLabel[s]}
                    </Tag>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Tag
                    size="small"
                    style="warning"
                    variant="filled"
                    icon={<WarningCircleIcon weight="fill" aria-hidden />}
                    iconPlacement="leading"
                  >
                    Icon lead
                  </Tag>
                  <Tag
                    size="small"
                    style="info"
                    variant="filled"
                    icon={<WarningCircleIcon weight="fill" aria-hidden />}
                    iconPlacement="trailing"
                  >
                    Icon trail
                  </Tag>
                </div>
              </div>
            }
          />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-lg font-bold text-gray-900">
          Progress bar playground
        </h2>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-gray-700">By style (medium)</p>
          <div className="flex max-w-xl flex-col gap-4">
            {progressBarStyles.map((s) => (
              <ProgressBar
                key={s}
                value={s === "error" ? 72 : s === "warning" ? 55 : 38}
                size="medium"
                style={s}
                label={progressStyleLabel[s]}
                helperText="Helper text for this variant."
                helperIcon={
                  <InfoIcon
                    weight="regular"
                    className="text-current"
                    aria-hidden
                  />
                }
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-gray-700">By size (primary)</p>
          <div className="flex max-w-xl flex-col gap-4">
            {progressBarSizes.map((sz) => (
              <ProgressBar
                key={sz}
                value={62}
                size={sz}
                style="primary"
                label={`Size: ${sz}`}
                helperText="Same value, different track height."
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-gray-700">Rounded</p>
          <div className="grid max-w-xl gap-4 sm:grid-cols-2">
            <ProgressBar
              value={50}
              size="medium"
              style="neutral"
              label="Rounded off"
              rounded={false}
            />
            <ProgressBar
              value={50}
              size="medium"
              style="neutral"
              label="Rounded on"
              rounded
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-gray-700">
            Large with inline value
          </p>
          <div className="max-w-xl">
            <ProgressBar
              value={84}
              size="large"
              style="primary"
              label="Upload progress"
              helperText="Large bars show the percentage inside the fill."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-gray-700">Circular</p>
          <div className="flex flex-wrap items-end gap-8">
            {progressBarSizes.map((sz) => (
              <ProgressBar
                key={`circ-${sz}`}
                value={50}
                size={sz}
                style="primary"
                label={sz}
                helperText={sz === "small" ? undefined : "Active users"}
                circular
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
