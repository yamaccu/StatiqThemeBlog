title: RaspberryPiで毎日決まった時間に写真を撮る
tag: RaspberryPi
Date: 2022/3/29
description: RaspberryPiにカメラを接続して、毎日決まった時間に写真を撮って保存します。
---

2022/3/29
# RaspberryPi＋カメラで毎日決まった時間に定期的に写真を撮る

---

ラズパイのcronという機能と、カメラを制御するpythonのプログラムを組み合わせることで、毎日決まった時間に写真を撮って保存することができます。  
何かを観測するときに便利です。  

以下、手順になります。  

## 1. カメラの画像を保存するプログラムを作る

ラズパイ画面の左上メニューの「プログラミング ⇒ Thonny Python IDE」をクリックして起動し、下記のようなプログラムを作成します。  
カメラの画像を保存するプログラムです。  

```Python
from picamera import PiCamera
import datetime

camera = PiCamera()
nowdate = datetime.datetime.now()

camera.start_preview()
filename = '/home/pi/Desktop/pictures/'+nowdate.strftime('%m%d_%H%M%S')+'.jpg'
camera.capture(filename)
camera.stop_preview()
```

以下のサイトが参考になります。  
<span class="link"></span>[カメラモジュールを始めよう](https://projects.raspberrypi.org/ja-JP/projects/getting-started-with-picamera/4)


## 2. cronを設定して定期的にプログラムを実行する

ラズパイのターミナルで下記のコマンドを実行し、ラズパイのcronを設定します。  

cronとは、Linux系のOSの機能で、時間を指定して繰り返し処理を実行する仕組みです。  
例えば、毎日9時に指定したコマンドを実行する、といった処理が可能です。  
詳細は下記を参照ください。  

<span Class="link"></span> [Qiita cronの設定方法](https://qiita.com/hikouki/items/e744b3a4d356d2af12cf)

```C#
crontab -l

編集画面が開いたら以下を記述
*/5 * * * * /usr/bin/python3  /home/pi/camera.py
```

上記は、5分おきに「/home/pi/camera.py」をpythonで実行する設定です。  
時間や実行コマンドを、自分の使う環境に合わせて変更して使用します。  

撮った写真は、Windows PCに取り出したい場合は、ラズパイにSambaというソフトを入れておくと簡単に取り出すことができます。  
下記に手順をまとめていますのでよろしければ参照ください。  

<span class="link"></span>[RaspberryPi - Windows間でファイル共有](http://localhost:5080/tils/20211018-Raspberry-Samba)

<br>

以上です。  

<br>

---