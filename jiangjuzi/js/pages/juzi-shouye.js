// juzi-shouye — 首页（有状态：显示 textbookInfo）
// 源稿：imports/JuziShouye-1/index.tsx + App.tsx 热区
(function () {
  const F = "'Noto Sans SC',sans-serif";

  window.PAGES['juzi-shouye'] = {
    render() {
      const maskStyle =
        `-webkit-mask-image:url('${MASK_JUZI_GRADIENT}');mask-image:url('${MASK_JUZI_GRADIENT}');` +
        `-webkit-mask-mode:alpha;mask-mode:alpha;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;` +
        `-webkit-mask-position:-318px 27px;mask-position:-318px 27px;` +
        `-webkit-mask-size:616px 228px;mask-size:616px 228px;`;

      return `
<div style="position:absolute;inset:0;background:#000;">
  <!-- 返回箭头（首页装饰，不可点） -->
  ${backArrowSvg('A')}

  <!-- 左侧教材卡片 -->
  <div style="position:absolute;left:90px;top:100px;width:813px;height:228px;background:#23272e;border-radius:20px;"></div>

  <!-- 右侧扫描卡片：蓝色渐变 -->
  <div style="position:absolute;left:933px;top:100px;width:616px;height:228px;border-radius:20px;background:linear-gradient(114.214deg,rgb(193,221,255) 12.176%,rgb(92,163,255) 96.764%);"></div>
  <!-- 渐变蒙版装饰图 -->
  <div style="position:absolute;left:1251px;top:73px;width:324px;height:255px;${maskStyle}">
    <img src="${img('d79d69010abbbbc8e893ed391a56df415271c1cd')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.36;pointer-events:none;">
  </div>
  <!-- 扫描按钮底 + 文案 -->
  <div style="position:absolute;left:997px;top:216px;width:216px;height:77px;background:rgba(58,137,217,.81);border-radius:63px;"></div>
  <p style="position:absolute;left:1054px;top:231px;font-family:${F};font-weight:500;font-size:34px;line-height:46px;color:#fff;white-space:nowrap;">去扫描</p>
  <p style="position:absolute;left:989px;top:139px;font-family:${F};font-weight:500;font-size:32px;line-height:46px;color:#34557b;white-space:nowrap;">请扫描英语句子</p>

  <!-- 标题/教材信息 -->
  <p style="position:absolute;left:80px;top:12px;font-family:${F};font-weight:400;font-size:34px;line-height:46px;color:#7b8396;white-space:nowrap;">句子讲解</p>
  <p style="position:absolute;left:387px;top:129px;font-family:${F};font-weight:500;font-size:40px;line-height:46px;color:#fff;white-space:nowrap;">英语教材</p>
  <p style="position:absolute;left:387px;top:214px;width:398px;font-family:${F};font-weight:400;font-size:36px;line-height:46px;color:#cfd6e2;">${state.textbookInfo}</p>

  <!-- 教材封面 -->
  <div style="position:absolute;left:150px;top:84px;width:167px;height:216px;box-shadow:0px 4px 4px 0px rgba(0,0,0,.41);">
    <img src="${img('eef5da6be58a9524b1f6977930c57cf21aaa3977')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>
  <!-- image35 精灵图（局部裁切） -->
  <div style="position:absolute;left:823px;top:219px;width:39px;height:35px;overflow:hidden;pointer-events:none;">
    <img src="${img('4e872c4ba4ef1a6aa540c9c31822dbe4652f462a')}" alt="" style="position:absolute;left:0;top:0;height:100%;width:486.75%;max-width:none;">
  </div>
  <!-- image36 历史图标 -->
  <div style="position:absolute;left:1499px;top:18px;width:40px;height:41px;">
    <img src="${img('4831a22cce9da8a1c9e7c17ac3f6c0cc5b7704aa')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>
  <!-- image37 简介图标 -->
  <div style="position:absolute;left:1570px;top:18px;width:44px;height:44px;">
    <img src="${img('fbe542d8cf50331f4af01195ae8aa42f22d40c56')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>
  <!-- 右侧大装饰图 -->
  <div style="position:absolute;left:1202px;top:1px;width:368px;height:368px;">
    <img src="${img('3d72b1599c125aeb13373d75b3ad8d676cf287ef')}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;">
  </div>

  <!-- ===== 热区 ===== -->
  <div data-action="navigate" data-page="scan"     style="position:absolute;left:997px;top:216px;width:216px;height:77px;cursor:pointer;"></div>
  <div data-action="navigate" data-page="chooes-3" style="position:absolute;left:808px;top:205px;width:65px;height:65px;cursor:pointer;"></div>
  <div data-action="navigate" data-page="lishi"    style="position:absolute;left:1480px;top:8px;width:60px;height:60px;cursor:pointer;"></div>
  <div data-action="navigate" data-page="jianjie"  style="position:absolute;left:1555px;top:8px;width:65px;height:65px;cursor:pointer;"></div>
</div>`;
    }
  };
})();
