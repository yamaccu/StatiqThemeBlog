Title: 「M5Stack」バッテリーの残りを調べる
Tag: M5Stack
Date: 2022/7/22
description: M5Stackのバッテリー残量を調べる方法をまとめました。
---

2022/07/22
# M5Stackのバッテリーの残量を調べる

---

&nbsp;<img src="../img/20210823-UIFLOW-CustomBlock-1.png" width="65px" alt="M5Stackイラスト">
← M5Stackはこんなやつ。  

M5Stackのボトムにはバッテリーが入っています。  
このバッテリーの残量をプログラム(arduino)で取得することができます。  

## バッテリー残量の取得

バッテリー残量を調べるにはM5UnifiedライブラリのM5.Powerクラスを使うと便利です。  
beginで初期化して、getBatteryLevelで残量を取得できます。  
残量は％表示で、「0, 24, 50, 70, 100」の5値で表されます。  

<spna class="link"></span>[github M5Unified](https://github.com/m5stack/M5Unified)

```C
#include <M5Unified.h>

M5.Power.begin();     // 初期化

uint8_t BatteryLevel = M5.Power.getBatteryLevel();     // 残量取得
```

## M5.Powerクラスについて

M5.Powerクラスには、バッテリー残量以外の機能もあります。  
チャージ状態の確認や、リセットやスリープモードなどの処理があるようです。  
（が、あんまり使わないような気もします。）  

詳細は以下が参考になります。  

<span class="link"></span>[github M5Unified Power_Class.hpp](https://github.com/m5stack/M5Unified/blob/16474c6f97f7f0eeead93128efcf0744b2e004d5/src/utility/Power_Class.hpp)  
<span class="link"></span>[M5Stack電源IC IP5306 用モニタ](https://bokunimo.net/blog/esp/1167/)  
  ※↑はM5UnifiedライブラリではなくM5Stackライブラリを使用している例ですが、とても参考になります。  

## 電源IC IP5306

M5Stackの電源管理は、IP5306というICが使われています。  
上記のM5.Powerクラスを使わずに、I2Cで直接電源ICのレジスタにアクセスすることもできます。  
詳細は以下がわかりやすいです。  

<span class="link"></span>[Zenn M5Stackの充電制御IC IP5306のネット上に分散していたレジスタ情報をまとめる](https://zenn.dev/tomorrow56/articles/43f64daa279510)


<br>
以上です。
<br>

---