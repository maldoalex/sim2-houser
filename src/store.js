import { createStore } from "redux";
const initialState = {
  property_name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  image_url: "",
  mortgage: 0,
  rent: 0,
  houses: []
};

export const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIP = "UPDATE_ZIP";
export const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
export const UPDATE_RENT = "UPDATE_RENT";
export const UPDATE_HOUSES = "UPDATE_HOUSES";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PROPERTY_NAME:
      return { ...state, property_name: payload };
    case UPDATE_ADDRESS:
      return { ...state, address: payload };
    case UPDATE_CITY:
      return { ...state, city: payload };
    case UPDATE_STATE:
      return { ...state, state: payload };
    case UPDATE_ZIP:
      return { ...state, zip: payload };
    case UPDATE_IMAGE_URL:
      return { ...state, image_url: payload };
    case UPDATE_MORTGAGE:
      return { ...state, mortgage: payload };
    case UPDATE_RENT:
      return { ...state, rent: payload };
    case UPDATE_HOUSES:
      return { ...state, houses: payload };
    default:
      return state;
  }
}

export default createStore(reducer);
