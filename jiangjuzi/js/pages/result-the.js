// result-the 包装器 — 驱动顶部页码、左右箭头、键盘切换
// 源稿：app/components/result-the-flow.tsx
// 三个变体页向 window.RESULT_THE[0..2] 注册各自的 render()
window.RESULT_THE = window.RESULT_THE || [];

(function () {
  let keyHandler = null;

  window.PAGES['result-the'] = {
    render() {
      const i = state.theIndex;
      const variant = window.RESULT_THE[i] || window.RESULT_THE[0];
      let h = variant ? variant() : '';

      // 顶部页码序列（1/2/3）三个可点击热区
      for (let n = 0; n < 3; n++) {
        h += `<div data-action="the-page" data-index="${n}" style="position:absolute;left:${726 + n * 64}px;top:12px;width:64px;height:58px;cursor:pointer;z-index:60;"></div>`;
      }
      // 左箭头
      if (i > 0) {
        h += `<div data-action="the-prev" style="position:absolute;left:6px;top:160px;width:76px;height:76px;cursor:pointer;z-index:60;"></div>`;
      }
      // 右箭头
      if (i < window.RESULT_THE.length - 1) {
        h += `<div data-action="the-next" style="position:absolute;left:1560px;top:160px;width:76px;height:76px;cursor:pointer;z-index:60;"></div>`;
      }
      return h;
    },

    mount() {
      keyHandler = (e) => {
        if (e.key === 'ArrowRight' && state.theIndex < window.RESULT_THE.length - 1) {
          state.theIndex++; render();
        } else if (e.key === 'ArrowLeft' && state.theIndex > 0) {
          state.theIndex--; render();
        }
      };
      window.addEventListener('keydown', keyHandler);
    },

    unmount() {
      if (keyHandler) { window.removeEventListener('keydown', keyHandler); keyHandler = null; }
    }
  };
})();
