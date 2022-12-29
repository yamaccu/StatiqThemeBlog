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

<a href="https://pipenv.pypa.io/en/latest/" style="text-decoration: none;">
  <div class="link-box">
    <div class="img-box">
      <div style="background-image: url('https://pipenv.pypa.io/en/latest/_static/pipenv.png');">
      </div>
    </div>
    <div class="text-box">
      <p class="title">Pipenv: Python Dev Workflow for Humans</p>
      <p class="description">Pipenv is a tool that aims to bring the best of all packaging worlds (bundler, composer, npm, cargo, yarn, etc.) to the Python world.</p>
    </div>
  </div>
</a>


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

インストールするパッケージが多い場合は、txtファイルでリストを作って、一気に読み込むこともできます。  
requirementsというファイルを作り、中身を例えば以下のように作成します。  

```C#
xxxx==9.0.0
xxxx==1.5.0
xxxx==2.7.0
```

そして、下記のコマンドで一括インストールします。

```C#
pipenv install -r requirements.txt
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