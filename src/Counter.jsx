import { useEffect, useRef } from "react";

export function Counter() {
  const ref = useRef();

  useEffect(() => {
    const listener = (event) => {
      ref.current.textContent = event.detail;
    };
    window.addEventListener("CounterResponse", listener);
    return () => {
      window.removeEventListener("CounterResponse", listener);
    };
  });

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("CounterRequest"));
  }, []);

  return (
    <div>
      <button
        onClick={() =>
          window.dispatchEvent(new CustomEvent("CounterRequest", { detail: { by: 1 } }))
        }
      >
        +
      </button>
      <span ref={ref} />
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
