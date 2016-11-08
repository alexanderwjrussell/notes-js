(function(exports) {

  function Notes() {
  this.notes = [];
  }

  Notes.prototype.saveNote = function (note) {
    this.notes.push(note);
  };

  Notes.prototype.getNotes = function (index) {
    return this.notes[index];
  };

  exports.Notes = Notes;
  exports.saveNote = this.saveNote;
  exports.getNotes = this.getNotes;
})(this);
