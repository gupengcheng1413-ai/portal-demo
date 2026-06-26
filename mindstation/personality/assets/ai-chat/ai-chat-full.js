// ==================== AI Chat 静态页面 - 直接显示完整设计稿 ====================

// 渲染静态AI对话页面
function renderAIChat(mbtiType) {
  if (!mbtiType) return;

  state.aiChat.currentType = mbtiType;
  state.aiChat.active = true;

  const inner = document.getElementById("aicPageInner");
  if (!inner) return;

  // 渲染完整设计稿图片
  inner.innerHTML = `
    <!-- 完整设计稿 -->
    <img src="assets/ai-chat/full-design.png" alt="AI对话" class="aic-full-design">

    <!-- 返回按钮热区 -->
    <button type="button" class="aic-back-hotspot" id="aicBack" aria-label="返回"></button>

    <!-- 麦克风按钮热区 -->
    <button type="button" class="aic-mic-hotspot" id="aicMic" aria-label="语音"></button>
  `;

  // 绑定返回按钮
  const backBtn = document.getElementById('aicBack');
  if (backBtn) {
    backBtn.onclick = () => {
      state.aiChat.active = false;
      setScene("result");
    };
  }

  // 麦克风按钮（暂时无功能）
  const micBtn = document.getElementById('aicMic');
  if (micBtn) {
    micBtn.onclick = () => {
      console.log('麦克风按钮点击');
    };
  }
}
