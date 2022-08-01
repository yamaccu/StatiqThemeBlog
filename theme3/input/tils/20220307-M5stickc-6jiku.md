Title: 「M5StickC」6軸センサをつかう
Tag: M5StickC
Date: 2022/3/7
description: M5StickCで6軸センサを使う方法とまとめました。
---

2022/3/7

# M5StickCの6軸センサを使う

---

&nbsp;<img src="../img/20220307-M5stickc-6jiku-1.png" style="max-width:40px;" alt="M5StickCイラスト">
← M5StickCはこんなやつ。  

M5StickCとは、小型（消しゴムサイズくらい）ながら多機能を備えたマイコンボードです。  
LCD、Wifi、6軸センサなどが搭載されています。  

## 6軸センサについて

6軸センサとは、3軸の加速度センサ（x方向、y方向、z方向）と3軸の角速度センサ（x方向、y方向、z方向）が搭載されているセンサです。  
これを使うと、水平方向にどのくらい動いたか、どのくらい回転したか、などを検出することができます。  

<img src="../img/20220307-M5stickc-6jiku-2.png" style="width:100%;max-width:400px" alt="UIFlowでM5StickCの6軸センサの説明の図">


以降、この6軸センサの使い方を説明していきます。  

<br>

また、プログラムはUIFlowを使用します。  
UIFlowについてはこちらを参照ください。

<span class="link"></span>[UIFlow Use](https://m5stack.github.io/UIFlow_doc/ja/)  
<span class="link"></span>[M5Stack向けのVisual Programming「UIFLOW」でカスタムブロックを作成する](https://yamaccu.github.io/tils/20210823-UIFLOW-CustomBlock)


## UIFlowで6軸センサの値を取得する

まずUIFlowを開きます。  
web版のURLは↓↓です。  

 <span class="link"></span>[M5Flow](https://flow.m5stack.com/)  

ブロックを選ぶメニューで「ハードウェア」⇒「加速度＆ジャイロ」を開くと、x/y/z それぞれの加速度、角速度のブロックが表示されます。  
また、水平に対する現在の角度はピッチ角とロール角で取得できます。  

<img src="../img/20220307-M5stickc-6jiku-3.png" style="width:100%;max-width:600px" alt="UIFlowでM5StickCの6軸センサの値を取得する図">

<br>
<br>

次に、これらの値をLCDに表示するプログラムを作ります。  

<img src="../img/20220307-M5stickc-6jiku-4.png" style="width:100%;max-width:400px" alt="UIFlowでM5StickCの6軸センサの値をLCDに表示する図">

<br>
<br>

これをM5StickCへ転送すると、画面にx軸方向の加速度が表示されます。  
他のパラメータも同様に表示ができます。

<img src="../img/20220307-M5stickc-6jiku-5.png" style="width:100%;max-width:150px" alt="UIFlowでM5StickCの6軸センサの値をLCDに表示する写真">


## 加速度の見方

何も動かさない状態では、重力のみを検知します。  
重力は1Gです。  

<img src="../img/20220307-M5stickc-6jiku-6.png" style="width:100%;max-width:300px" alt="M5StickCの6軸センサの値 加速度x軸方向"><br>
<img src="../img/20220307-M5stickc-6jiku-7.png" style="width:100%;max-width:150px" alt="M5StickCの6軸センサの値 加速度y軸方向"><br>
<img src="../img/20220307-M5stickc-6jiku-8.png" style="width:100%;max-width:300px" alt="M5StickCの6軸センサの値 加速度z軸方向">




M5StickCを振ったりして動かすと、それに応じた加速度が観測できます。  
観測値の単位は「G」です。

## 角速度の見方

何も動かさない状態では角速度は0です、と言いたいのですが初期値が0からずれていることが多いようです。  
少しくらいなら気にする必要はないと思いますが、気になる方は0になるよう値をオフセットしておくと良いと思います。  

<img src="../img/20220307-M5stickc-6jiku-9.png" style="width:100%;max-width:150px" alt="M5StickCの6軸センサの値 角速度">

回転方向に動かすと、それに応じた角速度が観測できます。  
観測値の単位は「dps: degrees per second」です。

## 現在の角度の見方

画面を上に向けた状態で水平に置くと、ピッチ角とロール角が共に0°になります。  
ここからM5StickCを傾けていくと、ピッチ角とロール角の値が変わっていきます。  
観測値の単位は「度(°)」ですので、垂直に立たせると値は90になります。

<img src="../img/20220307-M5stickc-6jiku-10.png" style="width:100%;max-width:250px" alt="M5StickCの6軸センサの値 ピッチ角とロール角">

ピッチ角とロール角の値は、加速度と角速度から計算しています。  
複雑な計算式があるようですが、UIFLowではブロックを使用すれば、計算を意識する必要はありません。  

このピッチ角とロール角を使用することで、M5StickCの傾きによった処理を実行できます。  
例えば、下記のような倒立振子などを作成することができます。  

<span class="link"></span> [qiita 【改良】M5StickC UiFLOWブロックプログラミングで倒立振子(ピッチ角版)](https://qiita.com/Google_Homer/items/e88eedd951c7e5cea865)



## M5StickC購入先

秋葉原へ行くと秋月電子やマルツで購入できます。  
また、オンラインですとamazonのスイッチサイエンスショップでも購入できます。

<!-- START MoshimoAffiliateEasyLink -->
<script type="text/javascript">
(function(b,c,f,g,a,d,e){b.MoshimoAffiliateObject=a;
b[a]=b[a]||function(){arguments.currentScript=c.currentScript
||c.scripts[c.scripts.length-2];(b[a].q=b[a].q||[]).push(arguments)};
c.getElementById(a)||(d=c.createElement(f),d.src=g,
d.id=a,e=c.getElementsByTagName("body")[0],e.appendChild(d))})
(window,document,"script","//dn.msmstatic.com/site/cardlink/bundle.js?20210203","msmaflink");
msmaflink({"n":"M5StickC Plus","b":"スイッチサイエンス","t":"","d":"https:\/\/m.media-amazon.com","c_p":"","p":["\/images\/I\/41H4Q+Pi1zL._SL500_.jpg"],"u":{"u":"https:\/\/www.amazon.co.jp\/dp\/B09MVQD8QJ","t":"amazon","r_v":""},"v":"2.1","b_l":[{"id":2,"u_tx":"Amazonで見る","u_bc":"#f79256","u_url":"https:\/\/www.amazon.co.jp\/dp\/B09MVQD8QJ","a_id":2991341,"p_id":170,"pl_id":27060,"pc_id":185,"s_n":"amazon","u_so":0}],"eid":"YvUpd","s":"s"});
</script>
<div id="msmaflink-YvUpd">リンク</div>
<!-- MoshimoAffiliateEasyLink END -->


## （参考）6軸センサのIC

MPU6886というICが使われています。  
UIFlowを使う場合はICを意識する必要はありませんが、arduinoなどでプログラミングする際はレジスタマップなどを確認すると、更に詳細な制御ができるようになります。  
一応データシートのリンクを載せておきます。

<span class="link"></span>[DataSheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)

加速度は±2g/±4g/±8g/±16g  
角速度は±250dps/±500dps/±1000dps/±2000dps（dps: degrees per second）
の測定レンジを設定可能のようです。  


<br>
<br>

以上です。

---