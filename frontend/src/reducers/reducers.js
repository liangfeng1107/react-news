import {
  GET_NEWS,
  GET_INTERNET,
  GET_IT
} from '../actions/actions';

const initialState = {
  newslist: []
};

function getNewsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
    case GET_INTERNET:
    case GET_IT:
      return {
        ...state,
        newslist: action.newslist
      };
    default:
      return state;
  }
}

export default getNewsReducer;

