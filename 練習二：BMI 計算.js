BMI 值的計算公式為：體重 / 身高^2。

假設體重是 70，身高是 180(1.8m)，BMI 就是 70/(1.8*1.8) = 21。

現在請你寫出一個簡單的 BMI 計算器，用兩個變數代表體重跟身高，算出 BMI 之後判斷 BMI 是落在哪個範圍內並輸出相對應的字串。

體重過輕：BMI < 18.5

正常範圍：18.5 <= BMI < 24

過重：24 <= BMI < 27

輕度肥胖：27 <= BMI < 30

中度肥胖：30 <= BMI < 35

重度肥胖：35 <= BMI

作法一 巢狀
var tall = 120
var high = 1.8
var BMI= tall/(high*high)
var judge= BMI <18.5 ? '體重過輕':(BMI<24 ? '正常範圍':(BMI< 27 ? '過重':(BMI<30 ?'輕度肥胖':(BMI<35 ? '中度肥胖':'重度肥胖'))))
console.log(judge)

作法二 switch ??
var tall = 50
var high = 1.8
var BMI= tall/(high*high)
var judge= BMI
switch (BMI) {
	case BMI<18.5:
	console.log('體重過輕')

作法三 array  ??
var tall = 50
var high = 1.8
var BMI= tall/(high*high)
var judge=[]

作法四 if
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