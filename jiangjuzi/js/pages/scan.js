// scan — 扫描中（3 秒后自动跳转 result-book）
// 源稿：imports/Scan/index.tsx
(function () {
  const F = "'Noto Sans SC',sans-serif";
  let timer = null;

  window.PAGES['scan'] = {
    render() {
      return `
<div style="position:absolute;inset:0;background:#000;">
  ${backArrowSvg('A')}
  <div style="position:absolute;left:80px;top:12px;display:flex;align-items:center;line-height:46px;">
    <span style="display:inline-block;width:3px;height:38px;background:#7b8396;vertical-align:middle;margin-right:4px;animation:cursorBlink 1s step-start infinite;"></span>
    <span style="font-family:${F};font-weight:400;color:#7b8396;font-size:34px;line-height:46px;white-space:nowrap;">提示：请扫描英语句子</span>
  </div>
</div>`;
    },
    mount() {
      timer = setTimeout(() => navigate('result-book'), 3000);
    },
    unmount() {
      if (timer) { clearTimeout(timer); timer = null; }
    }
  };
})();
