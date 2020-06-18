import { reactive } from 'vue';

let timer = {
  t: 0
}

let observer = reactive(timer)

let begin = Date.now()

setInterval(() => {
  observer.t = Math.round((Date.now() - begin) / 1000);
}, 500);

export default observer;
