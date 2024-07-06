const mongoose = require("mongoose");

const city_Schema = mongoose.Schema(
    {
        city_name: {
            type: String,
            required: true,
            trim: true,
        },
        city_des: {
            type: String,
            required: true,
            trim: true,
        },
        city_best_location: {
            type: String,
            required: true,
            trim: true,
        },
        state: {
            type: mongoose.Types.ObjectId,
            ref: "State",
        },
        country: {
            type: mongoose.Types.ObjectId,
            ref: "Country",
        },
    },
    {
        timestamps: true,
    }
);
const City = mongoose.model("City", city_Schema);
module.exports = City;
