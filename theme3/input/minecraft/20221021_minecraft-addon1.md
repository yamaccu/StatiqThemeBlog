Title: マイクラ統合版 アドオンの作り方① 準備編
Date: 2022/10/21
tag: addon
Image: /img/20221021-minecraft-addon1-1.png
description: アドオンを作るために必要なものをまとめています。
IndexTitle: アドオン作成① 準備編
---


2022/10/21

# マイクラ統合版のアドオンを作る① 準備編

---

うちの子供が「マイクラ統合版のアドオンを作ってみたい！」と言っていて色々と調べているのですが、まとまった情報がなくて苦労しています。    
あとで忘れないように、また、もしかしたら誰かの役にたつかもしれないので、自分が調べたことをまとめていこうと思います。  

アドオンとは簡単に言うと、ゲームに装備やmob、新しいルールなどを追加することができるファイルのことです。  

<br>

**◆マイクラ統合版のアドオンを作る目次◆**

1. アドオンを作るための準備　　★今ここ
2. [アドオンを作るのに便利なVSCode拡張機能](https://yamaccu.github.io/minecraft/20221030_minecraft-vscode) <span class="link"></span>
3. [アドオンでプレイヤーを強化](https://yamaccu.github.io/minecraft/20221024_minecraft-addon2) <span class="link"></span>
4. [アドオンでアニコンを使ってコマンドを実行](https://yamaccu.github.io/minecraft/20221027_minecraft-addon3) <span class="link"></span>
5. 作成中・・


## 準備するもの

以下を準備します。  

* テキストエディタ
* アドオンの元データ
* 作ったアドオン置き場

### テキストエディタ

マイクラのアドオンは、jsonファイルというテキストファイルを編集して作ります。  
このjsonファイルを編集をしやすいテキストエディタをダウンロードしてきます。  

おすすめは、microsoftが出している「Visual Studio Code」というテキストエディタです。  
以下からダウンロードできます。  

<a href="https://azure.microsoft.com/ja-jp/products/visual-studio-code/" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://azurecomcdn.azureedge.net/cvt-868ff44bac82fea18766986f48022e6c7bb8538815cb89845c3630541dbe09a4/images/shared/social/azure-icon-250x250.png');"></div></div><div class="text-box"><p class="title">Visual Studio Code – コード エディター | Microsoft Azure</p><p class="description">ほぼすべての言語に対応し、任意の OS で動作する強力なコード エディター、Visual Studio Code を使用して、Azure で編集、デバッグ、デプロイを行います。</p></div></div>
</a>

フォーマットが間違っている箇所を波線で教えてくれるので、とても助かります。  

また、VSCodeには拡張機能という、あとから追加で機能をいれることができます。  
アドオン作成に便利な拡張機能をまとめてみましたので、よろしければ参照ください。  

<a href="https://yamaccu.github.io/minecraft/20221030_minecraft-vscode" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://yamaccu.github.io/img/20221021-minecraft-addon1-1.png');"></div></div><div class="text-box"><p class="title">マイクラ統合版のアドオン作成に便利なVSCode拡張機能</p><p class="description">VSCodeの拡張機能を3つ紹介します</p></div></div>
</a>

### アドオンの元データ

アドオンのベースとなるデータを入手します。（バニラと呼ばれています）  
以下のページの一番下からダウンロードできます。  

<a href="https://learn.microsoft.com/ja-jp/minecraft/creator/" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png');"></div></div><div class="text-box"><p class="title">Minecraft: Bedrock Edition クリエイター ドキュメント</p><p class="description">アドオンを使用して Minecraft に MOD を入れる方法を学びましょう。 スキンを作成したり、ユニークな体験を設計したり、最新機能を入手したりしながら、Minecraft のクリエイターとしてスキルを磨いていくことができます。</p></div></div>
</a>

アドオンには、ビヘイビアパックとリソースパックの2つがあります。  

* ビヘイビアパック：主にmobやアイテムの動きや仕様を変更、追加する
* リソースパック：主にmobやアイテムの見た目を変更、追加する

### 作ったアドオン置き場

作ったアドオンはweb上にアップロードしておくと、携帯でダウンロードして使用したり、他の人に使ってもらったりできます。  
ここでは以下の2つのサイトを紹介します。

* クラフターズコロニー：  
　マイクラ配布データ用のサイトです。  
　色々な方がアドオンを上げていて参考になります。

<a href="https://minecraft-mcworld.com/" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://minecraft-mcworld.com/wp-content/uploads/169クラフターズコロニー.png');"></div></div><div class="text-box"><p class="title">クラフターズコロニー　-マイクラの配布サイト-</p><p class="description">「クラフターズコロニー」はMinecraft統合版(be)/Java版の投稿型ワールド配布サイトです。景観マップや脱出マップなどの配布ワールドをはじめテクスチャやアドオン、MODなどの様々な投稿が行えます。</p></div></div>
</a>

* github：  
　主にプログラミングのソースコードを管理するサイトなのですが、何でもアップロードできるので便利です。  
　操作方法はちょっと複雑ですが、無料で使えます。  

<a href="https://github.co.jp/" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://github.githubassets.com/images/modules/open_graph/github-logo.png');"></div></div><div class="text-box"><p class="title">GitHub Japan</p><p class="description">GitHubはソフトウェア開発のプラットフォームです。GitHubには8000万件以上ものプロジェクトがホスティングされており、2700万人以上のユーザーがプロジェクトを探したり、フォークしたり、コントリビュートしたりしています。</p></div></div>
</a>

<br>

以上、その２へ続きます！  
その２では、プレイヤーを強化して全てのmobをパンチ一発で倒せるアドオンを作ってみます。  


## 参考になるサイト

* Qiita Minecraft BE Addon講座
  
アドオンの作り方が一通り説明されており、わかりやすいです。  
まず初めに目を通しておくと、理解度がぐんとあがります。  

<a href="https://qiita.com/pencilya/items/7b7e68265151f42a51ac" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUUzJTgwJTkwTWluZWNyYWZ0JTIwQkUlMjBBZGRvbiVFOCVBQyU5QiVFNSVCQSVBNyUyMzElRTMlODAlOTFNaW5lY3JhZnQlMjBCRSUyOCVFNyVCNSVCMSVFNSU5MCU4OCVFNyU4OSU4OCUyOSVFMyU4MSVBRUFkZG9uJUU4JUFDJTlCJUU1JUJBJUE3JUUzJTgyJTkyJUU0JUJEJTlDJUUzJTgyJThBJUUzJTgxJTlGJUUzJTgxJTg0JUVGJUJDJTgxJUVGJUJEJTlFJUU3JTlCJUFFJUU2JUFDJUExJUUzJTgwJTgxJUU3JUI1JThDJUU3JUI3JUFGJUUzJTgxJUE4JUU1JTg2JTg1JUU1JUFFJUI5JUUzJTgxJUFFJUUzJTgxJUJFJUUzJTgxJUE4JUUzJTgyJTgxJUVGJUJEJTlFJnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz1kOTg0NzE3M2ZiMWEyYTgyZjQwYzBjNTI0ZGE3NThkMw&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwcGVuY2lseWEmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWRiMDVjM2JkZGE0MWI5MDBmNmM0YWM5ZWJjZjQ1M2Ix&blend-x=142&blend-y=491&blend-mode=normal&s=1e6d19b87fc0bbe4851e75217c102577');"></div></div><div class="text-box"><p class="title">【Minecraft BE Addon講座#1】Minecraft BE(統合版)のAddon講座を作りたい！～目次、経緯と内容のまとめ～ - Qiita</p><p class="description"></p></div></div>
</a>

* bedrock wiki  

英語ですが、欲しい情報はだいたい網羅されています。  

<a href="https://wiki.bedrock.dev/" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://wiki.bedrock.dev/assets/images/homepage/wikilogo.png');"></div></div><div class="text-box"><p class="title">Bedrock Wiki</p><p class="description">Technical bedrock knowledge-sharing wiki.</p></div></div>
</a>



## マインクラフトの購入先

マインクラフトはアマゾンで購入できます。  
最近、JAVA版と統合版がワンパッケージになったようで、購入すると両方プレイができます。  

<!-- START MoshimoAffiliateEasyLink -->
<script type="text/javascript">
(function(b,c,f,g,a,d,e){b.MoshimoAffiliateObject=a;
b[a]=b[a]||function(){arguments.currentScript=c.currentScript
||c.scripts[c.scripts.length-2];(b[a].q=b[a].q||[]).push(arguments)};
c.getElementById(a)||(d=c.createElement(f),d.src=g,
d.id=a,e=c.getElementsByTagName("body")[0],e.appendChild(d))})
(window,document,"script","//dn.msmstatic.com/site/cardlink/bundle.js?20220329","msmaflink");
msmaflink({"n":"Minecraft (マインクラフト): Java \u0026 Bedrock Edition | オンラインコード版","b":"マイクロソフト","t":"","d":"https:\/\/m.media-amazon.com","c_p":"\/images\/I","p":["\/51BKnFRzWYL._SL500_.jpg","\/51i8VAIlmJL._SL500_.jpg","\/41aEk6RsfjL._SL500_.jpg","\/51kL8WFwl2L._SL500_.jpg","\/41DJcerCroL._SL500_.jpg","\/51JGdCj3tTL._SL500_.jpg"],"u":{"u":"https:\/\/www.amazon.co.jp\/dp\/B0B3R5PL2Y","t":"amazon","r_v":""},"v":"2.1","b_l":[{"id":2,"u_tx":"Amazonで見る","u_bc":"#f79256","u_url":"https:\/\/www.amazon.co.jp\/dp\/B0B3R5PL2Y","a_id":2991341,"p_id":170,"pl_id":27060,"pc_id":185,"s_n":"amazon","u_so":1}],"eid":"TXkHv","s":"s"});
</script>
<div id="msmaflink-TXkHv">リンク</div>
<!-- MoshimoAffiliateEasyLink END -->

<br>
<br>

---
