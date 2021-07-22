/**
 * const,let等の変数宣言
 */

// var var1 = "var変数";
// console.log(var1);

// //var変数は上書き可能
// var1 = "var変数を上書き"
// console.log(var1);

// //var変数は再宣言可能
// var var1 = "var変素を再宣言"
// console.log(var1);

// let var2 = "let変数"
// console.log(var2);

// //letは上書き可能
// var2 = "let変数を上書き"
// console.log(var2);

// //letは再宣言不可
// let var2 = "let変数を再宣言"
// console.log(var2);

// const var3 = "const変数"
// console.log(var3);

// //const変素は上書き不可
// var3 = "const変数を上書き"
// console.log(var3);

// //const変素は再宣言不可
// const var3 = "const変数を再宣言"
// console.log(var3);

//constの場合も、objectの場合はプロパティの変更が可能
// const var4 = {
//   name: "宮田",
//   age: 27,
// };
//  var4.name = "みやた"
//  var4.address = "Tokyo"
//  console.log(var4);

// //constの場合も、配列の場合は中身の変更が可能
// const var5 = ["dog", "cat"];
// var5[0] = "bird";
// var5.push("monkey");
// console.log(var5);

/**
 * テンプレート文字列について
 */
const name = "宮田";
const age = 27;

//「私の名前は宮田です。年齢は27歳です。」

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
