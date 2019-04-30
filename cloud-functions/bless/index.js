// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()


// 云函数入口函数
exports.main = async(event, context) => {
  var nickName = event.nickName
  var avatar = event.avatar
  try {
    let existBless = await db.collection('bless').where({
      nickName: nickName
    }).get()
    console.log(existBless.data.length)
    if (existBless.data.length === 0) {
      console.log('添加记录')
      await db.collection('bless').add({
        data: {
          nickName: nickName,
          avatar: avatar
        }
      })
    }

    let zanLog = await db.collection('bless').get()
    let zanNum = await db.collection('bless').count()
    return {
      zanLog: zanLog,
      zanNum: zanNum
    }
  } catch (e) {
    console.log(e)
  }
}