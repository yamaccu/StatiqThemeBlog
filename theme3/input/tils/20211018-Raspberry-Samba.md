title: RaspberryPiとWindowsでファイル共有(samba)
tag: RaspberryPi
Date: 2021/10/17
description: RaspberryPiに"samba"を入れて、Windows PCとファイル共有します。
---

2021/10/17
# RaspberryPi - Windows間でファイル共有

---

Sambaというフリーソフトをラズパイにインストールすると、ラズパイとWindows間でファイル共有ができます。  
Windowsからラズパイへ、外付けHDなどと同じようにエクスプローラでアクセスできるので、とてもお手軽です。  
sshやscpでのやり取りは不要になります。

参考　<span class="link"></span>[日本SAMBAユーザーの会](http://wiki.samba.gr.jp/mediawiki/index.php/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8)

<br>

以下、導入手順になります。

## 1. ラズパイにSambaをインストールします。

下記コマンドをターミナルで実行します。
```C#
sudo apt-get update
sudo apt-get install samba
```

インストール中にWINS設定うんぬん聞かれたら「いいえ」とします。


## 2. 設定ファイルを編集します。

下記のコマンドで、設定ファイルを編集します。
```C#
sudo nano /etc/samba/smb.conf
```

編集画面が開いたら、最下部に下記を追加します。  

```C#
[pi]  
path = /home/pi  
guest ok = no  
read only = no  
force user = pi  
```

下記コマンドで、設定ファイルを適用します。

```C#
sudo service smbd restart
```


## 3. Windows側からアクセスできるか確認

Windowsのエクスプローラで "&yen;&yen;<ラズパイのIPアドレス>&yen;pi" にアクセスできるか確認します。  
読み込み、書き込みができれば終了です。



<br>

以上です。

<br>
<br>

---