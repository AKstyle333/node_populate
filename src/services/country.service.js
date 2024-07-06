const { Country } = require("../models");

const create_country_S = (data) => {
    return Country.create(data);
};
const get_country_S = () => {
    return Country.find();
};
const delete_country_S = (id) => {
    return Country.findByIdAndDelete(id);
};
const update_country_S = (id, data) => {
    return Country.findByIdAndUpdate(id, data);
};

module.exports = {
    create_country_S,
    get_country_S,
    delete_country_S,
    update_country_S,
};
