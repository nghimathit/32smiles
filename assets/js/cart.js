const btn = document.querySelectorAll("i.fas.fa-cart-plus");
// console.log(btn)
btn.forEach(function(btn,index){
    btn.addEventListener("click",function(event){
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("a.h3.text-decoration-none").innerText;
        var productPrice = product.querySelector("b").innerText;
        addcart(productImg,productName, productPrice)

        
    });    

})
function addcart(productImg,productName, productPrice){
     var addtr = document.createElement("tr")
     var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 100px; height: 100px;" src="'+productImg+'" alt="">'+productName+'</td><td><p><span>'+productPrice+'</span></p></td><td><input style="width: 50px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;">Xoa</td></tr>'
     addtr.innerHTML=trcontent;
     var cartTable = document.querySelector("tbody");
     cartTable.append(addtr);
}

