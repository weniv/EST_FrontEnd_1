
var peter ={
    name: 'Peter Parker',
    sayHello: function() {
        console.log(this.name);
    }
}

var bruce = {
    name: 'Bruce Wayne'
}

peter.sayHello.call(bruce);
// peter에 있는 sayHello를 호출하는데 this를 bruce로 바꿔서 호출해라