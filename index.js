var applySelectorAndCss = require('apply-selector-and-css');
var defaultCSS = require('./css');
var button = require('./lib/button');

module.exports = function(options) {

  var container = document.createElement('nav');
  var applyCSS;
  var buttons = [];

  options = options || {};
  options.css = options.css === undefined ? defaultCSS : options.css;
  options.container = options.container || document.body;

  applyCSS = applySelectorAndCss(options.css);
  options.container.appendChild(container);
  
  return {
    container: container,

    add: function(el) {

      var btn = button(el, applyCSS);

      btn.container.addEventListener('click', function() {

        if(!btn.selected) {
          buttons.forEach( function(oBtn) {
            if(oBtn.selected) {
              oBtn.setUnSelected();
            }
          });

          btn.setSelected();
        } else {
          btn.setUnSelected();
        }
      });

      container.appendChild(btn.container);

      buttons.push(btn);

      return btn;
    },

    addFromText: function(text) {

      var el = document.createElement('div');

      el.innerHTML = text;

      return this.add(el);
    },

    destroy: function() {
      container.parentNode.removeChild(container); 
    }
  };
};