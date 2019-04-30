// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  try {
    let nickName = event.nickName
    let avatar = event.avatar
    let words = event.words
    await db.collection('chat').add({
      data: {
        nickName: nickName,
        avatar: avatar,
        words: words,
        createTime: new Date().toLocaleDateString()
      }
    })
    let chatList = await db.collection('chat').get()
    let chatNum = await db.collection('chat').count()
    return {
      chatList: chatList,
      chatNum: chatNum
    }

  } catch (e) {
    console.error(e)
  }
}