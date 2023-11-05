Title: 「C#」ToStringまとめ
Tag: C#
Date: 2022/5/30
description: C#のToStringの用法をまとめました
---

<br>

2022/5/30

# C#のToStringまとめ

---

C#で、数値を文字列へ変換する方法の一つに、".ToString()"があります。  
以下のように使用します。  


```C#
var str = <数値>.ToString();
```

( )の中で、文字列に変換するときの形式を指定することができます。  


## 形式指定の例

```C#
var num = 1234;

Console.WriteLine(num.ToString());          // 1234
Console.WriteLine(num.ToString("D6"));      // 001234
Console.WriteLine(num.ToString("X6"));      // 0004D2 (16進数)
Console.WriteLine(num.ToString("F2"));      // 1234.00
Console.WriteLine(num.ToString("N2"));      // 1,234.00
Console.WriteLine(num.ToString("P2"));      // 123,400.00 %
Console.WriteLine(num.ToString("000000.00"));      // 001234.00
Console.WriteLine(num.ToString("# 円"));    // 1234 円

Console.WriteLine(DateTime.Now.ToString("yyyy年M月d日 H時m分s秒")); 
  // (例)2022年5月29日 22時42分27秒
```

その他の形式は、下記のmicrosoft公式ページを参照ください。  

<span class="link"></span>[標準の数値書式指定文字列](https://docs.microsoft.com/ja-jp/dotnet/standard/base-types/standard-numeric-format-strings)  
<span class="link"></span>[カスタム数値形式文字列](https://docs.microsoft.com/ja-jp/dotnet/standard/base-types/custom-numeric-format-strings)


## 拡張メソッドについて

型にメソッドを追加する方法です。  
後置き形式でメソッドを実行することができます。  
ToString()は、int32の拡張メソッドです。  

ちなみに、Linqも拡張メソッドです。  
（.Selectとか.Whereとか、IEnumerable型にメソッドを追加しています）  

作り方は、以下のqiitaのページが参考になります。  
<span class="link"></span>[【C#】拡張メソッドの作り方](https://qiita.com/tera1707/items/f676e57295dad2a08440)


<br>

以上です。

<br>
<br>

---

