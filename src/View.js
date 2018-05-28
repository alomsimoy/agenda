export function view(render) {
  return (store) => {
    let el = null;

    const update = (prev) => {
      const el = render(store);

      if (!el.isEqualNode(prev)) {
        prev.parentElement.replaceChild(el, prev);
      }

      return el;
    };

    el = render(store);
    store.subscribe(() => {
      el = update(el);
    });

    return el;
  }
}

export function makeElement(type, props, ...otherChildren) {
  const appendArray = (el, children) => {
    children.forEach((child) => {
      if (Array.isArray(child)) {
        appendArray(el, child);
      } else if (child instanceof window.Element) {
        el.appendChild(child);
      } else if (typeof child === 'string') {
        appendText(el, child);
      }
    });
  };

  const appendText = (el, text) => {
    const textNode = document.createTextNode(text);
    el.appendChild(textNode);
  };

  const el = document.createElement(type);

  if (Array.isArray(props)) {
    appendArray(el, props);
  } else if (props instanceof window.Element) {
    el.appendChild(props);
  } else if (typeof props === 'string') {
    appendText(el, props);
  } else if (typeof props === 'object') {
    Object.keys(props).forEach((propName) => {
      if (propName in el) {
        const value = props[propName];

        if (propName === 'style') {
          // implement styles
          console.warn('Styles as props not implemented yet');
        } else if (value) {
          el[propName] = value;
        }
      } else {
        console.warn(`${propName} is not a valid property of a <${type}>`);
      }
    });
  }

  if (otherChildren) appendArray(el, otherChildren);

  return el;
}
