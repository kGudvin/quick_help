const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');


const PORT = 3001;
const app = express();



app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



app.get('/', (req, res) => {
  res.sendStatus(200);
})


app.listen(PORT, () => {
  console.log("server started on PORT ", PORT);
})
