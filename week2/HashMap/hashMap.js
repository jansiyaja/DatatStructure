class HashTable{
    constructor(size){
        this.table= new Array(size)
        this.size=size
    }
hash(key){
    let hashValue=0;
    for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size

}

insert(key,value){
    const index=this.hash(key)
      return  this.table[index]=value
    
}
get(key){
    const index=this.hash(key);
    return this.table[index]
}
display() {
    for (let i = 0; i < this.size; i++) {
        if (this.table[i] !== undefined) {
            console.log(i, this.table[i]);
        }
    }
}
}
const hashMap=new HashTable(100)

hashMap.insert("name","jansiya");
hashMap.insert("address","calicut");
hashMap.insert("age",17);
hashMap.display()