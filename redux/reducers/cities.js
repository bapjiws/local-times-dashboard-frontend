import { ADD_CITY, DELETE_CITY } from '../actionTypes';

function getId(cities) {
    return cities.reduce((maxId, city) => {
        return Math.max(city.id, maxId)
    }, -1) + 1;
}

let cities = (cities = [], action) => {
    switch (action.type) {
        case ADD_CITY:
            return [
                ...cities,
                {
                    id: getId(cities),
                    name: action.payload.name,
                    enlisted: true // TODO: do we need this field (ids work just fine)?
                }
            ];
        case DELETE_CITY:       
            return cities.filter((city) => {
                return city.id !== action.payload.id;
            });
        default:
            return cities;
    }
};

export default cities