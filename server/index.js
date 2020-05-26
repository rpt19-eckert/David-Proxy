const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.use('/:id', express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`    /\\    \n   //\\\\   \n  //  \\\\  \n //    \\\\ \n//      \\\\\n\\\\ ${port} //\n \\\\    // \n  \\\\  //  \n   \\\\//   \n    \\/    \n`);
})

