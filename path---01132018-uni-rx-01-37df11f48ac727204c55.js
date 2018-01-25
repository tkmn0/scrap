webpackJsonp([0xf239942daf83],{381:function(n,t){n.exports={data:{site:{meta:{title:"n0の断片",description:"メモとか、スニペットとか",url:"https://tkmn0.github.io/scrap/",author:"n0",twitter:"n0",adsense:""}},post:{id:"/Users/noguchitakuma/Desktop/n0WorkSapace/techblog/blog/src/pages/articles/01132018/Unirxを触ってみる（１）/index.md absPath of file >>> MarkdownRemark",html:'<p>Reacive Extentions の一つである UniRx を触ってみる。</p>\n<!--more-->\n<h2>UniRxとは?</h2>\n<hr>\n<p>neuecc さんによる Unity 用の Rx ライブらりなのだ(小並感)<br>\n<a href="https://github.com/neuecc/UniRx">UniRxのgithub</a>\n以下、README.md を読んでいきましょう。<br>\n「UniRx って何?」て聞かれた時のために。</p>\n<h2>README.md (!原文ママ)</h2>\n<hr>\n<blockquote>\n<p>UniRx (Reactive Extensions for Unity) is a reimplementation of the .NET Reactive Extensions. The Official Rx implementation is great but doesn’t work on Unity and has issues with iOS IL2CPP compatibility.</p>\n</blockquote>\n<ul>\n<li>UniRxは .Net用のリアクティブエクステンションを再実装したものだと。</li>\n<li>公式の.Net用のも素晴らしいけど、Unityで動かないし、iOSと、IL2CPPでビルドした時に問題があるからね。</li>\n</ul>\n<blockquote>\n<p>Supported platforms are PC/Mac/Android/iOS/WP8/WindowsStore/etc and the library is fully supported on both Unity 5 and 4.6.</p>\n</blockquote>\n<ul>\n<li>Unityにフォーカスしてるし、いろんなプラットフォームをサポートしてるで。</li>\n</ul>\n<blockquote>\n<p>UniRx is available on the Unity Asset Store (FREE) - <a href="http://u3d.as/content/neuecc/uni-rx-reactive-extensions-for-unity/7tT">http://u3d.as/content/neuecc/uni-rx-reactive-extensions-for-unity/7tT</a></p>\n</blockquote>\n<ul>\n<li>Asset storeから”無料で”入手可。</li>\n</ul>\n<p>うーんと、Reactive Extention がどういうものかは知ってる前提なんですかね?<br>\nちなみに、README はこの後サンプルが続きます。</p>\n<h2>Reactive Extentions とは</h2>\n<hr>\n<p> 困った時の wikipedia っすね。</p>\n<p> wikipedia をかいつまむと以下です。<br>\n</p>\n<ul>\n<li>オブザーバーパターンによる、非同期処理の API のことであると.</li>\n<li>非同期処理っつーのは,基本的には”call back”を持つもので、プログラマは関数の終了時にコールバックできるよね。</li>\n<li>この方法はオーバーヘッドを避けれるからいいよねーと。</li>\n</ul>\n<p><code>オブザーバーパターン</code>: 監視するパターン(Rx Extention においては、ストリームの監視な気がします。)<br>\n<code>オーバーヘッド</code>: 余分な処理による負荷</p>\n<ul>\n<li>\n<p>ストリームは以下の 3 つのイベント時に、それぞれの値を発行しますと。</p>\n<ul>\n<li>next</li>\n<li>error</li>\n<li>complete</li>\n</ul>\n</li>\n<li>\n<p>ストリームが購読(これがオブザーバーパターンたる所以ですかね?)されていない限りは、上記の値に対するイベントは発行されません。    </p>\n</li>\n</ul>\n<p>めっちゃ感覚的にかつ、小学生並みの感想といたしましては、    </p>\n<p><code>痒いところに手が届いて、言語仕様とマッチするコールバック、あ、これを求めてたんですよぉ</code><br>\n<br>\nと言いたいです。</p>\n<p>購読さえしていれば、next として任意の値をストリームに流すと、購読していたイベントを、任意のタイミングで、複数回呼べるのがとても便利です。</p>\n<p>次回から、コードをみていきましょう。</p>',frontmatter:{layout:"post",title:"UniRxを触ってみる（１）",path:"/01132018/UniRx_01/",categories:["UniRx","C#"],date:"2018/01/13"}}},pathContext:{path:"/01132018/UniRx_01/"}}}});
//# sourceMappingURL=path---01132018-uni-rx-01-37df11f48ac727204c55.js.map