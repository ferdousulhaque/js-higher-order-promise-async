const _ = require('lodash');

var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 === 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]

var users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred',  age: 40, active: false },
    { user: 'travis', age: 37, active: true}
  ];
  
result = _.filter(users, function(o) { return o.active; });

console.log(result);