document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname !== "/cart.html") {
        var itemCountElement = document.getElementById("item-count");
        var itemCount = localStorage.getItem("itemCount");

        if (itemCount) {
            itemCountElement.textContent = itemCount;
        }
    }
});