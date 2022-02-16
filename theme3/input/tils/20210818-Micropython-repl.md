title: micropythonにreplでアクセス
Tag: micropython
RedirectFrom: posts/20210818-Micropython-repl
---

2021/8/18

# micropythonにreplでアクセスする

---

replとは、repl：「Read（読み取り）、Eval（評価）、Print（印字）、Loop（ループ）」の頭字語です。  
micropython上でコマンドを実行できる仕組みで、コマンドプロンプトのようなイメージです。  
コードをテストするときに、コマンドを一つずつ実行できるので便利です。

参考　<span class="link"></span>[micropython公式](https://micropython-docs-ja.readthedocs.io/ja/latest/esp8266/tutorial/repl.html)

## アクセス方法
デバイスのシリアルポートに、シリアル通信アプリ（teratermなど）で接続します。  
通信速度は115200bpsです。  
CTR+Cを二回で、mainで実行している処理を中止してreplで操作可能になります。

## コマンド

| コマンド                | 内容 |
| ----------------------- | ---- |
| help()                  | ヘルプを表示 |
| help('modules')         | 使用可能なライブラリを表示 |
| help(obj)               | 調べたいobjectの説明を表示 |
| dir()                   | import済みのファイル情報の表示 |
| sys.path.append('パス') | import時に探索されるパスを追加 |
| os.listdir()            |カレントディレクトリのファイルを表示 |
| tabキー                 | 入力候補の表示 |

<br>
<br>

---