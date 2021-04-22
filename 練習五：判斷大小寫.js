請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。
A=65 Z=90


function isUpperCase(a){
var result=a
var aCode=result.charCodeAt()
if (aCode>=65 && aCode <=90){
	console.log('Upper')
}
else{
	console.log('Lower')
}

}


isUpperCase('asd')