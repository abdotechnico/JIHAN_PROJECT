let bodyRequest="{'name': 'Apple MacBook Pro 16','data': {'year': 2019,'price': 1849.99,'CPU model': 'Intel Core i9','Hard disk size': '1 TB'}}";

//the content to be posted to the website is defined
let obj={
    "name": "Apple MacBook Pro 16",
    "data": {
       "year": 2019,
       "price": 1849.99,
       "CPU model": "Intel Core i9",
       "Hard disk size": "1 TB"
    }
 };
//the URL of the website to which the content must be posted is passed as a parameter to the fetch function along with specifying the method, body and header
fetch('https://api.restful-api.dev/objects', {
method: 'POST',
body: JSON.stringify(obj),
headers: { 'Content-Type': 'application/json' }
})
//then() function is used to convert the posted contents to the website into json format
.then(result => result.json())

//the posted contents to the website in json format is displayed as the output on the screen
.then(jsonformat=>console.log(jsonformat));

