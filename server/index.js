const express = require('express')
const messagesCtrl = require('./controllers/messages_controller')

const app = express()

app.use(express.json())

const PORT = 3001

app.post('/api/messages', messagesCtrl.create)
app.get('/api/messages', messagesCtrl.read)
app.put('/api/messages/:id', messagesCtrl.update)
app.delete('/api/messages/:id', messagesCtrl.delete)

app.listen(PORT, () => console.log(`The server is running on ${PORT}! You better go catch it.....`))