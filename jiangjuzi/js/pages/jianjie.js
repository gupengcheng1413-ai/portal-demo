// jianjie — 功能介绍（帧高 348）
// 源稿：imports/Jianjie-1/index.tsx
(function () {
  const F = "'Noto Sans SC',sans-serif";
  // 内联蒙版 data-URI（来自 svg-wnc8r.tsx）
  const MASK_40 = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%20732%20238%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20id%3D%22Rectangle%20159%22%20d%3D%22M0%2014C0%206.26801%206.26801%200%2014%200H718C725.732%200%20732%206.26801%20732%2014V224C732%20231.732%20725.732%20238%20718%20238H14C6.26803%20238%200%20231.732%200%20224V14Z%22%20fill%3D%22var(--fill-0%2C%20%2323272E)%22%2F%3E%0A%3C%2Fsvg%3E%0A";
  const MASK_38 = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%20732%20238%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20id%3D%22Rectangle%20159%22%20d%3D%22M0%2014C0%206.26801%206.26801%200%2014%200H718C725.732%200%20732%206.26801%20732%2014V224C732%20231.732%20725.732%20238%20718%20238H14C6.26803%20238%200%20231.732%200%20224V14Z%22%20fill%3D%22var(--fill-0%2C%20%23363F2D)%22%2F%3E%0A%3C%2Fsvg%3E%0A";

  window.PAGES['jianjie'] = {
    render() {
      return `
<div style="position:absolute;inset:0;background:#000;">
  <!-- 返回箭头（装饰，shell 添加热区） -->
  ${backArrowSvg('A')}

  <!-- 标题 -->
  <p style="position:absolute;left:80px;top:12px;font-family:${F};font-weight:400;font-size:34px;line-height:46px;color:#7b8396;white-space:nowrap;word-break:break-word;margin:0;">功能介绍</p>

  <!-- Group3 → Group1：左卡片 -->
  <div style="position:absolute;left:80px;top:90px;width:732px;height:238px;background:#4c4d4d;border-radius:14px;"></div>
  <div style="position:absolute;left:148px;top:-23px;width:623px;height:395px;-webkit-mask-image:url('${MASK_40}');mask-image:url('${MASK_40}');-webkit-mask-mode:alpha;mask-mode:alpha;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:-68px 113px;mask-position:-68px 113px;-webkit-mask-size:732px 238px;mask-size:732px 238px;">
    <img src="${img('9d72c9eb7b19409d1c922ed59779e493843ecc4b')}" alt="" style="position:absolute;inset:0;max-width:none;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>

  <!-- Group5 → Group4 → Group2：右卡片 -->
  <div style="position:absolute;left:828px;top:90px;width:732px;height:238px;background:#655a3f;border-radius:14px;"></div>
  <div style="position:absolute;left:1013px;top:24px;width:584px;height:370px;-webkit-mask-image:url('${MASK_38}');mask-image:url('${MASK_38}');-webkit-mask-mode:alpha;mask-mode:alpha;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:-185px 66px;mask-position:-185px 66px;-webkit-mask-size:732px 238px;mask-size:732px 238px;">
    <img src="${img('b24607f12aebe39717ac4db23536bce65ac40721')}" alt="" style="position:absolute;inset:0;max-width:none;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>
  <div style="position:absolute;left:828px;top:53px;width:227px;height:319px;background:#2c3425;-webkit-mask-image:url('${MASK_38}');mask-image:url('${MASK_38}');-webkit-mask-mode:alpha;mask-mode:alpha;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:0px 37px;mask-position:0px 37px;-webkit-mask-size:732px 238px;mask-size:732px 238px;"></div>

  <!-- Group5：image 39 -->
  <div style="position:absolute;left:858px;top:120px;width:197px;height:66px;">
    <img src="${img('34cda61357548c7f693cd653248a800423de4bbd')}" alt="" style="position:absolute;inset:0;max-width:none;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>

  <!-- image 42 -->
  <div style="position:absolute;left:110px;top:120px;width:252px;height:66px;">
    <img src="${img('47bc7343a739ab09a0d487c7994bc2cbfa0f2183')}" alt="" style="position:absolute;inset:0;max-width:none;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>
</div>`;
    }
  };
})();
