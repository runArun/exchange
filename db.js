import mongoose from 'mongoose';
//connect to MongoDB

mongoose.connect('mongodb://localhost/exchange',function(err){
    if (!err){
        console.log('Successfully connected to MongoDB!');
    }else{
        console.log('WARNING: Failed to connect to MongoDB!');
        console.log('Did you open MongoDB service?');
        console.log(err);
    }
});

export default mongoose;

