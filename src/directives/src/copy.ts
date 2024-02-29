import { ElMessage } from 'element-plus'
const copy = {
  mounted(el: HTMLElement & { copyData: any }, binding: any) {
    el.copyData = binding.value
    el.addEventListener('click', handleClick)
  },
  updated(el: HTMLElement & { copyData: any }, binding: any) {
    el.copyData = binding.value
  },
  beforeUnmount(el: HTMLElement) {
    el.removeEventListener('click', handleClick)
  }
}

function handleClick(this: any) {
  const input = document.createElement('input')
  input.value = (this as any).copyData.toLocaleString()
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  ElMessage({
    message: '复制成功',
    type: 'success'
  })
}

export default copy
