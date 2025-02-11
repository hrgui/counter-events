import { atom } from "nanostores";

let count = 0;

export const $counter = atom(count);

window.addEventListener("CounterRequest", (event) => {
  count += event.detail?.by || 0;
  window.dispatchEvent(
    new CustomEvent("CounterResponse", {
      detail: count,
    })
  );
});

window.addEventListener("CounterResponse", (event) => {
  $counter.set(event.detail);
});
