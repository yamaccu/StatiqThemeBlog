Title: 「python」openpyxlでexcelファイルの読み込み / 書き込み操作をする
Tag: python
Date: 2023/9/24
description: openpyxlライブラリを使って、excelファイルのデータを読み込んだり、セルに値を書き込んだりします。
---

20232/9/24

# pythonでopenpyxlを使ってエクセルファイルを操作する

---

エクセルファイルで大量のデータを処理したいとき、pythonのopenpyxlを使用して自動化することができます。  
本記事では、openpyxlの使用例をまとめています。  

* openpyxlについて
* openpyxlのインストール
* エクセルファイルを開く
* データの読み込み
* データの書き込み
* 新規シート作成
* 保存

## openpyxlについて

openpyxlは、pythonでエクセルファイルを操作するためのオープンソースライブラリです。  
公式ドキュメントはこちらです。  

<a href="https://openpyxl.readthedocs.io/en/stable/" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://openpyxl.readthedocs.io/en/stable/_static/logo.png');"></div></div><div class="text-box"><p class="title">openpyxl</p><p class="description">A Python library to read/write Excel 2010 xlsx/xlsm files</p></div></div>
</a>

ソースコードはこちらです。  

<a href="https://foss.heptapod.net/openpyxl/openpyxl" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://foss.heptapod.net/uploads/-/system/appearance/header_logo/1/logo.svg');"></div></div><div class="text-box"><p class="title">openpyxl - GitLab</p><p class="description">openpyxl</p></div></div>
</a>

## openpyxlのインストール

以下のコマンドを実行します。  

```python
pip install openpyxl
```

pythonでライブラリをインストールする場合、仮想環境を準備することをお勧めします。  
以下で、pipenvを利用した仮想環境の構築方法を紹介しています。  

（参考）<span class="link"></span>[pipenvを使用した仮想環境の準備方法](https://yamaccu.github.io/tils/20210820-Python-pipenv)  


## エクセルファイルを開く

エクセルファイルを読み込んで、処理を行うシートを指定します。  

```python
# エクセルファイル読み込み
wb = openpyxl.load_workbook("ファイル名.xlsx")

# シートの指定方法は2つある
sheet = wb.worksheets[0]   ## indexで指定
sheet = workbook['Sheet1']   ## シート名で指定
```

## データの読み込み

シート指定後、以下で読み込みます。  

```python
# セルを指定
value = sheet[A1].value   ## セルを指定
value = sheet.cell(row=2, column=2).value   ## 行と列を指定

# 1行をリストとして取得
data_column = []
for row in sheet.iter_rows(min_row=1, max_row=sheet.max_row, min_col=1, max_col=1):
    for cell in row:
        data_column.append(cell.value)
```

## データの書き込み

シート指定後、以下で書き込みます。  

```python
# セルへの書き込み、3パターンあります
sheet["A1"].value = 1234
sheet.cell(row=1, column=1).value = 1234
sheet.cell(row=1, column=1, value=1234)
```

## 新規シート作成

新規シート作成は以下です。  
加工したデータを別シートに保存するときなどに使用できます。  

```python
# エクセルファイル読み込み
wb = openpyxl.load_workbook("ファイル名.xlsx")

# 新規シート作成
new_sheet =  wb.create_sheet("新規シート名")
```

## ファイル保存

以下で処理したシートの保存ができます。  
上書き保存は、既存のファイルと同じファイル名で保存することでできます。  

```python
# エクセルファイル読み込み
wb = openpyxl.load_workbook("ファイル名.xlsx")

　・
　・　（処理を実施）
　・

# 保存
wb.save("ファイル名.xlsx")
```

<br>

以上を使用して、データを読み出して加工し、書き込むことでデータ処理を自動化することができます。  

<br>
<br>

---