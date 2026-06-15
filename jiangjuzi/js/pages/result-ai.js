// result-AI — AI 讲解结果（帧高 1395）
// 源稿：imports/ResultAi-1/index.tsx
(function () {
  const F = "'Noto Sans SC',sans-serif";
  window.PAGES['result-AI'] = {
    render() {
      return `
<div style="position:absolute;inset:0;background:#000;">
  <!-- Background Glow -->
  <div style="position:absolute;height:520px;left:-300px;top:-255px;width:816px;pointer-events:none;">
    <svg style="display:block;width:100%;height:100%;" fill="none" preserveAspectRatio="none" viewBox="0 0 1216 920">
      <g filter="url(#filter0_f_1_223)">
        <ellipse cx="608" cy="460" fill="#812566" fill-opacity="0.2" rx="408" ry="260" />
      </g>
      <defs>
        <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="920" id="filter0_f_1_223" width="1216" x="0" y="0">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_1_223" stdDeviation="100" />
        </filter>
      </defs>
    </svg>
  </div>

  <!-- Back Button Placeholder -->
  ${backArrowSvg('B')}

  <!-- Top Logo -->
  <div style="position:absolute;height:51px;left:727px;top:16px;width:187px;">
    <img src="${img('a5834e76fc77ce5ff6ded4852fcc821966776202')}" alt="logo" style="width:100%;height:100%;object-fit:cover;">
  </div>

  <!-- Character Image -->
  <div style="position:absolute;height:663px;left:983px;top:-13px;width:657px;">
    <img src="${img('817edf6b30a267aefdd561990d0c28dfcc4ecdf6')}" alt="character" style="width:100%;height:100%;object-fit:cover;">
  </div>

  <!-- Main Text -->
  <div style="position:absolute;left:108px;top:111px;width:1147px;height:56px;">
    <p style="margin:0;font-family:${F};font-weight:500;font-size:36px;color:#cfd6e2;line-height:50px;">Don't eat too much meat!</p>
  </div>

  <!-- Speaker Icons -->
  <div style="position:absolute;height:57px;left:80px;top:173px;width:153px;">
    <img src="${img('722d473ad18bae8b324cb01df7bc518fedfc712b')}" alt="speak-1" style="width:100%;height:100%;object-fit:cover;">
  </div>
  <div style="position:absolute;height:57px;left:244px;top:173px;width:153px;">
    <img src="${img('4a544389344410878ae362dca1d5a2da8a4b9dd2')}" alt="speak-2" style="width:100%;height:100%;object-fit:cover;">
  </div>

  <!-- Translation -->
  <div style="position:absolute;left:123px;top:264px;width:507px;height:51px;">
    <p style="margin:0;font-family:${F};font-weight:400;font-size:32px;color:#7b8396;line-height:46px;text-transform:uppercase;">不要吃太多肉！</p>
  </div>

  <!-- Sparkle Icon -->
  <div style="position:absolute;height:26px;left:80px;top:271px;width:27px;">
    <img src="${img('915b7e8a3e9e287dfa6f5fb62c8b51e98dac253d')}" alt="sparkle" style="width:100%;height:100%;object-fit:cover;">
  </div>

  <!-- Side Arrows -->
  <div style="position:absolute;left:15px;top:196px;width:54px;height:54px;opacity:0.3;">
    <img src="${img('a85df25c51241ab28f147423cd6f2c626eca7dc3')}" alt="left-arrow" style="width:100%;height:100%;object-fit:cover;transform:scaleY(-1) rotate(180deg);">
  </div>
  <div style="position:absolute;left:1572px;top:216px;width:54px;height:54px;">
    <img src="${img('a85df25c51241ab28f147423cd6f2c626eca7dc3')}" alt="right-arrow" style="width:100%;height:100%;object-fit:cover;">
  </div>

  <!-- Main Content Divider -->
  <div style="position:absolute;height:0;left:80px;top:346px;width:1483px;">
    <div style="position:absolute;inset:-1px 0;">
      <svg style="display:block;width:100%;height:100%;" fill="none" preserveAspectRatio="none" viewBox="0 0 1483 2">
        <path d="M0 1H1483" stroke="#464953" stroke-dasharray="4 4" stroke-opacity="0.6" stroke-width="2" />
      </svg>
    </div>
  </div>

  <!-- Large Content Card -->
  <div style="position:absolute;background:#18181c;height:826px;left:80px;top:388px;border-radius:14px;width:1480px;"></div>

  <!-- Evaluation Section -->
  <div style="position:absolute;left:157px;top:409px;width:200px;height:46px;">
    <p style="margin:0;font-family:${F};font-weight:500;font-size:32px;color:#636973;line-height:46px;">发音测评</p>
  </div>
  <div style="position:absolute;height:25px;left:110px;top:420px;width:33px;">
    <img src="${img('e793f7c57dd287b00729e05e0a236d19136b4b8f')}" alt="icon-eval" style="width:100%;height:100%;object-fit:cover;">
  </div>
  <div style="position:absolute;height:33px;left:110px;top:470px;width:34px;">
    <img src="${img('915b7e8a3e9e287dfa6f5fb62c8b51e98dac253d')}" alt="icon-sparkle-small" style="width:100%;height:100%;object-fit:cover;">
  </div>
  <div style="position:absolute;left:160px;top:465px;width:1359px;">
    <p style="margin:0;font-family:${F};font-weight:400;font-size:36px;color:#cfd6e2;line-height:42px;">这个句子是否定祈使句。这句话用来提醒或建议他人不要做某事，通常用在日常饮食提醒中，比如家长对孩子、老师对学生的健康饮食建议。</p>
  </div>

  <!-- Vocabulary Section -->
  <div style="position:absolute;left:157px;top:579px;width:200px;height:46px;">
    <p style="margin:0;font-family:${F};font-weight:500;font-size:32px;color:#636973;line-height:46px;">重点词汇</p>
  </div>
  <div style="position:absolute;height:25px;left:110px;top:590px;width:33px;">
    <img src="${img('e793f7c57dd287b00729e05e0a236d19136b4b8f')}" alt="icon-vocab" style="width:100%;height:100%;object-fit:cover;">
  </div>
  <div style="position:absolute;height:33px;left:110px;top:640px;width:34px;">
    <img src="${img('915b7e8a3e9e287dfa6f5fb62c8b51e98dac253d')}" alt="icon-sparkle-small-2" style="width:100%;height:100%;object-fit:cover;">
  </div>
  <div style="position:absolute;left:160px;top:635px;width:1359px;">
    <p style="margin:0;font-family:${F};font-weight:400;font-size:36px;color:#cfd6e2;line-height:42px;">来看下这句话中的重点词汇：eat、meat、too much。eat是动词，意为 “吃”。常见搭配如 eat apples（吃苹果）、eat dinner（吃晚饭）。meat是名词，意为“肉类”。常见的肉类还有chicken，beef，pork等。too much是固定搭配，意为“太多”，修饰不可数名词。同义的表达有a lot of，后面可以接可数名词复数或不可数名词）。</p>
  </div>

  <!-- Explanation Section -->
  <div style="position:absolute;left:157px;top:875px;width:200px;height:46px;">
    <p style="margin:0;font-family:${F};font-weight:500;font-size:32px;color:#636973;line-height:46px;">知识点讲解</p>
  </div>
  <div style="position:absolute;height:25px;left:110px;top:886px;width:33px;">
    <img src="${img('e793f7c57dd287b00729e05e0a236d19136b4b8f')}" alt="icon-expl" style="width:100%;height:100%;object-fit:cover;">
  </div>
  <div style="position:absolute;height:33px;left:110px;top:936px;width:34px;">
    <img src="${img('915b7e8a3e9e287dfa6f5fb62c8b51e98dac253d')}" alt="icon-sparkle-small-3" style="width:100%;height:100%;object-fit:cover;">
  </div>
  <div style="position:absolute;left:160px;top:931px;width:1359px;">
    <p style="margin:0;font-family:${F};font-weight:400;font-size:36px;color:#cfd6e2;line-height:42px;">本句的句式为 “Don't + ...” ，表示 “不要做某事”，可以直接用来提醒别人。比如 “Don't run in the classroom!”（不要在教室里跑！）<span style="color:#ec9609;">这句话常用来劝阻对方不要过量食用肉类。对方回应时，可以说：OK, I won't.</span></p>
  </div>

  <!-- Footer Info -->
  <div style="position:absolute;height:0;left:80px;top:1076px;width:1483px;">
    <div style="position:absolute;inset:-1px 0;">
      <svg style="display:block;width:100%;height:100%;" fill="none" preserveAspectRatio="none" viewBox="0 0 1483 2">
        <path d="M0 1H1483" stroke="#464953" stroke-dasharray="4 4" stroke-opacity="0.6" stroke-width="2" />
      </svg>
    </div>
  </div>
  <div style="position:absolute;left:140px;top:1125px;">
    <p style="margin:0;font-family:${F};font-weight:400;font-size:32px;color:#7b8396;line-height:46px;text-transform:uppercase;">以上内容由AI生成</p>
  </div>
  <div style="position:absolute;height:54px;left:80px;top:1241px;width:128px;">
    <img src="${img('9dbb701ad33a5bb6f759b071f24ef03dfbc9f7c7')}" alt="footer-icon-1" style="width:100%;height:100%;object-fit:cover;">
  </div>
  <div style="position:absolute;height:68px;left:1471px;top:1261px;width:70px;">
    <img src="${img('67b7136a64965ad74a8f1fdd55864c26e2b6c182')}" alt="footer-icon-2" style="width:100%;height:100%;object-fit:cover;">
  </div>
</div>`;
    }
  };
})();
