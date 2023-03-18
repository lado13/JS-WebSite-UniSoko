
///////////////////////api////////////////////////
fetch(' https://api.escuelajs.co/api/v1/products/', {
    method:'get',
    headers:{
        "Content-Type": "text/xml",
       }
}).then(Response => Response.json())
.then(data =>{

    $('.loader').css('opacity','0')

    for (let i = 0; i < data.length; i++) {

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
     
        name.innerText = data[i].title;
        img.src = data[i].images;
        price.innerText = 'Price: ' + data[i].price + ' $';
        
        col.addEventListener('click', function(){

            let id = data[i].id;
            localStorage.setItem('id', id);
            window.location.href  = 'index.html';

        });
    };
}).catch(fale => {

    let error = document.querySelector('.error');

    error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
    $('.error').css('color','red');
    $('.loader').css('opacity','0');
});

let seeMore = localStorage.getItem('id');
function ResponseUrl(){

    let data = fetch(' https://api.escuelajs.co/api/v1/products/' + seeMore);
    return data;

  };
async function detals(){

    ResponseUrl().then(Response => Response.json())

    .then(Response => {     

        document.querySelector('.title').innerText = Response.title;
        document.querySelector('.price').innerText = 'Price: ' + Response.price + ' $';
        document.querySelector('.description').innerText = Response.description;
        document.querySelector('.image').src = Response.images;
        $('#box').css('opacity','1');
        $('.loader').css('opacity','0');

    }).catch(fale => {

    let error = document.querySelector('.error');

    error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
    $('.error').css('color','red');
    $('.loader').css('opacity','0');

});

};

detals();


////////////////////show more///////////////////////////

$(document).ready(function () {

    $(".block").slice(0, 8).show();

    if ($(".block:hidden").length != 0) {
        $(".loadmore").show();
    };
    $(".loadmore").on("click", function () {

        $(".block:hidden").slice(0, 8).slideDown();

        if ($(".block:hidden").length == 0) {

            $(".loadmore").text("No More to view")
        }
    });
});

let detal = $('.detals')

$('.detals_btn').click(function(){

   $('.detals').css('display','none');

});
