title: 「HTML」div要素で図形を表示する
Tag: HTML/CSS/JS
---

2021/08/21
# HTMLのdiv要素を使ってブラウザに図形を表示させる

---

HTMLで図形を表示させるとき、div要素を使うことができます。  
div要素のサイズを指定して、色を付けてあげれば図形になります。  

## 四角と丸

<div style="height:50px;width:50px;background:black;"></div>
<div style="height:50px;width:50px;background:black;border-radius:50px;"></div>

```C#
(HTML)
<div class="square"></div>
<div class="circle"></div>

(CSS)
.square {
  width: 50px;
  height: 50px;
  background: black;
}
.circle {
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50px;
}
```

## 複雑な形の図形
疑似要素（before / after）を使います。  
疑似要素とは、HTMLの要素に対して、CSSで要素を追記できる方法です。  
これを使えば、作った図形に2つまで図形の追加ができます。  
（合計3つの図形を一つのDiv内に作れる）  

お試しでハンバーガーメニューマークを作ってみます。

<div class="menu2"></div>

```C#
(HTML)
<div class="menu"></div>

(CSS)
.menu{
  height:30px;
  width:30px;
  position:relative;
  top:10px;
  margin-right:5px;
  display:none;
}
  .menu::before{
    content: "";
    display: block;
    position: relative;
    width: 20px;
    height: 2px;
    top: 6px;
    left: 2px;
    box-shadow: 0px 6px dimgray, 0px 12px dimgray;
  }
```

## spanでの図形表示
divを使うと前後に改行が入ります。  
改行させたくない場合は、\<span>を使用します。  
その場合、cssに"display: inline-block;"を追加すると、divと同じように図形を表示させることができます。

お試しでリンクマークを作ってみます。

<span class="link"></span>テスト

```C#
(HTML)
<span class="link"></span>

.link{
  display: inline-block;
  position:relative;
  height:10px;
  width:10px;
  top:2px;
  border:solid 2px gray;
  margin-right:4px;
}
  .link:after{
    content:'';
    position:absolute;
    height:12px;
    width:2px;
    top:-4px;
    left:7px;
    transform:rotate(45deg);
  }
  .link:before{
    content:'';
    position:absolute;
    height:0px;
    width:0px;
    border-left: 8px solid white;
    border-top: 8px solid gray;
    top:-5px;  
    left:7px;
  }
```
## 参考URL

<span class="link"></span> [qiita CSSで作図する](https://qiita.com/yaegaki/items/a1e518d16be9b85479b4)

<span class="link"></span> [CSSでいろんなカタチを表現してみる](https://morobrand.net/mororeco/web/css/css-shape/)

<span class="link"></span> [CSSの疑似要素とは？beforeとafterの使い方まとめ](https://saruwakakun.com/html-css/basic/before-after)

<br>

以上です。

<br>
<br>

---
