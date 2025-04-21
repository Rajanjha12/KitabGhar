import mongoose from 'mongoose';
const userSchema=mongoose.Schema({
    fullname:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    

});//creating a model
const User =mongoose.model('User',userSchema);
//exporting the model
export default User;