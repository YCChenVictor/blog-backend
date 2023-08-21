const passport = require('../middleware/passport.js')
const { OpenAI } = require("openai")

const gptApi = (app) => {
  app.get('/gpt-init', passport.authenticate('jwt'), (req, res) => {
    res.status(200).json({ loggedIn: true })
  })

  app.post('/create-article', passport.authenticate('jwt'), async (req) => {
    try { // write the test for this API
      const openai = new OpenAI({
        apiKey: process.env.GPT_KEY,
      })
      const chat_completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo", // we can change to better model
          messages: [{ role: "user", content: req.body.prompt }],
      })
      console.log(chat_completion.choices)
    } catch (error) {
      console.error('Error generating text:', error)
      return ''
    }
  })
}

module.exports = gptApi
