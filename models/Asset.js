import mongoose from 'mongoose'

const AssetSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  chain_identifier: {
    type: Number
  },
  name: {
    type: String,
  },
  shortname:{
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},);


const Assest = mongoose.model("Asset", AssetSchema);

export default Assest;