<template>
  <div>
    <pre>
      <code style="color: #000;">
      const obj = reactive({ count: 1 })

      effect(() => {
        console.log(obj.count) // 1 2 3 4
      })

      obj.count++
      obj.count++
      obj.count++ // 4
      </code>
      定义响应式对象 obj，并在 effect 内读取它的值，
      这样 effect 与数据之间就会建立“联系”，
      接着我们连续三次修改 obj.count 的值，会发现 console.log 语句共打印四次（包括首次执行）

      想像一下，假如我们只需要把数据的最终的状态应用到副作用中，而不是每次变化都重新执行一次副作用函数，
      这将对性能有所提升。实际上我们可以为 effect 传递第二个参数作为选项，可以指定“调度器”。
      所谓调度器就是用来指定如何运行副作用函数的

      我们指定 effect 的调度器为 queueJob，job 实际上就是副作用函数，
      我们将副作用函数缓冲到 queue 队列中，并在 microtask 中刷新队列，
      由于队列不会重复缓冲相同的 job，因此最终只会执行一次副作用函数。
      这实际上就是 watchEffect() 函数的实现思路
    </pre>
  </div>
</template>

<script>
import { reactive, effect } from '@vue/reactivity'

export default {
  setup() {
    const obj = reactive({ count: 1 }) // 1 4

  //   effect(() => {
  //     console.log(obj.count) // 1 2 3 4
  //   })

    effect(() => {
      console.log(obj.count)
    }, {
      scheduler: queueJob
    })

    const queue = [];
    let isFlushing = false

    function queueJob(job) {
      if (!queue.includes(job)) queue.push(job)
      if (!isFlushing) {
        isFlushing = true
        Promise.resolve().then(() => {
          let fn
          while (fn = queue.shift()) {
            fn()
          }
        })
      }
    }

    obj.count++
    obj.count++
    obj.count++
  }
}
</script>
