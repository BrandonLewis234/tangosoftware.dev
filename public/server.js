const express = require("express");
const path    = require("path");

const app = express();

app.use("/",       express.static(path.resolve(__dirname)));
app.use("/static", express.static(path.resolve(__dirname, "public", "static")));
app.use("/images", express.static(path.resolve(__dirname, "public", "images")));

app.use((request, response) => 
{
    response.sendFile(path.resolve(__dirname, "public", "index.html"));
})

//app.listen(process.env.PORT || 5276, () => {console.log("Server running...")});