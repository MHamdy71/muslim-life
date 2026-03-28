import { CheckCircleIcon } from "@phosphor-icons/react";
import Button from "./components/Button";
import Card from "./components/Card";

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
          />
        </div>
      </section>
    </main>
  );
}

export default App;
