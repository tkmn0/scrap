---
title: Swift4でコールバック（1）
date: "2018-01-23T02:23:04.121Z"
layout: post
path: "/swift4_callback_01/"
categories:
 - Swift
 - Swift4
 - callBack
description: swift swift4 callback closure 無名関数 Swift Swift4
---
Swift4 でコールバック処理を調べてみる。    
Swift におけるコールバックのやり方は主に以下の 3 通りかと思われる。
- クロージャによるコールバック
- Delegate を使ったコールバック
- IObserver を使ったコールバック

今回は``クロージャ``によるコールバックについて。
<!--more-->

### クロージャとは
--- 
``無名関数``や``ラムダ式``とも呼ばれる。    
クロージャの基本形    
```swift
{ ([parameters]) -> [return type] in
    [statements]
}
```    
これが基本形です。    
    

### 関数の引数に関数を渡す
---
色々なサイトで、上記の説明のまま、クロージャの説明を始めるのですが、私にはわかりにくかったので、私なりの説明をさせていただきます。    
まず、コールバックの主要なやり方としては、関数の引数に関数を渡す方法がありますね。    
ちょっとずつ進めます。
##### 1. ただの関数
```swift
func sayhello(){
    print("hello")
}
sayhello() //"hello"
```
#### 2. 引数あり関数
```swift
let str = "hello"
func sayhello(string: String){
    print(string)
}
sayhello(string: str) // "hello"
```
#### 3. 戻り値あり関数
```swift
let str = "hello"
func sayhello(string: String)->String{
    return "say " + str
}
let sayhelloString = sayhello(string: str)
print(sayhelloString)// "say hello"
```    
    
    
ここまでは基礎的な関数の処理ですね。
#### 4. 関数の引数が関数
```swift
func sayHello(callback: () -> Void){
    print("say")
    callback()
    print("done")
}
func callback(){
    print("hello")
}

sayHello(callback: callback)
//"say"
//"hello"
//"done"
```
``失敗例``
```swift
func sayHello(callback: Void){
    print("say")
    callback
    print("done")
}
func callback(){
    print("hello")
}
sayHello(callback: callback())
//"hello"
//"say"
//"done"
```
上記失敗例は、引数に callback 関数を渡した時点で、callback``()``により、callback 関数を読んでしまっている。成功例では、callback 関数が sayHello 関数内で呼ばれている。
print の結果の順番を比べていただきたい。

##### 5. 無名関数(クロージャ)を引数にする。
No.4 では、わざわざ callback 関数を宣言してから引数に渡している。    
この時、引数に渡す時に関数を宣言できたら...?    
```swift
func sayHello(callback: () -> Void){
    print("say")
    callback()
    print("done")
}
sayHello(callback: {
    print("hey closure")
})
//"say"
//"hey closure"
//"done"
```
。。。どうでしょうか?
クロージャなんとなくわかったんじゃないでしょうか?
    
要は    
``関数1(sayHello関数)の引数に関数2を渡す時に、関数2を宣言する``    
書き方のことです。(乱暴)

##### 5.1 クロージャに引数があるパターン
```swift
func sayHello(callback: (String) -> Void){
    print("say")
    callback("引数")
    print("done")
}

sayHello { (text) in
    print(text)
}
//"say"
//"引数"
//"done"
```

#### 5.2 クロージャに戻り値があるパターン
```swift
func sayHello(callback: (String) -> Int){
    print("say")
    print(callback("これは何文字ですか?"))
    print("done")
}

sayHello { (text) -> Int in
    return text.characters.count
}
//"say"
//"10"
//"done"
```
    
### まとめ
---
どうでしょうか?
この流れを理解していればコードを読んでて、急にわからなくなる事が減ったり、関数がネストせずに書けたりするのではないでしょうか?    
分からなくなったら落ち着いて、関数を二つ書いてしまえば、整理できるかもしれません。
以上、Swift4 におけるクロージャについて基礎基礎でした。