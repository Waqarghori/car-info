
// let cars = {
//     honda: {
//         civic: {
//             model: "Civic",
//             year: 2015,
//             picture : "https://di-uploads-pod1.s3.amazonaws.com/fisherhonda/uploads/2014/09/SI_se_34FRONT.png"
//         },
//         accord: {
//             model: "Accord",
//             year: 2018,
//             picture : "https://imgcdn.oto.com/large/gallery/color/14/1368/honda-accord-color-185551.jpg"
//         }
//     },
//     toyota: {
//         corolla: {
//             model: "Corolla",
//             year: 2012,
//             picture : "https://images.hgmsites.net/med/2015-toyota-corolla-4-door-sedan-cvt-le-natl-angular-front-exterior-view_100486130_m.jpg"
//         },
//         camry: {
//             model: "Camry",
//             year: 2016,
//             picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmOEX-BXdpAbLoVCC785dqSoFTBuihwF8Qw&s"
//         }
//     }
// }


// for(let key in cars.toyota.camry){
//     if (key === "picture"){
//         let img = document.createElement('img');
//         img.src = cars.toyota.camry[key]
//         document.body.appendChild(img)
//     }else{
//     document.write(key + " : " + cars.toyota.camry[key] + "<br>");
//     }
// }

let cars = {
    honda: {
        civic: {
            model: "Civic",
            year: 2015,
            picture: "https://di-uploads-pod1.s3.amazonaws.com/fisherhonda/uploads/2014/09/SI_se_34FRONT.png"
        },
        accord: {
            model: "Accord",
            year: 2018,
            picture: "https://imgcdn.oto.com/large/gallery/color/14/1368/honda-accord-color-185551.jpg"
        }
    },
    toyota: {
        corolla: {
            model: "Corolla",
            year: 2012,
            picture: "https://images.hgmsites.net/med/2015-toyota-corolla-4-door-sedan-cvt-le-natl-angular-front-exterior-view_100486130_m.jpg"
        },
        camry: {
            model: "Camry",
            year: 2016,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmOEX-BXdpAbLoVCC785dqSoFTBuihwF8Qw&s"
        }
    }
};

let carSelect = document.getElementById("carSelect");
let carDetails = document.getElementById("carDetails");

// Populate dropdown
for (let brand in cars) {
    for (let model in cars[brand]) {
        let option = document.createElement("option");
        option.value = brand + "." + model;
        option.textContent = brand.toUpperCase() + " " + model.charAt(0).toUpperCase() + model.slice(1);
        carSelect.appendChild(option);
    }
}

// Show selected car details
carSelect.addEventListener("change", function() {
    let selectedValue = this.value;
    if (selectedValue) {
        let [brand, model] = selectedValue.split(".");
        let car = cars[brand][model];
        carDetails.innerHTML = `<h3>${car.model} (${car.year})</h3><img src="${car.picture}" width="300">`;
    } else {
        carDetails.innerHTML = "";
    }
});