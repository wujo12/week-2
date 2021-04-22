寫一個函式 star，接收一個參數 n，並印出 n 個 *
star(1) 預期輸出：
*

star(5) 預期輸出：
*****
star(10) 預期輸出：
**********



function star(n){
	var s=""
	for(var i=1;i<=n;i++){
	console.log(s+'*')
}

}
star(6)