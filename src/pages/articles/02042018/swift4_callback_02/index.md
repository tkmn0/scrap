---
title: Swfit4でコールバック(２)
date: "2018-02-04T03:50:40.121Z"
layout: post
path: "/02042018/swift4_callback_02/"
categories:
 - hoge
description: fasfas
---

- クロージャによるコールバック
- Delegate を使ったコールバック
- IObserver を使ったコールバック

今回は``Delegate``を使ったコールバックをゆるゆる紹介します。
  <!--more-->

    
# デリゲートとは
The Swift Programing Language によると
>Delegation is a design pattern that enables a class or structure to hand off(or delegate) some of its responsibilities to an instance of another type.    

だそうで、デリゲートとは、
- ``デザインパンターンの一つ``である。
- delegate を用いれば、とあるクラスや構造体は、処理の一部を他の型のインスタンスに移譲することができます。   

### デザインパターンとは
---
> ソフトウェア開発におけるデザインパターン（型紙（かたがみ）または設計パターン、英: design pattern）とは、過去のソフトウェア設計者が発見し編み出した設計ノウハウを蓄積し、名前をつけ、再利用しやすいように特定の規約に従ってカタログ化したものである

[wikipediaより引用](https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3_(%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2))

なんかよくわからないですね。
同じ wiki 内の概要がわかりやすいかったです。
> コンピュータのプログラミングで、素人と達人の間では驚くほどの生産性の差があり、その差はかなりの部分が経験の違いからきている。達人は、さまざまな難局を、何度も何度も耐え忍んで乗り切ってきている。そのような達人たちが同じ問題に取り組んだ場合、典型的にはみな同じパターンの解決策に辿り着く。これがデザインパターンである (GoF)。


``問題解決のパターンを共有しようよ。そしたら設計の話し合いとかスムーズにいくよね``     
ということですね。

### 処理を移譲してみる
---
実際にコードを書いて見ましょう。

まず、色を外から指定する ColorView を作ります。    
    
#### UIの準備
``ColorView.swift``
```swift
import UIKit

class ColorView: UIView {

    enum colors{
        case red
        case blue
        case yellow
        case green
        case none
    }
    
    var background: colors?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    public func setColor(color: colors){
        self.background = color
        switch color {
        case .red:
            self.backgroundColor = .red
        case .blue:
            self.backgroundColor = .blue
        case .yellow:
            self.backgroundColor = .yellow
        case .green:
            self.backgroundColor = .green
        case .none:
            self.backgroundColor = .black
        }
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        print("touched")
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
}

```

`ViewController.swift`
```swift
import UIKit

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let size = (self.view.frame.width*0.8)/2
        let mergin = self.view.frame.width*0.1
        
        //Initialize Views
        let red = ColorView(frame: CGRect(x: mergin, y: 60, width: size, height: size))
        let blue = ColorView(frame: CGRect(x: self.view.frame.width-(size+mergin), y: 60, width: size, height: size))
        let yellow = ColorView(frame: CGRect(x: mergin, y: 60+size, width: size, height: size))
        let green = ColorView(frame: CGRect(x: self.view.frame.width-(size+mergin), y: 60+size, width: size, height: size))
        
        //Set Color
        red.setColor(color: .red)
        blue.setColor(color: .blue)
        yellow.setColor(color: .yellow)
        green.setColor(color: .green)
        
        //Add view
        self.view.addSubview(red)
        self.view.addSubview(blue)
        self.view.addSubview(yellow)
        self.view.addSubview(green)
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}
```
各 View を tap で"touched"とログを吐きます。
     

#### Delegateの準備
---

##### 処理を移譲する側の準備
``タップされたViewが、ViewControllerに対して、自分がタップされたことを通知する``   
これを Delegate を使って実装したいと思います。    

1. Delegate の実態を宣言する

``ColorView.swift``
```swift
import UIKit

protocol ColorViewDlegate {
    func tapped(color: ColorView.colors)
}

class ColorView: UIView{
...
```

2. Delegate を宣言する

``ColorView.swift``
```swift
...
class ColorView: UIView{

    var background: colors?
    var delegate: ColorViewDlegate?
...
```
3. Delegate function を呼ぶ

``ColorView.swift``
```swift
...
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        print("touched")
        delegate?.tapped(color: self.background!)
    }
...
```
上記 1~3 の手順で、通知する側(処理を移譲する側)の準備は終了です。
#### 処理を移譲される側の準備

1. Delegate を使うことを定義

``ViewController.swift``
```swift
...
class ViewController: UIViewController, ColorViewDlegate{
...
```
2. Delegate を受けた時の処理

``ViewController.swift``
```swift
...
    func tapped(color: ColorView.colors) {
        switch color {
        case .red:
            print("red")
        case .blue:
            print("blue")
        case .yellow:
            print("yellow")
        case .green:
            print("green")
        case .none:
            print("none")
        }
    }
...
```

3. Delegate をの移譲先がこの Class であることの宣言

``ViewController.swift``
```swift
    red.delegate = self
    blue.delegate = self
    yellow.delegate = self
    green.delegate = self
```
ここで、"self"とできるのは、1.で Delegate を使うことを定義してあるからです。

#### コード全体
``ColorView.swift``
```swift
import UIKit

protocol ColorViewDlegate {
    func tapped(color: ColorView.colors)
}

class ColorView: UIView {

    enum colors{
        case red
        case blue
        case yellow
        case green
        case none
    }
    
    var background: colors?
    var delegate: ColorViewDlegate?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }

    public func setColor(color: colors){
        self.background = color
        switch color {
        case .red:
            self.backgroundColor = .red
        case .blue:
            self.backgroundColor = .blue
        case .yellow:
            self.backgroundColor = .yellow
        case .green:
            self.backgroundColor = .green
        case .none:
            self.backgroundColor = .black
        }
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        print("touched")
        delegate?.tapped(color: self.background!)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
}
```
``ViewController.swift``
```swift

import UIKit

class ViewController: UIViewController, ColorViewDlegate {
    
    //MARK: ColorViewDelegate function
    func tapped(color: ColorView.colors) {
        switch color {
        case .red:
            print("red")
        case .blue:
            print("blue")
        case .yellow:
            print("yellow")
        case .green:
            print("green")
        case .none:
            print("none")
        }
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let size = (self.view.frame.width*0.8)/2
        let mergin = self.view.frame.width*0.1
        
        //Initialize Views
        let red = ColorView(frame: CGRect(x: mergin, y: 60, width: size, height: size))
        let blue = ColorView(frame: CGRect(x: self.view.frame.width-(size+mergin), y: 60, width: size, height: size))
        let yellow = ColorView(frame: CGRect(x: mergin, y: 60+size, width: size, height: size))
        let green = ColorView(frame: CGRect(x: self.view.frame.width-(size+mergin), y: 60+size, width: size, height: size))
        
        //Set Color
        red.setColor(color: .red)
        blue.setColor(color: .blue)
        yellow.setColor(color: .yellow)
        green.setColor(color: .green)
        
        //Set delegate
        red.delegate = self
        blue.delegate = self
        yellow.delegate = self
        green.delegate = self
        
        //Add view
        self.view.addSubview(red)
        self.view.addSubview(blue)
        self.view.addSubview(yellow)
        self.view.addSubview(green)
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}
```

これで、log が
```
touched
red
touched
blue
touched
yellow
touched
...
```
となれば成功です。

# まとめ
全体の流れをもう一度確認すると。

通知元のクラス(今回は ColorView)で、
- ``Delegateの実態``
- ``Delegateの宣言``
- ``Delegateの呼び出し``    
を準備する。　　
　　
通知先のクラス(今回は ViewController)で、
- ``Delegateを使うことを定義``
- ``移譲されたDelegate funcionの処理``
- ``Delegateを移譲する先がこのクラス(Viewcontroller)であることの宣言``

この二つの流れで、処理を移譲することができます。
どうでしょうか。delegate は何かと使いやすいコールバックなので、ぜひ使っていきましょう。　　　


