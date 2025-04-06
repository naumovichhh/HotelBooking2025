import hotelsList from './hotels.json';

const hotels = hotelsList;
const hotelsMock = {
    GET: () => {
        return hotels;
    },
    POST: (data) => {
        hotels.push(data);
        return hotels;
    },
    DELETE: (id) => {
        hotels = hotels.filter(e => e.id !== id);
        return hotels;
    },
    PUT: (id, data) => {

    }
}

export default hotelsMock;