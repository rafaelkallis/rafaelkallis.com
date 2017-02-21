module.exports = {
  npm: {
    globals: {
      Inferno: 'inferno',
      Component: 'inferno-component',
      createElement: 'inferno-create-element',
      classNames: 'classnames',
      FETCH_POLYFILL: 'whatwg-fetch'
    },
    styles: {
      'normalize.css': ['normalize.css']
    }
  },
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  plugins: {
    babel: {
      presets: ['es2015'],
      plugins: ['inferno', 'syntax-jsx']
    }
  },
  modules: {
    autoRequire: {
      'app.js': ['initialize']
    }
  }
};