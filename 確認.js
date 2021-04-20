var tall = 120
var high = 1.8
var BMI= tall/(high*high)

if (BMI<18.5){
	console.log('體重過輕')
}
else if (BMI >= 18.5 && BMI <24){
	console.log('適中')
}
else if (BMI >= 24 && BMI <27){
	console.log('過重')
}
else if (BMI >= 27 && BMI <30){
	console.log('輕度肥胖')
}
else if (BMI >= 30 && BMI <35){
	console.log('中度肥胖')
}
else if (BMI >=35){
	console.log('重度肥胖')	

}