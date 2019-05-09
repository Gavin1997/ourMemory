// disabled 置灰指令
export default {
  inserted(el, binding) {
    if (binding.value && binding.value.disabled) {
      el.classList.add('system-model-disabled');
    }
  }
};
