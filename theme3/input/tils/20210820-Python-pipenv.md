Title: 「python」仮想環境の作り方
Tag: python
---

2021/08/20　更新 2023/9/24

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

```shell
pipenv install xxxxxx
```

PCにインストールされているpythonのバージョンが最新でない場合、以下のエラーが出ることがあります。  
その場合は、最初にpythonのバージョンを指定して環境構築するか、pythonを最新にバージョンアップしてください。  

```C#
# エラーログ
Warning: Python 3.11 was not found on your system...
Neither 'pyenv' nor 'asdf' could be found to install Python.

# 以下でpythonのバージョンを指定してあげる
pipenv install python 3.9.5
```

インストールするパッケージが多い場合は、txtファイルでリストを作って、一気に読み込むこともできます。  
requirementsというファイルを作り、中身を例えば以下のように作成します。  

```php
packageA==9.0.0
packageB==1.5.0
packageC==2.7.0
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

### 6. 仮想環境の削除

仮想環境を構築したフォルダで以下のコマンドを実行すると削除できます。  

```C#
pipenv --rm
```

<br>

以上です。

<br>
<br>

---