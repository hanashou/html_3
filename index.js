let unko = 'Hello World!';
//変数 Varの書き方は古いのでletが主流だよ
unko = 'Hello World2';
//コメントアウトします実験

console.log(unko);

//定数は書き換えができないよ！気を付けて！！文字列を変えたくない時に使う
const bigUnko = 'He..Hello';

let inoki = ['いっち','にっち','さっち','んだぁああ!'];
console.log(inoki[0])
console.log(bigUnko);
//ループ文
//let index =0;
//while(index < inoki.length){ //=4
 //繰り返したい命令
 //console.log(inoki[index];
 //index++; //index = 1 index = 5で終了
//}

//if/else
//if(inoki.length > 5){
//	console.log('ボンバイエ！');
//} else{
//	console.log('ボンバ...');
//}

//関数
const test = (arg) =>{//⇐にあるのがアロー関数だ！
	//ここに実行したい命令を書く
  if(inoki.length > arg){
	console.log('ボンバイエ！');
 }  else {
	console.log('ボンバ...');
 }
};
test(3);
//オブジェクト
const unko2 ={
	color: 'pink',
	size: 'large',
	purfume: 'mint',
	goToilet:() =>{
		console.log('Hello world!');
	}
};

document.getElementsByTagName('button')[0].addEventListener('click',() =>{
	//命令を書く
	window.alert('Hello World');
});
//event:ユーザのアクションをしたタイミングで何かをしたい時に使う