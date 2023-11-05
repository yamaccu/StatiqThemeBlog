title: 「CSS」stickyで広告をスクロールに追従させる
Date: 2023/5/2
tag: HTML/CSS/JS
description: サイドに表示するタイプの広告を、スクロールに追従させます。
---

2023/5/2
# position:sticky を使って広告をスクロールに追従させる
---

サイドに表示するタイプの広告を、スクロールに追従させる方法です。  
javascrpitでも可能ですが、CSSのみで簡単に実現可能です。

「position:sticky」を使用します。

ちなみに、本ブログでも採用していて、例えば以下のページで使っています。  
※スマホだと幅が足りなくて表示されません。  

<a href="https://yamaccu.github.io/tech/20220430_diy-nichirinto" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('/img/20220430_diy-nichirinto-index.png');"></div></div><div class="text-box"><p class="title">M5StickCを使ってダイソーの忍者刀を日輪刀に改造</p><p class="description">ダイソーに売っている忍者等を改造して日輪刀にします。</p></div></div>
</a>

## 実装方法

使い方は簡単で、追従させたい要素に以下を追加します。  

```javascript
position: sticky;
top: 0;
```

Code Penにコードを登録してみました。  
flex gridでメインパートとサイドパートに分けて、サイドにある広告をstickyとしています。  

<p class="codepen" data-height="350" data-default-tab="html,result" data-slug-hash="xxyXLXX" data-user="yamaccu" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/yamaccu/pen/xxyXLXX">
  Untitled</a> by yamaccu (<a href="https://codepen.io/yamaccu">@yamaccu</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


■注意事項

* "top"の指定を忘れると反映されません。
* stickyを指定した要素の親要素内でしか機能しないので、親要素ごとスクロールしてしまうと追従できません。

<br>

以上です。

<br>
<br>

---
