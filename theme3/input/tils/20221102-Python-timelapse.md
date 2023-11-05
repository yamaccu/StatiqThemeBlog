Title: 「python」OpenCVでタイムラプスを作成する
Tag: python
Date: 2022/11/2
description: OpenCVライブラリを使って、複数枚の画像をタイムラプスに変換します。
---

2022/11/02

# pythonでOpenCVを使ってタイムラプスを作成する

---

pythonには、OpenCVという強力な画像処理ライブラリがあります。  
本記事では、これを使って画像からタイムラプスを作成する方法をまとめています。

## OpenCVについて

OpenCV（Open Source Computer Vision Library）は4万7千人以上のユーザーコミュニティを持ち、ダウンロード数は1800万を超える超有名オープンソースライブラリです。  
画像や動画の処理や物体検出などが可能です。  

公式HPは下記です。  

<a href="https://opencv.org/" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://opencv.org/wp-content/uploads/2020/11/OpenCV_logo_black_.jpg');"></div></div><div class="text-box"><p class="title">Home - OpenCV</p><p class="description">OpenCV provides a real-time optimized Computer Vision library, tools, and hardware. It also supports model execution for Machine Learning (ML) and Artificial Intelligence (AI).</p></div></div>
</a>

ドキュメントは下記です。  

<a href="https://docs.opencv.org/4.x/" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://docs.opencv.org/4.x/opencv-logo-small.png');"></div></div><div class="text-box"><p class="title">OpenCV: OpenCV modules</p><p class="description">OpenCV modules</p></div></div>
</a>

## OpenCVのインストール

以下のコマンドを実行します。  

```python
pip install opencv-python
```

pythonでライブラリをインストールする場合、仮想環境を準備することをお勧めします。  

（参考）<span class="link"></span>[pipenvを使用した仮想環境の準備方法](https://yamaccu.github.io/tils/20210820-Python-pipenv)  

## タイムラプス作成

OpenCVライブラリを利用することで、複数画像を結合してタイムラプスを作成することができます。  
下記は、このプログラムが保存されている場所に、タイムラプスをmp4形式で出力するプログラムです。  

```python
import cv2
import glob
import tkinter
from tkinter import filedialog

tk = tkinter
tk.Tk().withdraw()

path = tk.filedialog.askdirectory()

images = glob.glob(path + '/*.png')
images.sort()

frame_rate = 10
width = 1920
height = 1080

fourcc = cv2.VideoWriter_fourcc('m','p','4','v')
video = cv2.VideoWriter('timelapse.mp4', fourcc, frame_rate, (width, height))
print("build movie...")

for i in range(len(images)):
    img = cv2.imread(images[i])
    img = cv2.resize(img,(width,height))
    video.write(img)

video.release()
```

tkinter

* フォルダ選択ダイアログを開くのに使用しているライブラリです。  
  画像ファイルが保存してあるフォルダを選択することでパスを取り込みます。    
  詳しくは下記でまとめています。   

  <span class="link"></span>[「python」CUIでポップアップ、ファイルダイアログを出す](https://yamaccu.github.io/tils/20221010-Python-popup)  

glob.glob(path)

* 指定した条件に該当するファイルをリスト形式で返します。  
  任意の文字の箇所には"*"を使います。  
  上記のプログラムでは、pathで指定したフォルダ内のpngファイルを取り込んでいます。  

VideoWriter_fourcc(c1, c2, c3, c4)

* タイムラプスを作る際の動画の種類を指定します。  
  mp4は'm','p','4','v'になります。  

VideoWriter(filename, fourcc, framerate, framesize)

* VideoWriter機能を初期化します。
* filename：出力するタイムラプスのファイル名を指定します。  
* fourcc：タイムラプスを作る際の動画の種類を指定します。  
* framerate：タイムラプスのフレームレートを指定します。  
  フレームレートとは、一秒間に表示する画像の数です。  
* framesize：タイムラプスの動画の縦と横のサイズです。  
  タプルで入力します。(width, height)

imread(filepath)

* 画像を読み込みます。  
* filepath：読み込む画像のパスを指定します。  

resize(image, size)

* 画像のサイズを変更します。  
* image：imreadで読み込んだ画像データを指定します。  
* size：画像の縦と横のサイズを指定します。  
  タプルで入力します。(width, height)

VideoWriter.write(image)

* 画像をVideoWriter機能に取り込みます。
* image：imreadで読み込んだ画像データを指定します。  

VideoWriter.release

* 動画をリリースします。

<br>

以上で、画像からタイムラプス動画が作成できます。  

<br>
<br>

---