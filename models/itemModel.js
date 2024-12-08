const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String ,required:true},
    orgName:{type:String, required:true},
    userEmail:{type:String,required:true,unique:true},
    // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
