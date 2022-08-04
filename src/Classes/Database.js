
const fs = require("node:fs");

module.exports = class Database {

   
    constructor(filePath){

        this.jsonFilePath = filePath || "./kazdev/database.json";
    
        this.data = {};

        if(!fs.existsSync(this.jsonFilePath)){
            fs.writeFileSync(this.jsonFilePath, "{}", "utf-8");
        } else {
            this.fetchDataFromFile();
        }
    }

    
    fetchDataFromFile(){
        const savedData = JSON.parse(fs.readFileSync(this.jsonFilePath));
        if(typeof savedData === "object"){
            this.data = savedData;
        }
    }

   
    saveDataToFile(){
        fs.writeFileSync(this.jsonFilePath, JSON.stringify(this.data, null, 2), "utf-8");
    }

  
    get(key){
        return this.data[key];
    }

   fetch(key){
        return this.data[key];
    }

    has(key){
        if(!key) return Error("Key Error")
        return Boolean(this.data[key]);
    }
    

    set(key, value){
        this.data[key] = value;
        this.saveDataToFile();
    }

   
    delete(key){
        delete this.data[key];
        this.saveDataToFile();
    }


    add(key, count){
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.saveDataToFile();
    }


    sub(key, count){
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToFile();
    }

 
    push(key, element){
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.saveDataToFile();
    }

    pull(key, element){
    if(!key) return;
    if(!element) return;
    const arr = this.data[key]
 
    for( var i = 0; i < arr.length; i++){ 
       if ( arr[i] === element) { 
         arr.splice(i, 1); 
       }
    }
    this.saveDataToFile();

    }

    clear(access){
        if(access == true){
        this.data = {};
        this.saveDataToFile();            
    } else if(access == false){
        console.log("[KazDev Package Manager]: Clear Function Access Denied")
    } else {
        console.log("[KazDev Package Manager]: Error Clear Access Undefined")
    }

    }
    console(key){
        if(!key) throw Error(color.cyan("[KazDev Package Manager]: Bir Konsol Mesajı Girmelisin!"))
        console.log(key)
    }
    on(_1, conf){
        if(_1 == "ready"){
            var message
            if(conf){
                message = conf
                console.log(message)}   
                } else if(conf == null || ""){
                    throw Error("[KazDev Package Manager]: Message is Undefined")
                } else {throw Error("[KazDev Package Manager]: Message is Undefined")}
    }

};

