
const totalPrice = document.getElementById('totalPrice');
const total = document.getElementById('total');
const discount = document.getElementById('discount');

const productsPurchase = document.getElementById('purchaseBtn');
const applyBtn = document.getElementById('applyBtn');
const couponField = document.getElementById('couponDigit');

const productList = document.getElementById('productsSet');
const productOneName = document.getElementById('product1Name');
const productTwoName = document.getElementById('product2Name');
const productThreeName = document.getElementById('product3Name');
const productFourName = document.getElementById('product4Name');
const productFiveName = document.getElementById('product5Name');
const productSixName = document.getElementById('product6Name');


function getProductPrice(costId,item) {
    const createLi = document.createElement('li');
    createLi.innerText = item.innerText;
    productList.appendChild(createLi);
    productsPurchase.removeAttribute('disabled'); 
    const productName = document.getElementById(costId);
    const productPrice = parseFloat(productName.innerText);    
    return productPrice;
}

let sum = 0;
document.getElementById('product1').addEventListener('click',function(){     
    const productPrice = getProductPrice('product1Price',productOneName);
    sum += productPrice;
    totalPrice.innerText = sum;
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = sum - parseFloat(discount.innerText);
        return;      
    }
    })
    total.innerText = sum;
})

document.getElementById('product2').addEventListener('click',function(){     
    const productPrice = getProductPrice('product2price',productTwoName);
    sum += productPrice;
    totalPrice.innerText = sum;
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = sum - parseFloat(discount.innerText);
        return;      
    }
    })
    total.innerText = sum;
})

document.getElementById('product3').addEventListener('click',function(){     
    const productPrice = getProductPrice('product3price',productThreeName);
    sum += productPrice;
    totalPrice.innerText = sum;
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = sum - parseFloat(discount.innerText);
        return;      
    }
    })
    total.innerText = sum;
})

document.getElementById('product4').addEventListener('click',function(){     
    const productPrice = getProductPrice('product4price',productFourName);
    sum += productPrice;
    totalPrice.innerText = sum;
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = sum - parseFloat(discount.innerText);
        return;      
    }
    })
    total.innerText = sum;
})

document.getElementById('product5').addEventListener('click',function(){     
    const productPrice = getProductPrice('product5price',productFiveName);
    sum += productPrice;
    totalPrice.innerText = sum;
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = sum - parseFloat(discount.innerText);
        return;      
    }
    })
    total.innerText = sum;
})

document.getElementById('product6').addEventListener('click',function(){     
    const productPrice = getProductPrice('product6price',productSixName);
    sum += productPrice;
    totalPrice.innerText = sum;
    if (sum >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    applyBtn.addEventListener('click',function(){ 
    if (couponField.value === 'SELL200') {
        discount.innerText = (sum * 0.2).toFixed(2);
        total.innerText = sum - parseFloat(discount.innerText);
        return;      
    }
    })
    total.innerText = sum;
})

function goHome(){
    window.location.href='index.html';
}