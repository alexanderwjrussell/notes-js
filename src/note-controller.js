// document.getElementById("app").innerHTML = "Howdy";

(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  }

	NoteController.prototype.changeText = function() {
		appDiv = document.getElementById('app');
    appDiv.innerHTML = 'Howdy';
  };

  exports.NoteController = NoteController;
  exports.changeText = this.changeText;
})(this);
