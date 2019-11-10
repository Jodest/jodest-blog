import axios from 'axios';

// export interface IArticle {
//   [x: string]: any;
//   id: number;
//   title: string;
//   author: string;
//   image: string;
//   date: Date;
//   text: string;
// }

const url = 'http://localhost:3000/session/';

export default class LoginService {

  // getArticles() {
  //   return axios.get(url)
  //     .then(res => res.data);
  // }

  // createArticles(article: any) {
  //   return axios.post(`${url}add`, article)
  //     .then(res => {console.log(res); return res.data})
  //     .catch(res => console.log(res));
  // }

  login = (username: string, password: string) => {
    // return axios.post('login', { username, password }, { redirect: 'manual' });
    return axios.post('login', { username, password });
  }

  logout = () => {
    return axios.get('logout');
  }
}