const { City } = require("../models");

const create_city_S = (data) => {
    return City.create(data);
};
const get_city_S = () => {
    return City.find().populate("state").populate("country",{country_name:1});
};
const delete_city_S = (id) => {
    return City.findByIdAndDelete(id);
};
const update_city_S = (id, data) => {
    return City.findByIdAndUpdate(id, data);
};

module.exports = {
    create_city_S,
    get_city_S,
    delete_city_S,
    update_city_S,
};
