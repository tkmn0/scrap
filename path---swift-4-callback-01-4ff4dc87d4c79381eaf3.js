webpackJsonp([0xbe6df6bad8a5],{385:function(n,s){n.exports={data:{site:{meta:{title:"n0の断片",description:"メモとか、スニペットとか",url:"https://tkmn0.github.io/scrap",author:"n0",twitter:"n0",adsense:""}},post:{id:"/Users/noguchitakuma/Desktop/n0WorkSapace/techblog/blog/src/pages/articles/Swift4CallBack(1)/index.md absPath of file >>> MarkdownRemark",html:'<p>Swift4 でコールバック処理を調べてみる。<br>\nSwift におけるコールバックのやり方は主に以下の 3 通りかと思われる。</p>\n<ul>\n<li>クロージャによるコールバック</li>\n<li>Delegate を使ったコールバック</li>\n<li>NotificationCenter を使ったコールバック</li>\n</ul>\n<p>今回は<code>クロージャ</code>によるコールバックについて。</p>\n<!--more-->\n<h3>クロージャとは</h3>\n<hr>\n<p><code>無名関数</code>や<code>ラムダ式</code>とも呼ばれる。<br>\nクロージャの基本形    </p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code><span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>parameters<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token keyword">return</span> type<span class="token punctuation">]</span> <span class="token keyword">in</span>\n    <span class="token punctuation">[</span>statements<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>これが基本形です。<br>\n</p>\n<h3>関数の引数に関数を渡す</h3>\n<hr>\n<p>色々なサイトで、上記の説明のまま、クロージャの説明を始めるのですが、私にはわかりにくかったので、私なりの説明をさせていただきます。<br>\nまず、コールバックの主要なやり方としては、関数の引数に関数を渡す方法がありますね。<br>\nちょっとずつ進めます。</p>\n<h5>1. ただの関数</h5>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">sayhello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">sayhello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//"hello"</span>\n</code></pre>\n      </div>\n<h4>2. 引数あり関数</h4>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"hello"</span>\n<span class="token keyword">func</span> <span class="token function">sayhello</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token builtin">String</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">sayhello</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> str<span class="token punctuation">)</span> <span class="token comment">// "hello"</span>\n</code></pre>\n      </div>\n<h4>3. 戻り値あり関数</h4>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"hello"</span>\n<span class="token keyword">func</span> <span class="token function">sayhello</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token builtin">String</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token builtin">String</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">"say "</span> <span class="token operator">+</span> str\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> sayhelloString <span class="token operator">=</span> <span class="token function">sayhello</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> str<span class="token punctuation">)</span>\n<span class="token function">print</span><span class="token punctuation">(</span>sayhelloString<span class="token punctuation">)</span><span class="token comment">// "say hello"</span>\n</code></pre>\n      </div>\n<p>ここまでは基礎的な関数の処理ですね。</p>\n<h4>4. 関数の引数が関数</h4>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>callback<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"say"</span><span class="token punctuation">)</span>\n    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"done"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">func</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">sayHello</span><span class="token punctuation">(</span>callback<span class="token punctuation">:</span> callback<span class="token punctuation">)</span>\n<span class="token comment">//"say"</span>\n<span class="token comment">//"hello"</span>\n<span class="token comment">//"done"</span>\n</code></pre>\n      </div>\n<p><code>失敗例</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>callback<span class="token punctuation">:</span> <span class="token builtin">Void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"say"</span><span class="token punctuation">)</span>\n    callback\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"done"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">func</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">sayHello</span><span class="token punctuation">(</span>callback<span class="token punctuation">:</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">//"hello"</span>\n<span class="token comment">//"say"</span>\n<span class="token comment">//"done"</span>\n</code></pre>\n      </div>\n<p>上記失敗例は、引数に callback 関数を渡した時点で、callback<code>()</code>により、callback 関数を読んでしまっている。成功例では、callback 関数が sayHello 関数内で呼ばれている。\nprint の結果の順番を比べていただきたい。</p>\n<h5>5. 無名関数(クロージャ)を引数にする。</h5>\n<p>No.4 では、わざわざ callback 関数を宣言してから引数に渡している。<br>\nこの時、引数に渡す時に関数を宣言できたら…?    </p>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>callback<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"say"</span><span class="token punctuation">)</span>\n    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"done"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">sayHello</span><span class="token punctuation">(</span>callback<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"hey closure"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">//"say"</span>\n<span class="token comment">//"hey closure"</span>\n<span class="token comment">//"done"</span>\n</code></pre>\n      </div>\n<p>。。。どうでしょうか?\nクロージャなんとなくわかったんじゃないでしょうか?\n<br>\n要は<br>\n<code>関数1(sayHello関数)の引数に関数2を渡す時に、関数2を宣言する</code><br>\n書き方のことです。(乱暴)</p>\n<h5>5.1 クロージャに引数があるパターン</h5>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>callback<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">String</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"say"</span><span class="token punctuation">)</span>\n    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">"引数"</span><span class="token punctuation">)</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"done"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nsayHello <span class="token punctuation">{</span> <span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token keyword">in</span>\n    <span class="token function">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//"say"</span>\n<span class="token comment">//"引数"</span>\n<span class="token comment">//"done"</span>\n</code></pre>\n      </div>\n<h4>5.2 クロージャに戻り値があるパターン</h4>\n<div class="gatsby-highlight">\n      <pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>callback<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">String</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"say"</span><span class="token punctuation">)</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">"これは何文字ですか?"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"done"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nsayHello <span class="token punctuation">{</span> <span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">Int</span> <span class="token keyword">in</span>\n    <span class="token keyword">return</span> text<span class="token punctuation">.</span>characters<span class="token punctuation">.</span><span class="token builtin">count</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//"say"</span>\n<span class="token comment">//"10"</span>\n<span class="token comment">//"done"</span>\n</code></pre>\n      </div>\n<h3>まとめ</h3>\n<hr>\n<p>どうでしょうか?\nこの流れを理解していればコードを読んでて、急にわからなくなる事が減ったり、関数がネストせずに書けたりするのではないでしょうか?<br>\n分からなくなったら落ち着いて、関数を二つ書いてしまえば、整理できるかもしれません。\n以上、Swift4 におけるクロージャについて基礎基礎でした。</p>',frontmatter:{layout:"post",title:"Swift4でコールバック(1)",path:"/swift4_callback_01/",categories:["Swift","Swift4","callBack"],date:"2018/01/23"}}},pathContext:{path:"/swift4_callback_01/"}}}});
//# sourceMappingURL=path---swift-4-callback-01-4ff4dc87d4c79381eaf3.js.map