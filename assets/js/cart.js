document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll("a.btn.btn-success.text-white.mt-2.add-to-cart");
  
    addToCartButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        var product = button.closest(".product-wap");
        var productImg = product.querySelector("img.card-img").src;
        var productName = product.querySelector("a.h3.text-decoration-none").innerText;
        var productPrice = product.querySelector("b").innerText;
  
        var cartItem = {
          img: productImg,
          name: productName,
          price: productPrice
        };
  
        var existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        var isDuplicate = existingCartItems.some(function(item) {
          return item.name === cartItem.name;
        });
  
        if (isDuplicate) {
          alert("Sản phẩm đã có trong giỏ hàng. Vui lòng chọn sản phẩm khác.");
          return;
        }
  
        existingCartItems.push(cartItem);
        localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
        alert("Sản phẩm đã được thêm vào giỏ hàng.");
        loadCartItems();
      });
    });
  
    function loadCartItems() {
        var existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      
        var cartTable = document.querySelector("tbody");
        cartTable.innerHTML = "";
  
      existingCartItems.forEach(function(item) {
        var tr = document.createElement("tr");
        tr.innerHTML = '<td style="display: flex; align-items: center;"><img style="width: 100px; height: 100px;" src="' + item.img + '" alt=""><span class="title">' + item.name + '</span></td><td><p><span class="prices">' + item.price + '</span></p></td><td><input style="width: 50px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="delete">Delete</span></td>';
        cartTable.appendChild(tr);
      });
      
      updateItemCount(existingCartItems.length);
      carttotal();
      deleteCart();
    }
    document.addEventListener("DOMContentLoaded", function() {
        var itemCountElement = document.getElementById("item-count");
        var itemCount = localStorage.getItem("itemCount");
      
        if (itemCount) {
          itemCountElement.textContent = itemCount;
        }
      });
      
      function updateItemCount(count) {
        var itemCountElement = document.getElementById("item-count");
        itemCountElement.textContent = count;
        localStorage.setItem("itemCount", count);
      }
    function carttotal() {
      var cartItem = document.querySelectorAll("tbody tr");
      var totalB = 0;
      for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector(".prices").innerHTML;
  
        totalA = inputValue * productPrice;
        totalB += totalA;
        inputchange();
      }
      var cartTotalA = document.querySelector(".price-total span");
      cartTotalA.innerHTML = totalB.toFixed(2);
    }
  
    function deleteCart() {
      var cartItem = document.querySelectorAll("tbody tr");
      for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".delete");
        productT[i].addEventListener("click", function(event) {
          var cartDelete = event.target;
          var cartItemR = cartDelete.parentElement.parentElement;
          cartItemR.remove();
          carttotal();
  
          // Lấy danh sách sản phẩm từ local storage
          var existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
          // Lọc ra sản phẩm cần xóa
          var productName = cartItemR.querySelector(".title").innerText;
          existingCartItems = existingCartItems.filter(function(item) {
            return item.name !== productName;
          });
  
          // Cập nhật lại danh sách sản phẩm trong local storage
          localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
        });
      }
    }
  
    function inputchange() {
      var cartItem = document.querySelectorAll("tbody tr");
      for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function() {
          carttotal();
        });
      }
    }
  
    var buttonT = document.getElementById("thongbaothanhtoan");
    buttonT.onclick = function() {
      alert("Thanh toán thành công");
    };
  
    // Load danh sách sản phẩm từ local storage khi trang được tải
    loadCartItems();
    
  });
  