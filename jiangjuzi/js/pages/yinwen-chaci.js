// yinwen-chaci — 英文查词（帧高 348）
// 源稿：imports/YinwenChaci-1/index.tsx
(function () {
  const F = "'Noto Sans SC',sans-serif";

  // 去查词按钮的渐变蒙版（svg-sxe3f.tsx imgImage23：圆角矩形 + 投影滤镜）
  const MASK_23 = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%20412.8%20152.8%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Rectangle%20169%22%20filter%3D%22url(%23filter0_d_1_406)%22%3E%0A%3Crect%20x%3D%2236.4%22%20y%3D%2232.4%22%20width%3D%22340%22%20height%3D%2280%22%20rx%3D%2216%22%20fill%3D%22url(%23paint0_linear_1_406)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_1_406%22%20x%3D%221.90735e-06%22%20y%3D%221.90735e-06%22%20width%3D%22412.8%22%20height%3D%22152.8%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeMorphology%20radius%3D%2211%22%20operator%3D%22dilate%22%20in%3D%22SourceAlpha%22%20result%3D%22effect1_dropShadow_1_406%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2212.7%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.09%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_1_406%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_1_406%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_1_406%22%20x1%3D%2236.4%22%20y1%3D%2272.4%22%20x2%3D%22376.4%22%20y2%3D%2272.4%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DCA9%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23087DF2%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A";

  function mask(pos) {
    return `-webkit-mask-image:url('${MASK_23}');mask-image:url('${MASK_23}');` +
      `-webkit-mask-mode:alpha;mask-mode:alpha;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;` +
      `-webkit-mask-position:${pos};mask-position:${pos};` +
      `-webkit-mask-size:412.801px 152.8px;mask-size:412.801px 152.8px;`;
  }

  window.PAGES['yinwen-chaci'] = {
    render() {
      return `
<div style="position:absolute;inset:0;background:#000;">
  ${backArrowSvg('A')}

  <!-- 原文 animal -->
  <p style="position:absolute;left:125px;top:33px;width:1439px;height:42px;font-family:${F};font-weight:400;font-size:36px;line-height:42px;color:#cfd6e2;word-break:break-word;margin:0;">animal</p>
  <div style="position:absolute;left:80px;top:40px;width:29px;height:32px;">
    <img src="${img('be5470b88f898dc5989fa0565ef56f23e20b7a6a')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>

  <!-- 译文 动物 -->
  <p style="position:absolute;left:125px;top:98px;width:1439px;height:42px;font-family:${F};font-weight:400;font-size:36px;line-height:42px;color:#cfd6e2;word-break:break-word;margin:0;">动物</p>
  <div style="position:absolute;left:80px;top:98px;width:29px;height:32px;">
    <img src="${img('be5470b88f898dc5989fa0565ef56f23e20b7a6a')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>

  <!-- 去查词按钮：青蓝渐变底 + 边框 -->
  <div style="position:absolute;left:835px;top:228px;width:340px;height:80px;border-radius:16px;background:linear-gradient(to right,#00dca9,#087df2);">
    <div aria-hidden="true" style="position:absolute;inset:-2px;border:2px solid #1166da;border-radius:18px;box-shadow:0px 4px 25.4px 11px rgba(0,0,0,.09);pointer-events:none;"></div>
  </div>
  <!-- 蒙版图（image 23 形状裁切 image 24） -->
  <div style="position:absolute;left:826px;top:212px;width:361px;height:120px;${mask('-27.4px -16.4px')}">
    <img src="${img('941cffcdb8a319c45ae3b88ddea8996e60f29c2c')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>
  <p style="position:absolute;left:960px;top:246px;width:149px;height:46px;font-family:${F};font-weight:500;font-size:36px;line-height:46px;color:#fff;text-transform:uppercase;text-shadow:0px 4px 19.1px rgba(7,46,155,.35);word-break:break-word;margin:0;${mask('-161.4px -50.4px')}">去查词</p>

  <!-- 继续扫描按钮：描边 -->
  <div style="position:absolute;left:465px;top:228px;width:340px;height:80px;background:#23272e;border:2px solid #8a97ff;border-radius:16px;box-shadow:0px 4px 25.4px 11px rgba(0,0,0,.09);"></div>
  <p style="position:absolute;left:563px;top:246px;width:144px;height:46px;font-family:${F};font-weight:400;font-size:36px;line-height:46px;color:#abacff;word-break:break-word;margin:0;">继续扫描</p>
</div>`;
    }
  };
})();
