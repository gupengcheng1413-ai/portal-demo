// 姓名能量卡 — 三场景渲染与交互
(() => {
  "use strict";
  const NM = window.__NM;
  if(!NM) return;

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

    // data 结构示例:
    // {
    //   title: "创新之光",
    //   subtitle: "突破常规，引领潮流",
    //   description: "你的名字蕴含着...",
    //   keywords: ["创新", "领导力", "智慧"],
    //   color: "#6E8B69"
    // }

    const html = `
      <div class="cpk-card-inner">
        <div class="cpk-card-bg"></div>
        <div class="cpk-card-deco"></div>
        <h2 class="cpk-card-title">${NM.esc(data.title || "")}</h2>
        <p class="cpk-card-subtitle">${NM.esc(data.subtitle || "")}</p>
        <div class="cpk-card-desc">${NM.esc(data.description || "")}</div>
        <div class="cpk-card-keywords">
          ${(data.keywords || []).map(k => `<span class="cpk-keyword">${NM.esc(k)}</span>`).join("")}
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
    if(scene === "chpuka2"){
      // TODO: 从后端获取数据
      // 暂时使用示例数据
      const mockData = {
        title: "创新之光",
        subtitle: "突破常规，引领潮流",
        description: "你的名字蕴含着创新与突破的力量，如同晨光划破黑暗，照亮前行的道路。",
        keywords: ["创新", "领导力", "智慧", "远见"],
        color: "#6E8B69"
      };
      renderChpukaCard("chpuka2", mockData);
    }
    if(scene === "chpuka3"){
      // chpuka3 同 chpuka2，暂用不同示例数据
      const mockData = {
        title: "温润如玉",
        subtitle: "内敛沉稳，厚积薄发",
        description: "你的名字如同美玉，外表温润内里坚韧，散发着宁静而持久的力量。",
        keywords: ["温和", "坚韧", "智慧", "包容"],
        color: "#718B6C"
      };
      renderChpukaCard("chpuka3", mockData);
    }
  }

  // 暴露接口
  window.__NM_onChpukaEnter = onChpukaEnter;
  window.__NM_renderChpukaCard = renderChpukaCard;
})();
