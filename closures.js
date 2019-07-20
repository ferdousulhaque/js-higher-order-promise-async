// JS Closures

/* function Person(){
    this.name = name;
}

var me = new Person("Ferdous") */

function Person(pName){
    var _name = pName;

    this.getName = function(){
        return _name;
    };
}

var me = new Person("Ferdous");

console.log(me.getName());