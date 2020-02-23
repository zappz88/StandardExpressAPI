const express = require('express');
const router = express.Router();

const Subscriber = require('../expressMongoDBModels/subscriber');

router.get('/', async function(req, res) {
  const Emitter = require('events');
  const myEmitter = new Emitter();
  myEmitter.on('event', () => {
    console.log('test');
  });
  myEmitter.emit('event');
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async function(req, res) {
  try {
    let id = req.params.id;
    const subscriber = await Subscriber.find(id);
    res.json(subscriber);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/', async function(req, res) {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.patch('/', function(req, res) {});

router.delete('/', function(req, res) {});

function getSubscriber(res, req, next) {
  try {
    let subscriber = new Subscriber();
  } catch (error) {}
  next();
}

module.exports = router;
