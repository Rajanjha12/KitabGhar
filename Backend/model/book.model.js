import mongoose from 'mongoose';
const bookSchema=mongoose.Schema({
    name:String,
    price:String,
    category:String,
    image:String,
    description:String,
    title:String,
})
//creating a model
const Book=mongoose.model('Book',bookSchema);
//exporting the model
export default Book;