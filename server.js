const express = require('express');
const path = require('path');
const fs = require('fs');


const PORT = process.env.PORT || 3001;

const app = express();



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//get route for /notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for default route
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.post('/api/notes', (req, res) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  let incommingNote = req.body;
  let newId = notes.length.toString();

  incommingNote.id = newId;
  notes.push(incommingNote);

  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
  
  res.json(notes);

}
);











app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);















// const express = require('express');
// // const mysql = require('mysql2');
// const app = express();
// const port = 3001;
// const path = require('./develop/public/assets/js/index');

// const terms = require('./develop/public')

// // app.use(express.urlencoded({ extended: false }));
// // app.use(express.json());



// app.use(express.static('/develop/public/index.html'));


// app.use(express.static('/notes.html'));

// app.get('/api/terms',(req, res) => {
//   res.json(terms);
// })



// const termData = require('/db.json');

// app.use(express.static('/public'));

// app.get('develop/public/notes.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'notes.html'));
// });

// app.get('/notes', (req, res) => res.json(termData));






// const { v4: uuid4 } = require('uuid');
// const noteId = uuidv4();
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




