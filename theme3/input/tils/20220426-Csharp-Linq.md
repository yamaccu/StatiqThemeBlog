Title: C#のLinqまとめ
Tag: Csharp
Date: 2022/4/26
description: C#のLinqの用法をまとめました
---

<br>

2022/4/26

# C#のLinqまとめ

---

C#のLinqについてまとめました。  
配列、Listなどのコレクションの中身を処理するときに便利です。  

Linqの出力はIEnumerable型となります。  
配列にしたいときは.ToArray()、リストにしたいときは.ToList()を最後にくっつけます。  

## Select

要素それぞれの値に処理を実施します。  

```C#
int[] array = {0, 1, 2, 3, 4, 5};
var select = array.Select(x => x % 3);   // {0, 1, 2, 0, 1, 2}

string[] array2 = {0, 1, 2, 3, 4, 5};
var select2 = array.Select(x => int.Parse(x));  // int変換
```

## Where

要素を選別します。  

```C#
int[] array = {0, 1, 2, 3, 4, 5};
var where = array.Where(x => x % 3 == 0);  // {0, 3}
```


## Count

要素を数えます。  

```C#
int[] array = {0, 1, 2, 3, 4, 5};
var where = array.Count(x => x % 2 == 0);  // 3
```


## Max/Min/Average/Sum

要素全部を計算して結果を返します。  

```C#
int[] array = {0, 1, 2, 3, 4, 5};
var max = array.Max();      //5
var min = array.Min();      //0
var ave = array.Average();  //2.5
var sum = array.Sum();      //15
```


以下、適宜追加していきます。  


<br>

以上です。

<br>
<br>

---

