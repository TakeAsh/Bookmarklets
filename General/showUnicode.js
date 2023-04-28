javascript:
((w, d) => {
  try {
    const selection = w.getSelection();
    const text = getSelectedNodes(selection)
      .filter((node) => ['#text', 'IMG'].includes(node.nodeName))
      .reduce(
        (acc, node) => {
          acc += node.nodeName == 'IMG'
            ? node.alt
            : node.textContent;
          return acc;
        },
        ''
      ) || selection.toString();
    if (text == '') {
      alert('No selection');
      return;
    }
    const encoded = Array.from(text)
      .map((c) => `${c}{${c.codePointAt(0).toString(16)}}`)
      .join('');
    alert(encoded);
  } catch (err) {
    alert(err);
  }
  function getSelectedNodes(selection) {
    const fragment = Array.from(Array(selection.rangeCount).keys())
      .reduce(
        (acc, i) => {
          acc.append(selection.getRangeAt(i).cloneContents());
          return acc;
        },
        d.createDocumentFragment()
      );
    const nodes = [];
    const walker = d.createTreeWalker(fragment);
    let node = walker.currentNode;
    while (node) {
      nodes.push(node);
      node = walker.nextNode();
    }
    return nodes;
  }
})(window, document);
