import House from "../Models/House.js";

let _state = {
    houses: []
}
let _subscribers = {
    houses: []
}
// @ts-ignore
let _houseApi = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/houses'
})


function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}


export default class HouseService {
    bidHouse(id) {
        let house = _state.houses.find(h => h._id == id)
        house.price += (99999999999999999999999999 * 999999999999)
        _houseApi.put(id, { price: house.price })
            .then(res => {
                _setState('houses', _state.houses)
            })
    }




    deleteHouse(id) {
        _houseApi.delete(id)
            .then(res => {
                let index = _state.houses.findIndex(house => house._id == id)
                _state.houses.splice(index, 1)
                _setState('houses', _state.houses)
            })
    }

    addHouse(data) {
        _houseApi.post("", data)
            .then(res => {
                _state.houses.push(new House(res.data.data))
                _setState('houses', _state.houses)
            })


    }

    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get Houses() {
        return _state.houses.map(h => new House(h))
    }

    getApiHouses() {
        _houseApi.get()
            .then(res => {
                let houseData = res.data.data.map(h => new House(h))
                _setState('houses', houseData)
            })
    }
}