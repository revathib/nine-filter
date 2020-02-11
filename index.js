let express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json());

app.use(function(error, req, res, next) {
  if (error instanceof SyntaxError) {
    return res.status(400).json({ status: 400, error: 'JSON parsing failed' });
  } else {
    next();
  }
});

let Filter = require('./src/filter');
const corsOptions = {
  allowedHeaders: ['Origin', 'Content-Type', 'Accept'],
  methods: ['POST']
};
app.use(cors(corsOptions));

app.post('/', async (request, res) => {
  if (!Object.keys(request.body).length) {
    return res.status(400).json({ status: 400, error: 'Could not decode request: JSON parsing failed' });
  }
  try {
    if (Filter.checkIfPayload(request.body)) {
      let responseData = await Filter.checkRightValuesAndSendArray(request.body.payload);
      let sendResponseData = { response: responseData };
      return res.send(sendResponseData);
    } else {
      return res.status(400).json({
        error: 'Payload not found'
      });
    }
  } catch (e) {
    return res.status(400).json({ status: 400, error: 'Could not decode request: JSON parsing failed' });
  }
});

const port = process.env.PORT || '4201';
app.set('port', port);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
