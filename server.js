const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }), cors());

require('./server/config/mongoose.config');
const PollRoutes = require('./server/routes/poll.routes');
PollRoutes(app);

app.listen(8000, () => console.log('The server is all fired up on port 8000'));
