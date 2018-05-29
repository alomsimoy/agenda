export default function createApp(root, component, store) {
    let el = null;

    const update = (prev) => {
      const el = component(store);

      if (!el.isEqualNode(prev)) {
        prev.parentElement.replaceChild(el, prev);
      }

      return el;
    };

    el = component(store);
    store.subscribe(() => {
      el = update(el);
    });

    root.appendChild(el);
}

