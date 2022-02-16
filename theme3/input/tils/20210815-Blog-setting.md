Title: ブログを作ったら最初にやること
Tag: blog
RedirectFrom: posts/20210815-Blog-setting
---

2021/08/15
# ブログを作ったら最初にやること

---

ブログを作ったら最初にやっておいた方が良いことをまとめています。

## Google Analyticsの登録

HPへのアクセス状況が確認できるようになります。  
登録が完了したら、トラッキングIDをHTMLの\<HEAD>内に追記する必要があります。

参考<span class="link"></span> [Google Analytics登録方法](https://blog.siteanatomy.com/register-google-analytics/)

## sitemapの作成
Google検索にページをヒットさせ易くするためのファイルです。  
作成後、Google Search Consoleに登録します。

小規模HPには不要のようですが、一応作成しておくとよいです。  
静的サイトジェネレータを使用している場合は、自動で出力してくれるものが多いようです。

参考<span class="link"></span> [サイトマップ作成方法](https://ferret-plus.com/curriculums/3580)

## robots.txtの作成
sitemapへのリンクファイルです。  
rootディレクトリに、「robots.txt」という名前のファイルを作成して、中身を以下のように記述します。

```C#
User-agent: *
    Disallow:
    
    Sitemap: https://xxxxxxxxx/sitemap.xml
```

## Google Search Consoleの登録 / sitemapの登録
HPへの流入ルート、検索順位などSEO関連情報が確認できます。  

登録完了したら、サイトマップも登録します。  
登録したては「サイトマップを読み込めませんでした」とエラーが出ますが、しばらく放置しておくと読み込んでくれるようです。

⇒　3週間後に確認したら、読み込んでいました。

参考<span class="link"></span> [Google Serach Console登録方法](http://faster-than-the-sol.blogspot.com/2020/10/github-listing.html)

<br>
<br>

---