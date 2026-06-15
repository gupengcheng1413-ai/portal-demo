/* =========================================================
   答案之书 · 状态机 + 答案库 + 动效编排
   ========================================================= */

(() => {
  const STATES = ['menu', 'question', 'loading', 'answer', 'depleted'];
  const MAX_ASKS = 10;

  const ANSWERS = [
    { zh: '不要犹豫',        en: 'Do not worry' },
    { zh: '戒掉过分的急躁',  en: 'Dont Be Impatient' },
    { zh: '勇敢迈出第一步',  en: 'Take the first step' },
    { zh: '答案在风中',      en: 'Blowing in the wind' },
    { zh: '相信你的直觉',    en: 'Trust your instinct' },
    { zh: '此刻便是答案',    en: 'Now is the answer' },
    { zh: '再等一等',        en: 'Wait a little longer' },
    { zh: '听从内心',        en: 'Listen to your heart' },
    { zh: '是的，去做吧',    en: 'Yes, do it' },
    { zh: '一切都会好起来',  en: 'Everything will be fine' },
    { zh: '试着换个角度',    en: 'Shift your perspective' },
    { zh: '答案不止一个',    en: 'There is more than one' },
    { zh: '顺其自然',        en: 'Let it flow' },
    { zh: '放下执念',        en: 'Let go of it' },
    { zh: '保持耐心',        en: 'Stay patient' },
    { zh: '时机还未到',      en: 'The time is not yet' },
    { zh: '主动出击',        en: 'Make the first move' },
    { zh: '静观其变',        en: 'Wait and see' },
    { zh: '勇敢一点',        en: 'Be a little braver' },
    { zh: '别害怕犯错',      en: 'Do not fear mistakes' },
    { zh: '值得一搏',        en: 'Worth a shot' },
    { zh: '慢慢来',          en: 'Take your time' },
    { zh: '先停下来想想',    en: 'Pause and think' },
    { zh: '答案早已写好',    en: 'It is already written' },
    { zh: '跟着感觉走',      en: 'Follow your feeling' },
    { zh: '放轻松',          en: 'Take it easy' },
    { zh: '机会就在眼前',    en: 'The chance is here' },
    { zh: '再坚持一下',      en: 'Hold on a bit more' },
    { zh: '相信会有转机',    en: 'A turn will come' },
    { zh: '答案是肯定的',    en: 'The answer is yes' },
    { zh: '答案是否定的',    en: 'The answer is no' },
    { zh: '不妨试一试',      en: 'Give it a try' },
    { zh: '答案藏在细节里',  en: 'It is in the details' },
    { zh: '别想太多',        en: 'Do not overthink' },
    { zh: '一步一步来',      en: 'One step at a time' },
    { zh: '答案会自己浮现',  en: 'It will surface' },
    { zh: '再问问自己',      en: 'Ask yourself again' },
    { zh: '保持希望',        en: 'Keep your hope' },
    { zh: '别回头',          en: 'Do not look back' },
    { zh: '答案因人而异',    en: 'It depends on you' },
    { zh: '相信时间',        en: 'Trust in time' },
    { zh: '答案就在路上',    en: 'It is on the way' },
    { zh: '先照顾好自己',    en: 'Take care of yourself' },
    { zh: '答案是再等等',    en: 'Wait a bit longer' },
    { zh: '勇敢说出来',      en: 'Speak it out' },
    { zh: '答案需要勇气',    en: 'It takes courage' },
    { zh: '换条路走',        en: 'Try another path' },
    { zh: '答案值得等待',    en: 'It is worth waiting' },
    { zh: '相信你自己',      en: 'Believe in yourself' },
    { zh: '答案就是行动',    en: 'The answer is action' },
  ];

  const body = document.body;
  const stage = document.querySelector('.stage');
  const fitWrap = document.querySelector('.fit');

  // ---------- 视口缩放：1640×348 → 自适应窗口（移动端竖屏自动等比缩放居中） ----------
  const fitToViewport = () => {
    const sw = window.innerWidth;
    const sh = window.innerHeight;
    // 去掉 ≤1 的上限：手机竖屏 sw 远小于 1640，s 必然 < 1，长条 demo 居中显示，左右留黑边
    const s = Math.min(sw / 1640, sh / 348);
    stage.style.setProperty('--scale', s);
  };
  window.addEventListener('resize', fitToViewport);
  window.addEventListener('orientationchange', fitToViewport);
  fitToViewport();

  // ---------- 状态切换 ----------
  const setState = (s) => {
    if (!STATES.includes(s)) return;
    body.dataset.state = s;
  };

  // ---------- 字符切分（用于答案逐字动画） ----------
  const splitChars = (el, text, baseDelay = 0) => {
    el.innerHTML = '';
    const chars = [...text];
    chars.forEach((ch, i) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.style.setProperty('--i', Math.round(baseDelay / 60) + i);
      span.textContent = ch === ' ' ? ' ' : ch;
      el.appendChild(span);
    });
  };

  // ---------- 选下一个答案（避免连续重复） ----------
  let lastIdx = -1;
  const pickAnswer = () => {
    if (ANSWERS.length === 1) return ANSWERS[0];
    let i;
    do {
      i = Math.floor(Math.random() * ANSWERS.length);
    } while (i === lastIdx);
    lastIdx = i;
    return ANSWERS[i];
  };

  // ---------- 写入答案 DOM ----------
  const titleEl = document.getElementById('answerTitle');
  const subEl   = document.getElementById('answerSub');
  const ctaLabel = document.getElementById('ctaLabel');
  const writeAnswer = (a) => {
    splitChars(titleEl, a.zh, 0);
    splitChars(subEl,   a.en, a.zh.length * 60 + 80);
  };

  // ---------- 询问次数 ----------
  let askCount = 0;

  // ---------- 流程：从问题页 → 答案页（沙化吹走 + 答案浮现）----------
  const goToAnswer = () => {
    askCount += 1;
    setState('loading');           // 触发 .fx + 沙化文案飘走
    setTimeout(() => {
      const a = pickAnswer();
      writeAnswer(a);
      if (askCount >= MAX_ASKS) {
        ctaLabel.textContent = `再问一次（${MAX_ASKS}/${MAX_ASKS}）`;
        setState('depleted');
      } else {
        ctaLabel.textContent = '再问一次';
        setState('answer');
      }
    }, 1300);
  };

  // ---------- 再问一次：回到 question 页，让用户重新走一次"默念问题→寻找答案" ----------
  const askAgain = () => {
    if (askCount >= MAX_ASKS) return;
    setState('question');
  };

  // ---------- 重置 ----------
  const reset = () => {
    askCount = 0;
    lastIdx = -1;
    ctaLabel.textContent = '再问一次';
    writeAnswer(ANSWERS[0]);
    setState('menu');
  };

  // ---------- 事件绑定 ----------
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    const action = target.dataset.action;

    switch (action) {
      case 'enter':
        setState('question');
        break;
      case 'find-answer':
        goToAnswer();
        break;
      case 'ask-again':
        if (askCount >= MAX_ASKS) return;
        askAgain();
        break;
      case 'close':
        // 嵌在心灵驿站 iframe 内：归位到提问页后通知父页直接返回主页；独立打开时退回内部菜单
        if (window.parent !== window) {
          askCount = 0;
          lastIdx = -1;
          ctaLabel.textContent = '再问一次';
          writeAnswer(ANSWERS[0]);
          setState('question');
          window.parent.postMessage({ type: 'answer-back' }, '*');
        } else {
          reset();
        }
        break;
    }
  });

  // ---------- 键盘调试 ----------
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case '1': setState('menu');     break;
      case '2': setState('question'); break;
      case '3':
        writeAnswer(pickAnswer());
        ctaLabel.textContent = '再问一次';
        setState('answer');
        break;
      case '4':
        askCount = MAX_ASKS;
        writeAnswer({ zh: '戒掉过分的急躁', en: 'Dont Be Impatient' });
        ctaLabel.textContent = `再问一次（${MAX_ASKS}/${MAX_ASKS}）`;
        setState('depleted');
        break;
      case 'r':
      case 'R':
        reset();
        break;
    }
  });

  // ---------- 初始：预填一个答案以便 #3 键直接看到 ----------
  writeAnswer(ANSWERS[0]);

  // ---------- 启动参数：?skip-menu=1 跳过入口菜单，直接进 question ----------
  if (new URLSearchParams(location.search).get('skip-menu') === '1') {
    setState('question');
  }
})();
