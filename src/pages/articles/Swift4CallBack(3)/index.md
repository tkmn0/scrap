---
title: Swift4でコールバック(3)
date: "2018-02-05T02:23:04.121Z"
layout: post
path: "/swift4_callback_03/"
categories:
 - Swift
 - Swift4
 - callBack
description: swift swift4 callback notificationcenter
---
Swift4 Callback シリーズ。
- クロージャによるコールバック
- Delegate を使ったコールバック
- NotificationCenter を使ったコールバック

今回は``NotificationCenter``によるコールバックについて。
<!--more-->
# NotificatioinCenter とは
--- 
> The Notification Center framework helps you create and manage app extensions that implement widgets. The framework provides an API you can use to specify whether a widget has content to display, and to customize aspects of its appearance and behavior.

おぉ。。。    
``Notificaion Center framework``は
- ウィジット機能の拡張をを実装するアプリを作成、管理するのに役に立つ。
- ウィジェットに表示するコンテンツがあるかどうかを指定したり、その外観や動作をカスタマイズしたりするための API が用意されている。

なるほど。わからん。    
[Qiitaの記事](https://qiita.com/mono0926/items/754c5d2dbe431542c75e)    
この記事が参考になりました。
というか、この記事を読めば大体わかりますね。

# 前回のDelegateパターンをObserverパターンにできないか?
やってみましょう。    
...
一旦ストップ。

