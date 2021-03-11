import {actionTypes} from '../store/types'; // importing types
export const initial = {
  userName: null, // initial state, we can add more
};
const userReducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return Object.assign({}, state, {
        userName: action.payload, // payload(data) that sent from user
      });
    case actionTypes.CLEAR_DATA:
      return Object.assign({}, state, {
        userName: null, // to clear the store
      });
    default:
      return Object.assign({}, state);
  }
};
export default userReducer;
