const axios = require("axios").default;

module.exports = {
    hi : () => "Hi from GraphQL",
    age : () => 32,
    post : () =>{
        return {title : "grocery", body : "to buy pulses", published : true}
    },
    posts : async () => {
        const posts = (await axios.get("http://localhost:4040/api/posts")).data
        return posts;
    }
}