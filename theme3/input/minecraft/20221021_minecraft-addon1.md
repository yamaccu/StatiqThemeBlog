Title: マイクラ統合版（BE）のアドオンの作り方① 準備編
Date: 2022/10/21
tag: addon
Image: /img/20221021-minecraft-addon1-1.png
description: マイクラ統合版のアドオンを作るための準備をまとめています。
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

1. アドオンを作るための準備　　←今ここ
2. アドオンでプレイヤーを強化
3. 作成中・・


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

<a href="https://azure.microsoft.com/ja-jp/products/visual-studio-code/" style="text-decoration: none;"><div class="link-box"><div class="img-box"><div style="background-image: url('https://azurecomcdn.azureedge.net/cvt-868ff44bac82fea18766986f48022e6c7bb8538815cb89845c3630541dbe09a4/images/shared/social/azure-icon-250x250.png');"></div></div><div class="text-box"><p class="title">Visual Studio Code – コード エディター | Microsoft Azure</p><p class="description">ほぼすべての言語に対応し、任意の OS で動作する強力なコード エディター、Visual Studio Code を使用して、Azure で編集、デバッグ、デプロイを行います。</p></div></div></a>

フォーマットが間違っている箇所を波線で教えてくれるので、とても助かります。  

### アドオンの元データ

アドオンのベースとなるデータを入手します。（バニラと呼ばれています）  
以下のページの一番下からダウンロードできます。  

<a href="https://learn.microsoft.com/ja-jp/minecraft/creator/" style="text-decoration: none;"><div class="link-box"><div class="img-box"><div style="background-image: url('https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png');"></div></div><div class="text-box"><p class="title">Minecraft: Bedrock Edition クリエイター ドキュメント</p><p class="description">アドオンを使用して Minecraft に MOD を入れる方法を学びましょう。 スキンを作成したり、ユニークな体験を設計したり、最新機能を入手したりしながら、Minecraft のクリエイターとしてスキルを磨いていくことができます。</p></div></div></a>

アドオンには、ビヘイビアパックとリソースパックの2つがあります。  

* ビヘイビアパック：主にmobやアイテムの動きや仕様を変更、追加する
* リソースパック：主にmobやアイテムの見た目を変更、追加する

### 作ったアドオン置き場

作ったアドオンはweb上にアップロードしておくと、携帯でダウンロードして使用したり、他の人に使ってもらったりできます。  
ここでは以下の2つのサイトを紹介します。

* クラフターズコロニー：  
　マイクラ配布データ用のサイトです。  
　色々な方がアドオンを上げていて参考になります。

<a href="https://minecraft-mcworld.com/" style="text-decoration: none;"><div class="link-box"><div class="img-box"><div style="background-image: url('https://minecraft-mcworld.com/wp-content/uploads/169クラフターズコロニー.png');"></div></div><div class="text-box"><p class="title">クラフターズコロニー　-マイクラの配布サイト-</p><p class="description">「クラフターズコロニー」はMinecraft統合版(be)/Java版の投稿型ワールド配布サイトです。景観マップや脱出マップなどの配布ワールドをはじめテクスチャやアドオン、MODなどの様々な投稿が行えます。</p></div></div></a>

* github：  
　主にプログラミングのソースコードを管理するサイトなのですが、何でもアップロードできるので便利です。  
　操作方法はちょっと複雑ですが、無料で使えます。  

<a href="https://github.co.jp/" style="text-decoration: none;"><div class="link-box"><div class="img-box"><div style="background-image: url('https://github.githubassets.com/images/modules/open_graph/github-logo.png');"></div></div><div class="text-box"><p class="title">GitHub Japan</p><p class="description">GitHubはソフトウェア開発のプラットフォームです。GitHubには8000万件以上ものプロジェクトがホスティングされており、2700万人以上のユーザーがプロジェクトを探したり、フォークしたり、コントリビュートしたりしています。</p></div></div></a>

<br>

以上、その２へ続きます！  

<br>
<br>

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

---
