import express from 'express';
import { handlePostRequest } from '../controllers/nodeGraphController.js';
import asyncHandler from "express-async-handler"

const router = express.Router();

router.post('/node-graph', asyncHandler(handlePostRequest));

export default router
