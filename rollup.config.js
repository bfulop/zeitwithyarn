// rollup.config.js
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import postprocess from 'rollup-plugin-postprocess'

export default {
  input: 'date.js',
  output: {
    dir: 'bundle',
    format: 'cjs',
    sourceMap: false
  },
  plugins: [
    json(),
    resolve({
      jsnext: false,
      module: true,
      main: false,
      jail: './node_modules/uglify-js',
      preferBuiltins: true,
      only: [
        'js-beautify',
        'mjml',
        // 'mjml-section',
        'mjml-core',
        'mjml-validator',
        'mjml-migrate',
        'uglify-js',
        // 'html-minifier',
        // 'mjml-social',
        // 'mjml-navbar',
        // 'mjml-carousel',
        // 'mjml-accordion',
        // 'mjml-social',
        // 'mjml-navbar',
        // 'mjml-carousel',
        // 'mjml-accordion',
        // 'mjml-body',
        // 'mjml-head',
        // 'mjml-head-attributes',
        // 'mjml-head-breakpoint',
        // 'mjml-head-font',
        // 'mjml-head-preview',
        // 'mjml-head-style',
        // 'mjml-head-title',
        // 'mjml-hero',
        // 'mjml-button',
        // 'mjml-column',
        // 'mjml-divider',
        // 'mjml-group',
        // 'mjml-image',
        // 'mjml-raw',
        // 'mjml-spacer',
        // 'mjml-text',
        // 'mjml-table',
        // 'mjml-wrapper'
      ]
    }),
    commonjs(),
    postprocess([
      [/(commonjsRequire\.resolve)/, 'require.resolve'],
      [/(\"\.\.\/lib)/, '// $1'],
      [/(\"\.\/exports\.js)/, '// $1']

    // "../lib/utils.js",
    // "../lib/ast.js",
    // "../lib/parse.js",
    // "../lib/transform.js",
    // "../lib/scope.js",
    // "../lib/output.js",
    // "../lib/compress.js",
    // "../lib/sourcemap.js",
    // "../lib/mozilla-ast.js",
    // "../lib/propmangle.js",
    // "../lib/minify.js",
    // "./exports.js",
    ])
  ]
}
