const mongoose = require("mongoose");

const country_Schema = mongoose.Schema(
    {
        country_name: {
            type: String,
            required: true,
            trim: true,
        },
        country_des: {
            type: String,
            required: true,
            trim: true,
        },
        country_best_location: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);
const Country = mongoose.model("Country", country_Schema);
module.exports = Country;
