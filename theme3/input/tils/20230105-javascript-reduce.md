title: 「JavaScript」reduceで配列の中身を処理する
tag: HTML/CSS/JS
Date: 2023/01/05
description: JavaScriptのreduce()の使い方をまとめました
---

2023/1/5
# JavaScriptのreduce()の使い方

---

reduce()メソッドは、配列の中身を処理するメソッドです。  
対象の配列の[0]から順番に、引数で指定した関数を適用していきます。  

## 基本形

基本形はこちら  

```javascript
配列.reduce( 
  function( previousValue, currentValue, currentIndex, array) {
   ・・・処理 
  },
  initValue); 
```

functionの引数は以下の4つです。  

* previousValue： ひとつ前の関数(function)処理の結果
* currentValue： 現在の配列の要素の値
* currentIndex： currentValueの位置 
* array： 元の配列そのまま

initValuneはその名の通り、初期値になります。  

## reduce()の使い方

3パターンあります。  
下記の例では、reduce()で1から9まで順番に足していっています。  

●コールバック関数  

```javascript
const array = [1,2,3,4,5,6,7,8,9];

const callback = function(pre, curr) {
  return pre + curr;
};

const result = array.reduce(callback, 0);

console.log(result);  // 45
```

●インラインの無名関数  

```javascript
const array = [1,2,3,4,5,6,7,8,9];

const result = array.reduce(
    function(pre, curr) { return pre + curr }, 0);

console.log(result);   // 45
```

●アロー関数（ラムダ）

```javascript
const array = [1,2,3,4,5,6,7,8,9];

const result = array.reduce(
    (pre, curr) => { return pre + curr }, 0);

console.log(result);   // 45
```

## for of で書く

正直なところ、reduceは可読性が良いとは言えません。  
for ofで代用できる場合は、こちらで記述した方がよいかもしれません。  

```javascript
const array = [1,2,3,4,5,6,7,8,9];
let result = 0;

for (const i of array)
{
    result = result + i;
}

console.log(result);   // 45
```

<br><br>

以上です。

<br>

---