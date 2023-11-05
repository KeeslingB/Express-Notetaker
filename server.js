const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();
// const { v4: uuid4 } = require('uuid');
// const noteId = uuidv4();
// couldnt figuire out the id portion and would rather like to get a early start on next hw assignment. / will be returning at a later date to refactor and further add to code.

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//get route for /notes
app.get('/notes', (req, res) =>{
  console.log('/notes route hit');
  console.log('path = ', path.join(__dirname, '/public/notes.html'));
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', (req, res) =>{
  console.log('/api/notes route hit');
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  console.log('path = ', path.join(__dirname, '/db/db.json'));
  res.sendFile(path.join(__dirname, '/db/db.json'))
});


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
