
let inp = document.querySelector('.inp');
let liveSearch = document.querySelector('.liveSearch')








inp.addEventListener("keyup", function () {
    console.log(inp.value);

    let searchText = inp.value.toLowerCase();

    let body = document.querySelector('body');
    body.addEventListener("click", function(){

        liveSearch.style.display = 'none';
    })




    fetch('https://api.escuelajs.co/api/v1/products?title=' + searchText, {

    }).then(res => res.json())
        .then(data => {


            while (liveSearch.firstChild) {

                liveSearch.firstChild.remove();

            }



            if (data.length == 0 || searchText == '') {

                liveSearch.style.display = 'none';
              


            } else {

                liveSearch.style.display = 'block';


            }



            for (let i = 0; i < data.length; i++) {
                let liveSearch = document.querySelector('.liveSearch');


                let ul = document.createElement('ul');
                liveSearch.appendChild(ul);

                let li = document.createElement('li');
                ul.appendChild(li);

                let img = document.createElement('img');
                li.appendChild(img);
                img.className = 'searchImg'
                img.src = data[i].images;

                let p = document.createElement('p');
                li.appendChild(p);
                p.className = 'searchTitle'
                p.innerText = data[i].title;


                li.addEventListener("click", function () {
                    let id = data[i].id;
                    localStorage.setItem('id', id);
                    window.location.href = 'detals.html';
                })











            }

        })

})
