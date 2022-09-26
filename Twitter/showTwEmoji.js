javascript:
((d) => {
  const style = d.createElement('style');
  style.appendChild(d.createTextNode('img.emoji { height: 1em; width: 1em; margin: 0 .05em 0 .1em; vertical-align: -0.1em;}'));
  d.head.appendChild(style);
  const script = d.createElement('script');
  script.src = '//twemoji.maxcdn.com/v/latest/twemoji.min.js';
  script.crossOrigin = 'anonymous';
  script.addEventListener('load', () => { twemoji.parse(d.body); });
  d.head.appendChild(script);
})(document);
