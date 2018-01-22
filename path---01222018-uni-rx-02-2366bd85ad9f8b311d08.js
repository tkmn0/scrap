webpackJsonp([40833295431180],{380:function(n,s){n.exports={data:{site:{meta:{title:"n0の断片",description:"メモとか、スニペットとか",url:"https://tkmn0.github.io/scrap/",author:"n0",twitter:"n0",adsense:""}},post:{id:"/Users/noguchitakuma/Desktop/n0WorkSapace/techblog/blog/src/pages/articles/01222018/Unirxを触ってみる（2）/index.md absPath of file >>> MarkdownRemark",html:'<p>今回から実際にコードを書いて動かしてみようと思います。</p>\n<!--more-->\n<h3>アセットストアからUniRxをインポート</h3>\n<hr>\n<p>アセットストアですぐに見つかります。\n\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-bottom: 1.0725rem;; max-width: 750px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 66.01123595505618%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACMElEQVQ4y62T60uTURjA3/+kCMRAUIyyLbtoq6TSkL5IajKwIssMdSoG4gcvs4uaokXqnO7ie93Wu2xsurl5Z+Inxa/+K7/2HiiMEoX68OM55znn/N7n4T1HikaCeE2FcHQR4+s3ItHvmIsxQtbYXETWDOYDMrJqEFR0vL4gqh7Gv6AQkDVmvD5mZueZ8y8wO+dHCoVC6LpONBrF5/Ph8XgI+P3oqopYUzUURRFrR5FlGU3TMAwD0zRRc/utvLS9vU02m8WKOzs77O/vs7e3x+rqqmBjY0OwtrZGMpUinU6TWFpmZWWFRCLB5uYmmUxG5OPxONLzlk6OoymHs7GVmppmnr3soOl1l+DD6CTJZFJUFYlESOU+tLW1xfr6OlJhyU1sZZUUXXZgL6+k1PEgN7/PpWt3Rd5eXkXJ9XucK7D94pHzBYnllKjsJ1YHVpSKbLfEYUtWcLHst4PH8fjJK9GqJTmKEBbb73Cj4iF5hVdOJTtRaFVotXmhtILCEse/C/Ov3ibfUc0ZW/X/qfBslYsil875Np28YvvphI3N4o/+Vdjb52Z0/BODQ8N0dvfQ0tZ1Iv3ud8RiMSGw7rD1KKwrFA6HkdwTOiPTJkMTGgNjMiNTEYanwrz/bND/McjguMzbSY2+0QD9Y0EGcnP3hEp8Kc3u7q4QHhwcCKyHIT3t1WnsUXC+CdDQNU99h5e6dg+1bdM5pqht/SJiXfs09S4PDZ1enN0+ljJZDg8P/+AHoMiSRAyxG2MAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="importingAsset" title="" src="/scrap/static/assetStore-e895a9bb6253b03106e3619445a9df36-245fd.png" srcset="/scrap/static/assetStore-e895a9bb6253b03106e3619445a9df36-7aee9.png 188w,\n/scrap/static/assetStore-e895a9bb6253b03106e3619445a9df36-2014b.png 375w,\n/scrap/static/assetStore-e895a9bb6253b03106e3619445a9df36-245fd.png 750w,\n/scrap/static/assetStore-e895a9bb6253b03106e3619445a9df36-a0f71.png 1125w,\n/scrap/static/assetStore-e895a9bb6253b03106e3619445a9df36-481dd.png 1424w" sizes="(max-width: 750px) 100vw, 750px">\n    </span>\n  </span>\n  \n<br>\n追加したら, <code>using</code>を忘れずに。\n\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-bottom: 1.0725rem;; max-width: 750px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 77.45098039215686%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAABXUlEQVQ4y62T6U7CUBCFeQ5/9O5L90ILkhqBYsL7v9Fx7igkRESq/jiZu0y/zpxOF0++xjiOOB6PmKYJh8OB18MwoChKOOdnaZFlGYQQUL6EqdbQfQszdNCrhtYdDO1tHpFlAhnlcbwjBiql0PYNiu0b7PQCf9rDUXTjmsFm1VIkcFUg5d8TA6WUsEUHv9rBbge00ytUcFDGcPVzdGnZhZyqfEbT9ZDaQRBQRA/hHWQMFC2Es5BJeaAzz3tlzdcKU8vK5eyjIJgKFSUbyCJCVjlHfgFJEkBR66ou+O4m8FyuVAImKpb26rJ2pSZLNBwpEw96mKKNJZbbPU6nHZq6RAjxx4/wLVDwSFxf3jp7CGit5YdTnAu4CTSf45E8tLmGrwxMUCxXmouXH3vNeXeB59Y0get2ib5f0m9kobWe3fZVy8J4HpnNpkFdRXjvIX8DTHMo/9PDBEo+/hWW9A5QEaOrtBRGcgAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="importingAsset" title="" src="/scrap/static/using-7b7b992671d50c61a61b471187103cf1-245fd.png" srcset="/scrap/static/using-7b7b992671d50c61a61b471187103cf1-7aee9.png 188w,\n/scrap/static/using-7b7b992671d50c61a61b471187103cf1-2014b.png 375w,\n/scrap/static/using-7b7b992671d50c61a61b471187103cf1-245fd.png 750w,\n/scrap/static/using-7b7b992671d50c61a61b471187103cf1-f687d.png 1020w" sizes="(max-width: 750px) 100vw, 750px">\n    </span>\n  </span>\n  </p>\n<h3>Subjectを使ってみる。</h3>\n<hr>\n<p>ストリームソースとなりうるものです。\n初期化はこんな感じで,</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code>Subject<span class="token operator">&lt;</span>T<span class="token operator">></span> hogehoge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>例えば    </p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code>Subject<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token operator">></span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token operator">&lt;</span>stirng<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>上記の例だと、string の値が流れてくるストリームソースの作成に成功です。\n</p>\n<p>ストリームに値が流れたときの処理は,\n<br>\n<code>Subscribe();</code><br>\nを使います。\nストリームに値を流すときは,\n<br>\n<code>onNext();</code>\n<br>\nで流せます。</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code><span class="token keyword">using</span> UnityEngine<span class="token punctuation">;</span>\n<span class="token keyword">using</span> UnityEngine<span class="token punctuation">.</span>Events<span class="token punctuation">;</span>\n<span class="token keyword">using</span> UniRx<span class="token punctuation">;</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstSceneController</span> <span class="token punctuation">:</span> MonoBehaviour\n<span class="token punctuation">{</span>\n    Subject<span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token operator">></span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// Use this for initialization</span>\n    <span class="token keyword">void</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        text\n            <span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        text<span class="token punctuation">.</span><span class="token function">OnNext</span><span class="token punctuation">(</span><span class="token string">"hello, Subject"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Start 関数内で、購読の処理(subscribe)とストリームに値を流す処理を書いています。<br>\nこの後、onNext は値を変えたり、呼ぶタイミングを変えたりしながら、Subject が破棄されるまで何回でも呼ぶことができます。</p>\n<h3>click eventをストリームにしてみる。</h3>\n<hr>\n<p>UniRx を使えば、uGUI のクリック処理を以下のように書くことができます。</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code><span class="token keyword">using</span> UnityEngine<span class="token punctuation">;</span>\n<span class="token keyword">using</span> UnityEngine<span class="token punctuation">.</span>UI<span class="token punctuation">;</span>\n<span class="token keyword">using</span> UniRx<span class="token punctuation">;</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstSceneController</span> <span class="token punctuation">:</span> MonoBehaviour\n<span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>SerializeField<span class="token punctuation">]</span> Button button01<span class="token punctuation">;</span>\n    <span class="token comment">// Use this for initialization</span>\n    <span class="token keyword">void</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        button01<span class="token punctuation">.</span><span class="token function">OnClickAsObservable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span>\n                _ <span class="token operator">=</span><span class="token operator">></span> Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"clicked"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>ストリームに値が入っていないときは<br>\n<code>_ =></code><br>\nとするのが通例のようです。\nこれだけで、シーン上にあるボタンがクリックされたときに、ログを出力できます。\n<br>\n例えば、ログだけじゃなく、数行にわたる処理を書きたいときは,    </p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code><span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span>_ <span class="token operator">=</span><span class="token operator">></span> Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"clicked"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>の部分を,    </p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code><span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span>_ <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>    \n    Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"log1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    \n    Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"log2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>としてあげれば複数行の処理を記述することができます。</p>',frontmatter:{layout:"post",title:"Unirxを触ってみる（2）",path:"/01222018/UniRx_02/",categories:["C#","Unity","UniRx"],date:"2018/01/22"}}},pathContext:{path:"/01222018/UniRx_02/"}}}});
//# sourceMappingURL=path---01222018-uni-rx-02-2366bd85ad9f8b311d08.js.map