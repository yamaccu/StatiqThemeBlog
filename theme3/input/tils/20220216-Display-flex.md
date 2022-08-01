title: 「CSS」display:flexまとめ
Date: 2022/2/16
Tag: HTML/CSS/JS
description: cssの"display:flex"の用法をまとめました。
---

2022/02/16
# display:flexの設定値のまとめ

---

HTMLにおいて、cssの "display:flex" を使うと要素を並列に並べることができます。  
設定値によって色々な並べ方が可能なので、まとめてみました。  

## 基本

<div style="height:100px;border:solid 2px lightgray;display:flex;">
<div style="height:50px;width:100px;background:lightpink;">要素1</div>
<div style="height:50px;width:100px;background:lightblue;">要素2</div>
<div style="height:50px;width:100px;background:lightgreen;">要素3</div>
</div>

```C#
<div style="display:flex;">
  <div>要素1</div>
  <div>要素2</div>
  <div>要素3</div>
</div>
```

## 中央寄せ

<div style="height:100px;border:solid 2px lightgray;display:flex; justify-content:center;align-items: center;">
<div style="height:50px;width:100px;background:lightpink;">要素1</div>
<div style="height:50px;width:100px;background:lightblue;">要素2</div>
<div style="height:50px;width:100px;background:lightgreen;">要素3</div>
</div>

```C#
<div style="display:flex; justify-content:center; align-items:center;">
  <div>要素1</div>
  <div>要素2</div>
  <div>要素3</div>
</div>
```

## 右寄せ

<div style="height:100px;border:solid 2px lightgray;display:flex; justify-content:flex-end;align-items:flex-end">
<div style="height:50px;width:100px;background:lightpink;">要素1</div>
<div style="height:50px;width:100px;background:lightblue;">要素2</div>
<div style="height:50px;width:100px;background:lightgreen;">要素3</div>
</div>

```C#
<div style="display:flex; justify-content:flex-end; align-items:flex-end;">
  <div>要素1</div>
  <div>要素2</div>
  <div>要素3</div>
</div>
```

## 均等スペース　間だけ均等

<div style="height:100px;border:solid 2px lightgray;display:flex; justify-content:space-between">
<div style="height:50px;width:100px;background:lightpink;">要素1</div>
<div style="height:50px;width:100px;background:lightblue;">要素2</div>
<div style="height:50px;width:100px;background:lightgreen;">要素3</div>
</div>

```C#
<div style="display:flex; justify-content:space-between;">
  <div>要素1</div>
  <div>要素2</div>
  <div>要素3</div>
</div>
```

## 均等スペース　全部均等

<div style="height:100px;border:solid 2px lightgray;display:flex; justify-content:space-around">
<div style="height:50px;width:100px;background:lightpink;">要素1</div>
<div style="height:50px;width:100px;background:lightblue;">要素2</div>
<div style="height:50px;width:100px;background:lightgreen;">要素3</div>
</div>

```C#
<div style="display:flex; justify-content:space-around;">
  <div>要素1</div>
  <div>要素2</div>
  <div>要素3</div>
</div>
```



## 最後だけ右寄せ

<div style="height:100px;border:solid 2px lightgray;display:flex;">
<div style="height:50px;width:100px;background:lightpink;">要素1</div>
<div style="height:50px;width:100px;background:lightblue;">要素2</div>
<div style="margin-left:auto;height:50px;width:100px;background:lightgreen;">要素3</div>
</div>

```C#
<div style="display:flex;">
  <div>要素1</div>
  <div>要素2</div>
  <div style="margin-left:auto;">要素3</div>
</div>
```

## スペースを埋める

<div style="height:100px;border:solid 2px lightgray;display:flex;">
<div style="height:50px;width:100px;background:lightpink;flex-grow:1;">要素1</div>
<div style="height:50px;width:100px;background:lightblue;flex-grow:1;">要素2</div>
<div style="margin-left:auto;height:50px;width:100px;background:lightgreen;flex-grow:1;">要素3</div>
</div>

```C#
<div style="display:flex;">
  <div style="flex-grow:1;">要素1</div>
  <div style="flex-grow:1;">要素2</div>
  <div style="flex-grow:1;">要素3</div>
</div>
```

## 一か所だけ幅固定

<div style="height:100px;border:solid 2px lightgray;display:flex;">
<div style="height:50px;width:100px;background:lightpink;flex-basis:100px;">要素1</div>
<div style="height:50px;width:100px;background:lightblue;flex-grow:1;">要素2</div>
<div style="margin-left:auto;height:50px;width:100px;background:lightgreen;flex-grow:1;">要素3</div>
</div>

```C#
<div style="display:flex;">
  <div style="flex-basis:100px;">要素1</div>
  <div style="flex-grow:1;">要素2</div>
  <div style="flex-grow:1;">要素3</div>
</div>
```

## 端までいったら折り返す

<div style="height:100px;border:solid 2px lightgray;display:flex; flex-wrap:wrap">
<div style="height:50px;width:150px;background:lightpink;">要素1</div>
<div style="height:50px;width:150px;background:lightblue;">要素2</div>
<div style="height:50px;width:150px;background:lightgreen;">要素3</div>
</div>

```C#
<div style="display:flex; flex-wrap:wrap">
  <div>要素1</div>
  <div>要素2</div>
  <div>要素3</div>
</div>
```

<br>

以上です。

<br>
<br>

---
