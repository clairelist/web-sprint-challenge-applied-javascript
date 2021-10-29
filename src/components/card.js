import axios from 'axios';
const Card = ({headline,authorPhoto,authorName}) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //create elements
  //insert text content
  //append to top level class

  const cardClass = document.createElement('div');
  cardClass.classList.add('card');

  const headLn = document.createElement('div')
  headLn.classList.add('headline');
  headLn.textContent = headline;
  cardClass.appendChild(headLn);

  //author class will be appended TO cardClass, but HAVE img-container & authorname span appended TO itself!
  const authorClass = document.createElement('div');
  authorClass.classList.add('author');
  cardClass.appendChild(authorClass);

  const imgCont = document.createElement('div');
  imgCont.classList.add('img-container');
  authorClass.appendChild(imgCont);

  const imgAct = document.createElement('img'); //'image actual' ie
  imgAct.setAttribute('src',authorPhoto);
  imgCont.appendChild(imgAct);

  const anSpan = document.createElement('span');
  authorClass.appendChild(anSpan);
  anSpan.textContent = `By: ${authorName}`;

  return cardClass;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  //res.data.articles.javascript[0-3]
  //res.data.articles.bootstrap[0-2]
  //res.data.articles.technology[0-2]
  //res.data.articles.jquery[0-2]
  //res.data.articles.node[0-1]

  axios.get(`http://localhost:5000/api/articles`)
  .then(res=>{
    console.log(res);
  }).catch(err=>{
    console.error(err);
  })

}

export { Card, cardAppender }
