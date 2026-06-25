// result-the 新版 — 左右分屏句子讲解（打通滚动版本）
// 左侧：句子列表（根据右侧滚动位置自动高亮）
// 右侧：三个句子的讲解内容纵向拼接，支持连续滚动
window.RESULT_THE = window.RESULT_THE || [];

(function () {
  let rightScrollContainer = null;
  let scrollListener = null;
  let isMounted = false;
  let leftSideImg = null; // 缓存左侧图片元素

  window.PAGES['result-the'] = {
    mount(container) {
      isMounted = true;

      // 禁用外层滚动容器的滚动，让右侧区域独立控制
      const scrollWrapper = document.getElementById('scrollWrapper');
      if (scrollWrapper) {
        scrollWrapper.style.overflowY = 'hidden';
      }

      // 获取右侧滚动容器
      rightScrollContainer = container.querySelector('[data-scroll-container]');
      if (!rightScrollContainer) {
        console.warn('result-the: scroll container not found');
        return;
      }

      // 计算累积滚动位置（使用中点阈值避免边界跳跃）
      const midpoints = [];
      let cumulative = 0;
      for (let i = 0; i < THE_HEIGHTS.length - 1; i++) {
        cumulative += THE_HEIGHTS[i];
        midpoints.push(cumulative - THE_HEIGHTS[i] / 2);
      }

      // 监听右侧滚动，自动切换左侧高亮（带防抖）
      let rafId = null;
      scrollListener = () => {
        if (rafId) return; // 防抖：同一帧只执行一次

        rafId = requestAnimationFrame(() => {
          rafId = null;

          if (!isMounted || !rightScrollContainer) return; // 检查页面是否还挂载

          const scrollTop = rightScrollContainer.scrollTop;
          let newIndex = 0;

          // 使用中点阈值判断区域，避免边界跳跃
          if (scrollTop < midpoints[0]) {
            newIndex = 0;
          } else if (scrollTop < midpoints[1]) {
            newIndex = 1;
          } else {
            newIndex = 2;
          }

          // 只在索引变化时更新状态和左侧显示
          if (state.theIndex !== newIndex) {
            state.theIndex = newIndex;
            updateLeftSide();
          }
        });
      };

      rightScrollContainer.addEventListener('scroll', scrollListener, { passive: true });

      // 初始化时缓存左侧图片元素
      setTimeout(() => {
        const leftSide = document.getElementById('theLeftSide');
        if (leftSide) {
          leftSideImg = leftSide.querySelector('img');
        }
      }, 0);
    },

    unmount() {
      isMounted = false;

      // 恢复外层滚动容器的默认行为
      const scrollWrapper = document.getElementById('scrollWrapper');
      if (scrollWrapper) {
        scrollWrapper.style.overflowY = 'auto';
      }

      // 移除滚动监听
      if (rightScrollContainer && scrollListener) {
        rightScrollContainer.removeEventListener('scroll', scrollListener);
      }
      rightScrollContainer = null;
      scrollListener = null;
      leftSideImg = null;
    },

    render() {
      const selectedIndex = state.theIndex || 0;

      // 根据 THE_HEIGHTS 动态生成图片高度
      return `
<div style="position:absolute;inset:0;background:#000;">

  <!-- 左侧：句子列表（根据选中状态显示对应图片，只显示顶部348px） -->
  <div id="theLeftSide" style="position:absolute;left:0;top:0;width:656px;height:348px;overflow:hidden;">
    <!-- 显示对应的左侧图片 -->
    <img alt="" src="the${selectedIndex + 1}_left.png" style="display:block;width:656px;height:auto;">

    <!-- 返回按钮热区 -->
    ${backArrowSvg('B')}

    <!-- 句子点击热区（覆盖文本区域） -->
    <div data-action="the-scroll" data-index="0" style="position:absolute;left:0;top:20px;width:656px;height:110px;cursor:pointer;"></div>
    <div data-action="the-scroll" data-index="1" style="position:absolute;left:0;top:150px;width:656px;height:70px;cursor:pointer;"></div>
    <div data-action="the-scroll" data-index="2" style="position:absolute;left:0;top:220px;width:656px;height:80px;cursor:pointer;"></div>
  </div>

  <!-- 右侧：三个句子讲解内容打通 -->
  <div data-scroll-container style="position:absolute;left:656px;top:0;width:984px;height:348px;overflow-y:auto;overflow-x:hidden;background:#000;">
    <!-- 句子1讲解 -->
    <img alt="" src="the1_right.png" style="display:block;width:984px;height:${THE_HEIGHTS[0]}px;">
    <!-- 分割线（复用直线 10 样式） -->
    <div style="width:100%;height:1px;background:linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(84,84,84,1) 50%, rgba(0,0,0,1) 100%);"></div>
    <!-- 句子2讲解 -->
    <img alt="" src="the2_right.png" style="display:block;width:984px;height:${THE_HEIGHTS[1]}px;">
    <!-- 分割线（复用直线 10 样式） -->
    <div style="width:100%;height:1px;background:linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(84,84,84,1) 50%, rgba(0,0,0,1) 100%);"></div>
    <!-- 句子3讲解 -->
    <img alt="" src="the3_right.png" style="display:block;width:984px;height:${THE_HEIGHTS[2]}px;">
  </div>

</div>
      `;
    }
  };

  // 更新左侧图片（不重新渲染整个页面）
  function updateLeftSide() {
    if (!isMounted) return; // 页面未挂载时不更新

    // 使用缓存的图片元素，避免重复 DOM 查询
    if (leftSideImg) {
      leftSideImg.src = `the${state.theIndex + 1}_left.png`;
      return;
    }

    // 缓存未命中时回退到查询
    const leftSide = document.getElementById('theLeftSide');
    if (!leftSide) return;

    const img = leftSide.querySelector('img');
    if (img) {
      leftSideImg = img; // 更新缓存
      img.src = `the${state.theIndex + 1}_left.png`;
    }
  }
})();
