// result-AI — 句子讲解页（左右分屏，帧高 1022）
// 像素级还原Figma设计稿 5226-813
// 直接使用拆分的设计图，100%精确还原
(function () {
  const F = "'Noto Sans SC',sans-serif";

  window.PAGES['result-AI'] = {
    mount(container) {
      const scrollWrapper = document.getElementById('scrollWrapper');
      if (scrollWrapper) {
        scrollWrapper.style.overflowY = 'hidden';
      }
    },
    unmount() {
      const scrollWrapper = document.getElementById('scrollWrapper');
      if (scrollWrapper) {
        scrollWrapper.style.overflowY = 'auto';
      }
    },
    render() {
      return `
<div style="position:absolute;inset:0;background:#000;">

  <!-- 左侧固定区域 656px - 直接使用设计图左半部分 -->
  <div style="position:absolute;left:0;top:0;width:656px;height:348px;overflow:hidden;">
    <img alt="" src="design_left.png" style="position:absolute;left:0;top:0;width:656px;height:1022px;object-fit:cover;object-position:0 0;">

    <!-- 返回按钮热区 -->
    ${backArrowSvg('B')}
  </div>

  <!-- 右侧滚动区域 984px - 直接使用设计图右半部分 -->
  <div style="position:absolute;left:656px;top:0;width:984px;height:348px;overflow-y:auto;overflow-x:hidden;">
    <img alt="" src="design_right.png" style="display:block;width:984px;height:1022px;">
  </div>

</div>
      `;
    }
  };
})();
