var recipes = {};
function updateObjectWithKeyAndValue(obj, key, value){
  object.key = value;
  return object;
}
function updateObjectWithKeyAndValue(obj, key, value){
  
  return Object.assign({}, obj, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}
function deleteFromObjectByKey(obj, key){
var obj = {}
var obj2 = Object.assign({}, obj);
delete obj2.key;
return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
delete obj[key];
return obj;

}



