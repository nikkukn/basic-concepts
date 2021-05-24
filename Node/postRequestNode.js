const { connected } = require('node:process');
const request= require('request');
request.post('', {form: {key:'value'}}, function(err, response, body) {
    if(err) return err
    else {
        if(!err && response.statusCode ===200) {
            console.log("response", response)
        }
    }
})