(function(exports) {

  function NoteList() {
  this.notebook = [];
  }

  NoteList.prototype.saveNote = function (note) {
    this.notebook.push(note);
  };

  NoteList.prototype.getNotes = function (index) {
    return this.notebook[index];
  };

  exports.NoteList = NoteList;
  exports.notebook = this.notebook;
  exports.saveNote = this.saveNote;
  exports.getNotes = this.getNotes;
})(this);
