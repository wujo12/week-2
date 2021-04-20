// 請你自己寫出一段程式碼，是判斷一個叫做 score 的變數是否及格（超過或剛好 60 分），如果及格的話就輸出 pass，否則輸出 fail。
進階練習：
除了判斷是否及格以外，也請你對滿分做出特別判斷，如果是 100 分的話就輸出 you are no1!

作法1
var score =60
var message= score>=60 ? (score ==100 ? 'you are no1!':pass) : 'fail'
console.log(message)


作法2
var score= 100
if (score >= 100){
	console.log('no1')
}
	else if (score >=60){
	console.log('pass')
}
	else{
	console.log('fail')
}