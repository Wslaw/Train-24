// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json));
// //



// **************************
// const options = {
//     method:"POST"
// }


// ***************************
const addPost = document.querySelector('.js-add');
const listPost = document.querySelector(' .js-posts');
const formWrapper = document.querySelector('.js-form');


addPost.addEventListener('click', handlerAddPosts);

function handlerAddPosts() {
    formWrapper.innerHTML =`<form action="submit">
    <input type="text" name="title">
    <textarea name="body" id="" cols="30" rows="10"></textarea>
    <button>Додати пост</button>
    </form>`
}

const form = document.querySelector('.js-form-add')
form.addEventListener('click', handlerFormSubmit);