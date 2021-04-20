if (true) {
	console.log('ns'	)

}

console.log('多條件寫法(使用邏輯運算)')

var score =65
if (score>= 60 && score <= 70) {
	console.log('class C')
}


console.log('else加入')

var score = 65
if (score>= 60 && score <= 70) {
	console.log('class C')
}


console.log('else if設多個條件')
var age = 60

if (age >= 60){
	console.log('老人')
}
	else if (age>=30) {
	console.log('把握歲月')
}
	else{
	console.log('好好念書')

}


var month = 1
switch (month) {
	case 1 :
		console.log('一月')
		break
	case 2 :
		console.log('二月')
		break
	default:  
		console.log('hello')
}


var score = 60

if (score >= 60){
	console.log('pass')
}	
	else{
	console.log('fail')
}



var score=100
var message= score >=60 ? (score===100 ? 'god':'pass') : 'fail'
console.log(message)