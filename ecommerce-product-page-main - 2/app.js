const navList = document.getElementById("navList");
const navIcon = document.getElementById("navBargerIcon");
const navClose = document.getElementById("nav-close");
const bannerPrevious = document.getElementById("banner-previous");
const bannerNext = document.getElementById("banner-next");
const bannerImagesEl = document.querySelector('.banner-container');
const cartDecrease = document.getElementById("cartDecrease");
const cartIncrease = document.getElementById("cartIncrease");
const cartCount = document.getElementById("cart-item-count");
const tempImg1 = document.getElementById("temp-img1");
const tempImg2 = document.getElementById("temp-img2");
const tempImg3 = document.getElementById("temp-img3");
const tempImg4 = document.getElementById("temp-img4");
const cartProductName = document.getElementById("cart-product-name");
const cartPrice = document.getElementById("cart-price");
const cartTotalPrice = document.getElementById("cart-total-price");
const cart = document.getElementById("cart");
const model = document.getElementById("model");
const addToCartBtn = document.getElementById("addToCartBtn");
const ProName = document.getElementById("Pro-name");
const cartNotification = document.getElementById("cart-notification");
const cartTrash = document.getElementById("trash-img");
const insideCart = document.querySelector(".model-inside");
const cartImage = document.getElementById("cart-image");
const emptyMsg = document.querySelector(".emptyMsg");




const bannerImages = {
    1 : "/ecommerce-product-page-main/images/image-product-1.jpg",
    2 : "/ecommerce-product-page-main/images/image-product-2.jpg",
    3 : "/ecommerce-product-page-main/images/image-product-3.jpg",
    4 : "/ecommerce-product-page-main/images/image-product-4.jpg"
};
// function to display asidebar
function displayNavInPhone(){
    navList.classList.toggle("display-small-device");
    navList.classList.toggle("d-none");
}

navIcon.addEventListener("click",displayNavInPhone);
navClose.addEventListener("click",displayNavInPhone);

let currentNumImg = 1;
// function to change image of product
function changeBannerImagePre(){
    if(currentNumImg===1){
        currentNumImg = 4;
    }
    else{
        currentNumImg -= 1;
    }
    bannerImagesEl.style.backgroundImage = `url(${bannerImages[currentNumImg]})`;
    
}
function changeBannerImageNext(){
    if(currentNumImg===4){
        currentNumImg = 1;
    }
    else{
        currentNumImg += 1;
    }
    bannerImagesEl.style.backgroundImage = `url(${bannerImages[currentNumImg]})`;
    
}
let value = parseInt(cartCount.textContent);

// cart items increase decrease function 
function cartIncreaseF(){
    value += 1;
    cartCount.textContent = `${value}`;

}

function cartDecreaseF(){
    
    if(value === 1) {
        value = 1;
    }
    else{
        value -= 1;
    }
    cartCount.textContent = `${value}`;

}
bannerPrevious.addEventListener("click",changeBannerImagePre);
bannerNext.addEventListener("click",changeBannerImageNext);

cartIncrease.addEventListener("click",cartIncreaseF);
cartDecrease.addEventListener("click",cartDecreaseF);


let selectedTemp = tempImg1;
function toDisplayImageTempClicked(num,variable){
    bannerImagesEl.style.backgroundImage = `url("${bannerImages[num]}")`;
    variable.classList.add("selected");
    selectedTemp.classList.remove("selected");
    selectedTemp = variable;
}
tempImg2.addEventListener("click",function(){
    toDisplayImageTempClicked(2,tempImg2);
})
tempImg1.addEventListener("click",function(){
    toDisplayImageTempClicked(1,tempImg1);
})
tempImg3.addEventListener("click",function(){
    toDisplayImageTempClicked(3,tempImg3);
})
tempImg4.addEventListener("click",function(){
    toDisplayImageTempClicked(4,tempImg4);
})

// cart display function 

function displayCart(){
    model.classList.toggle("d-none1");
}


cart.addEventListener("click",function(){
    displayCart();
})

function  addTotal(){
    insideCart.classList.remove("d-none1");
    let numOfItem = parseInt(cartCount.textContent);
    let total = numOfItem*125.00;
    cartProductName.textContent = "Fall Limited Edition Sneakers";
    cartPrice.textContent = `$ 125.00`;
    
    cartTotalPrice.textContent = ` x ${numOfItem}  = ${total}`;
    cartNotification.classList.add("cart-notification");
    cartNotification.textContent = numOfItem;
    let uniId = setTimeout(() => {
        cartNotification.classList.remove("cart-notification");
        cartNotification.textContent = "";
    }, 2000);
    emptyMsg.textContent = "";
    
}



addToCartBtn.addEventListener("click",function(){
        addToCartBtn.classList.add("onclicked");
    addTotal();
    setTimeout(() => {
        addToCartBtn.classList.remove("onclicked");
    }, 500);
    
})
cartTrash.addEventListener("click",function(){
    insideCart.classList.add("d-none1");
    emptyMsg.textContent = "Cart is empty";
})



// full view lightbox
const fullViewtempImg1 = document.getElementById("full-view-temp-img1");
const fullViewtempImg2 = document.getElementById("full-view-temp-img2");
const fullViewtempImg3 = document.getElementById("full-view-temp-img3");
const fullViewtempImg4 = document.getElementById("full-view-temp-img4");
const fullViewbannerPrevious = document.getElementById("full-view-banner-previous");
const fullViewbannerNext = document.getElementById("full-view-banner-next");

const bannerImagesEl2 = document.querySelector('.full-view-bg-container');
const closingFullView = document.querySelector(".close"); 
const imagefullviewcontainer = document.querySelector(".image-full-view-container");



let selectedTemp2 = fullViewtempImg1;
function toDisplayImageTempClicked2(num,variable){
    bannerImagesEl2.style.backgroundImage = `url("${bannerImages[num]}")`;
    variable.classList.add("selected");
    selectedTemp2.classList.remove("selected");
    selectedTemp2 = variable;
}

// function to change image of product
function changeBannerImagePre2(){
    if(currentNumImg===1){
        currentNumImg = 4;
    }
    else{
        currentNumImg -= 1;
    }
    bannerImagesEl2.style.backgroundImage = `url(${bannerImages[currentNumImg]})`;
    let tempV = "fullViewtempImg" + currentNumImg;
    tempV.classList.add("selected")
    selectedTemp2.classList.remove("selected");
    selectedTemp2 = tempV;
    
}
function changeBannerImageNext2(){
    if(currentNumImg===4){
        currentNumImg = 1;
    }
    else{
        currentNumImg += 1;
    }
    bannerImagesEl2.style.backgroundImage = `url(${bannerImages[currentNumImg]})`;
    let tempV = "fullViewtempImg" + currentNumImg;
    tempV.classList.add("selected")
    selectedTemp2.classList.remove("selected");
    selectedTemp2 = tempV;
    
}



fullViewtempImg2.addEventListener("click",function(){
    toDisplayImageTempClicked2(2,fullViewtempImg2);
})
fullViewtempImg1.addEventListener("click",function(){
    toDisplayImageTempClicked2(1,fullViewtempImg1);
})
fullViewtempImg3.addEventListener("click",function(){
    toDisplayImageTempClicked2(3,fullViewtempImg3);
})
fullViewtempImg4.addEventListener("click",function(){
    toDisplayImageTempClicked2(4,fullViewtempImg4);
})
fullViewbannerPrevious.addEventListener("click",changeBannerImagePre2);
fullViewbannerNext.addEventListener("click",changeBannerImageNext2);

closingFullView.addEventListener("click",function(){
    imagefullviewcontainer.classList.toggle("d-none2")
})

bannerImagesEl.addEventListener("click",function(){
    imagefullviewcontainer.classList.toggle("d-none2")
})