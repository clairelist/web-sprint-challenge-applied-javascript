import axios from 'axios';

const Tabs = (arr) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsClass = document.createElement('div');
  topicsClass.classList.add('topics');

  for (let i=0; i<arr.length; i++){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = arr[i];

    topicsClass.appendChild(tab);
  }
  return topicsClass;
}



const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5000/api/topics`)
    .then(res=>{
      // console.log(res);
      const tabsNew = Tabs(res.data.topics); //NOTE TO FUTURE CLAIRE: YOU ARE LOOKING AT THIS BECAUSE YOU FORGOT JSON OBJS HAVE THEIR STUFF IN res.data.whatever NOT JUST res.whatever!
      document.querySelector(selector).appendChild(tabsNew);
    }).catch(err=>{
      console.error(err);
    })

}

export { Tabs, tabsAppender }
