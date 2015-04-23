module.exports = {

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
};