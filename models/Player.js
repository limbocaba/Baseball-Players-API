import mongoose from "mongoose"

const Players = new mongoose.Schema({
  "name": String,
    "battingAverage": Number,
    "image": String,
    "homeRuns": Number,
    "accolades": [{type: String}],
    "height": Number,
    "weight": Number,
    "battingPosition": String

})

export default mongoose.model('players', Players)