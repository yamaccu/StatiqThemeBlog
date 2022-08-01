title: Arduinoでタイマー処理を行う
tag: Arduino
Date: 2022/5/2
description: Arduinoでタイマーを使う方法をまとめました。
---

2022/5/2
# Arduinoでタイマー処理を行う方法

---

Arduinoで、一定時間ごとに処理を実施するタイマー処理の方法をまとめました。    
millis()を使う、MsTimer2を使う、の2通りを説明します。  


## 1. millis()を使う

millis()は、Arduino起動後からの時間を単位msで返してくれる関数です。  
タイマー開始時のmillis()を記憶しておいて、現在のmillis()から引き算すると、タイマー開始時からの経過時間がわかります。  

```C
unsigned long now;
unsigned long starttime1 = 0;
unsigned long starttime2 = 0;

now = millis();
if(now - starttime1 > 1000)
{
  doSometing();   //1秒おきに何か処理を実行
  starttime1 = now;
}

now = millis();
if(now - starttime2 > 5000)
{
  doSometing();   //5秒おきに何か処理を実行
  starttime2 = now;
}
```

## 2. MsTimer2を使う

MsTimer2は、arduinoに使われているマイコン「ATmega328p」に内蔵されているtimer2を簡単に使うためのライブラリです。  

<span class="link"></span> [github MsTimer2](https://github.com/PaulStoffregen/MsTimer2)

以下のようにすると、指定した時間ごとに割込みで処理を実行してくれます。  

```C
 MsTimer2::set(500, doSometing);  // 500ms周期でdoSometingを実行
 MsTimer2::start();}
```

MsTimer2では、タイマーを複数登録することができません。  
複数のタイマーを実行するには、MsTimer2をカウンターとして利用し、カウントによって処理を実行するようにする必要があります。  

```C
void setup() 
{
  MsTimer2::set(1, timerCount);
  MsTimer2::start();
}
 
void timerCount() 
{
  timerCount10ms++;
  timerCount100ms++;
 
  if (timerCount10ms >= 10) 
  {
    timerCount10ms = 0;
    timerCount10msFLG = true;
  }
 
  if (timerCount100ms >= 100) 
  {
    timerCount100ms = 0;
    timerCount100msFLG = true;
  }
}

void loop()
{
  if(timerCount10msFLG)
  {
    doSomething;
    timerCount10msFLG = false;
  }

  if(timerCount100msFLG)
  {
    doSomething;
    timerCount100msFLG = false;
  }
}
```

## millis()のオーバーフローについて

millis()の型はunsigned long（32bit 符号なし整数）なので、2^32msでオーバーフローし値が0にリセットされてしまいます。  
ただし、上記の例のように、現在時刻からタイマー開始時間を引き算する方式の場合、引き算時にもオーバーフローが発生し結果として経過時間が正しく測定できます。  
ですので、オーバーフローは気にする必要はありません。  

例えば、以下のようになります。  

```C
unsigned long a = 1000;
unsigned long b = 4294967296;
Serial.println(a-b);    //1000がシリアルモニタに表示される
```

参考 <span Class="link"></span>[millis()のオーバーフロー](https://garretlab.web.fc2.com/arduino/lab/millis/)


<br>

以上です。  

<br>

---