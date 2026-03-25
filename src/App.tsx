import Breadcrumb from "./components/Breadcrumb";

function App() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 p-6">
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
