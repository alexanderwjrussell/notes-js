function testNoteText() {
  var note = new Note();
  var message = "Test message";
  assert.isEqual(note.message, message);
}
