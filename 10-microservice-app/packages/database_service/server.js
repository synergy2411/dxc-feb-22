const app = require("express")();
require("./db");
const PostModel = require("./model/post.model");
const PORT = process.env.PORT || 4040

app.get("/api/posts", async (req, res) => {
    try{
        const result = await PostModel.find()
        return res.send(result)
    }catch(err){
        console.log(err);
        return res.send({err})
    }
})

app.listen(PORT, () => console.log("Database Service started at PORT: ", PORT))