const axios = require("axios").default;
const {DB_SERVICE_PORT} = process.env;

module.exports = {
    hi : () => "Hi from GraphQL",
    age : () => 32,
    post : () =>{
        return {title : "grocery", body : "to buy pulses", published : true}
    },
    posts : async () => {
        const posts = (await axios.get(`http://localhost:${DB_SERVICE_PORT}/api/posts`)).data
        return posts;
    }
}