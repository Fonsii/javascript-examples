var dictionary = { 'key' : 'value' };

console.log(dictionary);
console.log(dictionary['key']);

dictionary['key2'] = 'value2';
console.log(dictionary);

dictionary['key2'] = 'value3';
console.log(dictionary);

console.log(dictionary.key);
delete dictionary.key;
console.log(dictionary);