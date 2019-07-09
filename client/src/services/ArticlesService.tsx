export interface IArticle {
  id: number;
  title: string;
  author: string;
  image: string;
  date: Date;
  text: string;
}
export default class ArticlesService {

  data = [
    {
      id: 1,
      title: 'Article',
      author: 'Jodest',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
      date: 'Thu Jun 27 2019 12:35:10 GMT+0300 (Moscow Standard Time)',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, facere rem rerum illum adipisci sapiente, excepturi harum id, nulla sed soluta doloremque eos. Sapiente totam molestias omnis eligendi! Suscipit, dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem delectus vitae nobis error nulla suscipit id odit, totam tempora pariatur dolor corporis obcaecati reiciendis numquam ex distinctio, illo alias?/nLorem, ipsum dolor sit amet consectetur adipisicing elit. Alias id nihil distinctio impedit. Nemo esse eaque, eligendi modi asperiores explicabo tempore optio nulla vitae iste repellat minus molestiae, deleniti harum./nLorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, numquam veritatis! Nihil nesciunt molestias a molestiae rem atque exercitationem perspiciatis quisquam, repellendus voluptatum nobis, voluptatem consequuntur tenetur deleniti repudiandae! Veniam!'
    }
  ];

  getArticles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (Math.random() > 0.75) {
        //   reject(new Error('Something bad happened'));
        // } else {
          resolve(this.data);
        // }
      }, 700);
    });
  }
}