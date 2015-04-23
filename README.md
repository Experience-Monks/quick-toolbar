# quick-toolbar

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Create a quick and dirty toolbar for rapid prototyping

## Usage

[![NPM](https://nodei.co/npm/quick-toolbar.png)](https://www.npmjs.com/package/quick-toolbar)

Here are three ways you can create toolbar buttons:
```javascript
var quickToolbar = require('./..');

var toolbar = quickToolbar();
var btnEl;

// dropping element html
toolbar.add('<div>M</div>')
.on('selected', function() {
  console.log('selected m');
})
.on('unselected', function() {
  console.log('unselected m');
});

// creating a toolbar button from a String
toolbar.addFromText('R')
.on('selected', function() {
  console.log('selected r');
})
.on('unselected', function() {
  console.log('unselected r');
});

// creating a toolbar button from an HTMLElement
btnEl = document.createElement('div');
btnEl.innerHTML = 'NA';

toolbar.add(btnEl)
.on('selected', function() {
  console.log('selected na');
})
.on('unselected', function() {
  console.log('unselected na');
});
```

### Constructing `quickToolbar()`

You can pass in a couple of options when constructing a `quick-toolbar`.

```javascript
quickToolbar({
    // this is the parent container that the quick-toolbar will be made in
    container: document.body,

    // this is the css that will be applied to the quick toolbars elements
    // if css === undefined then the following properties are used
    // if css === false then NO inline css is applied through JS
    css: {
        '.itemContainer': {
          display: 'block',
          width: '40px',
          height: '40px',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          background: '#EEE',
          margin: '1px',
          color: '#555',
          'font-family': 'Arial, sans-serif'
        },

        '.item': {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          '-webkit-touch-callout': 'none',
          '-webkit-user-select': 'none',
          '-khtml-user-select': 'none',
          '-moz-user-select': 'none',
          '-ms-user-select': 'none',
          'user-select': 'none'
        },

        '.selected': {
          border: '1px solid #F00'
        },

        '.unselected': {
          border: '1px solid transparent'
        }
    }
});
```





## License

MIT, see [LICENSE.md](http://github.com/mikkoh/quick-toolbar/blob/master/LICENSE.md) for details.
