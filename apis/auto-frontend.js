const React = require('react')
const ReactDOMServer = require('react-dom/server')


const autoFrontend = (app) => {
  app.get('/auto-frontend', async (req, res) => {
    const jsx = React.createElement('div', null,
      React.createElement('h1', null, 'Hello, World!'),
      React.createElement('p', null, 'This is a server-rendered React component.')
    )

    const html = ReactDOMServer.renderToString(jsx)

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Your Server-Side Rendered App</title>
        </head>
        <body>
          <div id="app">${html}</div>
        </body>
      </html>
    `);
  })
};

module.exports = autoFrontend
