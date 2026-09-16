const button = document.getElementById("loadProducts");

button.addEventListener("click", function () {

    fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("Error:", error);
        });

});

