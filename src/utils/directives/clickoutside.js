// 点击外部关闭功能
export default {
  bind: function(el, binding) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    el._vueClickOutside_ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  unbind: function(el) {
    document.removeEventListener('click', el._vueClickOutside_);
    delete el._vueClickOutside_;
  }
};
