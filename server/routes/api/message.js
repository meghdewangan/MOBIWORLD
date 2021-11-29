const express = require('express');
const router = express.Router();



// Ad Model

const { Message } = require('../../db/models/messageModel');

router.post('/', (req, res) => {
	console.log(req.body);
	const { name, description,phone,adId,userId } = req.body
	
	
		const newMessage = new Message({
			'name': name,
			'description': description,
            'phone':phone,
            'adId':adId,
            'userId':userId
		})
		newMessage.save((err, chat) => {
			if (err) return res.json(err)
			return res.json(chat)
		})
	
});