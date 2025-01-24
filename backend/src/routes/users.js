import express from "express";
// const express = require('express');

import userController from "../controller/users.js";
// const userController = require('../controller/users');

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

export default router;
// module.exports = router;
