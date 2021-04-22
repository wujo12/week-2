function star(str, num){
 return num > 1 ? str += times(str, --num): str;
 }
 console.log(star('aaa', 3));
