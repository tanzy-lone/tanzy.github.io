interface NewHTMLElement extends HTMLElement {
  __handleClick__: any
}

const debounce = {
  mounted(el: NewHTMLElement, binding: any) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function'
    }
    let timer: any = null
    el.__handleClick__ = function () {
      if (timer) {
        clearInterval(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 2000)
    }
    el.addEventListener('click', el.__handleClick__)
  },
  beforeUnmount(el: NewHTMLElement) {
    el.removeEventListener('click', el.__handleClick__)
  }
}

export default debounce
