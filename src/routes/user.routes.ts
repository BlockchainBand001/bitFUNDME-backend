import express, { Router, Request, Response } from 'express';
import { User } from '../models/user'; // Assuming you have a User model




// import { Router } from "express";
// const router = Router();
/** import all controllers */
// import * as controller from '../controllers/userController.js';
// import Auth from '../middleware/auth.js';
// import { check } from 'express-validator';




interface ErrorResponse {
    error: string;
}

const router: Router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 */

router.get('/', (req: Request, res: Response) => {
    // ... your user fetching logic (add type definitions as needed)
});



/** POST Methods */
/**
 * @openapi
 * '/api/user/register':
 *  post:
 *     tags:
 *     - User Controller
 *     summary: Create a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - email
 *              - password
 *            properties:
 *              username:
 *                type: string
 *                default: johndoe
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.route('/register').post(controller.register); // register user

/**
 * @openapi
 * '/api/user/login':
 *  post:
 *     tags:
 *     - User Controller
 *     summary: Login as a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *            properties:
 *              username:
 *                type: string
 *                default: johndoe
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.route('/login').post(controller.verifyUser,controller.login); // login in app

/**
 * @openapi
 * '/api/user/verify':
 *  post:
 *     tags:
 *     - User Controller
 *     summary: Verify a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *            properties:
 *              username:
 *                type: string
 *                default: johndoe
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        desccription: Server Error
 */
router.route('/verify').post(controller.verifyUser, (req, res) => res.end()); // authenticate user


/** GET Methods */
/**
 * @openapi
 * '/api/user/{username}':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get a user by username
 *     parameters:
 *      - name: username
 *        in: path
 *        description: The username of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.route('/:username').get(controller.getUser) // user with username




/** PUT Methods */
/**
 * @openapi
 * '/api/user/update':
 *  put:
 *     tags:
 *     - User Controller
 *     summary: Modify a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userId
 *            properties:
 *              userId:
 *                type: string
 *                default: ''
 *              firstName:
 *                type: string
 *                default: ''
 *              lastName:
 *                type: string
 *                default: ''
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.route('/update').put(controller.updateUser); // is use to update the user profile




/** DELETE Methods */
/**
 * @openapi
 * '/api/user/{userId}':
 *  delete:
 *     tags:
 *     - User Controller
 *     summary: Delete user by Id
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The unique Id of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.route('/:userId').delete(controller.deleteUser);

export default router; // Assuming you want to export


















// // users.js
// const express = require('express');
// const router = express.Router();
//
// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     description: Get all users
//  *     responses:
//  *       200:
//  *         description: Success
//  */
// router.get('/', (req, res) => {
//     // ... your user fetching logic
// });
