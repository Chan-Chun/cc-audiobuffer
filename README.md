# cc-audiobuffer

> 近期将会推出2.0版本 敬请期待 Version 2.0 will be published soon

## 简介 Introduction

cc-audiobuffer是一个使切片的连续语音重新组合在一起的工具。

cc-audiobuffer helps you splice continuous audio fragments.



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



## 使用 Use

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

> When you create CCAudioBuffer with arguments, argements must be an array of audio.


> **创建CCAudioBuffer时候内部语音自动播放**

> **Auto play when CCAudioBuffer is created**



`pushBuffer()` 的作用和无参数创建一样。

`pushBuffer()` method is the same above.



