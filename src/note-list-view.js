(function() {

	NoteList.prototype.printList = function() {
		body = document.getElementById('body');
		list = document.createElement('ul');
		list.id = "noteList";
		body.appendChild(list);
		for(i=0;i<this.notebook.length;i++) {
			note = document.createElement('li');
			note.textContent = this.notebook[i].text;
			list = document.getElementById('noteList');
			list.appendChild(note);
		}
	};
})(this);
