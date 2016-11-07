function testNoteText () {
  var note = new Note()
  var message = "Test message";
  if (note.message() === message) {
    console.log('True')
  } else {
    console.log('False')
  }
}

testNoteText()
