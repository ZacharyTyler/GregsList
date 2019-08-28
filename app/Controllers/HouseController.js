import HouseService from "../Services/HouseService.js";

let _houseService = new HouseService()

function _draw() {
    let houses = _houseService.Houses
    let template = ''
    houses.forEach(h => template += h.Template)
    document.getElementById("houses-cards").innerHTML = template
}

export default class HouseController {

    constructor() {
        //NOTE Register all subscribers
        _houseService.addSubscriber('houses', _draw)

        //NOTE Retrieve data
        _houseService.getApiHouses();
    }

    addHouse(event) {
        event.preventDefault()
        let form = event.target
        let data = {
            levels: form.levels.value,
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            year: form.year.value,
            price: form.price.value,
            imgUrl: form.imgUrl.value,
            description: form.description.value,
        }
        _houseService.addHouse(data)
    }

    bidHouse(id) {
        _houseService.bidHouse(id)
    }


    deleteHouse(id) {
        _houseService.deleteHouse(id)
    }


}
