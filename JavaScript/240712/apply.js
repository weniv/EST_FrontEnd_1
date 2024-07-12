
var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
            console.log(this.name+ ' is '+ is + ' or ' + is2);
        }
}

var bruce = {
    name : 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);