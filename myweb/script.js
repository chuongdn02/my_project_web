var cartItems = [];

function addToCart(productId) {
  var product = getProductById(productId);
  if (product) {
    cartItems.push(product);
    updateCart();
  }
}

function getProductById(productId) {
  // Đây là nơi bạn có thể thay thế bằng mã lấy sản phẩm từ cơ sở dữ liệu hoặc bất kỳ nguồn dữ liệu nào khác
  var products = [
    { id: 1, name: "Sản phẩm 1", price: 10 },
    { id: 2, name: "Sản phẩm 2", price: 20 },
    { id: 3, name: "Sản phẩm 3", price: 30 }
  ];
  return products.find(function(product) {
    return product.id === productId;
  });
}

function updateCart() {
  var cartElement = document.getElementById("cart");
  var totalElement = document.getElementById("total");
  cartElement.innerHTML = ""; // Xóa nội dung hiện tại trong giỏ hàng trước khi cập nhật lại
  var total = 0;
  cartItems.forEach(function(item) {
    var li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    cartElement.appendChild(li);
    total += item.price;
  });
  totalElement.textContent = "Tổng cộng: $" + total;
}


function showProductDetails(productId) {
  var product = getProductById(productId);
  if (product) {
    var productDetailsElement = document.getElementById("product-details");
    productDetailsElement.innerHTML = "";
    var productNameElement = document.createElement("h2");
    productNameElement.textContent = product.name;
    var productPriceElement = document.createElement("p");
    productPriceElement.textContent = "Giá: $" + product.price;
    productDetailsElement.appendChild(productNameElement);
    productDetailsElement.appendChild(productPriceElement);
  }
}
