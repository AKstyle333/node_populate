const { country_Service } = require("../services");

const create_country = async (req, res) => {
    try {
        // services
        const data = req.body;
        const new_country = await country_Service.create_country_S(data);
        if (!new_country) {
            throw new Error("country data not found!");
        }
        res.status(200).json({
            success: true,
            message: "country created successfully",
            data: new_country,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const get_country = async (req, res) => {
    try {
        // services
        const list_country = await country_Service.get_country_S();
        res.status(200).json({
            success: true,
            message: "country found",
            data: list_country,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "data not found",
        });
    }
};
const delete_country = async (req, res) => {
    try {
        // services
        const id = req.params.id;
        const delete_country = await country_Service.delete_country_S(id);
        res.status(200).json({
            success: true,
            message: "country deleted",
            data: delete_country,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "country not deleted",
        });
    }
};
const update_country = async (req, res) => {
    try {
        // services
        const id = req.params.id;
        const data = req.body;
        const update_country = await country_Service.update_country_S(id, data);
        res.status(200).json({
            success: true,
            message: "country updated",
            update_data: data,
            old_data: update_country,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "country not updated",
        });
    }
};
module.exports = {
    create_country,
    get_country,
    delete_country,
    update_country,
};
