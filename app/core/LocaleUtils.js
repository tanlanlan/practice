export default {
  getLocalePart: getLocalePart
};

// 获取 locales 路径的util
function getLocalePart(locales) {
  var path = locales[Object.keys(locales)[0]];
  var sep = '/';
  // Change separators to unix style
  path = path.replace(/\\/g, sep);

  path = path.split(sep);

  // Remove first empty chunk
  if (!path[0]) {
    path.shift();
  }
  // Remove empty last chunk if prefix ends with slash
  if (!path[path.length - 1]) {
    path.pop();
  }
  path.shift();
  path.pop();
  path = path.join(sep);
  return path;
}
