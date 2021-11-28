Title: Statiqでブログ作成_1
Date: 2021/11/24
tag: statiq
description: C#製の静的サイトジェネレータ "Statiq" と "github pages" を使ってブログ作成します
layout: _posts_layout
RedirectFrom: posts/20210817-statiq-getstarted
---

2021/11/17

# C#の静的サイトジェネレータ "Statiq" でブログを書く<br>その1　導入編

---

## はじめに

エンジニアって、ブログで技術のアウトプットをすると良いらしいよ！  
スキルが定着するし、文章力も上がるし、収益も出てメリット盛りだくさんだよ！  

技術情報を調べていると、しばしばこんな記事を目にします。

ホントかな、と思うところはありますが、スキルが定着するという一点に関しては、私が求めるものと一致していましたので、勉強のためにブログを作成することにしました。

ただ、ブログを作ろう！といっても、やり方がいろいろあると思います。  
まずはブログを作る方法を考えてみます。  


## ブログを作る方法

調べたところ、3通りあります。

* 既存ブログサービスを利用：はてなブログなど
* 動的サイト作成：WordPress＋レンタルサーバーなど
* 静的サイト作成：静的サイトジェネレータ＋ホスティングサービスなど

それぞれメリット・デメリットあります。  
私の場合は、「無料であること」、「HTMLの勉強も兼ねたいこと」の2点から、静的サイトのブログを作成することにしました。  

静的サイトジェネレータは、C#を少しだけかじっていましたので、C#製の静的サイトジェネレータであるStatiqを使うことにします。  
また、ホスティングサービスは無料のGithub Pagesを使用します。  

といことで、本サイトでは、Statiqという静的サイトジェネレータ＋github pagesの合わせ技でブログを作っていこうと思います。


## Statiqの特徴

Statiqは、C#で書かれている静的サイトジェネレータです。  
MarkDownもしくはRazor構文で書かれたファイルをHTMLに変換してくれます。  

MarkDownは文章構造を明示的に表現でき、ブログ記事を書きやすいです。  
また、Razor構文はHTMLで書けるのでレイアウトの記述に向いており、静的サイトジェネレータと親和性が高いと感じます。  

つまり、Statiqは記事を書くのにも、レイアウトを作成するのにも、使いやすくてお勧めなのです！  

他にも、<span class="link"></span> [公式HP](https://www.statiq.dev/)に書かれている特徴をあげておきます。

* テンプレートが利用できる
* 設定ファイルを作ることで、ブログの設定などを簡単に設定できる
* FrameWorkをいじればカスタマイズが容易に可能
* デプロイメントが組み込まれていて、Netlify、AWS、Githubにデプロイが可能


## Statiqの使い方

まずは<span class="link"></span> [公式ページのQuick Start](https://www.statiq.dev/web/)を一度やることをお勧めします。  

次に、ブログのテーマが用意されているので、適用してみます。  
適用完了すると、以下のようなブログが作成できます。（Statiqを作っている方のブログです。）

<span class="link"></span> [参考ブログ](https://www.daveaglick.com/)

<br>

以降、ブログテーマ適用の手順をメモしていきます。


### ブログテーマ適用
初期状態では、ブログのフォーマットにはなっていません。  
Statiqには、ブログを作成ためのテーマがあります。

公式のQuick Startで作成したフォルダに"theme"フォルダを作成して、中に<span class="link"></span> [githubのCleanBlogリポジトリ](https://github.com/statiqdev/CleanBlog)をクローンすると、自動で反映されてブログの形式になります。

ブログデザインの変更は、theme→input内の.cshtmlファイルを修正します。


### 記事の書き方
MarkDownで記述します。  
MarkDownの書き方は<span class="link"></span> [こちら](/tils/20210816-markdown-tips)にメモしています。

記事を書いたら、"input"フォルダとその配下に"posts"フォルダを作成し、書いたmdファイルを保存します。


### 固定ページの書き方
プライバシーポリシーなどの固定ページを作成するには、inputフォルダ直下にMarkDownファイルを保存します。  
そうすると、ページ上部のタブにリンクが追加されます。



### Statiq設定
設定は設定ファイルで変えることができます。  
theme→settings.ymlが設定ファイルです。

設定できる項目は、<span class="link"></span> [公式HP](https://www.statiq.dev/web/configuration/settings)を参照ください。  
設定例は、<span class="link"></span> [こちら](https://github.com/statiqdev/statiqdev.github.io/blob/develop/settings.yml)にあります。

"Host"と"LinksUseHttps"を設定しないとSitemapが正しく出力されませんので、設定をおすすめします。  
（ここでちょっとはまりました）


### cssの変更・追加
cssを変更・追加したい場合は、input→scss→_overrides.scssにcssを記述します。  
記述されたcssがHPに適用されます。


### HTMLへの変換
dotnet run を実行すると、outputフォルダにHTMLを出力してくれます。

dotnet run -- preview を実行するとプレビューが見れます。  
ブラウザでhttp://localhost:5080 にアクセスします。

<br>

フォルダ構成  
├─ input ─┬─ () 　　 ←固定ページ　　  
│  　 　　 　└ posts　　←ブログ記事  
├─ theme  
├─ output　　　　　　←HTML出力  
├─ Program.cs  
└─ xxxx.csproj



### sitemapの作成
dotnet runで、outputフォルダに自動出力されます。  



### HEADへのScript追加（google analyticsなど）
theme→input内の_head.cshtmlファイルで、\<HEAD>へのスクリプト追加ができます。  
google analyticsなどのスクリプトを追加したいときは、_head.cshtmlにスクリプトをコピペすると、全ページの\<HEAD>に追加されます。


## Github Pageへアップロード
dotnet runを実行するとOutputフォルダにHTMLファイルが出力されています。  
これをGithub pagesへアップロードします。  
手順は公式ページが詳しいですので、参照ください。

<span class="link"></span> [Quickstart for GitHub Pages](https://docs.github.com/ja/pages/quickstart)

<br>

また、Github pagesへコメント欄を追加することができます。  
手順は下記の記事にまとめています。

<span class="link"></span> [Github Pagesにコメント欄を追加](https://yamaccu.github.io/tils/20210907-githubpages-utterances)



## 終わりに

これで、ブログを作成することができました。  

次は、サイトにオリジナリティを出すために、ブログテーマを使わないで独自のサイトの作成にチャレンジしてみたいと思います。

<br>
<br>

---
