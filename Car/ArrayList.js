function ArrayList(){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.push = push;
  this.contains = contains;
  this.remove = remove;
  this.first = first;
  this.end = end;
  this.next = next;
  this.prev = prev;
  this.getElement = getElement;
}
function push(value){
  this.dataStore.push(value);
}

function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function find(element){
for(let i = 0;i < this.dataStore.length;++i){
  if(this.dataStore[i] == element)
  {
    return i;
  }
}
return -1;
}

function insert(element, after){
  let pos = this.find(after);
  if(pos != -1)
  {
    this.dataStore.splice(pos + 1, 0, element);
    return true;
  }
  return false;
}

function toString(){
  return this.dataStore.toString();
}

function contains(element){
  return this.find(element) !== -1;
}

function remove(element){
  let index = this.find(element);
  if(index != -1)
  {
    this.dataStore.splice(index,1);
    return true; 
  }
  return false;
}

function first(){
  this.pos = 0;
}

function end(){
  this.pos = this.listSize - 1;
}

function next(){
  ++this.pos;
}

function prev(){
  --this.pos;
}

function getElement(){
  return this.dataStore[this.pos];
}

var arr= new ArrayList();
arr.push("Giga");
arr.push("Vorobia");
arr.insert("Ksusha", "Giga");
arr.contains("Giga");
let ind1 = arr.remove("Vorobia");
let ind = arr.find("Giga");
console.log(arr.contains("Vorobia"));
console.log(ind);
console.log(arr);
arr.next();
arr.prev();
console.log(arr.getElement());
