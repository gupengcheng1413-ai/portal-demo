// result-the (变体3) — 右侧解析内容：Apples and oranges make you strong.
window.RESULT_THE = window.RESULT_THE || [];
(function () {
  const F = "'Noto Sans SC',sans-serif";

  window.RESULT_THE[2] = function() {
    return `
  <!-- 右侧解析内容区域 -->
  <div style="position:relative;width:100%;height:932px;overflow-y:auto;padding:30px 40px;">

    <!-- 装饰背景图 -->
    <div style="position:absolute;right:-50px;top:-30px;width:657px;height:663px;opacity:0.08;pointer-events:none;z-index:0;">
      <img alt="" src="${img('817edf6b30a267aefdd561990d0c28dfcc4ecdf6')}" style="width:100%;height:100%;object-fit:cover;">
    </div>

    <!-- 内容区（有层级） -->
    <div style="position:relative;z-index:1;">

      <!-- 句子点拨标题 -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:30px;">
        <img src="${img('b3799fe0bc1c568cb443bf6daaeec4cb89984258')}" alt="" style="width:33px;height:25px;">
        <h2 style="margin:0;font-family:${F};font-size:32px;font-weight:500;color:#636973;">句子点拨</h2>
      </div>

      <!-- 词汇解释区 -->
      <div style="margin-bottom:40px;">

        <!-- apples and oranges -->
        <div style="display:flex;align-items:flex-start;gap:15px;margin-bottom:25px;">
          <div style="flex-shrink:0;padding:0 2px;">
            <div style="width:14px;height:14px;background:#008989;border-radius:2px;"></div>
          </div>
          <div>
            <p style="margin:0 0 5px 0;font-family:${F};font-size:32px;font-weight:700;color:#fff;line-height:40px;">
              Apples and oranges：
            </p>
            <p style="margin:0;font-family:${F};font-size:28px;font-weight:400;color:#fff;line-height:42px;">
              名词并列，意为 "苹果和橙子"，用and连接两个名词。
            </p>
          </div>
        </div>

        <!-- make -->
        <div style="display:flex;align-items:flex-start;gap:15px;margin-bottom:25px;">
          <div style="flex-shrink:0;padding:0 2px;">
            <div style="width:14px;height:14px;background:#0B84E7;border-radius:2px;"></div>
          </div>
          <div>
            <p style="margin:0 0 5px 0;font-family:${F};font-size:32px;font-weight:700;color:#fff;line-height:40px;">
              make：
            </p>
            <p style="margin:0;font-family:${F};font-size:28px;font-weight:400;color:#fff;line-height:42px;">
              动词，意为 "使...变得"，后接宾语和形容词。
            </p>
          </div>
        </div>

        <!-- strong -->
        <div style="display:flex;align-items:flex-start;gap:15px;margin-bottom:25px;">
          <div style="flex-shrink:0;padding:0 2px;">
            <div style="width:14px;height:14px;background:#FF519F;border-radius:2px;"></div>
          </div>
          <div>
            <p style="margin:0 0 5px 0;font-family:${F};font-size:32px;font-weight:700;color:#fff;line-height:40px;">
              strong：
            </p>
            <p style="margin:0;font-family:${F};font-size:28px;font-weight:400;color:#fff;line-height:42px;">
              形容词，意为 "强壮的"。
            </p>
          </div>
        </div>

      </div>

      <!-- 语法说明 -->
      <div style="margin-bottom:40px;padding:20px;background:rgba(52,248,255,0.08);border-left:4px solid #34F8FF;border-radius:8px;">
        <p style="margin:0 0 8px 0;font-family:${F};font-size:32px;font-weight:700;color:#fff;line-height:40px;">
          make + 宾语 + 形容词：
        </p>
        <p style="margin:0;font-family:${F};font-size:28px;font-weight:400;color:#fff;line-height:42px;">
          这个结构表示 "使某人/某物变得..."，形容词作宾语补足语。
        </p>
      </div>

      <!-- 中文翻译 -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:35px;">
        <img src="${img('915b7e8a3e9e287dfa6f5fb62c8b51e98dac253d')}" alt="" style="width:27px;height:26px;">
        <p style="margin:0;font-family:${F};font-size:32px;font-weight:400;color:#7B8396;line-height:46px;">
          苹果和橙子让你更强壮。
        </p>
      </div>

      <!-- 发音测评 -->
      <div style="margin-bottom:35px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
          <img src="${img('9d6e1c0754d1303a1c0ce00bb793eac06bb66595')}" alt="" style="width:33px;height:25px;">
          <h3 style="margin:0;font-family:${F};font-size:32px;font-weight:500;color:#636973;">发音测评</h3>
        </div>
        <div style="display:flex;align-items:center;gap:15px;padding:20px;background:rgba(255,255,255,0.03);border-radius:12px;">
          <img src="${img('c18e123018a3ab3a0e6ab3c4b27e99cb40a34c23')}" alt="" style="width:34px;height:33px;">
          <p style="margin:0;font-family:${F};font-size:36px;font-weight:400;color:#CFD6E2;line-height:50px;">
            Apples and oranges make you strong.
          </p>
        </div>
      </div>

      <!-- 重点词汇 -->
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
          <img src="${img('f18c0f70ff8e6cb0bce11048d56f5cf41b071de4')}" alt="" style="width:33px;height:25px;">
          <h3 style="margin:0;font-family:${F};font-size:32px;font-weight:500;color:#636973;">重点词汇</h3>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:15px;">
          <div style="padding:12px 24px;background:rgba(255,255,255,0.05);border-radius:20px;">
            <p style="margin:0;font-family:${F};font-size:36px;font-weight:400;color:#CFD6E2;">make</p>
          </div>
          <div style="padding:12px 24px;background:rgba(255,255,255,0.05);border-radius:20px;">
            <p style="margin:0;font-family:${F};font-size:36px;font-weight:400;color:#CFD6E2;">strong</p>
          </div>
          <div style="padding:12px 24px;background:rgba(255,255,255,0.05);border-radius:20px;">
            <p style="margin:0;font-family:${F};font-size:36px;font-weight:400;color:#CFD6E2;">apples</p>
          </div>
        </div>
      </div>

    </div>

  </div>
    `;
  };
})();
