export default function (store) {
  const counter = store.getState().counterState.counter;
  return `
    <h1>Hello World</h1>
    <div>Counter: ${counter}</div>
  `;
}
