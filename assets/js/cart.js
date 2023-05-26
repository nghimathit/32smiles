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
     var cartItem = document.querySelectorAll("tbody tr");
     for(var i =0; i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title");
        if(productT[i].innerHTML ===productName ){
            console.log(productT[i])
            alert("San Pham Da Co Trong Gio, Chon San Pham Khac");
            return 
        }
        
     }

     var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 100px; height: 100px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span></p></td><td><input style="width: 50px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="delete">Xoa</span></td></tr>'
     addtr.innerHTML=trcontent;
     var cartTable = document.querySelector("tbody");
     cartTable.append(addtr);
     carttotal()
     deleteCart()
} 

 // tinh tong
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalB=0;
    for(var i =0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML

        totalA = inputValue*productPrice
        totalB+=totalA;
        inputchange()
        

    }
    var cartTotalA = document.querySelector(".price-total span");
    cartTotalA.innerHTML = totalB.toFixed(2);
    // console.log(cartTotalA)

}
// xoa
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i =0; i<cartItem.length;i++){
        var productT = document.querySelectorAll(".delete");
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
            // console.log(cartItemR)
        }) 
        }
     }
     function inputchange(){
        var cartItem = document.querySelectorAll("tbody tr");
        for(var i =0; i<cartItem.length;i++){
            var inputValue = cartItem[i].querySelector("input");
            inputValue.addEventListener("change",function(){
                carttotal()
            })
            
            }

     }
    var buttonT= document.getElementById("thongbaothanhtoan");
    buttonT.onclick = function(){
        alert("Thanh Toan Thanh Cong");
    }
    

