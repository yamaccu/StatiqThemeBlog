Title: VSCodeの拡張機能「vscode-input-sequence」を使う
Tag: vscode-input-sequence
Date: 2023/5/15
description: 連番挿入ができる「vscode-input-sequence」のまとめです。
IndexTitle: 連番の挿入
---

2023/05/15

# VSCodeの拡張機能「vscode-input-sequence」を使う

---

「vscode-input-sequence」は、文章やソースコードに連番を追加できる拡張機能です。  

* 連番入力のスタートと、増減させるステップの数値を指定できます。
* 連番の演算（＋かー）を指定できます。
* 桁数を指定できます。
* 基数（10進数、2進数など）を指定できます。

<a href="https://marketplace.visualstudio.com/items?itemName=tomoki1207.vscode-input-sequence" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://cdn.vsassets.io/v/M220_20230426.6/_content/Header/default_icon_128.png');"></div></div><div class="text-box"><p class="title">vscode-input-sequence - Visual Studio Marketplace</p><p class="description">Extension for Visual Studio Code - sequential-number in vscode</p></div></div>
</a>

## 使い方  

以下の手順で、連番を追加できます。  

1. 複数選択をする（Alt押しながら選択で複数選択、もしくはShift + Alt同時押しで矩形選択）
2. Ctrl + Alt + 0 を押す
3. 連番設定を入力する

連番設定は以下のフォーマットになっています。  

<span style="margin-left:25px; ">\<start> \<operator> \<step> : \<digit> : \<radix> </span>


| 設定     | 説明                                           |
| -------- | ---------------------------------------------- |
| start    | 開始する数です。                               |
| operator | 演算子です。+もしくは-を指定します。           |
| step     | 増減させる数値です。                           |
| digit    | 数字の桁数です。                               |
| radix    | 基数です。2とすると、2進数で数を表示させます。 |

  ※start以外の値は省略可

例）
1+1:2　　1から1ずつカウントアップ、桁数2

<img src="../img/20230515-vscode-input-sequence-3.png" style="width:100%; max-width:450px;" alt="code spell checkerの使い方1">

1+2:4:2　　1から2ずつカウントアップ、桁数4、2進数

<img src="../img/20230515-vscode-input-sequence-4.png" style="width:100%; max-width:450px;" alt="code spell checkerの使い方2">


## 設定

長らくメンテナンスされておらず、バグがあるようです。  
回避するために、Replace Selectionの設定をONにする必要があります。    

<img src="../img/20230515-vscode-input-sequence-1.png" style="width:100%; max-width:450px;" alt="code spell checkerの設定方法"><br><br>

<img src="../img/20230515-vscode-input-sequence-2.png" style="width:100%; max-width:450px;" alt="code spell checkerの設定方法2">


参考  

<a href="https://github.com/tomoki1207/vscode-input-sequence/issues/15" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://opengraph.githubassets.com/95424adb546f8f059432ef2566257c15977e622bd7a6e21d2ae01b5825799bd8/tomoki1207/vscode-input-sequence/issues/15');"></div></div><div class="text-box"><p class="title">recently,it is repeated for each character entered · Issue #15 · tomoki1207/vscode-input-sequence</p><p class="description"></p></div></div>
</a>

<br>
<br>

以上です。

<br>
<br>

---