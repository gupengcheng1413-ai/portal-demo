// result-the 新版 — 左右分屏句子讲解
// 左侧：3个句子列表，点击切换
// 右侧：对应句子的解析内容
window.RESULT_THE = window.RESULT_THE || [];

(function () {
  const F = "'Noto Sans SC',sans-serif";

  // 3个句子的完整数据
  const SENTENCES = [
    {
      id: 0,
      text: "The grapes are small, round, and smooth.",
      translation: "这些葡萄又小、又圆、又光滑。",
      // 解析内容由 result-the1.js 提供
    },
    {
      id: 1,
      text: "The bananas are long.",
      translation: "这些香蕉很长。",
      // 解析内容由 result-the2.js 提供
    },
    {
      id: 2,
      text: "Apples and oranges make you strong.",
      translation: "苹果和橙子让你更强壮。",
      // 解析内容由 result-the3.js 提供
    }
  ];

  window.PAGES['result-the'] = {
    render() {
      const selectedIndex = state.theIndex || 0;
      const selectedSentence = SENTENCES[selectedIndex];

      // 获取选中句子的解析内容（由对应的 result-theX.js 渲染）
      const analysisContent = window.RESULT_THE[selectedIndex] ? window.RESULT_THE[selectedIndex]() : '';

      return `
<div style="position:absolute;inset:0;background:#000;">

  <!-- 左侧：句子列表区域 -->
  <div style="position:absolute;left:0;top:0;width:656px;height:932px;background:#000;overflow:hidden;">

    <!-- 返回按钮 -->
    ${backArrowSvg('A')}

    <!-- 句子列表容器 -->
    <div style="position:absolute;left:80px;top:30px;width:560px;height:872px;overflow-y:auto;overflow-x:hidden;">
      ${SENTENCES.map((sent, index) => {
        const isSelected = selectedIndex === index;
        return `
        <div
          class="sentence-item"
          data-action="the-page"
          data-index="${index}"
          style="position:relative;margin-bottom:30px;padding:15px;cursor:pointer;transition:all 0.3s;border-radius:12px;${isSelected ? 'background:rgba(52, 248, 255, 0.1);' : ''}"
        >
          <!-- 句子文本 -->
          <p style="margin:0;word-break:break-word;font-family:${F};line-height:50px;font-style:normal;color:#fff;font-size:36px;font-weight:${isSelected ? '700' : '400'};transition:all 0.3s;">
            ${sent.text}
          </p>

          <!-- 中文翻译 -->
          <p style="margin:12px 0 0 0;font-family:${F};line-height:40px;color:#7b8396;font-size:28px;">
            ${sent.translation}
          </p>

          <!-- 选中指示器 -->
          ${isSelected ? `<div style="position:absolute;left:-5px;top:50%;transform:translateY(-50%);width:5px;height:80%;background:#34F8FF;border-radius:3px;"></div>` : ''}
        </div>
      `;
      }).join('')}
    </div>
  </div>

  <!-- 中间分隔线 -->
  <div style="position:absolute;left:656px;top:0;width:2px;height:932px;background:#333;"></div>

  <!-- 右侧：解析内容区域（由 result-theX.js 渲染） -->
  <div style="position:absolute;left:658px;top:0;width:982px;height:932px;background:#000;">
    ${analysisContent}
  </div>

</div>
      `;
    }
  };
})();
