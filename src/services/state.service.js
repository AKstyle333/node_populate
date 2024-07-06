const { State } = require("../models");

const create_state_S = (data) => {
    return State.create(data);
};
const get_state_S = () => {
    return State.find().populate("country");
};
const delete_state_S = (id) => {
    return State.findByIdAndDelete(id);
};
const update_state_S = (id, data) => {
    return State.findByIdAndUpdate(id, data);
};

module.exports = {
    create_state_S,
    get_state_S,
    delete_state_S,
    update_state_S,
};
