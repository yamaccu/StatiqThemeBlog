Title: 「トコトンやさしい自動運転の本」のレビュー・感想
Tag: book
Date: 2023/7/6
description: 自動運転について広く浅くわかりやすく書かれた本です。
Image: https://m.media-amazon.com/images/I/51ZSOyeA1WL._SL500_.jpg
IndexTitle: 「トコトンやさしい自動運転の本」まとめ
---

2023/07/06

# 「トコトンやさしい自動運転の本」まとめ

---

## はじめに

この度、自動運転関連の業務に携わることになり勉強をしています。  
最初に広く浅く業界のことを知っておこうと思い、下記の本を読んでみました。  

この記事では、自分の復習のためにこの本の内容をまとめています。  
また、購入するか迷っている方の参考になればと思います。  

難解な部分もある程度含まれていますが、図を用いてわかりやすく説明されていますので、ご興味があれば手に取ってみてください。  

<!-- START MoshimoAffiliateEasyLink -->
<script type="text/javascript">
(function(b,c,f,g,a,d,e){b.MoshimoAffiliateObject=a;
b[a]=b[a]||function(){arguments.currentScript=c.currentScript
||c.scripts[c.scripts.length-2];(b[a].q=b[a].q||[]).push(arguments)};
c.getElementById(a)||(d=c.createElement(f),d.src=g,
d.id=a,e=c.getElementsByTagName("body")[0],e.appendChild(d))})
(window,document,"script","//dn.msmstatic.com/site/cardlink/bundle.js?20220329","msmaflink");
msmaflink({"n":"今日からモノ知りシリーズ トコトンやさしい自動運転の本 第2版 (B\u0026Tブックス)","b":"","t":"","d":"https:\/\/m.media-amazon.com","c_p":"","p":["\/images\/I\/51ZSOyeA1WL._SL500_.jpg"],"u":{"u":"https:\/\/www.amazon.co.jp\/dp\/4526082279","t":"amazon","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"Amazonで見る","u_bc":"#f79256","u_url":"https:\/\/www.amazon.co.jp\/dp\/4526082279","a_id":2991341,"p_id":170,"pl_id":27060,"pc_id":185,"s_n":"amazon","u_so":0}],"eid":"M2FTt","s":"s"});
</script>
<div id="msmaflink-M2FTt">リンク</div>
<!-- MoshimoAffiliateEasyLink END -->

## 第1章 自動運転の基礎知識 

### 自動運転のメリット

自動運転技術が車やバス、トラックに導入されることで、ハンドルレス・ドライバーレスが実現できます。  
それにより、以下のようなさまざまなメリットが得られます。  

* 運転負荷の軽減、それによる移動時間の有効活用
* 高齢者の運転支援
* 過疎地の移動手段
* 運輸や物流産業の人手不足解消
* 道路や駐車場不足問題の解消

### 自動運転のレベル

自動運転技術は、米国自動車技術者協会（SAE）が定めた自動運転レベルによって分類されています。  
現在、日本では高速道路などの一部環境におけるレベル3まで実現しています。  

| レベル | 内容         | 詳細                                                                     |
| ------ | ------------ | ------------------------------------------------------------------------ |
| 0      | 自動なし     | ドライバーが全部やる                                                     |
| 1      | 運転の支援   | システムが判断してステアリングや加減速をアシスト                         |
| 2      | 一部自動     | システムが判断してステアリングや加減速を実施                             |
| 3      | 条件付き自動 | 特定の条件下でシステムが全部やる、ドライバーはいつでも介入できる必要あり |
| 4      | 高度自動     | システムが全部やる、ドライバーは緊急時には介入が必要                     |
| 5      | 完全自動     | システムが全部やる、緊急時もシステムが対処しドライバー不要               |

### 自動運転の現状

現状、TeslaのAutoPilot、日産のプロパイロット、SUBARUのアイサイトなどが実用化されています。  
これらは例えば以下のような技術になります。  

* 誤発信抑制制御・AEBS（advanced emergency braking system）
* 車線維持
* 駐車支援

### 自動運転のハードウェア構成

自動運転に使われているハードウェアは大きく分けて3種類あります。  

1. センサ（カメラ、レーダー、LiDAR）：走行環境の確認
2. コントローラ：判断
3. 各種アクチュエータ：車の操作

また、レベル3まではドライバーとのコミュニケーション機能も必要です。  

アクチュエータによる車の操作は実用レベルまで達していますが、走行環境を認知するセンサと、運転を判断するAI技術はまだ発展途上です。  
自動運転の実現にはセンサとAIの技術バランスが重要です。  

### 自動運転とEV

EVと自動運転の相性はよく、組み合わせることでより高度な制御が可能です。  

* モーターの応答速度はガソリンエンジンより早く、電流量に比例するので制御性が良い
* 自動運転により回生の効率を上げることで、長距離走行が可能


## 第2章 走る曲がる止まるを制御する技術

### 状態フィードバック制御

状態フィードバック制御は、「状態空間表現」というものを使用してシステムの内部状態の定義や出力の制御を行います。  
これにより、システムの内部状態に基づいた高度な制御が可能となります。

状態空間表現は、システムの内部状態を表す「状態変数」の組み合わせで定義されます。  
ここでいう状態変数とは、例えば例えば、車両の速度、位置、角度などです。  
複数の状態変数の計算にはベクトルや行列演算が使われます。  

全ての状態変数をリアルタイムで観測することは困難なので、シミュレーションによって算出されることもあります。  
このような状態を推定するためのモデルは状態観測器またはオブザーバと呼ばれています。  

### ニューラルネットワーク制御

ニューラルネットワークは、生物の神経細胞のネットワークを人工的に再現した電子回路網です。  
ニューラルネットワークを使用して機械が自ら経験を通して学習することで、モデルやルールを人間が設計する必要がなくなります。  

### 走る止まる曲がるを実現する制御技術

#### ■モーター制御

モーターはエンジンと違い、電圧・電流によって制御されます。  
それにより以下のメリットがあります。  

* エンジンより反応が早い
* 出力が線形
* トランスミッションが不要

そのため、EV車の方がガソリン車よりも必要なセンサの数や種類も少なく、制御のためのECUがシンプルで済みます。  

#### ■ブレーキ制御

EVではブレーキ時、モーターの回生により運動エネルギーを電気に戻すことができます。  
自動運転で回生が最大限になるようにブレーキ制御することで、長距離走行が可能になります。  

#### ■ステアリング制御

モーターの制御性の良さにより、ステアリングの制御も自由度があがります。  

* デファレンシャルギアが不要
* 左右の駆動力に差をつけることによりステアリングが容易になる

#### ■バイワイヤ技術

バイワイヤとは、アクセル、ブレーキ、ステアリングなどの操作を電子制御によって行うシステムです。  
例えばアクセルにおいては、ペダル開度をセンサで読み取り、車速などの情報と合わせてエンジン、トランスミッション、モーターなどのパワートレインを制御します。  
操作をバイワイヤで行うことで、システム側とドライバ側両方から車体の制御が可能です。  
ただし、故障による安全性への懸念などの問題もあります。  

## 第3章 走行環境に関する認知・判断技術

### 必要な各種センサ

車を安全に走らせるためには、少なくとも以下の情報を集める必要があります。  

1. 道路に関する情報　（車線や道路形状）
2. 交通規制に関する情報　（信号や道路標識）
3. 障害物の情報　（周辺の車両や歩行者、製紙障害物など）

主なセンサの種類は以下になります。  

| センサ         | 検出範囲     | 視野角     | 特徴                                                                                                                                                                     |
| -------------- | ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ミリ波レーダー | 数m～数10m   | 数°        | 〇雨などの悪天候でも使える<br>〇相対速度を精度よく測定可能<br>Ｘ方位分解能はあまり高くない<br>Ｘ電波反射率の低い木材などは検出できない<br>Ｘ車線や標識の認識はできない   |
| 単眼カメラ     | 数cm～数100m | 数10°      | 〇車の運転に必要なほとんどの情報を取得可能<br>Ｘ夜や逆光、悪天候に弱い<br>Ｘ距離の検出精度はあまり良くない                                                               |
| ステレオカメラ | 数m～数10m   | 数°        | 〇単眼カメラに加え、距離の精度も良い<br>Ｘ夜や逆光、悪天候に弱い                                                                                                         |
| LiDAR          | 数m～数10m   | 数°～数10° | 〇車線、標識、障害物までの距離を測定できる<br>〇夜でも使える<br>〇方位分解能が高い<br>〇電波反射率の低い木材なども検出できる<br>Ｘ雨などの悪天候に弱い<br>Ｘコストが高い |
| 遠赤外線カメラ | 数cm～数10m  | 数°        | 〇夜間でも歩行者や動物を検知できる<br>Ｘ温度差がないと検知できない<br>Ｘ服などに遮られると検知できない                                                                   |


### ミリ波レーダー

ミリ波レーダーは、ミリ波帯域（30GHzから300GHzの周波数範囲）を対象物に向けて発射し、その反射波を測定することで対象物までの距離や方角を測るセンサです。  
送信波と反射波には、対象物との相対速度差によって、周波数差が生じます。（ドップラー効果）  
それを観測することで対象物までの距離を測定しています。  
ミリ波は雨や霧などを透過でき、金属で強く反射するので、周辺車両との距離の検出に適しています。  

レーダーの性能は、最大探知距離と方位分解能で決まります。  

最大探知距離については、送信機から発射された電波が対象物に届く割合は距離の２乗に反比例するため、反射し手戻ってくるのには距離の４乗に反比例します。  
レーダーの送信電力と受信できる最小電力によって、最大探知距離が決まります。  

方位分解能は、電波の波長幅を小さくすると分解能が上がります。  
波長幅はアンテナ開口部の直径に反比例しますが、外観や搭載性などの制限があります。  

### カメラ

カメラは車線や標識、歩行者、障害物など、多くの安全運転に必要な資格情報を取得できます。  
取得した画像データから、画像処理や画像認識によって情報を取り出します。  
車載カメラは光環境の要求が高く、広範囲かつ急激な変化への対応が求められます。  

現在は、単体のカメラですべてを実現するのは難しく、他のセンサとのセンサフュージョンの技術も重要です。  

#### ■空間フィルタリング処理

対応する画素だけでなく、周辺画素も用いて処理を実施する手法です。  
周囲の画素との畳み込み演算を行います。  
この際、重み付けにはフィルタ、カーネルと呼ばれる係数の行列が使用されます。  
画像のノイズ除去や平滑化をするのに有用です。  

#### ■エッジ抽出

エッジとは、輝度が大きく変化する境界を指します。  
画像の輪郭を抽出し物体検知したり、ノイズを除去したりするのに使用されます。   

#### ■車線を見つけるためのハフ変換

ハフ変換は、直線や破線を効率よく認識するための画像処理です。  
エッジ検出などの前処理を行い、画像中の注目すべき点をピックアップし、パラメータ平面に展開します。  
その後、全体の形状を探索、補完を行います。  

#### ■標識や信号を見つけるための拡張ハフ変換

より複雑な形状を認識できるハフ変換です。  
円や三角形などの標識、車線のカーブなどを認識可能です。  
ハフ変換から追加のパラメータが必要となり、複雑な処理となります。  

#### ■テンプレートマッチング

テンプレートマッチングは、テンプレートと呼ばれる検出したい画像と同じ大きさの部分画像を切り出して比較し、類似度が高い領域を検出する手法です。  
標識の中の矢印や文字などの検出に使われます。  

### ステレオカメラ

立体視の原理を利用して距離や奥行き情報を計測するためのカメラです。  
視差と両カメラ間の距離（基線長）、カメラの焦点距離から対象物までの距離を求めることができます。  
精度はカメラの解像度、基線長、対象物までの距離の2乗に依存します。  
また、模様に特徴の少ない対象物に対しては、距離計測が難しくなります。  

ステレオカメラには校正の難しさやコストなどの問題があります。  

#### ■単眼カメラでの距離計測

単眼カメラでも距離を測定する方法があります。  
* 大きさがわかっているものの画像上の大きさで距離を測定
* 遠近法を利用した距離測定
* 自分が動いたとき、近くのものは動きが大きく、遠くのものは動きが小さいことを利用して測定（モーションステレオ）

### LiDAR

LiDAR（Light Detection and Ranging）とは、パルス状の赤外線などのレーザー光を走査しながら対象物に照射し、その散乱や反射光を観測することで対象物までの距離および反射率を同時に計測できるセンサです。  
LiDARから得られるデータは点群と呼ばれる多数の3次元座標の集まりで表現されます。  
この情報を利用して、物体の検知を実現しています。  
LiDARはカメラより夜間に強いですが、解像度や色の識別には弱いです。  
また、雨や霧などの天候の影響も受けやすいという問題があります。  

従来はモジュールを360°旋回させる走査機構が使われていましたが、近年は小型化が進み、複数のLiDARを使って360°の情報を取得する方法が主流になりつつあります。  

### センサフュージョン

センサフュージョンは、異なる種類のセンサからの情報を組み合わせてより信頼性の高い情報を得るための技術です。  
異なるデータを組み合わせるために、フィルタを使用したり機械学習を使用して特徴を抽出したりといった前処理が必要です。    

### 歩行者認識の画像処理技術

人物検出には例えば以下のような手法が用いられます。

#### ■ルールに基づく方法

人は円形の頭と台形の胴体、二本の手と二本の足に分けることができ、それぞれの位置関係や比率はおおよそ決まっています。  
それらを照らし合わせることで人物検出ができます。  

#### ■統計的な特徴に基づく方法

統計処理によって人物の平均的なパラメータを算出し、比較することで人物検出ができます。  
よく使われるのはHOC（輝度勾配ヒストグラム）で、人の形を表す輝度勾配ヒストグラムと比較することで検出します。  

### 畳み込み型学習による画像認識

運転には非常に多くの情報が必要であり、すべてをルール化するのは困難です。  
そこで、機械が自らの経験によりルールを習得できる方法が検討されています。  
畳み込み型深層学習はその一つです。  

処理の概要は以下のとおりです。  

1. 畳み込み演算：画像の特徴を捉えるためのフィルタ処理  
2. プーリング：画像の圧縮処理、多少の位置ずれやノイズはここで抑制される
3. 全結合：ニューラルネットワークによる識別

## 第4章 航法に関する認知・判断技術

### 全地球航法衛星システム（GNSS）

現在位置の特定にはGNSS（Global Navigation Satellite System）を使用します。  
最もよく知られているGNSSシステムは、アメリカのGPS（Global Positioning System）です。  

地球上空を回っている複数の衛星からの電波を受信し、三角法により位置を割り出します。  
数m以内の誤差で位置の特定ができます。  
ただしGPSには、山やビルによってGPSからの測位信号が遮られてしまうという問題があります。  

これを解決するために日本が開発したのがQZSS（Quasi-Zenith Satellite System）です。  
衛星が日本の真上を通っているため安定した測位が可能で、GPSの問題点を補完することができます。  

### 自律航法（デッドレコニング）

GNSSの電波が届かない場所では、単独で測位する必要があります。  
代表的な手法は下記の2つです。  

#### ■オドメトリ航法

オドメトリ航法とは、車輪の直径と回転数から移動距離を算出する手法です。  
レゾルバやロータリーエンコーダーを使用して計測します。  

#### ■慣性航法

慣性航法とは、加速度と角速度から移動距離を算出する手法です。  
加速度センサやジャイロセンサを使用して計測します。  

### 複合航法

上記のGNSSと自律航法を組み合わせて高精度な測位を実現する航法を複合航法と呼びます。  
以下のようにそれぞれメリットデメリットがあるので、補いながら高精度を実現します。  

| 航法           | メリット       | デメリット                                             |
| -------------- | ---------- | ------------------------------------------------ |
| 衛星航法       | 誤差の蓄積がない   | 電波が届かないと使えない<br>データの受信に時間がかかる     |
| オドメトリ航法 | 短期的な精度は高い | 長期的に誤差が蓄積する<br>タイヤが滑ったり乗り上げたりすると精度が下がる |
| 慣性航法       | 短期的な精度は高い | 長期的に誤差が蓄積する<br>オドメトリ航法より精度はやや低い  |

### マップマッチング

現在の位置情報を地図データに対応づけることをマップマッチングといいます。  
現在位置の座標データには誤差が含まれているため、正確な位置を推定する必要があります。  

#### ■地図のネットワークデータとのマッチング

地図データをノードとエッジで構成されたネットワークデータで表現し、現在位置がどのノード・エッジに該当するかを補正してマッピングします。  

#### ■確率的マッチング

測位情報と地図データの間の一致度を確率的に評価し、現在位置を推定します。  
推定を繰り返すことで一致度の確率がどんどん高くなり推定精度がよくなっていきます。  

### SLAM

SLAMとは、各種センサから取得した情報をもとに、自己位置推定と地図の更新を同時に行う技術です。  
自己位置推定は、地図の情報と自身の移動、回転情報を照らし合わせて位置を正確に確認します。  
また、LiDARやカメラなどを使用して目標物の補正を行います。  

LiDARを使わずにカメラのみで行うSLAMはビジュアルSLAMと呼ばれ、現在研究が行われています。  

### 高精度3次元地図とダイナミックマッピング

近年では、MMS（Mobile Mapping System：移動計測車両）やSLAM等の技術を利用し、誤差数cm以下の高精度3次元マップの作成が進んでいます。  
また、交通量情報など変化する情報をあわせもつダイナミックマップの整備も始まっています。  

### 最短経路検索

#### ■ダイクストラ法

ダイクストラ法とは、ノードとリンクで構成されたグラフ上の2点間の最短距離を求めるアルゴリズムです。  
出発点に近い順から最短距離を確定し、その情報を使用して更に離れたところまでの最短距離を順次確定していきます。  
電車の乗り換え検索やインターネットルーティングなどに利用されています。  

#### ■Q学習

Q値とは、行動価値を表しており、どちらの方向に進むのが一番価値があるのかを示しているため、Q値の高い方へ進むと最短で目的地に着くことができます。  
Q値は、機械学習によって求めることができ、行動と観測を繰り返すことで学習していきます。  
これにより、複雑なモデルや計算を行わずに最短経路を求めることができます。  

### GPGPU

GPU（Graphics Processing unit）とは、画像処理を行うためのCPUです。  
GPGPUとは、GPUによる汎用計算技術です。  
GPUは演算能力が優れており、AI分野で畳み込み処理などの深層学習に利用されています。  

## 第5章 ヒューマンマシンインターフェース技術

### 自動運転のヒューマンマシンインターフェース

レベル1,2では、ドライバーに伝える情報量が多く、画像加工などの効率的な情報伝達のための工夫がされています。  
レベル3以降では、システム主体の運転となるためドライバーに伝える情報は減りますが、特にレベル3ではシステムとドライバー双方が運転する場面があるため、コミュニケーションが重要となります。  
コミュニケーション不足に起因する事故なども発生しています。  

ドライバーからシステムへの情報伝達としては、視線検出や音声認識などが研究されています。  
また、システムがドライバーの状態を監視し、例えば居眠り等で運転の交代ができない状態に陥った場合は警告を出すなどの機能も必要です。  

### 説明可能な人工知能

機械学習による判断は、根拠が不透明なことが多いです。  
安心して自動運転を利用するには、判断の過程や根拠がわかることが重要です。  
システムの挙動に最も影響を与えている特徴量を人にわかる形で出力する必要があります。  

### 外向けのニューマンマシンインターフェース

自動運転システムの意思を他のドライバーや歩行者にも伝える必要がある。  
例えば、フロント部分に文字を表示したり、指向性のあるスピーカで音声を伝える方法が検討されています。  

## 第6章 自動運転技術のこれから

### 通信による自動運転

通信を利用することで、クラウド技術を利用した高度な機能が実現できます。  

* 遠隔操作、状況把握
* 音声認識によるエージェント機能
* 緊急時の迅速な対応
* ダイナミックマップのダウンロード

これらには大容量通信が必須であり、5G通信の適用による実現が期待されています。  

### カーセキュリティ

自動運転へのハッキング防止として、セキュリティ対策も重要になります。  
以下のようなリスクが考えられます。  

* 社内に侵入して攻撃：ECU等を物理的に交換したり、通信バスに侵入してソフトを書き換えたりするリスクがあります。  
* インターネット経由で攻撃：ネット経由でドアの開錠をしたり、偽のマップをダウンロードしたりされるリスクがあります。  
* センサへのハッキング：強い超音波、光などによりセンサの誤動作を誘発されるリスクがあります。 

### 安全規格

自動運転業界では、以下のような安全企画が制定されています。  

* ISO-26262：車載電子システム向けの国際安全規格  
* ISO-21448 SOTIF：システム故障以外の、意図された機能の安全性に関する国際規格  
* SaFAD：自動運転車開発の安全のためのガイドライン

### 自動運転の安全性評価

安全性の評価には、今まで蓄積してきた事故や交通流の観測データなどを使い評価を行っています。  
また、シミュレーションモデルを作成し、仮想環境上で評価を行う技術も研究開発されています。  


<br>
<br>

---