<template>
  <div>
    <div>{{ refVal }}</div>
    <pre>
      reactive() 函数可以代理一个对象，但不能代理基本类型值，例如字符串、数字、boolean 等，
      因此我们需要使用 ref() 函数来间接对基本类型值进行处理

      ref 是响应式的：

      isRef()函数来判断一个值是不是 ref

      toRef()丢失响应式 reactivity api 的一个问题
      toRef() 函数用来把一个响应式对象的的某个 key 值转换成 ref

      oRef() 的一个问题是定义起来极其麻烦，一次只能转换一个 key，
      因此我们可以封装一个函数，直接把一个响应式对象的所有key都转成 ref，这就是 toRefs()

      自动脱ref的value
      问题虽然解决了，但是带来了新的问题，即我们需要通过 .value 访问值才行，
      这就带来了另外一个问题：我们怎么知道一个值是不是 ref，需不需要通过 .value 来访问呢
      <code style="#000">
        const obj = reactive({ foo: 1 })
        const obj2 = reactive({...toRefs(obj)})
        effect(() => {
          console.log(obj2.foo)
        })
        obj.foo = 2
      </code>

      使用 ref() 函数时，目的是为了引用原始类型值，
      例如：ref(false)。但仍然可以引用非基本类型值
      <code style="#000">
        const refObj = ref({ foo: 1 })
        refObj.value.foo = 2;
      </code>

      shallowRef() 顾名思义，它只代理 ref 对象本身，
      也就是说只有 .value 是被代理的，而 .value 所引用的对象并没有被代理
      <code style="#000">
        const refObj = shallowRef({ foo: 1 })
        refObj.value.foo = 2; // 无效
      </code>

      unref() 给它一个值，如果这个值是 ref 就返回 .value，否则原样返回
    </pre>
  </div>
</template>

<script>
import { ref, effect, reactive, toRef, toRefs } from '@vue/reactivity'

export default {
  setup() {
    const refVal = ref(0)
    effect(() => {
      console.log(refVal.value)
    })
    refVal.value = 1;

    const obj = reactive({ foo: 1 })
    const obj2 = { foo: obj.foo }
    const obj3 = { foo: toRef(obj, 'foo') }

    effect(() => {
      console.log('obj2 change', obj2.foo) // 1
    })

    effect(() => {
      console.log('obj3 change', obj3.foo.value) // 1 2
    })

    obj.foo = 2 // 设置 obj.foo 显然无效

    const obj4 = reactive({ bar: 1 })
    const obj5 = {...toRefs(obj4)}

    effect(() => {
      console.log('obj5 change', obj5.bar.value)
    })

    obj4.bar = 2;

    return {
      refVal
    }
  }
}
</script>
