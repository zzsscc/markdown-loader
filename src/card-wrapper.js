module.exports = function cardWrapper(html) {
  const group = html.replace(/<h5/g, ':::<h5').replace(/<h4/g, ':::<h4').split(':::');

  return group
    .map(fragment => {
      if (fragment.indexOf('<h5') !== -1) {
        return `<div class="card">${fragment}</div>`;
      } else if (fragment.indexOf('<h4') !== -1) {
        return `<div class="card-full">${fragment}</div>`;
      }

      return fragment;
    })
    .join('');
};
