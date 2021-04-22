請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。

findSmallerTotal([1, 2, 3], 3) 正確回傳值：3

findSmallerTotal([1, 2, 3], 1) 正確回傳值：0

findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值：25

findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值：0

===
function findSmallerTotal(arr,n){
var sum=0
	for(var i=0;i<arr.length;i++){
		if (arr[i]<n){
		sum=sum+arr[i]
		}
	} return sum

}


console.log(findSmallerTotal([1, 2, 3], 3)) 

console.log(findSmallerTotal([1, 2, 3], 1)) 

console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)) 

console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)) 