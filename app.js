let cars = {
    honda: {
        civic: {
            model: "Civic",
            year: 2015,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0taR1FEWIwyabIgfnRDmydfOqdvL80hUZyw&s",
            price: 150000
        },
        accord: {
            model: "Accord",
            year: 2010,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZcrQqMohf-cHyhmQguCtMJ3PXkj3jV1X3Q&s",
            price: 200000
        },
        city: {
            model: "City",
            year: 2017,
            picture: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945",
            price: 170000
        }
    },
    toyota: {
        corolla: {
            model: "Corolla",
            year: 2012,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ke5c6yZRymH3716JoV34RrBvHLZt6UPWWw&s",
            price: 180000
        },
        camry: {
            model: "Camry",
            year: 2018,
            picture: "https://vehicle-images.dealerinspire.com/7057-110012190/thumbnails/large/4T1DAACKXSU564327/72296154ae317c7775e6451d3cdcb642.png",
            price: 220000
        },
        yaris: {
            model: "Yaris",
            year: 2020,
            picture: "https://cache2.pakwheels.com/system/car_generation_pictures/8051/original/Cover.jpg?1737968957",
            price: 190000
        }
    },
    nissan: {
        altima: {
            model: "Altima",
            year: 2016,
            picture: "https://images.hgmsites.net/med/2016-nissan-altima-4-door-sedan-i4-2-5-s-angular-front-exterior-view_100542843_m.jpg",
            price: 160000
        },
        maxima: {
            model: "Maxima",
            year: 2019,
            picture: "https://cache2.pakwheels.com/system/car_generation_pictures/5867/original/2018-Nissan-Maxima.jpg?1632476916",
            price: 230000
        }
    },
    hyundai: {
        elantra: {
            model: "Elantra",
            year: 2021,
            picture: "https://cache2.pakwheels.com/system/car_generation_pictures/5381/original/elantra.jpg?1608016094",
            price: 210000
        },
        sonata: {
            model: "Sonata",
            year: 2015,
            picture: "https://static.pakwheels.com/2022/08/Hyundai-Sonata-Front.jpg",
            price: 180000
        }
    }
};


let brands = document.getElementById("carBrands");
let models = document.getElementById("carModels");
let carList = document.getElementById("car-list");

for(let key in cars){
    brands.innerHTML += `<option value="${key}">${key}</option>`
}

function handleBrandChange(){

    models.innerHTML = `<option value="">Select</option>`

    for (let key in cars[brands.value]){
        models.innerHTML += `<option value="${key}">${key}</option>`
    }

}
let container = document.getElementById('cont');

function searchCar(){
    
    //let result = cars[brands.value][models.value];

    container.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`

    location.href = 'result.html'
}

