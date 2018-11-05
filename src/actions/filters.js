//set text filter

export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//sort by date
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

export const setStartDate = (value = undefined) => ({
  type: "SET_START_DATE",
  value
});

export const setEndDate = (value = undefined) => ({
  type: "SET_END_DATE",
  value
});
