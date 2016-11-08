(function() {

  // function NoteView() {
  //   // this.notes = NoteList.notebook
  // }

	NoteList.prototype.printList = function() {
		body = document.getElementById('body');
		list = document.createElement('ul');
		list.id = "noteList";
		body.appendChild(list);
    console.log(this.notebook);
		for(i=0;i<this.notebook.length;i++) {
			note = document.createElement('li');
			note.textContent = this.notebook[i].text;
			list = document.getElementById('noteList');
			list.appendChild(note);
		}
	};

  // exports.NoteView = NoteView;
  // exports.printList = this.printList;
  // exports.notes = this.notes;
})(this);
