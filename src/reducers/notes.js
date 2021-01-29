import sortNotes from "./SortSearchHelper";

const notesReducer = (state = [], action) => {
  let updatedNotes = [];
  switch (action.type) {
    case "NOTES_FETCH_SUCCESS":
      return action.notes;
    case "UPDATE_NOTE_SUCCESS":
      updatedNotes = state.map(n => {
        if (n.id === action.note.id) {
          return action.note;
        } else {
          return n;
        }
      });
      return updatedNotes;
    case "NOTE_DELETE_SUCCESS":
      updatedNotes = state.filter(n => n.id !== action.id);
      return updatedNotes;
    case "NEW_NOTE_SUCCESS":
      return [...state, action.note];
    case "SORT_NOTES_SUCCESS":
      updatedNotes = [...state.sort(sortNotes(action.key, action.option))];
      return updatedNotes;
    case "SEARCH_NOTES_SUCCESS":
      updatedNotes = [
        ...state.filter(note =>
          note.title.toLowerCase().includes(action.input) || note.description.toLowerCase().includes(action.input)
        ),
      ];
      return updatedNotes;

    default:
      return state;
  }
};

export default notesReducer;
