import Card from "./components/Card";
import CardRoot from "./components/card/base/CardRoot";

function App() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 p-6">
      <Card title="Card Title" body="Card content" />
      <CardRoot>
        <h2>Card Title</h2>
        <p>Card content</p>
      </CardRoot>
    </main>
  );
}

export default App;
