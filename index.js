noteController = new NoteController();
note = new Note("Favourite drink: seltzer");
noteController.notelist.saveNote(note);
noteListView = new NoteListView(noteController.noteList);
