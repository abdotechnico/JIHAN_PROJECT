import { log } from "console";
import { ApiCall } from "./../call.api";
import {describe, expect, test} from '@jest/globals';
import 'jest-date';
import 'jest-date/matchers';
import { ObjectResponse } from "../object.response";

let obj={
    name: "Apple MacBook Pro 16 x",
    data: {
       year: 2019,
       price: 1849.99,
       'CPU model': 'Intel Core i9',
       'Hard disk size': '1 TB'
    }
 };
let apiCall=new ApiCall("https://api.restful-api.dev/objects",obj);

let response=new ObjectResponse();
async function returnResult() {
    let res=await apiCall.postData().then(json=>{        
        console.log("response json : ",json);
        return json;
    });
    console.log("response res : ",res);
    return res;
}

returnResult();

console.log("response after calling the api : ",response);

describe("test data inside response object",()=>{
    test("response data must be equal to sending data",()=>{
        console.log("response data : ", response.data);
        
        
        expect(response.data).toStrictEqual(obj.data);
    });

    test("name must be the some between request and response",()=>{
        console.log("response name : ", response.name);
        expect(response.name).toBe(obj.name);
        /* return apiCall.postData().then(data=>{
            expect(data.name).toBe(obj.name);
        }); */
    });

    test("id should not be null",()=>{
        return apiCall.postData().then(data=>{
            expect(data.id).not.toBeNull();
        });
    });
});






describe("test createAt working with dates ",()=>{
    test("createdAt must have the same year, same month and same day",()=>{
        let dates=new Date();
        log(dates);
        
        return apiCall.postData().then(data=>{
            expect(data.createdAt.substring(0,4)).toBe(dates.getUTCFullYear().toString());
            expect(Number(data.createdAt.substring(5,7))).toBe(dates.getMonth()+1);
            expect(Number(data.createdAt.substring(8,10))).toBe(dates.getDate());
        });
    });
});

