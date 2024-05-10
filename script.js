const text1 = document.getElementById('Card-Title');
const btn1 =document.getElementById('showFormBtN');
const out1 = document.getElementById('Product_name');

function fun1(){
 out1. innerHTML = text1;
}

btn1.addEventListener('click',fun1);

// 
function AdminPage(){
    window.location.href='./AdminLogin.html';
}
// 
document.addEventListener("DOMContentLoaded",function(){
    const price=document.getElementById("price");
    const quantity=document.getElementById("kg");
    const total=document.getElementById(total);

    quantity.addEventListener("input",function(){
        const quantity=parseInt(quantity.value);
        const price=parseInt(price.innerText.slice(1));
        const total=quantity*price;
        price.innerText=total;
    })
})