
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
  while getopts wpf:h OPT
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
      f)
        ARG_F=$OPTARG
        echo "ARG_F is $ARG_F"              # for debug
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

