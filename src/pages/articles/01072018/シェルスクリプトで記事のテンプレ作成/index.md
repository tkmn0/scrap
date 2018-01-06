---
title: シェルスクリプトで記事のテンプレ作成
date: "2018-01-07T03:40:36.121Z"
layout: post
path: "/01072018/shell_script/"
categories:
 - shellscript 
 - 効率化
description: 
---
コマンドで記事のテンプレート作成まで行けたら、と思ってもがいてみたので、その備忘録をば。
### ゴール
``
npm run blog -- -w タイトル パス
``  
  
このコマンドでテンプレートを作成する。
<!--more-->
### やったこと
- 1. shellscriptを書く
- 2. package.jsonの中身をいじる
    
## 1. shellscriptを書く
---
blog.shを作成
```powershell
#blog.sh
#!/bin/bash
function usage() {
cat <<_EOT_
Usage:
  $0 [-w] [-p] [-f filename] arg1 ...

Description:
  hogehogehoge

Options:
  -w    write blog(create blog componets)
  -p    post blog to github pages

_EOT_
exit 1
}
function write() {
  local today=$(date "+%m%d%Y")
  if [ ! -e "./src/pages/articles/${today}" ]; then
  mkdir "./src/pages/articles/${today}"
  fi

  local title="$1"
  local path="./src/pages/articles/${today}/$title"
  local url="#"
  if [ -n "$2" ];then
  url="$2"
  fi
  if [ -e $path ]; then
  local num=1
  local _path=$path"(${num})"
  while [ -e $_path ]
  do 
    num=$(( num + 1 ))
    _path=$path"(${num})"
  done
  echo "the directry ${today} is already exist!"
  echo "create ($num) directry"
  path=$_path
  title+="(${num})"
  url+="$num"
  fi
  mkdir $path

  local indexpath="$path/index.md"
  touch $indexpath
  echo --- > $indexpath
  echo title: $title >> $indexpath
  echo date: \"$(date "+%Y-%m-%dT%H:%M:%S.121Z")\" >> $indexpath
  echo layout: post >> $indexpath
  echo path: \"/$today/$url/\" >> $indexpath
  echo categories: >> $indexpath
  echo " "-" "  >> $indexpath
  echo description: ""  >> $indexpath
  echo --- >> $indexpath
}

if [ "$OPTIND" = 1 ]; then
  while getopts wp:h OPT
  do
    case $OPT in
      w)
      title=""
      if [ -n "$2" ]; then
        title=$2 
      else
        title="NO_TITLE"
      fi
      write $title $3
	;;
      p) echo "post blog"
	;;
      h)
        echo "h option. display help"       # for debug
        usage
        ;;
      \?)
        echo "Try to enter the h option." 1>&2
        ;;
    esac
  done
else
  echo "No installed getopts-command." 1>&2
  exit 1
fi
```
### ポイント
---
- ### getpts + while
getopts でオプションを決めます。
今回は、後々 -p　でpostの処理を追加する予定なので、pとwの選択肢があります。[参考](https://qiita.com/2zk/items/80a8376f2feca02fcee2)
- ### write関数
ここで、パス、タイトルの指定ができます。
/articles/DATE/TITLE/index.md
となります。
この時に、タイトルが被ったら
/articles/DATE/TITLE(1)/index.mdになるようにwhile文をぶん回してます。
- ### echo hogehoge > index.md
この書き方で、"hogehoge"がindex.mdに書き込まれます    
    ※"追加"の場合は > ではなく >> にする。
- ### メモ
   #### 条件式
   - 空文チェック ``[ -n "変数" ]``
   - ディレクトリチエック ``[ -e path ]``
   #### if文
   ```powershell
   if [条件]; then
   # do something
   else 
   # do something
   if
   ```
   #### while文
   ```powershell
   while [条件]
   do
   # do something 
   done
   ```
   
  

## 2. package.jsonをいじる
---
```json
//package.json
...
  "scripts": {
    "build": "gatsby build",
    "deploy": "gatsby build --prefix-paths && gh-pages -d public",
    "develop": "gatsby develop",
    "format": "prettier --write \"**/*.+(js|jsx|json|css|scss)\"",
    "lint": "eslint --ext .js,.jsx --ignore-pattern public .",
    "lint:text": "textlint src/pages/**/index.md",
    "lint:textfix": "textlint --fix src/pages/**/index.md",
    "precommit": "lint-staged",
    "test": "echo \"Error: no test specified\" && exit 1",
    "blog": "sh sh_scripts/blog.sh $opt $path $title",
  }
...
```
package.jsonのscriptsの部分に書き加えることで,  
``npm run hogehoge``  
コマンドを使えるようになります。  
今回は、``blog``というコマンドを追加しました。  
ポイントとしては、　上記hogehogeコマンドを引数(オプションとか)を含めて叩きたい時は  ``npm run hogehoge -- 引数1 引数2 引数3 ..``  
とするところでしょうか。  
blogコマンドが叩かれたら、shコマンドを叩いて、引数を渡す、といった挙動になります。

### 所感
---
やりたいことができてよかったです。
shellscriptは文法がなかなか特殊だったので、若干苦戦しましたかね。  
shellscriptの中で普段使ってるコマンドを叩けるのが新鮮でした。  
最初は.zshrcの中に書こうか迷ってたのですが、プロジェクト内にshファイルを置いて、npmのコマンドで叩けるようになったのでよかったです。