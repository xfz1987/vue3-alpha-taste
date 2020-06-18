<template>
  <div>
    <pre>
      track() 和 trigger() 是依赖收集的核心
      track() 用来跟踪收集依赖(收集 effect),trigger() 用来触发响应(执行 effect)
      它们需要配合 effect() 函数使用
      <code style="color:#000">
        const obj = { foo: 1 }
        effect(() => {
          console.log(obj.foo)
          track(obj, TrackOpTypes.GET, 'foo')
        })
        obj.foo = 2
        trigger(obj, TrackOpTypes.SET, 'foo')
      </code>
      <div>
        如上代码所示，obj 是一个普通的对象，注意它并非是响应式对象。接着使用 effect() 函数定义了一个副作用函数，
        读取并打印 obj.foo 的值，由于 obj 是一个普通对象，因此它并没有收集依赖的能力，
        为了收集到依赖，我们需要手动调用 track() 函数，track() 函数接收三个参数：
        target：要跟踪的目标对象，这里就是 obj<br/>
        跟踪操作的类型：obj.foo 是读取对象的值，因此是 'get'<br>
        key：要跟踪目标对象的 key，我们读取的是 foo，因此 key 是 foo<br>
        这样，我们本质上是手动建立一种数据结构
        <code style="color:#000">
          // 伪代码
          [target]: {
            [key]: [effect1, effect2, ...]
          }
          // 简单的理解，effect 与对象和具体操作的 key，effect 与目标对象 target 已经建立了联系，
          那么当然就可以想办法通过 target ----> key 进而取到 effect ，然后执行它们，
          而这就是 trigger() 函数做的事情，所以在调用 trigger 函数时我们要指定目标对象和相应的key值
        </code>
        这个过程是可以自动完成的，而不需要开发者手动调用 track() 和 trigger() 函数，想要自定完成依赖收集，
        那么就需要拦截诸如：设置、读取等对值得操作方法才行。至于实现方式，
        无论是 Object.defineProperty 还是 Proxy 那就是具体的技术形式了
      </div>
    </pre>
  </div>
</template>

<script>
export default {

}
</script>
