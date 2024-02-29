interface NewHTMLElement extends HTMLElement {
  __handleClick__: any
  disabled: boolean
}

const throttle = {
  mounted(el: NewHTMLElement, binding: any) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function'
    }
    let timer: any = null
    el.__handleClick__ = function () {
      if (timer) {
        clearTimeout(timer)
      }
      if (!el.disabled) {
        el.disabled = true
        binding.value()
        timer = setTimeout(() => {
          el.disabled = false
        }, 2000)
      }
    }
    el.addEventListener('click', el.__handleClick__)
  },
  beforeUnmount(el: NewHTMLElement) {
    el.removeEventListener('click', el.__handleClick__)
  }
}

export default throttle
