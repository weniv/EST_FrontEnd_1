// function sayName(){
//     console.log(this.name);
//   }
  
//   var bruce = {
//     name: 'bruce',
//     sayName : sayName
//   }
  
//   var peter = {
//     name : 'peter',
//     sayName : sayName.bind(bruce)
//   }
  
//   peter.sayName();
//   bruce.sayName();

function sayName(){
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
}

const bruceSayName = sayName.bind(bruce);
bruceSayName();