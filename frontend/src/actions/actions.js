import fetch from 'isomorphic-fetch';

export const GET_NEWS = 'GET_NEWS';
export const GET_INTERNET = 'GET_INTERNET';
export const GET_IT = 'GET_IT';

function receiveNews(newslist) {
  return {
    type: GET_NEWS,
    newslist
  };
}

export function getNews() {
  return dispatch => fetch('/news')
      .then(response => response.json())
      .then(newslist =>
      dispatch(receiveNews(newslist)))
      .catch(error =>
      console.log(error));
}

function receiveInternet(newslist) {
  return {
    type: GET_INTERNET,
    newslist
  };
}

export function getInternet() {
  return dispatch => fetch('/internet')
      .then(response => response.json())
      .then(newslist =>
      dispatch(receiveInternet(newslist)))
      .catch(error =>
      console.log(error));
}

function receiveIT(newslist) {
  return {
    type: GET_IT,
    newslist
  };
}

export function getIT() {
  return dispatch => fetch('/it')
      .then(response => response.json())
      .then(newslist =>
      dispatch(receiveIT(newslist)))
      .catch(error =>
      console.log(error));
}
