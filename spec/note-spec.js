// var Note = require('../src/note-model');
// var isTrue = require('../lib/test-framework').isTrue;

function testNoteText (text) {
  var note = new Note(text);
  assert.isTrue(note.text === text);
}

testNoteText("I love JavaScript");
