function testNoteListText(text) {
  var notes = new Notes();
  notes.saveNote(text);
  assert.isTrue(notes.notes[0] === text);
}

testNoteListText("I love JavaScript");

function testGetNotes(text) {
  var notes = new Notes();
  notes.saveNote(text);
  assert.isTrue(notes.getNotes(0) === text);
}

testGetNotes("I really don't know what I'm doing");
