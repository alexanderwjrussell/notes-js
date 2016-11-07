function testNoteText () {
  var note = new Note()
  var text = "I love JavaScript";
  note.getText(text);
  if (note.text === text) {
    console.log('Text can equal text: True')
  } else {
    console.log('Text can equal text: False')
  }
}

testNoteText()
