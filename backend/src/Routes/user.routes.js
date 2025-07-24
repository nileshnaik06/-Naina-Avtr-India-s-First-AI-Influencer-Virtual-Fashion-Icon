const express = require("express")
const userModel = require('../model/User.model')
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/user", async (req, res) => {
    try {
        const { userName, userEmail, password } = req.body;

        const userExist = await userModel.findOne({ userEmail })

        if (userExist) {
            res.status(400).json({
                message: "user already exists"
            })
        }

        const securePass = await bcrypt.hash(password, 10);


        const createUser = new userModel({ userName, userEmail, password: securePass })

        const newUser = await createUser.save()

        res.status(201).json({ message: "User created", user: newUser });

    } catch (error) {
        res.status(400).json({
            message: "Failed to register user",
            error: error.message
        });
    }

})

router.get("/user", async (req, res) => {
    try {
        const { userEmail } = req.query; // Use req.query for GET params

        if (!userEmail) {
            return res.status(400).json({ message: "Email is required" });
        }

        const userExist = await userModel.findOne({ userEmail });

        if (!userExist) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            user: userExist,
            message: "User found",
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
});


router.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params; // ✅ Fix this
        const deletedUser = await userModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            user: deletedUser,
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete user",
            error: error.message,
        });
    }
});


module.exports = router