(function () {
  function inlineComputedStyles(source, target) {
    const sourceElements = [source, ...source.querySelectorAll("*")];
    const targetElements = [target, ...target.querySelectorAll("*")];

    sourceElements.forEach((sourceElement, index) => {
      const targetElement = targetElements[index];
      const computedStyle = getComputedStyle(sourceElement);
      let cssText = "";

      for (const property of computedStyle) {
        cssText += `${property}:${computedStyle.getPropertyValue(property)};`;
      }

      targetElement.setAttribute("style", cssText);
    });
  }

  async function toSvg(node, options = {}) {
    const rect = node.getBoundingClientRect();
    const width = Math.ceil(options.width ?? rect.width);
    const height = Math.ceil(options.height ?? rect.height);
    const clone = node.cloneNode(true);

    inlineComputedStyles(node, clone);

    if (options.prepareClone) {
      await options.prepareClone(clone);
    }

    const wrapperStyle = [
      "box-sizing:border-box",
      "display:grid",
      "place-items:start center",
      "overflow:visible",
      "font-family:Montserrat,Arial,Helvetica,sans-serif",
      `--device-size:${Math.ceil(rect.width)}px`,
      `width:${width}px`,
      `height:${height}px`,
      `padding-top:${options.paddingTop ?? 0}px`,
      "background:transparent",
    ].join(";");
    const serializedNode = new XMLSerializer().serializeToString(clone);
    const escapedWrapperStyle = wrapperStyle
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml" class="svg-export" style="${escapedWrapperStyle}">
      <style>
        .svg-export .device {
          margin: 0;
        }
      </style>
      ${serializedNode}
    </div>
  </foreignObject>
</svg>`;
  }

  window.domToSvg = { toSvg };
})();
