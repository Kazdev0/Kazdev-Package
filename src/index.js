const fs = require("fs");

module.exports = class database {

   
    constructor(filePath){

        this.jsonFilePath = filePath || "./wasp/database.json";

    
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


    subtract(key, count){
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToFile();
    }

 
    push(key, element){
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.saveDataToFile();
    }


    clear(){
        this.data = {};
        this.saveDataToFile();
    }
console(key){
    if(!key) throw Error("Bir Konsol Mesajı Girmelisin!")
    console.log(key)
};
};

console.log("Waspdb Bağlanıldı İyi Kullanımlar <3")
console.log("Discord Server : https://discord.gg/7nBBQFE5x5")



