import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import {setCookie, getCookie, deleteCookie} from "../../shared/Cookie"

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators
const logIn = createAction(LOG_IN, (user) => ({user}));
const logOUt = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));

// initialState
const initialState = {
  user: null,
  is_login: false,
}

// reducer
export default handleActions({
  [LOG_IN] : (state, action) => produce(state, (draft) =>{
    setCookie("is_login", "success");
    draft.user = action.payload.user;
    draft.is_login = true
  }),
  [LOG_OUT] : (state, action) => produce(state, (draft) =>{}),
  [GET_USER] : (state, action) => produce(state, (draft) => {}),
}, initialState);

// action creator export
const actionCreators = {
  logIn,
  logOUt,
  getUser,
}

export { actionCreators };

// const logIn = (user) => {
//   return {
//     type: LOG_IN,
//     user
//   }
// }

// const reducer = handleActions({
//   [LOG_IN]: (state, action = > {

//   })
// },initialState={});
// const reducer = (state = {}, action = {}) => {
//   switch(action.type) {
//     case "LOG_IN" : {
//       state.user = action.user;
//     }
//   }
// }