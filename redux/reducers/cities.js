import { ADD_CITY, DELETE_CITY } from '../actionTypes';

function getId(cities) {
    return cities.reduce((maxId, city) => {
        return Math.max(city.id, maxId)
    }, -1) + 1;
}

let cities = (cities = [], action) => {
    switch (action.type) {
        // TODO: name is undefined!
        case ADD_CITY:
            return [
                ...cities,
                {
                    id: getId(cities),
                    name: action.payload.name,
                    enlisted: true                    
                }
            ];
        case DELETE_CITY:       
            return cities.filter((city) => {
                return city.id !== action.id;
            });
        default:
            return cities;
    }
};

export default cities