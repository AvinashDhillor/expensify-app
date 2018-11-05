import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "RESET":
      return {
        count: 0
      };

    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "RESET"
// });

store.dispatch(resetCount());

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 10 }));

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 3
// });

store.dispatch(decrementCount({ decrementBy: 5 }));
