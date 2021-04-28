let messagesArr = []
let id = 0

module.exports = {
  create : (req, res) => {
    const {text, time} = req.body
    if(!text || !time) {
      return res.status(400).send('Text and time are both required to post a message.')
    }
    let newMsg = {id, text, time}
    id++
    messagesArr = [...messagesArr, newMsg]
    res.status(200).send(messagesArr)
  },

  read : (req, res) => {
    res.status(200).send(messagesArr)
  },

  update : (req, res) => {
    const {id} = req.params
    const {text, time} = req.body
    const index = messagesArr.findIndex((e) => {
      return e.id === +id
    })
    messagesArr[index] = {
      text : text || messagesArr[index].text,
      time : time || messagesArr[index].time,
      id : messagesArr[index].id
    }
    res.status(200).send(messagesArr)
  },

  delete : (req, res) => {
    const {id} = req.params
    messagesArr = messagesArr.filter((e) => {
      return e.id !== +id
    })
    res.status(200).send(messagesArr)
  }
}