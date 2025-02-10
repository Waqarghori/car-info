let obj = {
    honda : {
        civic : {
            model : "Civic",
            year : 2015,
            picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0taR1FEWIwyabIgfnRDmydfOqdvL80hUZyw&s"
        },
        accord : {
            model : "Accord",
            year : 2010,
            picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZcrQqMohf-cHyhmQguCtMJ3PXkj3jV1X3Q&s"
        }
    },
    toyota : {
        corolla : {
            model : "Corolla",
            year : 2012,
            picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ke5c6yZRymH3716JoV34RrBvHLZt6UPWWw&s"
    },
    camry : {
        model : "Camry",
        year : 2018,
        picture : "https://vehicle-images.dealerinspire.com/7057-110012190/thumbnails/large/4T1DAACKXSU564327/72296154ae317c7775e6451d3cdcb642.png"
    }
}
}
let brand = document.getElementById("brandList");
let model = document.getElementById("modelList");

for (var key in obj){
    brand.innerHTML += `<option value="${key}">${key.toUpperCase()}</option>`;
}
function handleBrandChange (){
    model.innerHTML = "";
    for(let key in obj[brand.value]){
        model.innerHTML += `<option value="${key}">${key.toUpperCase()}</option>`;
    }
}

