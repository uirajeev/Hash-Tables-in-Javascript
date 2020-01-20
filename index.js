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

var HT = new HashTable(123);
console.log(HT.hash("eh"));