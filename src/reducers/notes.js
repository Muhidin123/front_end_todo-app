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

    default:
      return state;
  }
};

export default notesReducer;
