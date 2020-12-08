const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, "utf8", function(err, data) {
        if (err) {
            console.log("error");
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}

async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

let user_arg = process.argv[2];

if (user_arg.slice(0, 4) === "http") {
    webCat(user_arg);
} else {
    cat(user_arg);
}