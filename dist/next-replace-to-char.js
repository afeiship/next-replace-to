(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var charRE = /\w/g;

  nx.replaceToChar = function(inString, inStart, inEnd, inChar){
    var replaced = inString.slice(inStart,inEnd);
    var withChar = replaced.replace(charRE,inChar);
    return inString.replace(replaced,withChar);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.replaceToChar;
  }

}());
