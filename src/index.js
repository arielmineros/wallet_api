const app = require("./app");
const connectBD = require("./bd");
app.listen(4000);
connectBD();
console.log("Server running on port 4000");
