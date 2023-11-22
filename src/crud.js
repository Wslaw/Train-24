

// ***************************

let form;
const addPost = document.querySelector('.js-add');
const listPosts = document.querySelector(' .js-posts');
const formWrapper = document.querySelector('.js-form');
const errMesage = document.querySelector("js-error");

addPost.addEventListener('click', handlerAddPosts);

function handlerAddPosts() {
    formWrapper.innerHTML = `<form action="submit" class="js-form-add">
    <input type="text" name="title">
    <textarea name="body" id="" cols="30" rows="10"></textarea>
    <button>Додати пост</button>
    </form>`;
    form = document.querySelector('.js-form-add')
    form.addEventListener('submit', handlerFormSubmit);
}

// console.log(form);

function handlerFormSubmit(evt) {
    evt.preventDefault();
    
    const { title, body } = evt.currentTarget.elements;

    const data = {
        title: title.value,
        body: body.value
    };
    addPostService(data).then(obj => {
        listPosts.insertAdjacentHTML('beforeend', createPostMarkup(obj));
    })
        .catch((err) => {
            errMesage.innerHTML = " Не можливо додати пост!"
        })
        .finally(() => { formWrapper.innerHTML = "" });
}

function createPostMarkup({ id, title, body }) {
     return `<li data-id="${id}">
       <h2>${title}</h2>
       <p>${body}</p>
     </li>`;
}

function addPostService(data) {
   
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
            // title: "Hello from js",
            // body: "eeeeeeeeeeeeeeeeee",
            // userId: 12,
        
    };



    return fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
        })
}
