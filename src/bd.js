const mongoose = require("mongoose");

const connectBD = async () => {
    try {
        await mongoose.connect(
            //"mongodb+srv://user-api-test:testProject123%40@cluster0.hacdwqy.mongodb.net/Node-API-example?retryWrites=true&w=majority"
            "mongodb+srv://arielgmineros:1234@cluster0.nqoi6ts.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log(">>>> DB is connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectBD;
//export default connectBD;
