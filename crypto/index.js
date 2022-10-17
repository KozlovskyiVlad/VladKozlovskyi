import http from 'http';
import fetch from "node-fetch";

/*
Here you can check the rate of any cryptocurrency.
To do this, you need to start the server from this file, 
and then choose how to do it.
You can also use the client terminal and enter, 
for example, "curl --url http://localhost:3000/ethereum".
Or you can open the page "http://localhost:3000/bitcoin" in the browser.
*/

//create a server
const server = http.createServer((req, res) => {

    //here we write the name "coins" in the constant.
    const coinName = req.url

    //it is for filtre additional browser request
    if (coinName === '/favicon.ico') {
        res.end();
    } else if (req.url) {
        getPrice(coinName); 
        res.end();
    }
});

server.listen(3000, function () {
    console.log('Listening on port 3000');
});

/*
here we get the response from "api.coincap".
if the answer is "undefined", then we return an error to the console, 
but if the answer is relevant, then we output it to the console.
*/
function getPrice(coinName) {
    fetch(`https://api.coincap.io/v2/assets${coinName}`)
        .then((response) => response.json())
        .then((commits) => {
            let price = 'usd: ' + commits.data?.priceUsd;
            if (commits.data?.priceUsd == undefined){
                console.log('error 404');
            } else console.log(price);
        });
}



