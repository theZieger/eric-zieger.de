// https://gist.github.com/paulirish/441842
// selectorSupported lovingly lifted from the mad italian genius, diego perini
// http://javascript.nwbox.com/CSSSupport/
function selectorSupported(selector){
  var support, link, sheet, doc = document,
  root = doc.documentElement,
  head = root.getElementsByTagName('head')[0],

  impl = doc.implementation || {
    hasFeature: function() {
      return false;
    }
  },

  link = doc.createElement("style");
  link.type = 'text/css';

  (head || root).insertBefore(link, (head || root).firstChild);

  sheet = link.sheet || link.styleSheet;

  if (!(sheet && selector)) return false;

  support = impl.hasFeature('CSS2', '') ?

  function(selector) {
    try {
      sheet.insertRule(selector + '{ }', 0);
      sheet.deleteRule(sheet.cssRules.length - 1);
    } catch (e) {
      return false;
    }
    return true;
  } : function(selector) {
    sheet.cssText = selector + ' { }';
    return sheet.cssText.length !== 0 && !(/unknown/i).test(sheet.cssText) && sheet.cssText.indexOf(selector) === 0;
  };
  return support(selector);

};


Modernizr.addTest('checkedselector',function() {
  return selectorSupported(':checked');
});


// on link click toggle checkbox by clicking label

var links = document.querySelectorAll(".nav-item");
var toggle = document.querySelectorAll(".nav-toggle");

for(var i=0; i<links.length; i++) {
  links[i].addEventListener('click', function() {
    toggle[0].click();
  }, false);
}

// on keyup on input toogle label class

var inputs = document.querySelectorAll("input");

for(var i=0; i<inputs.length; i++) {
  inputs[i].addEventListener('keyup', function() {
    if (this.value !== '') {
      if (!this.classList.contains('is-filled')) {
        this.previousElementSibling.classList.add('is-filled');
      }
    } else {
      this.previousElementSibling.classList.remove('is-filled');
    }
  }, false);
}

