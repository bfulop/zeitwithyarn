'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var mjml2html = _interopDefault(require('mjml'));

/*
  Compile an mjml string
*/
const renderMJML = () => mjml2html(`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            Hello World!
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`, {});


/*
  Print the responsive HTML generated and MJML errors if any
*/
console.log(renderMJML());
module.exports = (req, res) => {
    const result = renderMJML();
    // console.log(renderMJML())
    res.end(result.html);
};
