var express = require('express');
const subscriber = require('../models/subscriber');
var router = express.Router();
var Subscriber = require('../models/subscriber')

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', buscaPorId, (req, res) => {
    res.status(200).json(res.subscriber)
})

router.patch('/:id', buscaPorId, async (req, res) => {
    if (req.body.userName != null ) {
        res.subscriber.userName = req.body.userName
    }
    if (req.body.userChanel != null ) {
        res.subscriber.userChanel = req.body.userChanel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        console.log('subscriber atualizado')
        res.status(200).json(updatedSubscriber)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const subscriber = new Subscriber({
            userName: req.body.userName,
            userChanel: req.body.userChanel
        });
        const subscribers = await subscriber.save()
        res.status(200).json(subscribers) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', buscaPorId, async (req, res) => {
    try {
        await res.status(200).subscriber.remove()
        console.log('subscriber removido')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

async function buscaPorId(req, res, next) {
    try {
        const subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message: 'subscriber não encontrado'})
        } else {
            res.subscriber = subscriber
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    next()
}

module.exports = router