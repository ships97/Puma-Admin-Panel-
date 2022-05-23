let details = JSON.parse(localStorage.getItem("products")) || [];
console.log(details);

let container = document.querySelector("#all_products");
details.map(function(e,index){
    let div = document.createElement("div");
    div.setAttribute("id","main");

    let image = document.createElement("img");
    image.src = e.image;
    image.setAttribute("id","image");

    let type = document.createElement("h3");
    type.innerText = e.type;
    type.setAttribute("id","type");

    let desc = document.createElement("h3");
    desc.innerText = e.desc;
    desc.setAttribute("id","desc");

    let price = document.createElement("h3");
    price.innerText = e.price;
    price.setAttribute("id","price");

    let butn = document.createElement("button");
    butn.setAttribute("id","remove_product");
    butn.innerText = "Remove Product";
    butn.addEventListener("click",function(){
        details.splice(index,1);
        alert("One Product Removed");
        localStorage.setItem("products",JSON.stringify(details));
        window.location.reload();
    });

    div.append(image,type,desc,price,butn);
    container.append(div);
})