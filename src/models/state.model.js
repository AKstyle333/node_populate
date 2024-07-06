const mongoose = require("mongoose");

const state_Schema = mongoose.Schema(
    {
        state_name: {
            type: String,
            required: true,
            trim: true,
        },
        state_des: {
            type: String,
            required: true,
            trim: true,
        },
        state_best_location: {
            type: String,
            required: true,
            trim: true,
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
const State = mongoose.model("State", state_Schema);
module.exports = State;
