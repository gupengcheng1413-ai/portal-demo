// result-the 新版 — 左右分屏句子讲解（使用设计稿直接还原）
// 左侧：句子列表（根据选中状态切换，但位置不变）
// 右侧：对应句子的解析内容
window.RESULT_THE = window.RESULT_THE || [];

(function () {
  const F = "'Noto Sans SC',sans-serif";

  window.PAGES['result-the'] = {
    mount(container) {
      // 禁用外层滚动容器的滚动，让右侧区域独立控制
      const scrollWrapper = document.getElementById('scrollWrapper');
      if (scrollWrapper) {
        scrollWrapper.style.overflowY = 'hidden';
      }
    },
    unmount() {
      // 恢复外层滚动容器的默认行为
      const scrollWrapper = document.getElementById('scrollWrapper');
      if (scrollWrapper) {
        scrollWrapper.style.overflowY = 'auto';
      }
    },
    render() {
      const selectedIndex = state.theIndex || 0;

      // 右侧内容由 result-the1/2/3.js 提供
      const analysisContent = window.RESULT_THE[selectedIndex]
        ? window.RESULT_THE[selectedIndex]()
        : '<p style="color:#fff;padding:40px;">内容加载中...</p>';

      return `
<div style="position:absolute;inset:0;background:#000;">

  <!-- 左侧：句子列表（根据选中状态显示对应图片，只显示顶部348px） -->
  <div style="position:absolute;left:0;top:0;width:656px;height:348px;overflow:hidden;">
    <!-- 显示对应的左侧图片 -->
    <img alt="" src="the${selectedIndex + 1}_left.png" style="display:block;width:656px;height:auto;">

    <!-- 返回按钮热区 -->
    ${backArrowSvg('B')}

    <!-- 句子点击热区（覆盖文本区域） -->
    <div data-action="the-page" data-index="0" style="position:absolute;left:0;top:20px;width:656px;height:110px;cursor:pointer;"></div>
    <div data-action="the-page" data-index="1" style="position:absolute;left:0;top:150px;width:656px;height:70px;cursor:pointer;"></div>
    <div data-action="the-page" data-index="2" style="position:absolute;left:0;top:220px;width:656px;height:80px;cursor:pointer;"></div>
  </div>

  <!-- 右侧：解析内容区域 -->
  <div style="position:absolute;left:656px;top:0;width:984px;height:348px;overflow-y:auto;overflow-x:hidden;background:#000;">
    ${analysisContent}
  </div>

</div>
      `;
    }
  };
})();
