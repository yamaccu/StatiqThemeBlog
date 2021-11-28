Title: Github Pagesにコメント欄を追加
tag: github
layout: /_tils_layout.cshtml
RedirectFrom: posts/20210907-GithubPages-utterances
---

2021/09/07

# Github Pagesに「utterances」を使ってコメント欄を追加する

---

「utterances」というオープンソースのツールを使うと、Issueを利用してgithub pagesにコメント欄を追加することができます。  
静的サイトにコメント欄を追加するのは、外部サービスを使うなど手間がかかることが多いですが、これはお手軽で大変便利です。  
ただし、コメントするにはgithubにログインする必要があります。  

以下、導入手順になります。

## 1. utterances appのインストール
サイトを公開しているGithubレポジトリにutterances appをインストールします。

<span class="link"></span> [utterances app](https://github.com/apps/utterances)


インストールすると、GithubのSetting → Applicationsにutterancesが表示されます。

## 2. scriptの埋め込み
HTMLソースのコメント欄を追加したい箇所に、utterancesのスクリプトを埋め込みます。  
スクリプトは下記のページで生成できます。  

<span class="link"></span> [utterances](https://utteranc.es/)

<br>

そうすると、下記のようなコメント欄が表示されます。  
これで完成です。

<br>
<br>

---