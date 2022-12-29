Title: マイクラ統合版(BE) アドオン作成に便利なVSCode拡張機能
Date: 2022/10/30
tag: addon
Image: /img/20221021-minecraft-addon1-1.png
description: VSCodeの拡張機能を3つ紹介します
IndexTitle: アドオン作成に便利なVSCode拡張機能
---

2022/10/30


# マインクラフトのアドオンを作るのに便利なVS Code拡張機能

---

**◆マイクラ統合版のアドオンを作る目次◆**

1. [アドオンを作るための準備](https://yamaccu.github.io/minecraft/20221021_minecraft-addon1) <span class="link"></span>
2. アドオンを作るのに便利なVSCode拡張機能　　★今ここ
3. [アドオンでプレイヤーを強化](https://yamaccu.github.io/minecraft/20221024_minecraft-addon2) <span class="link"></span>
4. [アドオンでアニコンを使ってコマンドを実行](https://yamaccu.github.io/minecraft/20221027_minecraft-addon3) <span class="link"></span>
5. 作成中・・

## 概要

マインクラフトのアドオンを作成するのにVSCodeというテキストエディタを使うと、jsonフォーマットエラーなどを通知してくれるので便利です。  
また、VSCodeには後から拡張機能を追加することができます。  
本記事では以下の3つのVSCode拡張機能を紹介します。  

* Blockception's Minecraft Bedrock Development
* Bedrock Definitions
* UUID Generator

## Blockception's Minecraft Bedrock Development

<a href="https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://blockceptionltd.gallerycdn.vsassets.io/extensions/blockceptionltd/blockceptionvscodeminecraftbedrockdevelopmentextension/4.1.26/1665833693306/Microsoft.VisualStudio.Services.Icons.Default');"></div></div><div class="text-box"><p class="title">Blockception's Minecraft Bedrock Development - Visual Studio Marketplace</p><p class="description">Extension for Visual Studio Code - An extension that provides code completion, validations, formatters, diagnostics, cheat-sheets, code-actions, creation of files, and development tools to help develop Minecraft Bedrock content</p></div></div>
</a>

※注意点

この拡張機能を使用するためには、ビヘイビアパックの場合はフォルダ名に"BP"または"bp"、リソースパックの場合はフォルダ名に"RP"または"rp"が入っている必要があります。  

### 自動補完

マイクラ関連のコードを認識して、途中まで書くとその先の候補を表示してくれます。  
以下はminecraft:healthと書こうとしたときに、hまで書いたときに次の候補と、その説明を表示してくれています。  

<img src="../img/20221030-minecraft-vscode-2.png" style="width:100%; max-width:500px;" alt="Blockception's Minecraft Bedrock Developmentの使い方 自動補完">  

### コードの説明の表示

詳細を知りたいコードにカーソルをのっけると、説明を表示してくれます。  

<img src="../img/20221030-minecraft-vscode-3.png" style="width:100%; max-width:500px;" alt="Blockception's Minecraft Bedrock Developmentの使い方 コード説明の表示">  

### ハイライト

Molangのコードを色付けして表示してくれます。  

<img src="../img/20221030-minecraft-vscode-4.png" style="width:100%; max-width:400px;" alt="Blockception's Minecraft Bedrock Developmentの使い方 Molangのハイライト">  

### 表示のジャンプ

他の場所で定義しているコード上にカーソルをのっけてF12を押すと、定義している箇所へジャンプします。  
例えば、entitiesのjsonでアニコンを紐づけているときに、F12を押すとアニコン側のファイルへ飛んでくれます。  

<img src="../img/20221030-minecraft-vscode-5.png" style="width:100%; max-width:500px;" alt="Blockception's Minecraft Bedrock Developmentの使い方 表示のジャンプ">  

ただし、events内でadd/removeしているcompornent_groupを指定してF12を押してもジャンプできなかったので、飛べないものもあるようです。  
ジャンプ機能を多用する方は次の「Bedrock Definitions」を入れると良いです。  


## Bedrock Definitions

<a href="https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://destruc7i0n.gallerycdn.vsassets.io/extensions/destruc7i0n/vscode-bedrock-definitions/2.0.8/1658546233077/Microsoft.VisualStudio.Services.Icons.Default');"></div></div><div class="text-box"><p class="title">Bedrock Definitions - Visual Studio Marketplace</p><p class="description">Extension for Visual Studio Code - Go-to definitions and auto-complete for Minecraft Bedrock Edition</p></div></div>
</a>

### 表示のジャンプ

他の場所で定義しているコード上にカーソルをのっけてF12を押すと、定義している箇所へジャンプします。  
上記で紹介した「Blockception's Minecraft Bedrock Development」よりも強力で、試した限りでは何でもジャンプできました。  

<img src="../img/20221030-minecraft-vscode-6.png" style="width:100%; max-width:500px;" alt="Bedrock Definitionsの使い方 表示のジャンプ">  

### 定義先の表示

Ctrlを押しながらカーソルをコード上にのっけると、定義先が表示されます。  
ちょっと確認したい時に便利です。  

<img src="../img/20221030-minecraft-vscode-7.png" style="width:100%; max-width:500px;" alt="Bedrock Definitionsの使い方 定義先の表示">  


## UUID Generator

<a href="https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://netcorext.gallerycdn.vsassets.io/extensions/netcorext/uuid-generator/0.0.5/1642837213567/Microsoft.VisualStudio.Services.Icons.Default');"></div></div><div class="text-box"><p class="title">UUID Generator - Visual Studio Marketplace</p><p class="description">Extension for Visual Studio Code - Generate a UUID</p></div></div>
</a>

UUIDをVS Code上で発行できます。  
manifest.jsonファイルを作成するときに便利です。  

<img src="../img/20221030-minecraft-vscode-1.png" style="width:100%; max-width:300px;" alt="UUID Generatorの使い方">  


<br><br>

以上です。  


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
