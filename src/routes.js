const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const routes = express.Router()

routes.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
routes.get('/creat-pass', (req, res) => res.render('index',{page: 'creat-pass'}))

routes.get('/room/:room', RoomController.open)
routes.post('/create-room', RoomController.create)

routes.post('/enterroom', RoomController.enter)

routes.post('/question/create/:room', QuestionController.create)
routes.post('/question/:room/:question/:action', QuestionController.index)


module.exports = routes