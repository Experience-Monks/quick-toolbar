'use strict';

var EventEmitter = require('events').EventEmitter;

var newElement = require('new-element');

module.exports = function(el, applyCSS) {

  var elContainer = document.createElement('div');
  var button = new EventEmitter();

  button.container = elContainer;
  button.selected = false;
  button.setSelected = function() {
    this.selected = true;
    applyCSS(elContainer, '.itemContainer.selected');
    this.emit('selected');
  };
  button.setUnSelected = function() {
    this.selected = false;
    applyCSS(elContainer, '.itemContainer.unselected');
    this.emit('unselected');
  };

  if(typeof el === 'string') {
    el = newElement(el);
  }

  applyCSS(el, '.item');
  elContainer.appendChild(el);

  applyCSS(elContainer, '.itemContainer.unselected');

  return button;
};