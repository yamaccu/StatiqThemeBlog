title: node.jsでGitHub GraphQL APIを使う
tag: github
Date: 2022/12/29
description: Githubの各種データをGraphQL APIで取得する方法をまとめました
---

2022/12/29
# GitHub GraphQL APIを使って各種データを取得する

---

GitHubにはREST APIとGraphQL APIの2つのAPIが準備されています。  
APIがあるとブラウザ操作なしで、プログラミングでAPIを利用してデータを取ってこれるという利点があります。  

本記事では、GraphQL APIの方の使い方についてまとめています。  

* GraphQL APIとは
* GitHub GraphQL API エクスプローラ
* クエリの例
* クエリに変数を使う
* 100以上のデータを扱う
* JavaScript(node.js)でAPIを実行してデータを取得

## GraphQL APIとは

GraphQLとは、2012年にMeta（旧 Facebook）社が作成したクエリ言語です。  
クエリ＝問い合わせという意味で、決められたエンドポイントにGraphQLクエリを送信すると、必要なデータを入手したり、何か操作を要求したりすることができます。  
特徴として、一般的なREST APIでは複数のURLからデータを読み込む必要がありますが、GraphQL APIでは1回のリクエストで必要データをすべて取得することができます。  

以下は公式サイトです。  
<a href="https://graphql.org/" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://graphql.org/img/og-image.png');"></div></div><div class="text-box"><p class="title">GraphQL | A query language for your API</p><p class="description">A query language for your API — GraphQL provides a complete description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.</p></div></div>
</a>

QraphQLの「Qraph」は、グラフ理論から来ています。  
グラフ理論については下記のサイトがわかりやすかったので、ご興味があれば参照ください。  

<a href="https://www.ajimatics.com/entry/2018/01/30/133238" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://cdn-ak.f.st-hatena.com/images/fotolife/m/motcho/20180127/20180127034230.png');"></div></div><div class="text-box"><p class="title">日本の中心はどの県だ？グラフ理論（ネットワーク）の基本的な諸概念</p><p class="description">Ｑ：これは何の構造を表しているでしょう？ グラフ理論 上の構造のように、頂点（ノードともいいます）の集まりと、２つの頂点をつなぐ辺（エッジともいいます）の集まりでできたもののことを「グラフ」あるいは「ネットワーク」と呼び*1、このような構造を研究する分野こそが「グラフ理論（Graph theory）」です。 …</p></div></div>
</a>

## GitHub GraphQL API エクスプローラ

以下はGitHubのGraphQLを実行できるエクスプローラのサイトです。  
試しにクエリを実行してみることができます。  

<a href="https://docs.github.com/ja/graphql/overview/explorer" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://github.githubassets.com/images/modules/open_graph/github-logo.png');"></div></div><div class="text-box"><p class="title">エクスプローラー - GitHub Docs</p><p class="description">GitHub の使用開始、トラブルシューティング、最大限に活用する方法について説明します。新規ユーザー、開発者、管理者、すべての GitHub の製品に関するドキュメント。</p></div></div>
</a>

## クエリの例

下記のクエリは、特定のユーザーの、Forkを除いたレポジトリ数と各レポジトリのデータを取得するものです。  
上記のエクスプローラでこれを実行すると、レスポンスデータを見ることができます。  

```c#
query{
  user(login:"yamaccu") {
    repositories(first:100 ,isFork:false){
      totalCount
      nodes{
        name
        languages(first:10) {
          edges {
            size
            node {
              name
            }
          }
        }
      }
    }
  }
}
```

* query：  
 GraphQLへのアクセスは、「query」と「mutation」の2つがあります。  
 queryがデータの取得で、mutationがデータの追加・更新・削除を行います。   
 上記の例では、データを取得しているのでqueryを使用しています。  

* user：  
 引数で指定したユーザー名のデータを取得します。   
 取得可能なデータは以下のドキュメントの「フィールド」以下を参照ください。  
 上記で使っている「repositories」の項目が見つかると思います。  

 <a href="https://docs.github.com/ja/graphql/reference/objects#user" style="text-decoration: none;">
 <div class="link-box"><div class="img-box"><div style="background-image: url('https://github.githubassets.com/images/modules/open_graph/github-logo.png');"></div></div><div class="text-box"><p class="title">オブジェクト - GitHub Docs</p><p class="description">GitHub の使用開始、トラブルシューティング、最大限に活用する方法について説明します。新規ユーザー、開発者、管理者、すべての GitHub の製品に関するドキュメント。</p></div></div>
 </a>

このドキュメントに従って、取得したいデータに向かってノードやエッジを繋げていくイメージになります。  


## クエリに変数を使う

クエリの中に変数を使用することもできます。  
以下の例では、ユーザー名のところを「username」という変数にしています。  

```C#
query($username:String!){
  user(login:$username) {
    repositories(first:100 ,isFork:false){
      totalCount
      nodes{
        name
        languages(first:10) {
          edges {
            size
            node {
              name
            }
          }
        }
      }
    }
  }
}
variables{
   "username": "yamaccu"
}
```

* query($username:String!)： 変数を使うには、queryの引数で変数を指定します。  

* variables{}： variablesという項目を追加し、ここで変数を定義します。 
  
<a href="https://docs.github.com/ja/graphql/guides/forming-calls-with-graphql#about-query-and-mutation-operations" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://github.githubassets.com/images/modules/open_graph/github-logo.png');"></div></div><div class="text-box"><p class="title">変数の使用 - GitHub Docs</p><p class="description">変数を使用すると、クエリをより動的かつ強力にすることができ、ミューテーションの入力オブジェクトを渡すときの複雑さを軽減できます。</p></div></div>
</a> 

## 100以上のデータを扱う

上記のRepositoriesの取得データ数はMAX100となっていますので、それ以上のデータ数を取得する場合はページネーション処理が必要になります。  
Repositories配下の「hasNextPage」と「endCursor」を使用します。  

```javascript
repositories {
  pageInfo {
    hasNextPage
    endCursor
  }
}
```

* hasNextPage： 未取得のデータが残っている場合にTrueとなります。
* endCursor： 取得したデータの最終カーソル（位置）を表示します、データが残っているときはこのカーソルを始点に指定して続きを取得します。  

<br>

repositoriesの引数の「after」でカーソルを指定できるので、pageInfo->endCursorで取得した値を次のように設定してもう一度Queryを実行すると、続きのデータを取得することができます。  


```javascript
repositories(first: 100, after: "endCursorの値") {
  ・・・
}
```


## JavaScript(node.js)でAPIを実行してデータを取得

以上の内容を踏まえて、JavaScript (node.js) でGithubのレポジトリデータを取得してみます。  

```javascript
import axios from "axios";

let hasNextPage = true;
let endCursor;
let resData = [];
const token = "xxxxxxxx";
const username = "xxxxxx";
const headers =
{
  Authorization: `token ${token}`,
};
const variables = 
{
  login: username
};

let i = 0;
while (hasNextPage) {
  let data =
  {
    query: `
      query userInfo($login: String!) {
        user(login: $login) {
          repositories(ownerAffiliations: OWNER, isFork: false, first: 100, ${endCursor ? `after: "${endCursor}"` : ''}) {
            pageInfo{
              hasNextPage
              endCursor
            }
            nodes {
              name
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }
      `,
    variables,
  };

  let res = await axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });

  hasNextPage = res.data.data.user.repositories.pageInfo.hasNextPage;
  endCursor = res.data.data.user.repositories.pageInfo.endCursor;

  resData[i] = res.data;
  i++;
}
```

* const token：  
  実際にAPIにアクセスするためには、Githubの personal access token を取得する必要があります。  
  tokenは悪用されると危ないので、直接ソースで代入せずに環境変数を使用して間接的に代入することが多いです。  
  
<a href="https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://github.githubassets.com/images/modules/open_graph/github-logo.png');"></div></div><div class="text-box"><p class="title">個人用アクセス トークンの作成 - GitHub Docs</p><p class="description">コマンド ラインまたは API を使うと、パスワードの代わりに使用するpersonal access tokenを作成できます。</p></div></div>
</a>

* axios：  
  HTTPリクエストを作成するためのライブラリで、これを使うとAPIを簡単に利用することができます。  
  　url・・アクセス先  
  　method・・HTTPリクエストの方式  
  　header・・リクエストに乗せるヘッダ部  
  　data・・postで送るデータ部  

<a href="https://axios-http.com/docs/api_intro" style="text-decoration: none;">
<div class="link-box"><div class="img-box"><div style="background-image: url('https://axios-http.com/assets/logo.svg');"></div></div><div class="text-box"><p class="title">Axios API</p><p class="description">The Axios API Reference</p></div></div>
</a>

<br>

以上です。

<br>
<br>

---