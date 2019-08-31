nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let c1 = _.chunk(nums, 2);
console.log(c1);

let c2 = _.chunk(nums, 3);
console.log(c2);


var users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred',  age: 40, active: false },
    { user: 'travis', age: 37, active: true}
  ];
  
result = _.filter(users, function(o) { return o.active; });

console.log(result);

