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


module.exports = router