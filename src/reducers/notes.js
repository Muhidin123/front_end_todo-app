const notesReducer = (state = [], action) => {
  let updatedNotes = [];
  switch (action.type) {
    case "NOTES_FETCH_SUCCESS":
      return {
        notes: action.notes,
      };
    case "UPDATE_NOTE_SUCCESS":
      updatedNotes = state.notes.map(n => {
        if (n.id === action.note.id) {
          return action.note;
        } else {
          return n;
        }
      });
      return { notes: updatedNotes };
    case "NOTE_DELETE_SUCCESS":
      updatedNotes = state.notes.filter(n => n.id !== action.id);
      return {
        notes: updatedNotes,
      };
    case "NEW_NOTE_SUCCESS":
      return { notes: [...state.notes, action.note] };

    default:
      return state;
  }
};

export default notesReducer;
