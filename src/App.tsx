import Breadcrumb from "./components/Breadcrumb";
import Button from "./components/Button";

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
    >
      <path
        d="M17.5 5.75047C17.5 5.37691 17.3344 5.03034 17.1775 4.77011C17.0082 4.4893 16.7806 4.19937 16.5308 3.91669C16.0298 3.34962 15.3762 2.74064 14.7418 2.18977C14.1037 1.63567 13.4678 1.12546 12.9928 0.754682C12.7549 0.568986 12.5564 0.41755 12.417 0.312239C12.3473 0.259569 12.2923 0.218397 12.2544 0.190203L12.2109 0.157818L12.1993 0.149264L12.1953 0.146304C11.8618 -0.0993576 11.3919 -0.0284673 11.1462 0.305035C10.9005 0.638521 10.9717 1.108 11.3052 1.35367L11.3179 1.36308L11.358 1.39285C11.3934 1.41925 11.4458 1.4585 11.5128 1.50911C11.6468 1.61036 11.839 1.75695 12.0698 1.93713C12.5323 2.2981 13.1464 2.79099 13.7583 3.32235C14.3739 3.85694 14.9702 4.41576 15.4067 4.90983C15.4343 4.94108 15.461 4.9718 15.4869 5.00195L0.75 5.00196C0.335787 5.00196 -3.62116e-08 5.33774 0 5.75195C3.62118e-08 6.16617 0.335787 6.50196 0.75 6.50196L15.4843 6.50195C15.4593 6.53116 15.4334 6.56088 15.4067 6.59111C14.9702 7.08518 14.3739 7.64401 13.7583 8.1786C13.1464 8.70995 12.5323 9.20285 12.0698 9.56382C11.839 9.74399 11.6468 9.89059 11.5128 9.99184C11.4458 10.0425 11.3934 10.0817 11.358 10.1081L11.3179 10.1379L11.3052 10.1473C10.9717 10.3929 10.9005 10.8624 11.1462 11.1959C11.3919 11.5294 11.8618 11.6003 12.1953 11.3546L12.1993 11.3517L12.2109 11.3431L12.2544 11.3107C12.2923 11.2826 12.3473 11.2414 12.417 11.1887C12.5564 11.0834 12.7549 10.932 12.9928 10.7463C13.4678 10.3755 14.1037 9.86528 14.7418 9.31118C15.3762 8.76031 16.0298 8.15133 16.5308 7.58425C16.7806 7.30158 17.0082 7.01165 17.1775 6.73083C17.3334 6.47217 17.498 6.12819 17.5 5.7572"
        fill="currentColor"
      />
    </svg>
  );
}

function App() {
  const icon = <ArrowRightIcon />;

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 p-6">
      <section className="flex flex-col gap-3">
        <h2 className="text-base font-medium text-gray-900">
          Button — Figma 407:510376 (filled primary and neutral)
        </h2>
        <p className="text-sm text-gray-600">
          Off-color filled styles; sizes, selected, disabled, icon-only.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" leadingIcon={icon}>
            Primary
          </Button>
          <Button variant="primary" selected leadingIcon={icon}>
            Selected
          </Button>
          <Button variant="primary" disabled leadingIcon={icon}>
            Disabled
          </Button>
          <Button leadingIcon={icon}>Neutral</Button>
          <Button selected leadingIcon={icon}>
            Neutral selected
          </Button>
          <Button size="small" leadingIcon={icon}>
            Small
          </Button>
          <Button variant="primary" iconOnly aria-label="Next" leadingIcon={icon} />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-base font-medium text-gray-900">
          Rounded (<code className="text-xs">ComponentRounded</code>)
        </h2>
        <p className="text-sm text-gray-600">
          Default is <code className="text-xs">small</code> (Figma radius-sm). Override
          with <code className="text-xs">none</code>,{" "}
          <code className="text-xs">medium</code>,{" "}
          <code className="text-xs">large</code>, or{" "}
          <code className="text-xs">full</code>.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button rounded="none" variant="primary" leadingIcon={icon}>
            none
          </Button>
          <Button rounded="small" variant="primary" leadingIcon={icon}>
            small
          </Button>
          <Button rounded="medium" variant="primary" leadingIcon={icon}>
            medium
          </Button>
          <Button rounded="large" variant="primary" leadingIcon={icon}>
            large
          </Button>
          <Button rounded="full" variant="primary" leadingIcon={icon}>
            full
          </Button>
          <Button rounded="full" variant="primary" iconOnly aria-label="Next" leadingIcon={icon} />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-base font-medium text-gray-900">
          Secondary, subtle, transparent (off-color)
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="secondarySolid" leadingIcon={icon}>
            Secondary solid
          </Button>
          <Button variant="secondaryOutline" leadingIcon={icon}>
            Outline
          </Button>
          <Button variant="subtle" leadingIcon={icon}>
            Subtle
          </Button>
          <Button variant="transparent" leadingIcon={icon}>
            Transparent
          </Button>
          <Button outline leadingIcon={icon}>
            outline prop
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-base font-medium text-white">
          On-color (on primary-600 surface)
        </h2>
        <div className="flex flex-wrap items-center gap-3 rounded-sm bg-primary-600 p-4">
          <Button variant="primary" onColor leadingIcon={icon}>
            Primary
          </Button>
          <Button variant="neutral" onColor leadingIcon={icon}>
            Neutral
          </Button>
          <Button variant="secondarySolid" onColor leadingIcon={icon}>
            Secondary solid
          </Button>
          <Button variant="secondaryOutline" onColor leadingIcon={icon}>
            Outline
          </Button>
          <Button variant="subtle" onColor leadingIcon={icon}>
            Subtle
          </Button>
          <Button variant="transparent" onColor leadingIcon={icon}>
            Transparent
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-base font-medium text-gray-900">Destructive</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" destructive leadingIcon={icon}>
            Primary
          </Button>
          <Button variant="secondarySolid" destructive leadingIcon={icon}>
            Secondary solid
          </Button>
          <Button variant="secondaryOutline" destructive leadingIcon={icon}>
            Outline
          </Button>
          <Button variant="subtle" destructive leadingIcon={icon}>
            Subtle
          </Button>
          <Button variant="transparent" destructive leadingIcon={icon}>
            Transparent
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h1 className="text-base font-medium text-gray-900">
          Breadcrumb tests
        </h1>
        <Breadcrumb
          items={[
            { label: "Home", href: "#" },
            { label: "Prayers", href: "#" },
            { label: "Daily schedule", current: true },
          ]}
        />
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-sm text-gray-600">
          Overflow: “...” opens a menu with hidden levels (Figma &gt;5 pattern).
        </p>
        <Breadcrumb
          items={[
            { label: "Home", href: "#/home" },
            {
              ellipsis: true,
              items: [
                { label: "Section A", href: "#/a" },
                { label: "Section B", href: "#/b" },
                { label: "Section C", href: "#/c" },
              ],
            },
            { label: "Settings", href: "#/settings" },
            { label: "Notifications", current: true },
          ]}
        />
      </section>
    </main>
  );
}

export default App;
