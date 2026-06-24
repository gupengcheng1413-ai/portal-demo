// result-split — 左右分屏句子讲解页（帧高 932）
// 左侧：句子列表（可滑动）
// 右侧：选中句子的解析内容
(function () {
  const F = "'Noto Sans SC',sans-serif";

  // 示例句子数据
  const SENTENCES = [
    {
      id: 1,
      text: "Don't eat too much meat.",
      translation: "不要吃太多肉。",
      analysis: {
        title: "句子点拨",
        image: "817edf6b30a267aefdd561990d0c28dfcc4ecdf6",
        mainSentence: "Don't eat too much meat.",
        points: [
          { word: "Don't", color: "#008989", desc: "否定祈使句，表示劝告或禁止" },
          { word: "too much", color: "#0B84E7", desc: "太多，修饰不可数名词" },
          { word: "meat", color: "#FF519F", desc: "肉，不可数名词" }
        ],
        explanation: "这是一个否定祈使句，用来劝告对方不要做某事。Don't 是 do not 的缩写，后面接动词原形。too much 表示\"太多\"，用来修饰不可数名词。",
        grammar: "否定祈使句结构：Don't + 动词原形 + 其他",
        examples: [
          "Don't be late. 不要迟到。",
          "Don't worry. 别担心。"
        ]
      }
    },
    {
      id: 2,
      text: "The grapes are small, round, and smooth.",
      translation: "这些葡萄又小、又圆、又光滑。",
      analysis: {
        title: "句子点拨",
        image: "817edf6b30a267aefdd561990d0c28dfcc4ecdf6",
        mainSentence: "The grapes are small, round, and smooth.",
        points: [
          { word: "small", color: "#008989", desc: "小的" },
          { word: "round", color: "#0B84E7", desc: "圆的" },
          { word: "smooth", color: "#FF519F", desc: "光滑的" }
        ],
        explanation: "这是一个主系表结构的句子，使用了并列形容词来描述葡萄的特点。三个形容词用逗号和and连接。",
        grammar: "主系表结构：主语 + be动词 + 形容词",
        examples: [
          "The apple is red and sweet. 苹果又红又甜。",
          "The sky is blue and clear. 天空又蓝又清澈。"
        ]
      }
    },
    {
      id: 3,
      text: "I like reading books.",
      translation: "我喜欢读书。",
      analysis: {
        title: "句子点拨",
        image: "817edf6b30a267aefdd561990d0c28dfcc4ecdf6",
        mainSentence: "I like reading books.",
        points: [
          { word: "like", color: "#008989", desc: "喜欢" },
          { word: "reading", color: "#0B84E7", desc: "动名词，做宾语" }
        ],
        explanation: "like后面可以接动名词（v-ing）或不定式（to do），表示喜欢做某事。",
        grammar: "like + doing / to do",
        examples: [
          "I like swimming. 我喜欢游泳。",
          "She likes to dance. 她喜欢跳舞。"
        ]
      }
    }
  ];

  window.PAGES['result-split'] = {
    render() {
      const selectedId = state.selectedSentenceId || SENTENCES[0].id;
      const selectedSentence = SENTENCES.find(s => s.id === selectedId) || SENTENCES[0];

      return `
<div style="position:absolute;inset:0;background:#000;">

  <!-- 左侧：句子列表区域 -->
  <div style="position:absolute;left:0;top:0;width:656px;height:932px;background:#000;overflow:hidden;">

    <!-- 返回按钮 -->
    ${backArrowSvg('A')}

    <!-- 句子列表容器（可滚动） -->
    <div style="position:absolute;left:80px;top:30px;width:560px;height:872px;overflow-y:auto;overflow-x:hidden;">
      ${SENTENCES.map((sent, index) => {
        const isSelected = selectedId === sent.id;
        return `
        <div
          class="sentence-item"
          data-action="select-sentence"
          data-sentence-id="${sent.id}"
          style="position:relative;margin-bottom:30px;padding:15px;cursor:pointer;transition:all 0.3s;border-radius:12px;${isSelected ? 'background:rgba(52, 248, 255, 0.1);' : ''}"
        >
          <!-- 句子文本 -->
          <p style="margin:0;word-break:break-word;font-family:${F};line-height:46px;font-style:normal;color:#fff;font-size:32px;font-weight:${isSelected ? '700' : '400'};transition:all 0.3s;">
            ${sent.text}
          </p>

          <!-- 中文翻译 -->
          <p style="margin:8px 0 0 0;font-family:${F};line-height:40px;color:#7b8396;font-size:26px;">
            ${sent.translation}
          </p>

          <!-- 选中指示器 -->
          ${isSelected ? `<div style="position:absolute;left:0;top:50%;transform:translateY(-50%);width:4px;height:80%;background:#34F8FF;border-radius:2px;"></div>` : ''}
        </div>
      `;
      }).join('')}
    </div>
  </div>

  <!-- 中间分隔线 -->
  <div style="position:absolute;left:656px;top:0;width:2px;height:932px;background:#333;"></div>

  <!-- 右侧：解析内容区域 -->
  <div style="position:absolute;left:658px;top:0;width:982px;height:932px;background:#000;overflow-y:auto;overflow-x:hidden;padding:40px 50px 40px 40px;">

    <!-- 装饰背景图 -->
    <div style="position:absolute;right:-100px;top:-50px;width:600px;height:600px;opacity:0.12;pointer-events:none;">
      <img alt="" src="${img(selectedSentence.analysis.image)}" style="width:100%;height:100%;object-fit:cover;">
    </div>

    <!-- 标题 -->
    <h2 style="position:relative;z-index:1;margin:0 0 30px 0;font-family:${F};font-size:36px;font-weight:700;color:#fff;">
      ${selectedSentence.analysis.title}
    </h2>

    <!-- 主句子显示区 -->
    <div style="position:relative;z-index:1;margin-bottom:35px;padding:25px 30px;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid rgba(255,255,255,0.08);">
      <p style="margin:0;font-family:${F};line-height:50px;font-size:32px;color:#fff;font-weight:600;">
        ${selectedSentence.analysis.mainSentence}
      </p>

      <!-- 词汇标注 -->
      <div style="margin-top:25px;display:flex;flex-wrap:wrap;gap:15px;">
        ${selectedSentence.analysis.points.map(point => `
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="display:inline-block;padding:8px 18px;background:${point.color};color:#fff;font-family:${F};font-size:24px;font-weight:600;border-radius:20px;">
              ${point.word}
            </span>
            <span style="font-family:${F};font-size:24px;color:#9ca3af;">
              ${point.desc}
            </span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 详细解释 -->
    <div style="position:relative;z-index:1;margin-bottom:30px;">
      <h3 style="margin:0 0 15px 0;font-family:${F};font-size:28px;font-weight:600;color:#34F8FF;display:flex;align-items:center;gap:8px;">
        <span style="font-size:32px;">💡</span> 详细解释
      </h3>
      <p style="margin:0;font-family:${F};line-height:44px;font-size:28px;color:#e5e5e5;">
        ${selectedSentence.analysis.explanation}
      </p>
    </div>

    <!-- 语法要点 -->
    <div style="position:relative;z-index:1;margin-bottom:30px;padding:20px 22px;background:rgba(52, 248, 255, 0.08);border-left:4px solid #34F8FF;border-radius:8px;">
      <h3 style="margin:0 0 12px 0;font-family:${F};font-size:28px;font-weight:600;color:#34F8FF;display:flex;align-items:center;gap:8px;">
        <span style="font-size:32px;">📚</span> 语法要点
      </h3>
      <p style="margin:0;font-family:${F};line-height:42px;font-size:26px;color:#e5e5e5;">
        ${selectedSentence.analysis.grammar}
      </p>
    </div>

    <!-- 例句 -->
    <div style="position:relative;z-index:1;">
      <h3 style="margin:0 0 15px 0;font-family:${F};font-size:28px;font-weight:600;color:#fff;display:flex;align-items:center;gap:8px;">
        <span style="font-size:32px;">📝</span> 相关例句
      </h3>
      ${selectedSentence.analysis.examples.map(example => `
        <p style="margin:0 0 14px 0;padding-left:20px;font-family:${F};line-height:40px;font-size:26px;color:#b8b8b8;">
          • ${example}
        </p>
      `).join('')}
    </div>

  </div>

</div>
      `;
    }
  };
})();
