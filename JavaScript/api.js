
///////////////////////api server get////////////////////////

// fetch('https://api.escuelajs.co/api/v1/products/' , {
//     method:'get',
//     headers:{
//         "Content-Type": "text/xml",
//        }
// }).then(Response => Response.json())
// .then(data =>{

//     $('.loader').css('opacity','0')

//     for (let i = 0; i < data.length; i++) {

//         let row = document.querySelector('.api');
//         let col = document.createElement('col');
//         row.appendChild(col);
//         col.className = 'block'

//         let img = document.createElement('img');
//         col.appendChild(img);
//         let name = document.createElement('h5');
//         col.appendChild(name);
//         let price = document.createElement('h5');
//         col.appendChild(price);

//         name.innerText = data[i].title;
//         img.src = data[i].images;
//         price.innerText = 'Price: ' + data[i].price + ' $';

//     };
// }).catch(fale => {

//     let error = document.querySelector('.error');

//     error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
//     $('.error').css('color','red');
//     $('.loader').css('opacity','0');
// });




let apiBox = document.querySelector('.apiContainer');
let loadMoreButton = document.querySelector('.loadmore');

let currentIndex = 0;
let itemsPerPage = 8;

function renderProducts(products) {
    for (let i = currentIndex; i < currentIndex + itemsPerPage; i++) {
        const product = products[i];
        if (!product) {
            loadMoreButton.disabled = true;
            loadMoreButton.innerText = "No more";
            break;
        }


        $('.loader').css('opacity', '0')
        let row = document.querySelector('.api');
        let col = document.createElement('col');
        row.appendChild(col);
        col.className = 'block'

        let img = document.createElement('img');
        col.appendChild(img);
        let name = document.createElement('h5');
        col.appendChild(name);
        let price = document.createElement('h5');
        col.appendChild(price);

        name.innerText = product.title;
        img.src = product.images;
        price.innerText = 'Price: ' + product.price + ' $';


        col.addEventListener('click', function () {
            let id = product.id;
            localStorage.setItem('id', id);
            window.location.href = 'detals.html';
        })

    }
    currentIndex += itemsPerPage;
}




async function fetchProducts() {

    const response = await fetch("https://api.escuelajs.co/api/v1/products/");
    const products = await response.json();
    renderProducts(products);
    
}


loadMoreButton.addEventListener("click", fetchProducts);

fetchProducts();












// let seeMore = localStorage.getItem('id');
// function ResponseUrl(){

//     let data = fetch('https://api.escuelajs.co/api/v1/products/' + seeMore);
//     return data;

//   };
// async function detals(){

//     ResponseUrl().then(Response => Response.json())

//     .then(Response => {

//         document.querySelector('.title').innerText = Response.title;
//         document.querySelector('.price').innerText = 'Price: ' + Response.price + ' $';
//         document.querySelector('.description').innerText = Response.description;
//         document.querySelector('.image').src = Response.images;
//         $('#box').css('opacity','1');
//         $('.loader').css('opacity','0');

//     }).catch(fale => {

//     let error = document.querySelector('.error');

//     error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
//     $('.error').css('color','red');
//     $('.loader').css('opacity','0');

// });

// };

// detals();


////////////////////show more function///////////////////////////

// $(document).ready(function () {

//     $(".block").slice(0, 8).show();

//     if ($(".block:hidden").length != 0) {
//         $(".loadmore").show();
//     };
//     $(".loadmore").on("click", function () {

//         $(".block:hidden").slice(0, 8).slideDown();

//         if ($(".block:hidden").length == 0) {

//             $(".loadmore").text("No More to view")
//         }
//     });
// });



// https://api.escuelajs.co/api/v1/products//