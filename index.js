const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

app = express()


app.set('port', process.env.PORT || 3050);

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use(require('./routes/routes.js'));



app.listen(app.get('port'),()=>{
  console.log('listening on port ',app.get('port'))
});