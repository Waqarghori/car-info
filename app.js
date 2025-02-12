let cars = {
    honda : {
        civic : {
            model : "Civic",
            year : 2015,
            picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0taR1FEWIwyabIgfnRDmydfOqdvL80hUZyw&s",
            price : 150000
        },
        accord : {
            model : "Accord",
            year : 2010,
            picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZcrQqMohf-cHyhmQguCtMJ3PXkj3jV1X3Q&s",
            price : 200000
        }
    },
    toyota : {
        corolla : {
            model : "Corolla",
            year : 2012,
            picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ke5c6yZRymH3716JoV34RrBvHLZt6UPWWw&s",
            price : 180000
    },
    camry : {
        model : "Camry",
        year : 2018,
        picture : "https://vehicle-images.dealerinspire.com/7057-110012190/thumbnails/large/4T1DAACKXSU564327/72296154ae317c7775e6451d3cdcb642.png",
        price : 220000
    }
}
}


let brands = document.getElementById("carBrands");
let models = document.getElementById("carModels");
let carList = document.getElementById("car-list");

function loadAllCars(){
    for (let brand in cars) {
        brands.innerHTML += `<option value="${brand}">${brand.toUpperCase()}</option>`;
        for (let model in cars[brand]) {
            let detail = cars[brand][model];
            carList.innerHTML += ` <div class="col">
                    <div class="card" style="width: 18rem;" id="card">
                        <img src="${detail.picture}" class="card-img-top car-image" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${detail.model}</h5>
                          <p class="card-text">${detail.year}</p>
                          <a href="#" class="btn btn-primary">Rs ${detail.price}</a>
                        </div>
                      </div>
                </div>`
    }
    }
}

loadAllCars();
function handleBrandChange(){
    models.innerHTML = `<option value="">ALL</option>`;
    for (let keys in cars[brands.value]){
        models.innerHTML += `<option value="${keys}">${keys.toUpperCase()}</option>`;
        }
        }

        function searchCar(){
            carList.innerHTML = "";
            if(brands.value && models.value){
                let detail = cars[brands.value][models.value]
                carList.innerHTML = ` <div class="col">
                <div class="card" style="width: 18rem;" id="card">
                    <img src="${detail.picture}" class="card-img-top car-image" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${detail.model}</h5>
                      <p class="card-text">${detail.year}</p>
                      <a href="#" class="btn btn-primary">Rs ${detail.price}</a>
                    </div>
                  </div>
            </div>`}
             else if (brands.value){
            for (let model in cars[brands.value]){
                let detail = cars[brands.value][model]
                carList.innerHTML += ` <div class="col">
                <div class="card" style="width: 18rem;" id="card">
                    <img src="${detail.picture}" class="card-img-top car-image" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${detail.model}</h5>
                      <p class="card-text">${detail.year}</p>
                      <a href="#" class="btn btn-primary">Rs ${detail.price}</a>
                    </div>
                  </div>
            </div>`
        }}
    else(loadAllCars())}