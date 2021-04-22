請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。

sum([1, 2, 3]) 預期回傳值：6

sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0


function sum(arr){
var sum= 0
	for(var i=0;i<arr.length;i++){
		sum+=arr[i]	
	}return sum

}


console.log(sum([1, 2, 3]))

console.log(sum([-1, 1, 2, -2, 3, -3])) 