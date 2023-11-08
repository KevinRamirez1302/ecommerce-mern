import mongoose from 'mongoose'
import { dbInfo } from './config.js'

export const connnectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbInfo.user}:${dbInfo.password}@cluster0.xg7o66k.mongodb.net/${dbInfo.dbname}?retryWrites=true&w=majority`
    )
    console.log('DB is connected')
  } catch (err) {
    console.log(err)
  }
}
