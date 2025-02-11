import { Counter } from "./Counter";

let count = 0;

window.addEventListener("CounterRequest", (event) => {
  count += event.detail?.by || 0;
  window.dispatchEvent(
    new CustomEvent("CounterResponse", {
      detail: count,
    })
  );
});

export default function App() {
  return <Counter />;
}
