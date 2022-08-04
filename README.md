# This project is currently under development
# Database

```js
const Kaz = require("kazdev");
const db = new Kaz.Database(); // || Path

db.set(key, key2) 
db.get(key)
db.has(key) // boolean true or false
db.fetch(key)
db.add(key, key2)
db.subtract(key, key2)
db.push("array",{"apple":1,"fish":"not found"})
db.pull("array","element")
db.delete(key)
db.clear(access) // true, false DELETE ALL DATABASE
db.on("ready","Connected On Kazdev Package Database")


```

# Webhook
```js
const Kaz = require("kazdev");
const hook = new Kaz.Webhook(); // Webhook URL , Username , Avatar Url

hook.send("Hello Guys") //Send New Webhook Content
hook.edit("Bye Guys", messageID) // Edit Webhook Content
hook.delete(messageID) // Delete Webhook Content
```
[!Discord](https://discord.gg/8JdUets4br)
