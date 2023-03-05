import { onMounted, onUnmounted } from 'vue'
import _ from 'lodash'

interface IOptions {
  targetX: number
  targetY: number
  targetRatio: number
}
export default function useScalePage(
  option: IOptions = {
    targetX: 1920,
    targetY: 1080,
    targetRatio: 16 / 9
  }
) {
  const resizeChange = _.throttle(function () {
    triggerScale()
  }, 100)

  onMounted(function () {
    triggerScale()
    window.addEventListener('resize', resizeChange)
  })

  onUnmounted(function () {
    console.log('useScale onUnmounted')
    window.removeEventListener('resize', resizeChange)
  })
  function triggerScale() {
    const targetX = option.targetX
    const targetY = option.targetY
    const targetRatio = option.targetRatio

    // 1.拿到当前屏幕的宽高
    const currentX = document.documentElement.clientWidth || document.body.clientWidth
    const currentY = document.documentElement.clientHeight || document.body.clientHeight

    // 2.计算缩放的比例
    let scaleRatio = currentX / targetX

    // 当前的屏幕宽高比
    const currentRatio = currentX / currentY
    if (currentRatio > targetRatio) {
      scaleRatio = currentY / targetY
      // 3.设置缩放( 类似图片放大 )
      document.body.setAttribute(
        'style',
        `width:${targetX}px;height:${targetY}px;transform: scale(${scaleRatio})  translateX(-50%); left:50%`
      )
    } else {
      // 3.设置缩放( 类似图片放大 )
      document.body.setAttribute(
        'style',
        `width:${targetX}px;height:${targetY}px;transform: scale(${scaleRatio})`
      )
    }
  }
}
