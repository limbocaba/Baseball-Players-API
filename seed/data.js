import db from "../db/connection.js"
import Players from "../models/Player.js"
import playerData from "../seed/yankeeData.json" assert {type: 'json'}

const insertData = async () => {
  await db.dropDatabase()
  await Players.create(playerData)
  await db.close()
}

insertData()