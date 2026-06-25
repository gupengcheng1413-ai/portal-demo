// ==================== 资源路径辅助 ====================
function img(hash) { return `assets/images/${hash}.png`; }

// 返回箭头 HTML（type: 'A' | 'B'）
function backArrowSvg(type) {
  const d = type === 'B' ? SVG_PATHS.backArrowB : SVG_PATHS.backArrowA;
  return `<div style="position:absolute;left:0;top:1px;width:80px;height:68px;">
    <svg style="position:absolute;inset:0;display:block;width:100%;height:100%;" fill="none" preserveAspectRatio="none" viewBox="0 0 80 68">
      <path d="${d}" fill="#7B8396" />
    </svg>
  </div>`;
}

// ==================== 导航 ====================
function navigate(page) {
  if (page === 'result-the') state.theIndex = 0;
  state.history.push(page);
  render();
}

function goBack() {
  if (state.history.length > 1) {
    state.history.pop();
    render();
  } else {
    // 已在首页 → 通知外壳回 portal 主页
    try { parent.postMessage({ type: 'go-home' }, '*'); } catch (e) {}
  }
}

function currentPage() {
  return state.history[state.history.length - 1];
}

function getPageHeight(page) {
  if (page === 'result-the') return THE_HEIGHTS[state.theIndex];
  return FRAME_HEIGHTS[page] || SCREEN_H;
}

// ==================== 渲染 ====================
let activePage = null; // 当前页对象，用于 unmount

function render() {
  const page = currentPage();
  const def = window.PAGES[page];
  const scrollWrapper = document.getElementById('scrollWrapper');
  const contentFrame = document.getElementById('contentFrame');

  // 先清理上一页的副作用（定时器、键盘监听等）
  if (activePage && typeof activePage.unmount === 'function') {
    activePage.unmount();
  }

  const height = getPageHeight(page);
  contentFrame.style.height = height + 'px';
  scrollWrapper.style.overflowY = height > SCREEN_H ? 'auto' : 'hidden';
  scrollWrapper.scrollTop = 0;

  if (!def) {
    contentFrame.innerHTML = `<div style="color:#fff;padding:24px;font-size:28px;">页面 "${page}" 未实现</div>`;
    activePage = null;
    return;
  }

  // 页面正文 + 返回热区（覆盖左上角箭头；首页→回 portal 主页，内层→内部后退）
  let html = def.render();
  html += `<div data-action="back" style="position:absolute;left:0;top:1px;width:80px;height:68px;cursor:pointer;z-index:50;"></div>`;
  contentFrame.innerHTML = html;

  activePage = def;
  if (typeof def.mount === 'function') def.mount(contentFrame);
}

// ==================== 事件委托（只绑定一次） ====================
function initEvents() {
  const contentFrame = document.getElementById('contentFrame');

  contentFrame.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    const action = target.dataset.action;
    const value = target.dataset.value;

    if (action === 'back') { goBack(); return; }
    if (action === 'navigate') { navigate(target.dataset.page); return; }

    if (action === 'select-grade') { state.selectedGrade = value; render(); return; }
    if (action === 'select-version') { state.selectedVersion = value; render(); return; }
    if (action === 'select-volume') { state.selectedVolume = value; render(); return; }
    if (action === 'confirm-chooes') {
      state.textbookInfo = `英语 ${state.selectedVersion} ${state.selectedGrade}${state.selectedVolume}`;
      goBack();
      return;
    }

    // 打通滚动：点击左侧句子，右侧滚动到对应位置
    if (action === 'the-scroll') {
      const targetIndex = parseInt(target.dataset.index, 10);
      const scrollContainer = document.querySelector('[data-scroll-container]');
      if (!scrollContainer) {
        console.warn('the-scroll: scroll container not found');
        return;
      }

      // 计算目标滚动位置（使用 THE_HEIGHTS 累加）
      let scrollTop = 0;
      for (let i = 0; i < targetIndex; i++) {
        scrollTop += THE_HEIGHTS[i];
      }

      scrollContainer.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
      return;
    }
    if (action === 'the-prev') { if (state.theIndex > 0) { state.theIndex--; render(); } return; }
    if (action === 'the-next') { if (state.theIndex < THE_HEIGHTS.length - 1) { state.theIndex++; render(); } return; }

    if (action === 'select-sentence') {
      state.selectedSentenceId = parseInt(target.dataset.sentenceId, 10);
      render();
      return;
    }
  });
}

// ==================== 启动 ====================
document.addEventListener('DOMContentLoaded', () => {
  initEvents();
  render();
});
