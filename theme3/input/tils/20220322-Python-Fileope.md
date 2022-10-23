Title: pythonでファイルを日付によって操作する。
Tag: python
Date: 2022/3/22
description: pythonでフォルダ内のファイルを日付によって操作する方法をまとめました
---

2022/3/22

# pythonでファイルを日付によって操作する

---

pythonで、フォルダ内にあるファイルを日付によってコピーしたり削除したりする方法をまとめました。


## プログラムの基本形

pythonプログラムファイルと同じフォルダにあるファイルで、更新日が20日以上前のもののファイル名をコンソール上に表示するプログラムです。  
これを基本形として、"print(file)"の部分を、コピーにしたり削除にしたりすれば様々な処理が可能です。  

```python
import os
from datetime import datetime

files = os.listdir()
now = datetime.now()

for file in files: 
    mtime = datetime.fromtimestamp(os.path.getmtime(file))

    if((now - mtime).days > 20):
        print(file)
```

os.listdir() ： ディレクトリ内のファイル一覧を取得します  
datetime.now() ： 現在時刻を取得します  
os.path.getmtime() ： ファイルの最後に更新した時刻をUNIX時間で取得します  
datetime.fromtimestamp() ： UNIX時間を現在時間に変換します  

※UNIX時間とは、1970年1月1日午前0時0分0秒からの経過秒数です。  
　詳細は下記を参照ください。  
<span class="link"></span>[wikipedia UNIX時間](https://ja.wikipedia.org/wiki/UNIX%E6%99%82%E9%96%93)


## ファイル削除

更新日時が20日以上前のファイルを削除します。  
削除したファイルは復活できませんので（危険・・！）、上記の基本形で対象ファイルを確認してから実行すると良いです。  

```python
import os
from datetime import datetime

files = os.listdir()
now = datetime.now()

for file in files: 
    mtime = datetime.fromtimestamp(os.path.getmtime(file))

    if((now - mtime).days > 20):
        os.remove(file)
```

os.remove() ： ファイルを削除します。

## ファイルをゴミ箱に移動

更新日時が20日以上前のファイルをゴミ箱に移動します。  
send2trashをインストールする必要があります。  

```python
pip install send2trash
```

```python
import os
from datetime import datetime
from send2trash import send2trash

files = os.listdir()
now = datetime.now()

for file in files: 
    mtime = datetime.fromtimestamp(os.path.getmtime(file))

    if((now - mtime).days > 20):
        send2trash(file)
```

## ファイルコピー

更新日時が20日以上前のファイルをoldフォルダへ移動します。  
コピー先のフォルダが存在しないとエラーになります。  
import shutil が増えています。  

```python
import os
from datetime import datetime, date
import shutil

files = os.listdir()
now = datetime.now()

for file in files: 
    mtime = datetime.fromtimestamp(os.path.getmtime(file))

    if((now - mtime).days > 20):
        shutil.copyfile(file , "./old/" + file)
```

shutil.copyfile(src, dist) ： srcをdistへコピーします。  


<br>

以上です。

<br>
<br>

---