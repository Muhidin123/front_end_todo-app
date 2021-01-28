export const sortNotesSuccess = (key, option = "asc") => {
  return {
    type: "SORT_NOTES_SUCCESS",
    key,
    option,
  };
};
