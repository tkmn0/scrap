webpackJsonp([0xb1a2a8d49481],{384:function(n,s){n.exports={data:{site:{meta:{title:"n0の断片",description:"メモとか、スニペットとか",url:"https://tkmn0.github.io/scrap/",author:"n0",twitter:"n0",adsense:""}},post:{id:"/Users/noguchitakuma/Desktop/n0WorkSapace/techblog/blog/src/pages/articles/Shellscript/index.md absPath of file >>> MarkdownRemark",html:'<p>コマンドで記事のテンプレート作成まで行けたら、と思ってもがいてみたので、その備忘録をば。</p>\n<h3>ゴール</h3>\n<p><code>npm run blog -- -w タイトル パス</code>  </p>\n<p>このコマンドでテンプレートを作成する。</p>\n<!--more-->\n<h3>やったこと</h3>\n<ul>\n<li>\n<ol>\n<li>shellscript を書く</li>\n</ol>\n</li>\n<li>\n<ol start="2">\n<li>package.json の中身をいじる</li>\n</ol>\n</li>\n</ul>\n<h2>1. shellscriptを書く</h2>\n<hr>\n<p>blog.sh を作成</p>\n<div class="gatsby-highlight">\n      <pre class="language-powershell"><code><span class="token comment">#blog.sh</span>\n<span class="token comment">#!/bin/bash</span>\n<span class="token keyword">function</span> usage<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token function">cat</span> &lt;&lt;_EOT_\nUsage:\n  <span class="token variable">$0</span> <span class="token punctuation">[</span><span class="token operator">-</span>w<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>p<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>f filename<span class="token punctuation">]</span> arg1 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\nDescription:\n  hogehogehoge\n\nOptions:\n  <span class="token operator">-</span>w    <span class="token function">write</span> blog<span class="token punctuation">(</span>create blog componets<span class="token punctuation">)</span>\n  <span class="token operator">-</span>p    post blog to github pages\n\n_EOT_\n<span class="token keyword">exit</span> 1\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  local today=$<span class="token punctuation">(</span>date <span class="token string">"+%m%d%Y"</span><span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token operator">-</span>e <span class="token string">"./src/pages/articles/${today}"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> then\n  mkdir <span class="token string">"./src/pages/articles/${today}"</span>\n  fi\n\n  local title=<span class="token string">"<span class="token variable">$1</span>"</span>\n  local path=<span class="token string">"./src/pages/articles/${today}/<span class="token variable">$title</span>"</span>\n  local url=<span class="token string">"#"</span>\n  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">-</span>n <span class="token string">"<span class="token variable">$2</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>then\n  url=<span class="token string">"<span class="token variable">$2</span>"</span>\n  fi\n  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">-</span>e <span class="token variable">$path</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> then\n  local num=1\n  local _path=<span class="token variable">$path</span><span class="token string">"(${num})"</span>\n  <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token operator">-</span>e <span class="token variable">$_path</span> <span class="token punctuation">]</span>\n  <span class="token keyword">do</span> \n    num=$<span class="token punctuation">(</span><span class="token punctuation">(</span> num <span class="token operator">+</span> 1 <span class="token punctuation">)</span><span class="token punctuation">)</span>\n    _path=<span class="token variable">$path</span><span class="token string">"(${num})"</span>\n  done\n  <span class="token function">echo</span> <span class="token string">"the directry ${today} is already exist!"</span>\n  <span class="token function">echo</span> <span class="token string">"create (<span class="token variable">$num</span>) directry"</span>\n  path=<span class="token variable">$_path</span>\n  title<span class="token operator">+=</span><span class="token string">"(${num})"</span>\n  url<span class="token operator">+=</span><span class="token string">"<span class="token variable">$num</span>"</span>\n  fi\n  mkdir <span class="token variable">$path</span>\n\n  local indexpath=<span class="token string">"<span class="token variable">$path</span>/index.md"</span>\n  touch <span class="token variable">$indexpath</span>\n  <span class="token function">echo</span> <span class="token operator">--</span><span class="token operator">-</span> > <span class="token variable">$indexpath</span>\n  <span class="token function">echo</span> title: <span class="token variable">$title</span> >> <span class="token variable">$indexpath</span>\n  <span class="token function">echo</span> date: \\<span class="token string">"$(date "</span>+<span class="token operator">%</span>Y-<span class="token operator">%</span>m-<span class="token operator">%</span>dT<span class="token operator">%</span>H:<span class="token operator">%</span>M:<span class="token operator">%</span>S<span class="token punctuation">.</span>121Z<span class="token string">")\\"</span> >> <span class="token variable">$indexpath</span>\n  <span class="token function">echo</span> layout: post >> <span class="token variable">$indexpath</span>\n  <span class="token function">echo</span> path: \\<span class="token string">"/<span class="token variable">$today</span>/<span class="token variable">$url</span>/\\"</span> >> <span class="token variable">$indexpath</span>\n  <span class="token function">echo</span> categories: >> <span class="token variable">$indexpath</span>\n  <span class="token function">echo</span> <span class="token string">" "</span><span class="token operator">-</span><span class="token string">" "</span>  >> <span class="token variable">$indexpath</span>\n  <span class="token function">echo</span> description: <span class="token string">""</span>  >> <span class="token variable">$indexpath</span>\n  <span class="token function">echo</span> <span class="token operator">--</span><span class="token operator">-</span> >> <span class="token variable">$indexpath</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$OPTIND</span>"</span> = 1 <span class="token punctuation">]</span><span class="token punctuation">;</span> then\n  <span class="token keyword">while</span> getopts wp:h OPT\n  <span class="token keyword">do</span>\n    case <span class="token variable">$OPT</span> in\n      w<span class="token punctuation">)</span>\n      title=<span class="token string">""</span>\n      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">-</span>n <span class="token string">"<span class="token variable">$2</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> then\n        title=<span class="token variable">$2</span> \n      <span class="token keyword">else</span>\n        title=<span class="token string">"NO_TITLE"</span>\n      fi\n      <span class="token function">write</span> <span class="token variable">$title</span> <span class="token variable">$3</span>\n\t<span class="token punctuation">;</span><span class="token punctuation">;</span>\n      p<span class="token punctuation">)</span> <span class="token function">echo</span> <span class="token string">"post blog"</span>\n\t<span class="token punctuation">;</span><span class="token punctuation">;</span>\n      h<span class="token punctuation">)</span>\n        <span class="token function">echo</span> <span class="token string">"h option. display help"</span>       <span class="token comment"># for debug</span>\n        usage\n        <span class="token punctuation">;</span><span class="token punctuation">;</span>\n      \\?<span class="token punctuation">)</span>\n        <span class="token function">echo</span> <span class="token string">"Try to enter the h option."</span> 1>&amp;2\n        <span class="token punctuation">;</span><span class="token punctuation">;</span>\n    esac\n  done\n<span class="token keyword">else</span>\n  <span class="token function">echo</span> <span class="token string">"No installed getopts-command."</span> 1>&amp;2\n  <span class="token keyword">exit</span> 1\nfi\n</code></pre>\n      </div>\n<h3>ポイント</h3>\n<hr>\n<ul>\n<li>\n<h3>getpts + while</h3>\n<p>getopts でオプションを決めます。\n今回は、後々 -p　で post の処理を追加する予定なので、p と w の選択肢があります。<a href="https://qiita.com/2zk/items/80a8376f2feca02fcee2">参考</a></p>\n</li>\n<li>\n<h3>write関数</h3>\n<p>ここで、パス、タイトルの指定ができます。\n/articles/DATE/TITLE/index.md\nとなります。\nこの時に、タイトルが被ったら\n/articles/DATE/TITLE(1)/index.md になるように while 文をぶん回してます。</p>\n</li>\n<li>\n<h3>echo hogehoge > index.md</h3>\n<p>この書き方で、“hogehoge”が index.md に書き込まれます<br>\n※“追加”の場合は > ではなく >> にする。</p>\n</li>\n<li>\n<h3>メモ</h3>\n<h4>条件式</h4>\n<ul>\n<li>空文チェック <code>[ -n "変数" ]</code></li>\n<li>\n<p>ディレクトリチエック <code>[ -e path ]</code></p>\n<h4>if文</h4>\n<div class="gatsby-highlight">\n      <pre class="language-powershell"><code><span class="token keyword">if</span> <span class="token punctuation">[</span>条件<span class="token punctuation">]</span><span class="token punctuation">;</span> then\n<span class="token comment"># do something</span>\n<span class="token keyword">else</span> \n<span class="token comment"># do something</span>\n<span class="token keyword">if</span>\n</code></pre>\n      </div>\n<h4>while文</h4>\n<div class="gatsby-highlight">\n      <pre class="language-powershell"><code><span class="token keyword">while</span> <span class="token punctuation">[</span>条件<span class="token punctuation">]</span>\n<span class="token keyword">do</span>\n<span class="token comment"># do something </span>\ndone\n</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n</ul>\n<h2>2. package.jsonをいじる</h2>\n<hr>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>//package.json\n...\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"gatsby build"</span><span class="token punctuation">,</span>\n    <span class="token property">"deploy"</span><span class="token operator">:</span> <span class="token string">"gatsby build --prefix-paths &amp;&amp; gh-pages -d public"</span><span class="token punctuation">,</span>\n    <span class="token property">"develop"</span><span class="token operator">:</span> <span class="token string">"gatsby develop"</span><span class="token punctuation">,</span>\n    <span class="token property">"format"</span><span class="token operator">:</span> <span class="token string">"prettier --write \\"**/*.+(js|jsx|json|css|scss)\\""</span><span class="token punctuation">,</span>\n    <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint --ext .js,.jsx --ignore-pattern public ."</span><span class="token punctuation">,</span>\n    <span class="token property">"lint:text"</span><span class="token operator">:</span> <span class="token string">"textlint src/pages/**/index.md"</span><span class="token punctuation">,</span>\n    <span class="token property">"lint:textfix"</span><span class="token operator">:</span> <span class="token string">"textlint --fix src/pages/**/index.md"</span><span class="token punctuation">,</span>\n    <span class="token property">"precommit"</span><span class="token operator">:</span> <span class="token string">"lint-staged"</span><span class="token punctuation">,</span>\n    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"echo \\"Error: no test specified\\" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>\n    <span class="token property">"blog"</span><span class="token operator">:</span> <span class="token string">"sh sh_scripts/blog.sh $opt $path $title"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n...\n</code></pre>\n      </div>\n<p>package.json の scripts の部分に書き加えることで,<br>\n<code>npm run hogehoge</code><br>\nコマンドを使えるようになります。<br>\n今回は、<code>blog</code>というコマンドを追加しました。<br>\nポイントとしては、　上記 hogehoge コマンドを引数(オプションとか)を含めて叩きたい時は  <code>npm run hogehoge -- 引数1 引数2 引数3 ..</code><br>\nとするところでしょうか。<br>\nblog コマンドが叩かれたら、sh コマンドを叩いて、引数を渡す、といった挙動になります。</p>\n<h3>所感</h3>\n<hr>\n<p>やりたいことができてよかったです。\nshellscript は文法がなかなか特殊だったので、若干苦戦しましたかね。<br>\nshellscript の中で普段使ってるコマンドを叩けるのが新鮮でした。<br>\n最初は.zshrc の中に書こうか迷ってたのですが、プロジェクト内に sh ファイルを置いて、npm のコマンドで叩けるようになったのでよかったです。</p>',frontmatter:{layout:"post",title:"シェルスクリプトで記事のテンプレ作成",path:"/shell_script/",categories:["shellscript","効率化"],date:"2018/01/07"}}},pathContext:{path:"/shell_script/"}}}});
//# sourceMappingURL=path---shell-script-42f70699c58518fc7500.js.map