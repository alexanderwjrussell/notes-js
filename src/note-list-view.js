(function(exports) {

	function NoteListView(noteList) {
		this.NoteList = noteList;
	}

	NoteListView.prototype.notesString = function() {
		notes = this.NoteList.notes;
		list = "<ul>";
		for (i=0;i<notes.length;i++) {
			list += "<li>" + notes[i].text + "</li>";
		}
		return list + "</ul>";
	};

	exports.NoteListView = NoteListView;

})(this);
