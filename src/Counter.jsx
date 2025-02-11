import { useStore } from "@nanostores/react";
import { $counter } from "./counter.js";

export function Counter() {
  const counter = useStore($counter);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}
    >
      <button
        onClick={() =>
          window.dispatchEvent(new CustomEvent("CounterRequest", { detail: { by: 1 } }))
        }
      >
        +
      </button>
      <span>{counter}</span>
      <button
        onClick={() =>
          window.dispatchEvent(new CustomEvent("CounterRequest", { detail: { by: -1 } }))
        }
      >
        -
      </button>
    </div>
  );
}
