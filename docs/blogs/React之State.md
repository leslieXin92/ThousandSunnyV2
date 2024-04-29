---
title: React之State
date: 2023-06-26
---

## state与渲染⻚面的关系

**渲染⻚面一共分成三个步骤**

1. 触发: 有两种情况会触发⻚面重新渲染，初始化或`state`发生了改变
2. 整合组件: `React`会递归调用，会把`state`影响到的所有组件重新渲染
3. 提交到dom: 将`diff`结果仍到`dom`上

## state是一张快照

当`state`变化时，会重新执行一遍组件整个函数，当前这个函数内所有的`state`都是当前的`state`，而非`setState`之后的`state`。

**Demo 1**

```javascript
import { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5)
        alert(number)
      }}>
        +1
      </button>
    </>
  )
}
```

这样`alert`不会为set之后的`5`，而是`set`之前的`0`，哪怕把`alert`包裹一层`setTimeout`，定时为`5s`，也是`alert 0`。

**Demo 2**

```javascript
import { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1)
        setNumber(number + 1)
        setNumber(number + 1)
      }}>
        +3
      </button>
    </>
  )
}
```

这样点击按钮，⻚面渲染的`number`还是为`1`，不会为`3`，因为`setNumber`
之后，会触发⻚面重新渲染，当然渲染之前会运行一遍整个组件，但是本次运行中所有的`number`都为当前的`number`，即`0`
。当前的`state`就如同快照一般，被定格在了本次运行。

## state的批处理

在`demo2`中已经看出来了，并不是只要`setState`了，就会触发`dom`
的更新，而是会有一个批处理的特性。会在事件处理的函数执行完之后，再去更新`dom`。那么如何在这个函数内部，真正的做到`demo2`
想做的事情呢？接下来就引出`setState`的第二种写法，在此之前，先让我们看一下`setState`的`ts`接口定义。

```typescript
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]

type Dispatch<A> = (value: A) => void
type SetStateAction<S> = S | ((prevState: S) => S)
```

`useState`接受一个参数，参数的类型可为具体的值也可以为一个`function`
，在此先不解释这两者有何区别，会在下方的 [state的两种initialState](#state的两种initialstate)
中解释。可以看到`SetStateAction`也就是`setter`
，可以传入一个具体的值或为一个函数，这个函数会有一个形参，通过类型来看，与`state`
类型相同，当然其实这个参数就是上一次的`state`，那是否可以把`demo2`改造成以下的样子:

**demo 3**

```javascript
import { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1)
        setNumber(n => n + 1)
        setNumber(n => n + 1)
      }}>
        +3
      </button>
    </>
  )
}
```

这样点击一次按钮后，渲染到⻚面的值就会为3。

抽象一下，其实`setState`是一个队列，事件中的每次`set`都会把值扔到队列里，如果是`set`了一个
值，那就渲染这个值，如果是一个函数，就会渲染这个函数，当然这个函数的`preState`这个值，就要
看真正的`pre`是哪个`pre`了。

在`demo2`中，更新的队列为`[1, 1, 1]`

在`demo3`中，更新的队列为`[n => n + 1, n => n + 1, n => n + 1]`

值的一提的是，队列中的`preNumber`，是指队列中的`preNumber`，而非当前⻚面的`number`
，队列的数字也会覆盖方法，其实就是过一遍队列，看看`state`最终是什么，然后渲染到`dom`。

## state为object

在此之前，说一个题外话，在`useEffect`的`deps`中，引用了一个`object`会触发什么现象呢？

```javascript
const position = {
  x: 0,
  y: 0
}

useEffect(() => {
  console.log(`X坐标为${position.x}`)
  console.log(`Y坐标为${position.y}`)
}, [position])
```

答案是无论怎么更改`position`的`x`和`y`，`useEffect`的内容都不会再次被执行，在`deps`
的追踪中，追踪的是地址，而非值本身。当然如果使用`state`包裹，`React`
不会傻傻的继续只看地址，他会有更精准的计算。亦或真的有这种只需要在初始化初始一次的`state`，并且改变不触发`dom`
更新，可以考虑`useRef`。

**demo 4**

```javascript
import { useState } from 'react'

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  return (
    <div
      onPointerMove={e => {
        position.x = e.clientX
        position.y = e.clientY
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh'
      }}
    >
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: ' 50 %',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20
      }}/>
    </div>
  )
}
```

这样当鼠标移动时，`position`的值其实是被更改的，但是dom并不会更新。因为一次`dom`更新，还是要走那三步，其中第一步`触发`
，并没有被执行。因为如果是`state`，`React`会追踪你的`setState`，只用你主动调用`setter`的时候，才会`触发`，然后`整合`、`更新`。

## state为数组

其实数组就是`object`的另一种形式。
注意点其实就是别用更改原数组的方法: `reverse`、`sort`、`push`、`pop`、`unshift`、`shift`、`splice`、`arr[i]=xxx`

可以用: `concat`、`filter`、`map`、`lodash的deepClone`、`仅一层的asign或者拓展运算符`
如果非要对原数组进行增删改，就创建一个`copyArr`，对`copyArr`进行增删改，然后`set`。

## state的两种initialState

让我们先回顾一下setState的ts接口定义

```typescript
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]

type Dispatch<A> = (value: A) => void
type SetStateAction<S> = S | ((prevState: S) => S)
```

可以看到`initialState`的类型可以为一个具体的值，也可以是一个返回值的`function`。二者并没有很大的区别，如果是一个`function`
，也可以称作懒加载，只会在初始化的时候运行函数内的代码，在此之后不会再次运行，会直接读取上一次的`state`。

```javascript
const [count, setCount] = useState(0)

const [person, setPerson] = useState(() => {
  const name = "Leslie"
  const age = 24
  const level = "trash"
  return { name, age, level }
})
```

`initialState`为一个值，可以很清晰表明`state`的初始值，适用于计算量较小，状态比较简单的情况。

`initialState`为一个`function`，可以做一些初始化的复杂运算，更灵活的赋予初始化状态。二者在`setState`的时候，都可以接受`值`
或者`function`。

By the way，其实`initialState`为一个`function`的初衷是因为要做一些复杂运算，其实这个时候也可以考虑一下useReducer。


