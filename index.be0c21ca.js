let t;const e=document.querySelector(".js-add"),n=document.querySelector(" .js-posts"),o=document.querySelector(".js-form"),r=document.querySelector("js-error");function c(t){t.preventDefault();const{title:e,body:c}=t.currentTarget.elements;(function(t){const e={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)};return fetch("https://jsonplaceholder.typicode.com/posts1",e).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}))})({title:e.value,body:c.value}).then((t=>{n.insertAdjacentHTML("beforeend",function({id:t,title:e,body:n}){return`<li data-id="${t}">\n       <h2>${e}</h2>\n       <p>${n}</p>\n     </li>`}(t))})).catch((t=>{r.innerHTML=" Не можливо додати пост!"})).finally((()=>{o.innerHTML=""}))}e.addEventListener("click",(function(){o.innerHTML='<form action="submit" class="js-form-add">\n    <input type="text" name="title">\n    <textarea name="body" id="" cols="30" rows="10"></textarea>\n    <button>Додати пост</button>\n    </form>',t=document.querySelector(".js-form-add"),t.addEventListener("submit",c)}));
//# sourceMappingURL=index.be0c21ca.js.map
