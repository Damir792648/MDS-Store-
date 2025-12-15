// ================= CART =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
$("#cartCount").text(cart.length);

/* ================= OPEN DELIVERY ================= */
$("#deliveryBtn").click(function () {
    openDelivery();
});


/* ================= ADD TO CART ================= */
$(document).on("click", ".addCart", function (e) {
    e.stopPropagation();

    let card = $(this).closest("section, .product");

    let item = {
        name: card.find("h1, h3").first().text(),
        price: card.find(".price, h2").first().text(),
        img: card.find("img").first().attr("src")
    };

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    $("#cartCount").text(cart.length);

    alert("Added to cart, don't worry you can surely trust us");
});

/* ================= OPEN CART ================= */
$("#cartBtn").click(function () {
    $("#cartItems").html("");

    cart.forEach((item, index) => {
        $("#cartItems").append(`
            <div style="display:flex;align-items:center;gap:10px;margin:10px 0">
                <img src="${item.img}" width="60">
                <div>
                    <b>${item.name}</b><br>
                    ${item.price}
                </div>
                <button onclick="removeItem(${index})">remove</button>
            </div>
        `);
    });

    $("#cartModal").fadeIn();
});

/* ================= REMOVE ITEM ================= */
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    $("#cartCount").text(cart.length);
    $("#cartBtn").click();
}

/* ================= BUY ================= */
$(document).on("click", ".buyNow", function (e) {
    e.stopPropagation();
    alert("Thank you for your choice!");
});

/* ================= CLOSE CART ================= */
function closeCart() {
    $("#cartModal").fadeOut();
}

/* ================= SEARCH PRODUCTS ================= */
$("#searchInput").on("keyup", function () {
    let query = $(this).val().toLowerCase();

    $(".product").each(function () {
        let productName = $(this).find("h3").text().toLowerCase();
        $(this).toggle(productName.includes(query));
    });
});

/* ================= DELIVERY ================= */
function openDelivery() {
    $("#deliveryModal").fadeIn();
}

function closeDelivery() {
    $("#deliveryModal").fadeOut();
}

/* Закрытие доставки по клику на фон */
$("#deliveryModal").on("click", function (e) {
    if (e.target === this) {
        closeDelivery();
    }
});
  


// ================= MENU CLICK (OPEN / CLOSE) =================
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.menu-title').forEach(title => {
        title.addEventListener('click', function (e) {
            e.stopPropagation(); // чтобы клик не закрывался сразу

            const menu = this.parentElement;
            menu.classList.toggle('active');
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function () {
        document.querySelectorAll('.menu').forEach(menu => {
            menu.classList.remove('active');
        });
    });
});

