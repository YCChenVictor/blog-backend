import userAPIs from './user.js';
import { google } from "googleapis";
const youtube = google.youtube({ // going to extract to separate file
  version: "v3",
  auth: process.env.YoutubeAPIKey,
});

const apis = function(app) {
  // hello world
  app.get('/', (req, res) => {
    console.log(req.query)
    res.send('Hello World!')
  })

  userAPIs(app)

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

export default apis
