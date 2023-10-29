function saybye(name){
    console.log("Good Bye"+' '+name)
}
function sayhelo(name){
    console.log("Hello"+' '+name)
}
var names =["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(let i= 0;i<names.length;i++){
    var fletter = names[i].charAt(0).toLocaleLowerCase();
    if (fletter === 'j') {
        saybye(names[i]);
    }
    else{
       sayhelo(names[i]);
}
}
