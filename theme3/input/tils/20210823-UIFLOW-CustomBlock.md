Title: 「M5Stack」UIFLOWのカスタムブロックを作る
Tag: M5Stack
---

2021/08/23
# M5Stack向けのVisual Programming「UIFLOW」でカスタムブロックを作成する

---

## M5Stackについて

&nbsp;<img src="../img/20210823-UIFLOW-CustomBlock-1.png" width="65px" alt="M5Stackイラスト">
← M5Stackはこんなやつ。  

M5Stackとは、ESP32を使用しwifi/LCD/各種センサなどを一体化させた、使いやすいマイコンボードです。  
LCDが標準装備なのが一番の特徴かと思います。  
センシングした値を表示させたり、顔をつけてみたりと、いろいろ遊べます。

参考　<span class="link"></span>[公式HP](https://m5stack.com/)  

## UIFLOWについて

UIFLOWとは、M5Stackのプログラミング環境の一つで、スクラッチのようにビジュアルプログラミングでM5Stackのコードが書ける優れものです。  
更にwebベースでプログラミングできるので、プログラム環境の準備がいりません。  
使い方、プログラミングの仕方などは下記のHPを参照ください。

参考1 <span class="link"></span> [公式HP](https://m5stack.github.io/UIFlow_doc/ja/)  
参考2 <span class="link"></span> [プログラミングページ](https://flow.m5stack.com/)

<br>

UIFLOWでは、事前に用意されたブロックを組み合わせてプログラミングしますので、ブロックに用意されていない機能は、自分でカスタムブロックを作る必要があります。  
以降、UIFLOWでカスタムブロックを作成する方法を記載しています。

## カスタムブロックのサンプル

<span class="link"></span> [github](https://github.com/yamaccu/UIFLOW-wavplayer)にWAVファイルを再生するためのカスタムブロックをあげています。

## カスタムブロックの作成手順

<span class="link"></span> [こちらのカスタムブロック作成ページ](http://block-maker.m5stack.com/)から作成します。

作成手順は

1. Pythonでプログラムを書く
2. 初期設定用のブロックを作る
3. 関数を実行するブロックを作る

### 1. Pythonでプログラムを書く
まずはブロック化したい機能のプログラムをpythonで書きます。  
以下のように処理はdefで定義して、関数として呼び出しできるようにしておきます。

```python
from machine import I2S
from wav import wave

def playwav(filePath,volume):
    wav = wave.open(filePath)
    i2s = I2S(mode=I2S.MODE_MASTER | I2S.MODE_TX | I2S.MODE_DAC_BUILT_IN)
    i2s.set_dac_mode(i2s.DAC_RIGHT_EN)
    i2s.sample_rate(wav.getframerate())
    i2s.bits(wav.getsampwidth() * 8)
    i2s.nchannels(wav.getnchannels())
    i2s.volume(volume)
    while True:
        data = wav.readframes(256)
        if len(data) > 0:
            i2s.write(data)
        else:
            wav.close()
            i2s.deinit()
            break
```

### 2. 初期設定用のブロックを作る
import、defを行うブロックを作成します。  
このブロックは最初のsetupで実行するものです。  
1章で作ったようなプログラムをBlock Code欄へ丸コピします。  

<div style="display:flex;flex-wrap:wrap">
<div>
<img src="../img/20210823-UIFLOW-CustomBlock-2.png" Style="width:100%;max-width:420px;margin-right:5px;" alt="UIFlowBlockMaker 初期設定ブロック作成">  
<br>
<br>
</div>
<div Style="max-width:450px;">

1. NameSpace：Blockmaker上だけの識別名なので何でもOK
2. BlockColor：ブロックの色を設定
3. Add Block/Remove Block：ブロックの追加・削除
4. Type：Executeにする
5. Parameter：まずブロック名をtype:Labelで設定する  
   変数があれば、type:String/Number/Variableで設定する
6. BlockCode：作ったプログラムをコピペ

</div>
</div>

### 3. 関数を実行するブロックを作る
defで定義した関数を実行するブロックを作ります。  
Add Blockをクリックするとブロックが増えますので、設定していきます。  
引数がある場合は、parameterで設定します。

<div style="display:flex;flex-wrap:wrap">
<div>
<img src="../img/20210823-UIFLOW-CustomBlock-3.png" Style="width:100%;max-width:420px;margin-right:5px;" alt="UIFlowBlockMaker 関数実行ブロック作成">  
<br>
<br>
</div>
<div Style="max-width:450px;">

1. NameSpace：Blockmaker上だけの識別名なので何でもOK
2. BlockColor：ブロックの色を設定
3. Add Block/Remove Block：ブロックの追加・削除
4. Type：Executeにする
5. Parameter：まずブロック名をtype:Labelで設定する  
   変数があれば、type:String/Number/Variableで設定する
6. BlockCode：自作関数の呼び出しを行う  
   引数は上記のParameterで設定して、  
   BlockCode内で"\$(hoge)"の形で記述する  

```C#
ex)playwav(${playwav},${volume})
```
</div>
</div>

### 完成したら

ページ右下のDownloadボタンをおして、DownloadファイルをUIFLOWの<span class="link"></span>[プログラミングページ](https://flow.m5stack.com/)のCustomから開きます。  
そうすると、UIFLOWで自作のカスタムブロックが使用できるようになります。

<img src="../img/20210823-UIFLOW-CustomBlock-4.png" Style="width:100%;max-width:150px" alt="UIFlowBlockMakerで作成したカスタムブロックファイルのダウンロード">
<br>
<br>
<img src="../img/20210823-UIFLOW-CustomBlock-5.png" Style="width:100%;max-width:450px" alt="UIFlow カスタムブロックの読み込み箇所">  

<br>
<br>

---