function appendText(el, text) {
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
}

function appendArray(el, children) {
  children.forEach((child) => {
    if (Array.isArray(child)) {
      appendArray(el, child);
    } else if (child instanceof window.Element) {
      el.appendChild(child);
    } else if (typeof child === 'string') {
      appendText(el, child);
    }
  });
}

function makeElement(type, props, ...otherChildren) {
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

export const div = (...args) => makeElement('div', ...args);
export const p = (...args) => makeElement('p', ...args);
export const a = (...args) => makeElement('a', ...args);
export const button = (...args) => makeElement('button', ...args);
