---
title: UniRxを触ってみる（１）
date: "2018-01-13T03:50:40.121Z"
layout: post
path: "/01132018/UniRx_01/"
categories:
 - UniRx
 - C#
description: ホゲホゲほげ
---
Reacive Extentions の一つである UniRx を触ってみる。
<!--more-->

## UniRxとは?
---
neuecc さんによる Unity 用の Rx ライブらりなのだ(小並感)    
[UniRxのgithub](https://github.com/neuecc/UniRx)
以下、README.md を読んでいきましょう。    
「UniRx って何?」て聞かれた時のために。

## README.md (!原文ママ)
---    
>UniRx (Reactive Extensions for Unity) is a reimplementation of the .NET Reactive Extensions. The Official Rx implementation is great but doesn't work on Unity and has issues with iOS IL2CPP compatibility.
- UniRxは .Net用のリアクティブエクステンションを再実装したものだと。
- 公式の.Net用のも素晴らしいけど、Unityで動かないし、iOSと、IL2CPPでビルドした時に問題があるからね。

>Supported platforms are PC/Mac/Android/iOS/WP8/WindowsStore/etc and the library is fully supported on both Unity 5 and 4.6.
- Unityにフォーカスしてるし、いろんなプラットフォームをサポートしてるで。


> UniRx is available on the Unity Asset Store (FREE) - http://u3d.as/content/neuecc/uni-rx-reactive-extensions-for-unity/7tT
- Asset storeから"無料で"入手可。

うーんと、Reactive Extention がどういうものかは知ってる前提なんですかね?    
ちなみに、README はこの後サンプルが続きます。

 ## Reactive Extentions とは
 --- 
 困った時の wikipedia っすね。

 wikipedia をかいつまむと以下です。    
     
- オブザーバーパターンによる、非同期処理の API のことであると.
- 非同期処理っつーのは,基本的には"call back"を持つもので、プログラマは関数の終了時にコールバックできるよね。
- この方法はオーバーヘッドを避けれるからいいよねーと。

``オブザーバーパターン``: 監視するパターン(Rx Extention においては、ストリームの監視な気がします。)    
``オーバーヘッド``: 余分な処理による負荷

- ストリームは以下の 3 つのイベント時に、それぞれの値を発行しますと。
    - next
    - error
    - complete
- ストリームが購読(これがオブザーバーパターンたる所以ですかね?)されていない限りは、上記の値に対するイベントは発行されません。    

    
めっちゃ感覚的にかつ、小学生並みの感想といたしましては、    

``痒いところに手が届いて、言語仕様とマッチするコールバック、あ、これを求めてたんですよぉ``   
    
と言いたいです。

購読さえしていれば、next として任意の値をストリームに流すと、購読していたイベントを、任意のタイミングで、複数回呼べるのがとても便利です。

次回から、コードをみていきましょう。