Title: VSCodeの拡張機能「Markdown All in One」を使う
Tag: MarkDown All in One
DestinationPath: tils/20210830-MarkDown-AllInOne.html
IndexTitle: MarkDownの入力補佐
---

2021/08/30

# VSCodeの拡張機能「Markdown All in One」を使う

---

VSCodeでMarkDownを書くのに、拡張機能「Markdown All in One」を導入すると便利です。  

* ショートカット機能が充実しています。
* ページ内の見出しを認識し、目次を作成してくれます。
* リスト（箇条書きや番号付き）に行を追加したときに、次の行も自動でリストにしてくれます。
* MarkDownのファイルをHTMLへ変換できます。
* リンク作成が簡単にできます。

<a href="https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://yzhang.gallerycdn.vsassets.io/extensions/yzhang/markdown-all-in-one/3.5.1/1679819344347/Microsoft.VisualStudio.Services.Icons.Default');"></div></div><div class="text-box"><p class="title">Markdown All in One - Visual Studio Marketplace</p><p class="description">Extension for Visual Studio Code - All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)</p></div></div>
</a>

Markdownの記法メモもまとめてみました。  
<span class="link"></span>
[MarkDown記法のメモ](/tils/20210816-MarkDown-tips)


## ショートカット機能

<br>

| キーボード操作 | 機能                                            |
| -------------- | ----------------------------------------------- |
| Ctr+B          | 太字 (**)                                       |
| Ctr+I          | イタリック(*)                                   |
| Ctr+Shift+]    | 見出し(#)、実行ごとに#が増える                  |
| Ctr+Shift+[   | 見出し(#)、実行ごと#が減る                      |
| Ctr+M          | 数式挿入($)                                     |
| Alt+C          | チェックボックスのON（[x]）、もう一度押すと解除 |
| Alt+S          | 取り消し(~~)                                    |
| Alt+Shift+F    | 表の表記のフォーマット整形                      |

<br>


以下はもともとVSCodeに入っており便利なショートカット

| キーボード操作 | 機能                   |
| -------------- | ---------------------- |
| Ctr+K → v      | サイドにプレビュー表示 |
| Ctr+shift+v    | タブにプレビュー表示   |


## 目次の自動作成
見出し(#)の目次を自動で作成してくれます。  
- 自動作成：Ctr+Shift+p → Markdown All in One: Create Table of Contents
- 更新　　：Ctr+Shift+p → Markdown All in One: Update Table of Contents

↓こんな感じです。  
<img src="../img/20210830-MarkDown-AllInOne-2.png" Style="width:100%;max-width:450px;" alt="MarkDownAllInOne目次の自動作成">  

<br>

また、見出しに自動で番号を振ってくれます。  
- 番号追加：Ctr+Shift+p → MarkDown All in One: Add/Update section numbers
- 番号削除：Ctr+Shift+p → MarkDown All in One: Remove section numbers

↓こんな感じです。  
<img src="../img/20210830-MarkDown-AllInOne-3.png" Style="width:100%;max-width:450px;" alt="MarkDownAllInOne目次に自動で番号を振る">  


<br>

目次に入れたくない見出しがある場合は、見出しの前の行に「\<!-- omit in toc -->」を追加します。


## リストの入力補佐
\- や1. などのリストを作成しているときに、行追加時に自動でリストが追加されます。  
また、tabでインデントされます。  


## HTML出力
現在開いているMarkDownファイルをHTMLへ変換できます。  
Ctr+Shift+p → Markdown All in One: Print current document to HTML


## リンクの作成
HPなどのアドレスをコピーした状態で、テキストを選択してCtr+Vすると、リンクが作成されます。

<img src="../img/20210830-MarkDown-AllInOne-4.png" Style="width:100%;max-width:350px;" alt="MarkDownAllInOneリンク作成">  

<br>
<br>

以上です。

<br>
<br>

---