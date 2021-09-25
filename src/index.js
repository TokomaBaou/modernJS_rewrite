import "./styles.css";

//デフォルト値と引数
//デフォルトの値で処理を継続して扱える
const sayHello = (name = "テスト") => console.log(`こんにちは${name}さん`);
sayHello("誠");

//スプレッド構文
const arr1 = [1, 2];
console.log(arr1);

// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//id=appの子要素にボタンタグを生成し、ボタンを押したらクリックイベントでpタグを生成し、pタグのinnerTextを誠にする
// const textButton = document.getElementById("app").appendChild(button);

// textButton.addEventListener((click)=>{

//   const text = document.getElementById("app").appendChild("p");
//   text.innerText = ("誠");
// });
