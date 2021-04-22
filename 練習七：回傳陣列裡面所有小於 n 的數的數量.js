請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。

function findSmallCount(arr,n){
var conuter = 0
	for(var i=0;i<arr.length;i++){
	if (arr[i]<n) {conuter++}
	} return conuter 
}

console.log(findSmallCount([1, 2, 3], 2)) 
console.log(findSmallCount([1, 2, 3, 4, 5], 0))
console.log(findSmallCount([1, 2, 3, 4], 100))