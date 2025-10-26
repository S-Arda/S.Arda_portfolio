let a = {
    name : "Anvar",
    grade : 8,
    class : "B" ,
    info : function(){
        console.log("My name is " + this.name );
    }
}

let a2 = {
    name: "Bob" ,
    grade : 9 ,
    class : 'A',
    info1 : function(){
        console.log("I'm in " + this.grade)
    }
}

let u = a.info.bind(a2)
u();
a2.info1.call(a);
a.info.apply(a2);
