import { ApiCall } from "./call.api";
import { ObjectResponse } from "./object.response";

let obj={
    "name": "Apple MacBook Pro 16",
    "data": {
       "year": 2019,
       "price": 1849.99,
       "CPU model": "Intel Core i9",
       "Hard disk size": "1 TB"
    }
 };
let apiCall=new ApiCall("https://api.restful-api.dev/objects",obj)

async function callPostApi(): Promise<ObjectResponse> {
    let result=await apiCall.postData();
    return result;
}

console.log(callPostApi());