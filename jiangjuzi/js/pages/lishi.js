// lishi — 历史记录（帧高 410）
// 源稿：imports/Lishi-1/index.tsx + App.tsx 热区
(function () {
  const F = "'Noto Sans SC',sans-serif";
  window.PAGES['lishi'] = {
    render() {
      return `
<div style="position:absolute;inset:0;background:#000;">
  <!-- 返回箭头（path p39072e00 → 'A'，不可点，shell 加热区） -->
  ${backArrowSvg('A')}

  <!-- 标题 -->
  <p style="position:absolute;left:80px;top:12px;margin:0;font-family:${F};font-weight:400;font-size:34px;line-height:46px;color:#7b8396;white-space:nowrap;word-break:break-word;">历史记录</p>

  <!-- Group5：卡片1（80,84）+ 文案 -->
  <div style="position:absolute;left:80px;top:84px;width:732px;height:90px;background:#23272e;border-radius:14px;"></div>
  <div style="position:absolute;left:110px;top:84px;width:680px;height:90px;display:flex;flex-direction:column;justify-content:center;font-family:${F};font-weight:400;font-size:36px;color:#7b8396;letter-spacing:0.5px;">
    <p style="margin:0;line-height:60px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">The grapes are small,round,and smooth.The bananas are long.Apples and oranges make you strong.</p>
  </div>

  <!-- Group6：卡片3（80,190）+ 文案 -->
  <div style="position:absolute;left:80px;top:190px;width:732px;height:90px;background:#23272e;border-radius:14px;"></div>
  <div style="position:absolute;left:110px;top:190px;width:680px;height:90px;display:flex;flex-direction:column;justify-content:center;font-family:${F};font-weight:400;font-size:36px;color:#7b8396;letter-spacing:0.5px;">
    <p style="margin:0;line-height:60px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">I can greet people and show friendlin…</p>
  </div>

  <!-- Group7：卡片4（828,190）+ 文案 -->
  <div style="position:absolute;left:828px;top:190px;width:732px;height:90px;background:#23272e;border-radius:14px;"></div>
  <div style="position:absolute;left:858px;top:190px;width:680px;height:90px;display:flex;flex-direction:column;justify-content:center;font-family:${F};font-weight:400;font-size:36px;color:#7b8396;letter-spacing:0.5px;">
    <p style="margin:0;line-height:60px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Don't eat too much meat!你有多少支…</p>
  </div>

  <!-- Group8：卡片2（828,84）+ 文案 -->
  <div style="position:absolute;left:828px;top:84px;width:732px;height:90px;background:#23272e;border-radius:14px;"></div>
  <div style="position:absolute;left:858px;top:84px;width:680px;height:90px;display:flex;flex-direction:column;justify-content:center;font-family:${F};font-weight:400;font-size:36px;color:#7b8396;letter-spacing:0.5px;">
    <p style="margin:0;line-height:60px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Don't eat too much meat!  </p>
  </div>

  <!-- Group10：卡片5（80,296）+ 文案 -->
  <div style="position:absolute;left:80px;top:296px;width:732px;height:90px;background:#23272e;border-radius:14px;"></div>
  <div style="position:absolute;left:110px;top:296px;width:680px;height:90px;display:flex;flex-direction:column;justify-content:center;font-family:${F};font-weight:400;font-size:36px;color:#7b8396;letter-spacing:0.5px;">
    <p style="margin:0;line-height:60px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">animal</p>
  </div>

  <!-- image 4 -->
  <div style="position:absolute;left:1578px;top:281px;width:46px;height:47px;">
    <img src="${img('b3799fe0bc1c568cb443bf6daaeec4cb89984258')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>

  <!-- ===== 热区 ===== -->
  <div data-action="navigate" data-page="result-the"  style="position:absolute;left:80px;top:84px;width:732px;height:90px;cursor:pointer;"></div>
  <div data-action="navigate" data-page="result-AI"   style="position:absolute;left:828px;top:84px;width:732px;height:90px;cursor:pointer;"></div>
  <div data-action="navigate" data-page="result-book" style="position:absolute;left:80px;top:190px;width:732px;height:90px;cursor:pointer;"></div>
  <div data-action="navigate" data-page="hunhe"        style="position:absolute;left:828px;top:190px;width:732px;height:90px;cursor:pointer;"></div>
  <div data-action="navigate" data-page="yinwen-chaci" style="position:absolute;left:80px;top:296px;width:732px;height:90px;cursor:pointer;"></div>
</div>`;
    }
  };
})();
