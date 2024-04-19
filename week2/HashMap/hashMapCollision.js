




class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    // Hash function
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size; 
    }

    
    insert(key, value) {
        const index = this.hash(key);
      //  this.table[index] = value;
      const bucket=this.table[index];
      if(!bucket){
        this.table[index]=[[key,value]]
      }else{
        const sameKeyItem=bucket.find(item=>item[0]===key);
        if(sameKeyItem){
            sameKeyItem[1]=value
        }else{
            bucket.push([key,value])
        }
      }
    }
    get(key){
        const index= this.hash(key);
       // return this.table[index]
       const bucket=this.table[index]
       if(bucket){
        const sameKeyItem=bucket.find(item=>item[0]===key);
        if (sameKeyItem) {
            return sameKeyItem[1]
        }
       }
return undefined
    }
    remove(key){
        const index= this.hash(key)
        //    return this.table[index]=undefined
        const bucket=this.table[index]
        if(bucket){
         const sameKeyItem=bucket.find(item=>item[0]===key);
         if (sameKeyItem) {
             bucket.splice(bucket.indexOf(sameKeyItem),1)
         }
        }
    }

   // Display the hash table
display() {
    for (let i = 0; i < this.size; i++) {
        if (this.table[i] !== undefined) {
            console.log(i, this.table[i]);
        }
    }
}

}

const myHashTable = new HashTable(100);
myHashTable.insert("name", "John");
myHashTable.insert("mane", "Jack");
myHashTable.insert("age", 30);


myHashTable.display();

console.log(myHashTable.get("name"));
