let express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json());

let filter = require('./src/filter');
const corsOptions = {
  allowedHeaders: ['Origin', 'Content-Type', 'Accept'],
  methods: ['POST']
};

app.use(cors(corsOptions));
app.post('/', async (request, response) => {
  console.log(request.body);
  return response.send('success');
});

const port = process.env.PORT || '4201';
app.set('port', port);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
