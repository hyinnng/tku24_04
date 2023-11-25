//設置亂數規則
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

var l = 0; //宣告紀錄值

//當按下按鈕時
function goRandom() {
	//取得使用者選擇的數字範圍
	randomNum = document.getElementById("randomNum").value;
	//取得該數字範圍的亂數
	r = getRandomInt(randomNum)+1;

	//判斷是否重複
	switch(true){
		case r==l: //如果亂數值等於紀錄值
		goRandom(); //重新取亂數
		break;
		default: //如果亂數值不等於紀錄值
		l = r; //更新紀錄值
		break;
	}

	//回傳到 HTML 該亂數值
	document.getElementById("randomResult").innerHTML= r;
}