import express from "express";
// const express = require('express');

// const userController = require('../controller/users');
import userController from "../controller/users.js";

const router = express.Router();

// router.get('/', (req, res) => {
//     res.json({
//         message : "users"
//     })
// });

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createNewUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// module.exports = router;
export default router;