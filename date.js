import mjml2html from 'mjml'

export default (req, res) => {
  res.end(`The date is ${Date.now()}`)
}
