function sum(arr){
var sum= 0
	for(var i=0;i<arr.length;i++){
		sum+=arr[i]	
	}return sum

}


console.log(sum([1, 2, 3]))

console.log(sum([-1, 1, 2, -2, 3, -3])) 