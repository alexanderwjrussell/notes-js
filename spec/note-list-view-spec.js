function testNoteView(text) {
  var notelist = new NoteList();
  notelist.saveNote(text);
  // var noteView = new NoteView();
  notelist.printList();
  assert.isTrue(notelist.notebook[0] === text);
}

testNoteView("A random string");
