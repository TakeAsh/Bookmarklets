javascript:
(() => {
  const tbody = Object.keys(location).sort().map((p) => {
    const value = ['href', 'search', 'hash'].includes(p)
      ? location[p].replace(/([\?&#])/g, '<br>$1').replace(/^<br>/, '')
      : location[p];
    return `<tr><td>${p}</td><td>${typeof location[p]}</td><td>${value}</td></tr>`;
  }).join('\n');
  const doc = window.open('', '_blank').document;
  doc.open('text/html');
  doc.write([
    '<html><body>',
    '<table border="1">',
    '<tr><th>Property</th><th>Type</th><th>Value</th></tr>',
    tbody,
    '</table>',
    '</body></html>',
  ].join('\n'));
  doc.close();
})();
