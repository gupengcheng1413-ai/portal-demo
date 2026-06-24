// result-book — 单句结果页（左右分屏，帧高 932）
// 像素级还原Figma设计稿 result-danju (5250:2) - 最新版本
// 使用真实的Figma导出资源
(function () {
  const F = "'Noto Sans SC',sans-serif";

  window.PAGES['result-book'] = {
    mount(container) {
      // 禁用外层滚动容器的滚动，让内部区域独立控制
      const scrollWrapper = document.getElementById('scrollWrapper');
      if (scrollWrapper) {
        scrollWrapper.style.overflowY = 'hidden';
      }
    },
    unmount() {
      // 恢复外层滚动容器的默认行为
      const scrollWrapper = document.getElementById('scrollWrapper');
      if (scrollWrapper) {
        scrollWrapper.style.overflowY = 'auto';
      }
    },
    render() {
      return `
<div style="position:absolute;inset:0;background:#000;">

  <!-- ========== 左侧固定区域 ========== -->
  <div style="position:absolute;left:0;top:0;width:656px;height:348px;overflow:hidden;background:#000;">

    <!-- 返回按钮 (Group 152) -->
    ${backArrowSvg('A')}

    <!-- 背景光晕 Ellipse 3 -->
    <div style="position:absolute;left:-302px;top:-264px;width:816px;height:520px;">
      <svg style="display:block;width:100%;height:100%;" fill="none" preserveAspectRatio="none" viewBox="0 0 816 520">
        <defs>
          <filter id="blur-ellipse3" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="100"/>
          </filter>
        </defs>
        <ellipse cx="408" cy="260" rx="408" ry="260" fill="rgba(129, 37, 102, 0.2)" filter="url(#blur-ellipse3)"/>
      </svg>
    </div>

    <!-- 单词色块标记 - 使用Figma导出的图片 -->
    <!-- Rectangle 160 - greet 标记（粉色） -->
    <img alt="" src="${img('af454e8f15dc47caa1a24621c8b654aac0e55bca')}" style="position:absolute;left:164px;top:40px;width:100px;height:40px;">

    <!-- Rectangle 103 - people 标记（蓝色大色块） x:76 y:85 -->
    <div style="position:absolute;left:76px;top:85px;width:206px;height:41px;background:rgba(11, 132, 231, 0.7);border-radius:4px;"></div>

    <!-- 句子文本 - 使用span标记需要波浪线的词 -->
    <p style="position:absolute;left:80px;top:30px;margin:0;width:576px;font-family:${F};font-size:36px;font-weight:500;line-height:50px;color:#fff;word-break:break-word;z-index:10;">
      I can greet people and <span style="text-decoration:underline wavy #34F8FF;text-decoration-thickness:2px;text-underline-offset:4px;">show</span> <span style="text-decoration:underline wavy #34F8FF;text-decoration-thickness:2px;text-underline-offset:4px;">friendliness</span>.
    </p>

  </div>

  <!-- 分隔线 -->
  <div style="position:absolute;left:656px;top:0;width:2px;height:348px;background:#333;"></div>

  <!-- ========== 右侧可滚动区域 ========== -->
  <div style="position:absolute;left:658px;top:0;width:982px;height:348px;overflow-y:auto;overflow-x:hidden;">
    <div style="position:relative;width:982px;height:950px;">

      <!-- 背景装饰图 image 1 -->
      <div style="position:absolute;left:408px;top:0;width:657px;height:663px;opacity:0.1;pointer-events:none;">
        <img alt="" src="${img('817edf6b30a267aefdd561990d0c28dfcc4ecdf6')}" style="display:block;width:100%;height:100%;object-fit:cover;">
      </div>

      <!-- ===== 第一部分：句子点拨 ===== -->

      <!-- 图标 image 19 -->
      <img alt="" src="${img('e793f7c57dd287b00729e05e0a236d19136b4b8f')}" style="position:absolute;left:33px;top:41px;width:33px;height:25px;">

      <!-- 标题：句子点拨 -->
      <p style="position:absolute;left:81px;top:30px;margin:0;font-family:${F};font-size:32px;font-weight:500;line-height:46px;color:rgb(99, 105, 115);">句子点拨</p>

      <!-- greet 解释 + 渐变色条 Rectangle 162（粉色系）横向作为下划线 -->
      <p style="position:absolute;left:33px;top:92px;margin:0;font-family:${F};font-size:32px;font-weight:700;line-height:46px;color:#fff;z-index:10;"> greet： </p>
      <img alt="" src="${img('888adf2c5a9dda9c68e4fa0cb033eb818f15fbe7')}" style="position:absolute;left:33px;top:132px;width:108.2px;height:13.9px;">
      <p style="position:absolute;left:164px;top:93px;margin:0;width:723px;font-family:${F};font-size:28px;font-weight:400;line-height:36px;color:#fff;">动词，意为"打招呼"。常见问候方式还有: smile, wave.</p>

      <!-- friendliness 解释 + 渐变色条 Rectangle 163（蓝色系）横向作为下划线 -->
      <p style="position:absolute;left:33px;top:151px;margin:0;font-family:${F};font-size:32px;font-weight:700;line-height:46px;color:#fff;z-index:10;">friendliness： </p>
      <img alt="" src="${img('f93f3afaa76577ac6dc01e157a7e94e4e653285d')}" style="position:absolute;left:33px;top:191px;width:206.5px;height:13.9px;">
      <p style="position:absolute;left:254px;top:151px;margin:0;width:696px;font-family:${F};font-size:28px;font-weight:400;line-height:36px;color:#fff;">名词，意为"友好"。由形容词 friendly（友好的）变化而来。</p>

      <!-- show friendliness 解释 -->
      <p style="position:absolute;left:33px;top:206px;margin:0;font-family:${F};font-size:32px;font-weight:700;line-height:46px;color:#fff;">
        <span style="text-decoration:underline wavy #34F8FF;text-decoration-thickness:2px;text-underline-offset:4px;">show friendliness</span>：
      </p>
      <p style="position:absolute;left:351px;top:207px;margin:0;width:619px;font-family:${F};font-size:28px;font-weight:400;line-height:36px;color:#fff;">动词短语，意为 "表现出友好"。show 后接抽象</p>
      <p style="position:absolute;left:33px;top:267px;margin:0;width:851px;font-family:${F};font-size:28px;font-weight:400;line-height:36px;color:#fff;">名词表示展现某种品质，如 show kindness（表现善意）。</p>

      <!-- 图片标签 image 17 -->
      <img alt="" src="${img('722d473ad18bae8b324cb01df7bc518fedfc712b')}" style="position:absolute;left:33px;top:335px;width:153px;height:57px;">

      <!-- 图片标签 image 18 -->
      <img alt="" src="${img('4a544389344410878ae362dca1d5a2da8a4b9dd2')}" style="position:absolute;left:194px;top:335px;width:153px;height:57px;">

      <!-- ===== 第二部分：中文翻译 ===== -->

      <!-- 图标 image 11 -->
      <img alt="" src="${img('915b7e8a3e9e287dfa6f5fb62c8b51e98dac253d')}" style="position:absolute;left:33px;top:433px;width:27px;height:26px;">

      <!-- 中文翻译文本 -->
      <p style="position:absolute;left:72px;top:422px;margin:0;font-family:${F};font-size:32px;font-weight:400;line-height:46px;color:rgb(123, 131, 150);">我可以与人打招呼并表现出友好。</p>

      <!-- ===== 第三部分：发音测评 ===== -->

      <!-- Group 193 - 发音测评底框 -->
      <div style="position:absolute;left:33px;top:577px;width:918px;height:120px;background:rgba(255,255,255,0.08);border-radius:8px;"></div>

      <!-- 图标 image 12 -->
      <img alt="" src="${img('e793f7c57dd287b00729e05e0a236d19136b4b8f')}" style="position:absolute;left:29px;top:522px;width:33px;height:25px;">

      <!-- 标题：发音测评 -->
      <p style="position:absolute;left:76px;top:510px;margin:0;font-family:${F};font-size:32px;font-weight:500;line-height:46px;color:rgb(99, 105, 115);">发音测评</p>

      <!-- 播放图标 image 14 -->
      <img alt="" src="${img('915b7e8a3e9e287dfa6f5fb62c8b51e98dac253d')}" style="position:absolute;left:49px;top:617px;width:34px;height:33px;">

      <!-- 发音测评句子 -->
      <p style="position:absolute;left:103px;top:610px;margin:0;font-family:${F};font-size:36px;font-weight:400;line-height:46px;color:rgb(207, 214, 226);">I can greet people and show friendliness.</p>

      <!-- 大图标 image 13 -->
      <img alt="" src="${img('6f03b3cb0f17d664874967959cee002dd9106da1')}" style="position:absolute;left:850px;top:602px;width:62px;height:62px;">

      <!-- ===== 第四部分：知识点讲解 ===== -->

      <!-- Group 213 - 知识点讲解底框 -->
      <div style="position:absolute;left:33px;top:800px;width:918px;height:100px;background:rgba(255,255,255,0.08);border-radius:8px;"></div>

      <!-- 图标 image 15 -->
      <img alt="" src="${img('e793f7c57dd287b00729e05e0a236d19136b4b8f')}" style="position:absolute;left:33px;top:745px;width:33px;height:25px;">

      <!-- 标题：知识点讲解 -->
      <p style="position:absolute;left:80px;top:734px;margin:0;font-family:${F};font-size:32px;font-weight:500;line-height:46px;color:rgb(99, 105, 115);">知识点讲解</p>

      <!-- can 的用法 -->
      <p style="position:absolute;left:73px;top:818px;margin:0;font-family:${F};font-size:36px;font-weight:400;line-height:46px;color:rgb(207, 214, 226);"> can 的用法</p>

      <!-- 装饰图标 image 16 -->
      <img alt="" src="${img('df8ed54d8875217cfd30cd648abb73846cc39331')}" style="position:absolute;left:667px;top:823px;width:38px;height:38px;">

    </div>
  </div>

</div>
      `;
    }
  };
})();
