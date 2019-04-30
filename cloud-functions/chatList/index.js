// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {
  
  try {
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