import { combineReducers, createStore } from "redux";
const initialState = {
  products: [],
  onlineUsers: 0
};

export const updateCount = payload => ({
  type: "UPDATE_COUNT",
  payload // <-- action.type
});
export const updateProducts = payload => ({
  type: "UPDATE_PRODUCTS",
  payload // <-- action.type
});

export const products = (state = initialState.products, action) => {
  let newState = state;
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export const onlineUsers = (state = initialState.onlineUsers, action) => {
  let newState = state;
  switch (action.type) {
    case "UPDATE_COUNT":
      return action.payload;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  products,
  onlineUsers
});

export function configureStore(initialState = initialState) {
  // initialState = initialState | {}
  const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  console.log(store);
  return store;
}

export const store = configureStore();
