function testNoteView(text) {
  var notelist = new NoteList();
  text = {text: "A random string"};
  notelist.saveNote(text);
  notelist.printList();
  list = document.getElementById('noteList');
  assert.isTrue(list.innerHTML === "<li>A random string</li>");
}

testNoteView("A random string");
