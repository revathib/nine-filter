let express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json());

let Filter = require('./src/filter');
const corsOptions = {
  allowedHeaders: ['Origin', 'Content-Type', 'Accept'],
  methods: ['POST']
};
app.use(cors(corsOptions));

app.post('/', async (request, res) => {
  if (Filter.checkIfPayload(request.body)) {
    let responseData = await Filter.checkRightValuesAndSendArray(request.body.payload);
    let sendResponseData = { response: responseData };
    return res.send(sendResponseData);
  } else {
    return res.status(400).json({
      message: 'payload not found',
      details: 'Please check your data before sending'
    });
  }
});

const port = process.env.PORT || '4201';
app.set('port', port);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
