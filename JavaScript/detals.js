let seeMore = localStorage.getItem('id');
function ResponseLink() {

    let data = fetch('https://api.escuelajs.co/api/v1/products/' + seeMore);
    return data;
}


async function Detals() {
    ResponseLink().then(Response => Response.json())

        .then(Response => {
            document.querySelector('.title').innerText = Response.title;
            document.querySelector('.price').innerText = 'Price: ' + Response.price + ' $';
            document.querySelector('.description').innerText = Response.description;
            document.querySelector('.image').src = Response.images;

        })
}


Detals();

