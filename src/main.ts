import '@/styles/reset.css'
import '@/styles/common.css'

document.addEventListener('DOMContentLoaded', () => {
  import('./demo/1')
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <canvas id="canvas"></canvas>
  </div>
`

