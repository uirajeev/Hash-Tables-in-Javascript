// Hash table Constructor 
function HashTable(size) {
  this.bucket = new Array(size);
  this.bucketSize = this.bucket.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// Hashing function 
HashTable.prototype.hash = function(key) {
  var total = 0;
  var size = key.length;
  while(size--) {
    total += key.charCodeAt(size);
  }
 return total % this.bucketSize;
}

// insert/update data in hash table
HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  if(!this.bucket[index]) this.bucket[index] = new HashNode(key, value);
  else if(this.bucket[index].key === key) {
    this.bucket[index].value = value;
  }
  else {
    var currentNode = this.bucket[index];
    while(currentNode.next) {
      if(currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
}

// Get data from Hash table
HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  var currentNode = this.bucket[index];
  if (!currentNode) return null;
  while(currentNode) {
    if(currentNode.key === key) return currentNode;
    currentNode = currentNode.next;
  }
  return null;
}

// Get all Data from hash table
HashTable.prototype.getAll = function (){
  var allNode = [];
  for(i = 0; i < this.bucketSize; i++) {
    var currentNode = this.bucket[i];
    while(currentNode) {
      allNode.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNode;
}

// Delete data from hash table
HashTable.prototype.delete = function(key) {
  var index = this.hash(key);
  var currentNode = this.bucket[index];
  if (!currentNode) return false;
  if (currentNode.key === key) {
    this.bucket[index] = currentNode.next;
    return true;
  }
  while(currentNode.next) {
    if (currentNode.next.key === key) {
      currentNode.next = currentNode.next.next;
      return true;
    }
    currentNode = currentNode.next;
  }
}

// Crate a hash Table
var HT = new HashTable(20);

// Insert data in hash Table
HT.insert('Dane', "dany@gmail.com");
HT.insert('Samey', "saney@gmail.com");
HT.insert('Dena', "deny@gmail.com");
HT.insert('Dnea', "xxccc@gmail.com");
HT.insert('Dnae', "chinadiean@gmail.com");

// Update Data in hash table
HT.insert('Dnae', "newchinadiean@gmail.com");

// Delete Data in hash table
HT.delete("Dane");

// Get all data hash table
HT.getAll();

// Console hash table
console.log(HT.bucket);