console.log ("hello world")
console.log (3*9)

var box = 123
console.log(box)


var a=0 

console.log (a++ && 30)

console.log (++a && 30)

console.log (typeof "30")
console.log (typeof 30)

console.log('陣列')
var score =[1, 20, 30, 40]
score[score.length] = 50
score.push(60)
console.log(score.length)
console.log(score[score.length-1])
console.log(score.length, score)


console.log('物件')	
var peter= {
name: "peter",
number:'095543123412',
address: "taipei",
scores: 100,
scoresArray:[1, 10, 20, 30, 40], 

}
console.log(peter)
console.log(typeof peter)

console.log('陣列+物件')
var student=[]
var peter= {
name: "peter",
number:'095543123412',
address: "taipei",
scores: 100,
scoresArray:[1, 10, 20, 30, 40], 

}
student.push(peter)
console.log(student[0])

console.log(peter.number)
console.log(peter['name'])
console.log(peter.scoresArray[2])
