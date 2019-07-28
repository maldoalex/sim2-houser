import { createStore } from "redux";
const initialState = {
  property_name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  image_url: "",
  mortgage: 0,
  rent: 0
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}

export default createStore(reducer);
