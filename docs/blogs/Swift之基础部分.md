---
title: Swift之基础部分
date: 2024-05-27
---

## 基础部分

### 常量与变量

#### 声明

用`let`来声明常量，用`var`来声明变量

#### 类型注解

```swift
var message: String

var red, green, blue: Double
```

#### 输出

```swift
print(message)

// 字符串插值
print("my name is \(name)")
```

### 注释

```swift
// 这是一个注释

/*
这也是一个注释
但是是多行的
*/

/*
这是注释开头
/* 嵌套注释 */
这是注释结尾
*/
```

### 尾随分号

类似`javascript`，可有可无

### 整数

- 整数就是没有小数部分的数字，如`18`、`-36`
- `Swift`提供了`8`、`16`、`32`和`64`位的有符号和无符号整数类型。`UInt8`、`Uint32`…

#### 范围

```swift
let min = UInt8.min // min为0，是UInt8类型
let max = UInt8.max // max为255，是UInt8类型
```

#### Int

一般来说，不需要指定整数长度，`Swift`提供了一个特殊的整数类型`Int`，一般来说，使用`Int`就够了

- 在32位平台上，`Int`和`Int32`长度相同
- 在64位平台上，`Int`和`Int64`长度相同

#### UInt

> 尽量不要使用`UInt`，除非你真的需要存储一个和当前平台原生字长相同的无符号整数。就算已知是非负数，也统一使用`Int`类型

`Swift`提供了一个特殊的无符号类型`UInt`，长度与平台一致

- 在32位平台上，`UInt`和`UInt32`长度相同
- 在64位平台上，`UInt`和`UInt64`长度相同

### 浮点数

- 有小数部分的数字，如`3.14`、`0.1`、`-1.2`
- 浮点类型比整数类型表示的范围更大，可以储存比`Int`类型更大或更小的数字
- `Swift`提供了两种浮点数类型：
    - `Double`：表示64位浮点数，储存很大或者精度很高的浮点数的类型，至少15位小数
    - `Float`：表示32位浮点数，精度要求不高的类型，6位小数

### 类型安全和类型推断

- 整数会被推断为`Int`类型
- 浮点数总是会被推断为`Double`
- 表达式中出现了浮点数，会被推断为`Double`

```swift
let a = 18 // 被推断为 Int 类型

let b = 3.14 // 会被推断为 Double 类型

let c = 18 + 3.14 // 会被推断为 Doublu
```

### 数值型字面量

整数字面量可以被写作

- 一个`十进制`数，没有前缀，`17`
- 一个`二进制`数，前缀为`0b`，`0b10001`
- 一个`八进制`数，前缀为`0o`，`0o21`
- 一个`十六进制`数，前缀为`0x`，`0x11`

浮点数字面量可以被写作

- 一个`十进制`数，没有前缀，小数两边至少有一个`十进制`数字，有一个可选的指数，通过`e`或`E`来指定
    - 指数为`exp`，那这个数相当于基数和10^exp的乘积
        - `1.25e2`表示`1.25 * 10^2 = 125.0`
        - `1.25e-2`表示`1.25 * 10^-2 = 0.0125`
- 一个`十六进制`数，前缀为`0x`，小数两边至少有一个`十六进制`数字，有一个可选的指数，通过`p`或`P`来指定
    - 指数为`exp`，那这个数相当于基数和2^exp的乘积
        - `0xFp2`表示`15 * 2^2 = 60.0`
        - `0xFp-2`表示`15 * 2^-2 = 3.75`

整数和浮点数都可以添加额外的零并且包含下划线，并不会影响字面量

```swift
let a = 000123.456
let b = 1_000_000
let c = 1_000_000_000_000_1
```

### 数值型类型转换

```swift
let a: UInt8 = -1 // UInt8 类型不能存储负数，所以会报错
let b: Int8 = Int8.max + 1 // Int8 类型不能存储超过最大值的数，所以会报错
```

#### 整数转化

```swift
let a: UInt16 = 2_000
let b: UInt8 = 1
let c = a + UInt16(b)
```

#### 整数和浮点数转换

```swift
let a = 3
let b = 0.14
let pi = Double(a) + b // pi 会被推断为 Double 类型
let intPi = Int(pi) // 3
```

整数转化为浮点数时，小数会被直接截取，不会四舍五入

### 类型别名

```swift
typealias AudioSample = UInt16

var maxAmplitudeFound: AudioSample = AudioSample.min // 10
```

### 布尔值

```swift
let a: Bool = true
let b: Bool = false
let c = 1

// 会直接报错
if c {
	……
}

// 会执行成功
if c == 1 {
	……
}
```

### 元组

```swift
let http404Error = (404, "Not Found")

print("The status code is \(http404Error.0)") // The status code is 404
print("The status message is \(http404Error.1)") // The status message is Not Found

let (statusCode, statusMessage) = http404Error
print("The status code is \(statusCode)") // The status code is 404
print("The status message is \(statusMessage)") // The status message is Not Found
```

### 可选类型

```swift
let a = "123"
let b = Int(a) // 推测类型为 optional Int
```

#### nil

```swift
var a: Int? = 404 // a 包含一个可选的 Int 值 404
a = nil // a 现在不包含值

var b: String? // b 被自动设置为 nil

if a != nil {
	 print("a is not nill")
}

if b != nil {
	 print("b is not nill and b's value is \(b!)") // !断言
}
```

#### 可选绑定

```swift
if let a = b {
    1
}

if let c = Int(d) {
    print("\(d) has an integer value of \(c)")
} else {
    print("\(d) is not an integer")
}
```

#### 隐式解析可选类型

```swift
let a: String? = "aaa"
let b: String = a! // 需要感叹号来获取值

let c: String! = "ccc"
let d: String = c  // 不需要感叹号
```

### 错误处理

```swift
// case 1
func throwAnError() throws {
    // 这个函数有可能抛出错误
}

do {
	try throwAnError()
} catch {
	// 错误捕获
}


// case 2
func makeASandwich() throws {
    // ...
}

do {
    try makeASandwich()
    eatASandwich()
} catch SandwichError.outOfCleanDishes {
    washDishes()
} catch SandwichError.missingIngredients(let ingredients) {
    buyGroceries(ingredients)
}
```

### 断言和先决条件

#### 使用断言进行调试

可以使用`assert(_:_:file:line:)` 函数来写一个断言

向这个函数传入一个结果为`true`或者`false`的表达式以及一条信息，当表达式的结果为`false`的时候这条信息会被显示。信息也可以不传

```swift
let age = -3
assert(age >= 0, "A person's age cannot be less than zero") // 因为 age < 0，所以断言会触发
```

如果代码已经检查了条件，可以使用`assertionFailure(_:file:line:)`函数来表明断言失败了

```swift
if age > 10 {
    print("You can ride the roller-coaster or the ferris wheel.")
} else if age > 0 {
    print("You can ride the ferris wheel.")
} else {
    assertionFailure("A person's age can't be less than zero.")
}
```

#### 强制执行先决条件

当一个条件可能为假，但是条件必须为真才能继续执行的时候，需要使用先决条件

例如使用先决条件来检查是否下标越界，或者来检查是否将一个正确的参数传给函数

你可以使用`precondition(_:_:file:line:)`函数来写一个先决条件

向这个函数传入一个结果为`true`或者`false`的表达式以及一条信息，当表达式的结果为`false`的时候这条信息会被显示

```swift
// 在一个下标的实现里...
precondition(index > 0, "Index must be greater than zero.")
```

你可以调用`preconditionFailure(_:file:line:)`方法来表明出现了一个错误

例如，`switch`进入了`default`分支，但是所有的有效值应该被任意一个其他分支（非 default 分支）处理。
