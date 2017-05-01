# cc-audiobuffer

> 版本2.1.2 Version 2.1.2



## 简介 Introduction

cc-audiobuffer是一个使切片的连续语音重新组合在一起的工具。

cc-audiobuffer helps you splice continuous audio fragments.



让语音排队起来 Let's queue those audios !



## 安装 Install

**npm:**

```shell
npm install cc-audiobuffer
```

```javascript
import CCAudioBuffer from 'cc-audiobuffer'
```

> using Webpack



**script：**

```javascript
<script src="dist/cc-audiobuffer.js"></script>
```

> source code: [dist](https://github.com/Chan-Chun/cc-audiobuffer/tree/master/dist)



## 使用 Use

* ### 创建

  ### 

**无参数创建 Create without argument**

```javascript
let CCAudioBuffer = new CCAudioBuffer()

CCAudioBuffer.pushBuffer('url')
```

当有新的url语音地址传过来的时候，CCAudioBuffer会提前加载并且自动播放语音。不管何时调用`pushBuffer('url')`,这些语音都会依次进入缓冲区且连续播放直到缓冲区为空。

When there has new url of audio,CCAudioBuffer will preload and autoplay this aduio.Whenever you call `pushBuffer('url')`, those audio will enter the buffer one by one and autoplay till buffer is empty. 

---



**有参数创建 Create with arguments**

```javascript
let CCAudioBuffer= new CCAudioBuffer([new Audio('url'),new Audio('url'),new Audio('url')])

CCAudioBuffer.pushBuffer('url')
```

> 当你有参数创建时，参数规定是Audio对象的一个数组。
>
> When you create CCAudioBuffer with arguments, argements must be an array of audio.




> **创建CCAudioBuffer时候内部语音自动播放**
>
> **Auto play when CCAudioBuffer is created**



`pushBuffer()` 的作用和无参数创建一样。

`pushBuffer()` method is the same above.





* ### 操作

> 当前语音指正在播放中的一小片语音片，它已经从CCAudioBuffer队列中移出
>
> Current audio is the playing audio, it has be shifted from CCAudioBuffer



**暂停当前语音片播放 Pause current audio** 

```javascript
CCAudioBuffer.pauseBuffer()
```



**继续当前语音片播放 Continue current audio** 

```javascript
CCAudioBuffer.continueBuffer()
```



**清空之后的语音队列 Clear CCAudioBuffer** 

```javascript
CCAudioBuffer.clearBuffer()
```

>当前已经正在播放的语音不能被清除 Current audio couldn't be cleared



* ### 下一版本？Next Version?

> 接下来的计划：单例模式、报错处理、暂停播放继续播放清空队列优化
>
> Next Version: Singleton、Error handling、Optimized  continue & pause & clear code



