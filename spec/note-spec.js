var note = require('../src/note-model').Note;
var isTrue = require('../lib/test-framework').isTrue;

function testNoteText (text) {
  note = new Note(text);
  isTrue(note.text === text);
}

testNoteText("I love JavaScript");
