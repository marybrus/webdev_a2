const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:String,
    description:String,
    likes: 
        {type:Number, 
        default:0 },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'User' }
});

module.exports = mongoose.model('Post', PostSchema);