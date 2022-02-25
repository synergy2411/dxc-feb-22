module.exports = {
    hi : () => "Hi from GraphQL",
    age : () => 32,
    post : () =>{
        return {title : "grocery", body : "to buy pulses", published : true}
    },
    posts : () => {
        return [
            {title : "grocery", body : "to buy pulses", published : true},
            {title : "shopping", body : "to buy T-Shirts", published : false},
            {title : "insurance", body : "to renew car insurance", published : true},
            {title : "planting", body : "to pot the plants", published : false},
        ]
    }
}