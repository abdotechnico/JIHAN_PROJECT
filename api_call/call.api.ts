import { log } from "console";
import { ObjectResponse } from "./object.response";

export class ApiCall{
    url:string;
    obj:object;

    constructor(url:string,obj:object){
        this.url=url;
        this.obj=obj;
    }

    postData(): Promise<ObjectResponse> {
        return fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(this.obj),
        headers: { 'Content-Type': 'application/json' }
        })
        //then() function is used to convert the posted contents to the website into json format
        .then(result => result.json())
    
        //the posted contents to the website in json format is displayed as the output on the screen

        //map the result json to object that we well waiting for
        .then(res=>{
            return res as ObjectResponse;
        });
        
    }
}
