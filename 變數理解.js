console.log([] === [])  

console.log([1] === [1]) 

console.log({} === {})  

console.log({a:1} === {a:1})


var obj={
	a:1

}

var obj2= obj

obj.a =2



console.log (obj, obj2)
console.log (obj===obj2)