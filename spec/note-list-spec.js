function testNoteListText(text) {
  var notelist = new NoteList();
  notelist.saveNote(text);
  assert.isTrue(notelist.notebook[0] === text);
}

testNoteListText("I love JavaScript");

function testGetNotes(text) {
  var notelist = new NoteList();
  notelist.saveNote(text);
  assert.isTrue(notelist.getNotes(0) === text);
}

testGetNotes("I really don't know what I'm doing");
