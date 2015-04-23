var quickToolbar = require('./..');

var toolbar = quickToolbar();
var btnEl;


toolbar.add('<div>M</div>')
.on('selected', function() {
  console.log('selected m');
})
.on('unselected', function() {
  console.log('unselected m');
});

toolbar.addFromText('R')
.on('selected', function() {
  console.log('selected r');
})
.on('unselected', function() {
  console.log('unselected r');
});

btnEl = document.createElement('div');
btnEl.innerHTML = 'NA';

toolbar.add(btnEl)
.on('selected', function() {
  console.log('selected na');
})
.on('unselected', function() {
  console.log('unselected na');
});