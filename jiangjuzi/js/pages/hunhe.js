// hunhe — 混合（帧高 348）
// 源稿：imports/Hunhe-1/index.tsx
(function () {
  const F = "'Noto Sans SC',sans-serif";
  window.PAGES['hunhe'] = {
    render() {
      return `
<div style="position:absolute;inset:0;background:#000;">
  <!-- Group：返回箭头（装饰，不可点，shell 加热区） -->
  ${backArrowSvg('A')}

  <!-- 第一行文案 -->
  <p style="position:absolute;left:125px;top:40px;width:1439px;height:42px;line-height:42px;font-family:${F};font-weight:400;font-size:36px;color:#cfd6e2;word-break:break-word;margin:0;">Don't eat too much meat!你有多少支铅笔?</p>
  <!-- image 21 -->
  <div style="position:absolute;left:80px;top:40px;width:29px;height:32px;">
    <img src="${img('be5470b88f898dc5989fa0565ef56f23e20b7a6a')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>

  <!-- 第二行文案 -->
  <p style="position:absolute;left:125px;top:98px;width:1439px;height:42px;line-height:42px;font-family:${F};font-weight:400;font-size:36px;color:#cfd6e2;word-break:break-word;margin:0;">Don't eat too much meat!How many pencils do you have?</p>
  <!-- image 22 -->
  <div style="position:absolute;left:80px;top:98px;width:29px;height:32px;">
    <img src="${img('be5470b88f898dc5989fa0565ef56f23e20b7a6a')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>

  <!-- Group2 → Group1：继续扫描按钮 -->
  <div style="position:absolute;left:650px;top:228px;width:340px;height:80px;background:#23272e;border:2px solid #8a97ff;border-radius:16px;box-shadow:0px 4px 25.4px 11px rgba(0,0,0,0.09);"></div>
  <p style="position:absolute;left:748px;top:246px;width:144px;height:46px;line-height:46px;font-family:${F};font-weight:400;font-size:36px;color:#abacff;word-break:break-word;margin:0;">继续扫描</p>
</div>`;
    }
  };
})();
