export const deleteNoteSuccess = id => {
  return {
    type: "NOTE_DELETE_SUCCESS",
    id,
  };
};
