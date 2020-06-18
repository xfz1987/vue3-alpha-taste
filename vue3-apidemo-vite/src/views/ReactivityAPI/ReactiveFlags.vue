<template>
  <div>
    <pre>
      ReactiveFlags 是一个枚举值
      它的定义如下：
      <code>
          export cost enum ReactiveFlags {
          skip: '__v_skip',
          isReactive: '__v_isReactive',
          isReadonly: '__v_isReadonly',
          raw: '__v_raw',
          reactive: '__v_reactive',
          readonly: '__v_readonly'
        }
        作用：

        const obj = {
          [ReactiveFlags.skip]: true
        }

        // 不可代理对象
        const proxyObj = reactive(obj)

        console.log(isReactive(isReactive)) // false

        实际上 markRaw() 函数就是使用类似的方式实现的。所以我们不必像如上代码那么做，但是在一些高级场景或许会用到这些值

        下面简单介绍一下 ReactiveFlags 中各个值得作用：

          代理对象会通过 ReactiveFlags.raw 引用原始对象
          原始对象会通过 ReactiveFlags.reactive 或 ReactiveFlags.readonly 引用代理对象
          代理对象根据它是 reactive 或 readonly 的， 将 ReactiveFlags.isReactive 或 ReactiveFlags.isReadonly 属性值设置为 true。
      </code>
    </pre>
  </div>
</template>

<script>
export default {

}
</script>
