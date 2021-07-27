# Wasp.DB
Kullanıma Uygun Database Modülü

# Kullanım =>
```js
const wasp = require("wasp.db"); 
const db = new wasp(); //|| File Patch
```
**Modülü İndirmek**
```js
npm install wasp.db
``` 

# Kod Örnekleri
```js
db.set("Para", "500"); // veri set'leme
db.get("Para"); // veri getirme
db.delete("Para"); // veri silme
db.has("Para"); // false || true
db.fetch("Para"); // veri getirme
db.add("Para", 31); // veri ekleme
db.subtract("Para", 5); // veri çıkarma
db.set("array", [ "apple" ]);
db.push("array", "orange"); 
db.clear(); // veri silme
db.console("Database'e Bağlanıldı")
```
# Önemli Bilgiler
## Örnek :
```js
Mesela Örnek Adlı Verimiz Olsun İlk Olarak const db = new wasp(); da Yazdıkdan Sonra waspdb/database.json Dosyası
Açıldıkdan Sonra {} parantezi açalım içine "Örnek":"Değer" yazalım aksi taktirde JSON hatası Alırız 2. bir Variable Açıcaksanız "Değer" kısmının Sonuna , ekleyiniz 

İyi Kullanımlar 
```