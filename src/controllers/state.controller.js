const { state_Service } = require("../services");

const create_state = async (req, res) => {
    try {
        // services
        const data = req.body;
        const new_state = await state_Service.create_state_S(data);
        if (!new_state) {
            throw new Error("state data not found!");
        }
        res.status(200).json({
            success: true,
            message: "state created successfully",
            data: new_state,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const get_state = async (req, res) => {
    try {
        // services
        const list_state = await state_Service.get_state_S();
        res.status(200).json({
            success: true,
            message: "state found",
            data: list_state,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "data not found",
        });
    }
};
const delete_state = async (req, res) => {
    try {
        // services
        const id = req.params.id;
        const delete_state = await state_Service.delete_state_S(id);
        res.status(200).json({
            success: true,
            message: "state deleted",
            data: delete_state,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "state not deleted",
        });
    }
};
const update_state = async (req, res) => {
    try {
        // services
        const id = req.params.id;
        const data = req.body;
        const update_state = await state_Service.update_state_S(id, data);
        res.status(200).json({
            success: true,
            message: "state updated",
            update_data: data,
            old_data: update_state,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "state not updated",
        });
    }
};
module.exports = {
    create_state,
    get_state,
    delete_state,
    update_state,
};
