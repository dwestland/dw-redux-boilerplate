import { GET_USERS } from './types';
import axios from 'axios';

export default function getUsers() {
  return dispatch => {
    axios.get('../users.json')
      .then(res => {
        console.log('Users ::', res.data);
        const users = res.data.map(user => {
          user.note = 'none';
          return user;
        });
        dispatch(usersAsync(users));
      });
  }
}

function usersAsync(people){
  return {
    type: GET_USERS,
    payload: people
  };
}