// 姓名能量卡 — 三场景渲染与交互
(function() {
  "use strict";

  // 延迟初始化，确保所有脚本加载完成
  function initChpuka() {
    console.log('[chpuka] attempting to initialize...');

    const NM = window.__NM;
    if(!NM) {
      console.warn('[chpuka] __NM not ready, will retry...');
      return false;
    }

    console.log('[chpuka] initializing...');

    // ============================================================
    //  chpuka1 介绍页渲染（新设计 1640x357）
    // ============================================================
    function renderChpuka1(){
      const scroll = document.querySelector("#chpuka1Scroll");
      if(!scroll) return;

      const html = `
        <div class="cpk1-card">
          <button type="button" class="cpk1-close" id="cpk1Close" aria-label="关闭">×</button>
          <img class="cpk1-bg" src="assets/chpuka1-new-transparent.png?v=3" alt="姓名能量卡" draggable="false" data-act="draw-card" style="cursor:pointer;">
        </div>
      `;
      scroll.innerHTML = html;

      // 绑定关闭按钮事件
      const closeBtn = document.getElementById('cpk1Close');
      if(closeBtn){
        closeBtn.addEventListener('click', () => {
          const modal = document.getElementById('chpuka1Modal');
          if(modal) modal.hidden = true;
        });
      }
    }

    // ============================================================
    //  chpuka2 能量卡展示页渲染（数据驱动）
    // ============================================================
    function renderChpukaCard(scene, data){
      const container = document.querySelector(`.scene-${scene} .cpk-card-content`);
      if(!container) return;

      const html = `
        <div class="cpk-card-inner">
          <div class="cpk-card-bg"></div>
          <div class="cpk-card-deco"></div>
          <h2 class="cpk-card-title">${data.title}</h2>
          <p class="cpk-card-subtitle">${data.subtitle}</p>
          <p class="cpk-card-desc">${data.description}</p>
          <div class="cpk-card-keywords">
            ${data.keywords.map(kw => `<span class="cpk-keyword">${kw}</span>`).join('')}
          </div>
        </div>
      `;
      container.innerHTML = html;
    }

    // ============================================================
    //  场景入场回调（由 script.js onSceneEnter 调用）
    // ============================================================
    function onChpukaEnter(scene){
      if(scene === "chpuka1"){
        renderChpuka1();
        // 滚动到顶部
        const scroll = document.querySelector("#chpuka1Scroll");
        if(scroll) scroll.scrollTop = 0;
      }
      // chpuka2 不在这里处理，由 draw-card 事件触发 API 调用
    }

    // 暴露接口
    window.__NM_onChpukaEnter = onChpukaEnter;
    window.__NM_renderChpukaCard = renderChpukaCard;

    // ============================================================
    //  能量卡生成 API 调用
    // ============================================================
    async function generateEnergyCard(name) {
      const API = window.NAMING_DATA;
      if (!API || !API.fetchEnergyCard) {
        console.error('[energy-card] API not loaded');
        return null;
      }

      // 调用 API（自动使用今天日期）
      const result = await API.fetchEnergyCard(name);

      if (result.status === 'ok' && result.data) {
        return result.data;
      }

      console.error('[energy-card] API error:', result);
      return null;
    }

    window.__NM_generateEnergyCard = generateEnergyCard;
    console.log('[chpuka] initialized, __NM_generateEnergyCard:', !!window.__NM_generateEnergyCard);

    return true;
  }

  // 尝试初始化，如果失败则在DOMContentLoaded后重试
  if (!initChpuka()) {
    console.log('[chpuka] delaying initialization until DOMContentLoaded');
    document.addEventListener('DOMContentLoaded', function() {
      console.log('[chpuka] DOMContentLoaded, retrying initialization');
      if (!initChpuka()) {
        // 最后的重试
        setTimeout(() => {
          console.log('[chpuka] final retry');
          initChpuka();
        }, 500);
      }
    });
  }
})();

// 绑定 chpuka2 关闭按钮
document.addEventListener('DOMContentLoaded', () => {
  const cpk2Close = document.getElementById('cpk2Close');
  if(cpk2Close){
    cpk2Close.addEventListener('click', () => {
      const modal = document.getElementById('chpuka2Modal');
      if(modal) modal.hidden = true;
    });
  }
});
