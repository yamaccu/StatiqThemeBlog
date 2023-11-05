title: 「JavaScript」オブジェクト型まとめ
tag: HTML/CSS/JS
Date: 2023/01/03
description: JavaScriptのデータ型であるオブジェクトをまとめました
---

2023/1/3
# JavaScriptのデータ型「オブジェクト」まとめ

---

JavaScriptのデータ型には、プリミティブ型とオブジェクト型の二つがあります。  

* プリミティブ型： 数値・文字列・真偽値などの基本的な型
* オブジェクト型： プリミティブ以外の型

本ページでは、オブジェクト型のうち、下記の二つについてまとめています。  

* オブジェクト： 「プロパティ＋値」のデータの集合
* 配列： インデックス付きデータの集合

## オブジェクト

宣言

```javascript
const obj = {
    red : "赤",
    blue : "青",
    green : "緑"
};
```

出力

```javascript
console.log(obj);
// { red: '赤', blue: '青', green: '緑' }

console.log(obj.red);
// "赤"

console.log(obj[`red`]);
// "赤"
```

## 配列

宣言

```javascript
const array = ["red","blue","green"];
```

出力

```javascript
console.log(array);
// [ 'red', 'blue', 'green' ]

console.log(array[0]);
// "red"
```

### スプレッド構文

[...array]で配列の操作が可能

例文

```javascript
const array = [1, 2];

// 要素を追加
const add = [...array, 3, 4];  // [1, 2, 3, 4]

// 合体（各要素を分解して、再度配列に結合）
const array2 = [3, 4];
const merge = [...array, ...array2];  // [1, 2, 3, 4]
```


### オブジェクトの配列

宣言

```javascript
const array = [{red:"赤", blue:"青"},{apple:"リンゴ",orange:"ミカン"}];
```

出力
```javascript
console.log(array);
// [ { red: '赤', blue: '青' }, { apple: 'リンゴ', orange: 'ミカン' } ]

console.log(array[0]);
// { red: '赤', blue: '青' }
```

<br><br>

以上です。

<br>
<br>

---