<template>
  <div id="main" style="width: 100%;height: 400px;"></div>
</template>

<script>
import { reactive, onMounted } from '@vue/composition-api'
import echarts from 'echarts'
import 'echarts/map/js/china'

export default {
  setup () {
    const state = reactive({
    })

    const initMap = () => {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'))

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '粉丝分布',
          x: 'center',
          textStyle: {
            color: '#f60'
          }
        },
        tooltip: {
          trigger: 'item',
          // 地图： {a}系列名称， {b}区域名称，{c}合并数值，{d}无
          formatter: '城市名：{b}<br/>粉丝数：{c}'
        },
        visualMap: {
          min: 800,
          max: 20000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        // 文字展示
        series: [{
          type: 'map',
          map: 'china',
          data: [
            { name: '北京', value: 18000 },
            { name: '新疆', value: 1000 },
            { name: '黑龙江', value: 10000 },
            { name: '西藏', value: 300 }
          ],
          label: {
            show: true,
            color: 'red',
            fontSize: 8
          },
          // 边框颜色
          itemStyle: {
            borderColor: 'blue'
          },
          // 高粱下状态
          emphasis: {
            label: {
              color: '#fff',
              fontSize: 10
            },
            itemStyle: {
              borderColor: 'blue',
              areaColor: '#1bc1ad'
            }
          }
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }

    onMounted(() => {
      initMap()
    })
    return state
  }
}
</script>

<style scoped>

</style>
