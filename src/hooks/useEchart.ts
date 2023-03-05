import { ref, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import _ from 'lodash'
export default function useEchart(divEl: HTMLElement) {
  const echartInstance = ref<any>(null)
  echartInstance.value = echarts.init(divEl, 'dark', { renderer: 'svg' })
  onUnmounted(() => {
    echartInstance.value.dispose()
  })

  function resizeEchart() {
    echartInstance.value.resize()
  }

  function setOption(option: any) {
    echartInstance.value.setOption(option)
  }
  return {
    resizeEchart,
    setOption,
    echartInstance
  }
}
