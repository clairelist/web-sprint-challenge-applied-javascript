const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  //first, make elements.
  //then, insert text content
  //then, append to header class
  

  const headerClass = document.createElement('div');
  headerClass.classList.add('header');

  const dateClass = document.createElement('span');
  dateClass.classList.add('date');
  dateClass.textContent = date;
  headerClass.appendChild(dateClass);

  const headerTxt = document.createElement('h1');
  headerTxt.textContent = title;
  headerClass.appendChild(headerTxt);

  const tempClass = document.createElement('span');
  tempClass.classList.add('temp');
  tempClass.textContent = temp;
  headerClass.appendChild(tempClass);

  return headerClass;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const headerStr = Header();
  document.querySelector(selector).appendChild(headerStr);

}

export { Header, headerAppender }
