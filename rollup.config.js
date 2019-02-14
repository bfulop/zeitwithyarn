// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'

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
      jsnext: true,
      module: true,
      main: true,
      // jail: './node_modules/uglify-js',
      preferBuiltins: true,
      only: ['mjml', 'mjml-section', 'mjml-core', 'mjml-validator', 'mjml-migrate',  'uglify-js', 'html-minifier', 'mjml-social', 'mjml-navbar', 'mjml-carousel', 'mjml-accordion', 'mjml-body', 'mjml-head', 'mjml-head-attributes', 'mjml-head-breakpoint',   'mj-accordion', 'mj-accordion-element', 'mj-accordion-title', 'mj-accordion-text', 'mj-attributes', 'mj-body', 'mj-button', 'mj-carousel', 'mj-carousel-image', 'mj-column', 'mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-invoice', 'mj-list', 'mj-location', 'mj-raw', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar', 'mj-divider', 'mj-group', 'mj-head', 'mj-attributes', 'mj-breakpoint', 'mj-font', 'mj-preview', 'mj-style', 'mj-title', 'mj-hero', 'mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-list', 'mj-location', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar', 'mj-html', 'mj-image', 'mj-invoice', 'mj-invoice-item', 'mj-link', 'mj-list', 'mj-location', 'mj-navbar', 'mj-raw', 'mj-section', 'mj-social', 'mj-social-element', 'mj-spacer', 'mj-table', 'mj-text', 'mj-wrapper', 'mjml-head-font', 'mjml-head-preview', 'mjml-head-style', 'mjml-head-title', 'mjml-hero', 'mjml-button', 'mjml-column', 'mjml-divider', 'mjml-group', 'mjml-image', 'mjml-raw', 'mjml-section', 'mjml-spacer', 'mjml-text', 'mjml-table', 'mjml-section' ]
    }),
    commonjs({
      sourceMap: false
    })
  ]
}
