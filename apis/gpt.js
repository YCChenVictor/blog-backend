const passport = require('../middleware/passport.js')
// const API_KEY = 'YOUR_OPENAI_API_KEY';
// const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const gptApi = (app) => {
  app.get('/gpt-init', passport.authenticate('jwt'), (req, res) => {
    res.status(200).json({ loggedIn: true })
  })

  app.post('/create-article', passport.authenticate('jwt'), async (prompt) => {
    try {
      const response = await axios.post(API_URL, {
        prompt: prompt,
        max_tokens: 100, // Adjust the length of the generated text
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      });
  
      return response.data.choices[0].text;
    } catch (error) {
      console.error('Error generating text:', error);
      return '';
    }
  })
}

module.exports = gptApi
