Title: pythonの仮想環境の作り方
Tag: python
RedirectFrom: posts/20210820-Python-pipenv
---

2021/08/20

# pythonでプログラミングする際の仮想環境の構築

---

Pythonでプログラミングを行う際には、作るプログラムごとに仮想環境を構築します。  
理由は、

- 仮想環境ごとに必要なパッケージのバージョンをインストールできます。 
- パッケージが複数のプログラムへ影響を与えるなどの、各プログラム間の干渉を回避できます。


仮想環境の作成にはいくつか方法がありますが、ここではpipenvを使用します。  

参考　<span class="link"></span> [pipenv公式](https://pipenv.pypa.io/en/latest/)

## 仮想環境の作成手順
### 1. pipenvをインストールします。

```C#
pip install pipenv
```

### 2. 作業ディレクトリを作成します。

### 3. 作業ディレクトリに移動して、必要なパッケージをpipenvコマンドでインストールします。  
（pipfileという設定ファイルが作成され、ここに仮想環境の情報が入ります。）

```C#
pipenv install xxxxxx
```

### 4. 仮想環境を実行します。

```C#
pipenv shell
```

### 5. 仮想環境を終了します。
```C#
exit
```

※仮想環境に入らずにコマンド実行もできます。
```C#
pipenv run xxxxxx
```

<br>

以上です。

<br>
<br>

---