const { city_Service } = require("../services");

const create_city = async (req, res) => {
    try {
        // services
        const data = req.body;
        const new_city = await city_Service.create_city_S(data);
        if (!new_city) {
            throw new Error("city data not found!");
        }
        res.status(200).json({
            success: true,
            message: "city created successfully",
            data: new_city,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const get_city = async (req, res) => {
    try {
        // services
        const list_city = await city_Service.get_city_S();
        res.status(200).json({
            success: true,
            message: "city found",
            data: list_city,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "data not found",
        });
    }
};
const delete_city = async (req, res) => {
    try {
        // services
        const id = req.params.id;
        const delete_city = await city_Service.delete_city_S(id);
        res.status(200).json({
            success: true,
            message: "city deleted",
            data: delete_city,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "city not deleted",
        });
    }
};
const update_city = async (req, res) => {
    try {
        // services
        const id = req.params.id;
        const data = req.body;
        const update_city = await city_Service.update_city_S(id, data);
        res.status(200).json({
            success: true,
            message: "city updated",
            update_data: data,
            old_data: update_city,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "city not updated",
        });
    }
};
module.exports = {
    create_city,
    get_city,
    delete_city,
    update_city,
};
