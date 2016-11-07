function testNoteText (text) {
  var note = new Note(text);
  assert.isTrue(note.text === text);
}

testNoteText("I love JavaScript");

function testGetText (text) {
  var note = new Note(text);
  assert.isTrue(note.getText() === text);
}

testGetText("I really don't know what I'm doing");
