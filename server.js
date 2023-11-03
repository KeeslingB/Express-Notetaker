const express = require('express');
// const mysql = require('mysql2');
const app = express();
const port = 3001;
const path = require('path');

const terms = require('./develop/public')

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());



app.use(express.static('/develop/public/index.html'));


app.use(express.static('/notes.html'));

app.get('/api/terms',(req, res) => {
  res.json(terms);
})







// const termData = require('/db.json');

// app.use(express.static('/public'));

// app.get('develop/public/notes.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'notes.html'));
// });

// app.get('/notes', (req, res) => res.json(termData));






// const { v4: uuid4 } = require('uuid');
// const noteId = uuidv4();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




