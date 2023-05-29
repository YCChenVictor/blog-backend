const userAPIs = require('./user.js');
const { google } = require("googleapis");
const youtube = google.youtube({ // going to extract to separate file
  version: "v3",
  auth: process.env.YoutubeAPIKey,
});

function apis(app) {
  // hello world
  app.get('/', (req, res) => {
    console.log(req.query);
    res.send('Hello World!');
  });

  userAPIs(app);

  // youtube
  app.get("/search-youtube-with-googleapis", async (req, res, next) => {
    try {
      const searchQuery = req.query.search_query;
      const response = await youtube.search.list({
        part: "snippet",
        q: searchQuery,
      });

      const titles = response.data.items.map((item) => item.snippet.title);
      res.send(titles);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = apis;
