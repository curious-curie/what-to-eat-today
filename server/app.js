const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT
const api = require('./routes/index');
const path = require('path')

app.use(bodyParser.json());
app.use('/api', api);

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}...`));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../build/index.html'))
})