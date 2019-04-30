// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  // let blessList = db.collection('bless').get() 
  // return {
  //   event,
  //   blessList: blessList,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }

  try{
    let zanLog = await db.collection('bless').get()
    let zanNum = await db.collection('bless').count()
    return {
      zanLog: zanLog,
      zanNum: zanNum
    }
  }catch(e){
    console.error(e)
  }
}