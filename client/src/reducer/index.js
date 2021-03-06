import axios from "axios";
import {
  GET_ALL_USERS,
  USER_LOGIN,
  ONLINE_USER_ERROR,
  GET_ALL_COHORTES,
  GET_ID_USER,
  GET_ALL_INSTRUCTORS,
  USER_REGISTER,
  USER_REGISTER_ERROR,
  GET_ALL_STUDENTS,
 
} from "../actions/index";

const initialState = {
  all_users: [],
  all_cohortes: [],
  onlineUser: false,
  id_user: [],
  all_instructors: [],
  register: 0,

 
  all_students: [],
 
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        all_users: action.payload,
      };
    case GET_ID_USER:
      return {
        ...state,
        id_user: action.payload,
      };

    case USER_LOGIN:
      return {
        ...state,
        onlineUser: action.payload,
      };

    case ONLINE_USER_ERROR:
      return {
        ...state,
        onlineUser: false,
      }; 
      case USER_REGISTER:
      return {
        ...state,
        register: registro(action.payload)
      };
      case USER_REGISTER_ERROR:
      return {
        ...state,
        register: 0,
      };        

    case GET_ALL_COHORTES:
      return {
        ...state,
        all_cohortes: action.payload,
      };

    case GET_ALL_INSTRUCTORS:
      return {
        ...state,
        all_instructors: action.payload,
      };
    case GET_ALL_STUDENTS:
      return {
        ...state,
        all_students: action.payload,
      };

    default:
      return state;
  }
};

function registro(data){
  if(data === false){
    return false
  }else if(data === null){
    return 'null'
  }else{
    return true
  }

}

export default reducer;

