import axios from 'axios';

export const register = (newUser) => {
    return axios
        .post('http://localhost:8000/api/register', {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },{
            headers: {'Content-Type': 'application/JSON'}
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
        })
  };

export const login = (user) => {
    return axios
        .post('http://localhost:8000/api/login', {
            email: user.email,
            password: user.password,
        },{
            headers: {'Content-Type': 'application/JSON'}
        })
        .then((response) => {
            localStorage.setItem('usertoken', response.data.token);
            localStorage.setItem('isLogged', true);
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
  };

export const profil = () => {
    return axios
        .get('http://localhost:8000/api/profile', {
            headers: {'Authorization': `Bearer ${localStorage.usertoken}`}
        })
        .then((response) => {
          console.log(response)
          return response.data
        })
        .catch((error) => {
          console.log(error);
        })
  };