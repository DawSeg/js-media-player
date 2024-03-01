const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

utils.strContains =  function(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
  
};

export default utils;
