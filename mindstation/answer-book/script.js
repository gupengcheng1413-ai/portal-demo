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
    { zh: '答案在心里',      en: 'It is in your heart' },
    { zh: '别急着决定',      en: 'Do not rush to decide' },
    { zh: '给自己时间',      en: 'Give yourself time' },
    { zh: '答案会来的',      en: 'The answer will come' },
    { zh: '先睡一觉',        en: 'Sleep on it' },
    { zh: '明天再看',        en: 'Look again tomorrow' },
    { zh: '答案是等待',      en: 'The answer is to wait' },
    { zh: '大胆去爱',        en: 'Love boldly' },
    { zh: '别太苛刻',        en: 'Do not be too hard' },
    { zh: '善待自己',        en: 'Be kind to yourself' },
    { zh: '答案会改变',      en: 'The answer may change' },
    { zh: '听听别人',        en: 'Hear others out' },
    { zh: '相信过程',        en: 'Trust the process' },
    { zh: '答案不重要',      en: 'The answer matters less' },
    { zh: '重要的是你',      en: 'What matters is you' },
    { zh: '放手一搏',        en: 'Go all in' },
    { zh: '别怕失败',        en: 'Do not fear failure' },
    { zh: '失败也行',        en: 'Failing is okay' },
    { zh: '答案在明天',      en: 'It lies tomorrow' },
    { zh: '走出去',          en: 'Step outside' },
    { zh: '试试看',          en: 'See for yourself' },
    { zh: '答案是接受',      en: 'The answer is acceptance' },
    { zh: '接受现实',        en: 'Accept what is' },
    { zh: '笑一笑',          en: 'Give a smile' },
    { zh: '深呼吸',          en: 'Take a deep breath' },
    { zh: '答案会清晰',      en: 'It will get clear' },
    { zh: '别钻牛角尖',      en: 'Do not fixate' },
    { zh: '退一步',          en: 'Step back' },
    { zh: '答案需要时间',    en: 'It needs time' },
    { zh: '相信缘分',        en: 'Trust the timing of fate' },
    { zh: '顺着心走',        en: 'Go where the heart goes' },
    { zh: '答案是放下',      en: 'The answer is to release' },
    { zh: '别太执着',        en: 'Do not cling' },
    { zh: '学会等待',        en: 'Learn to wait' },
    { zh: '答案在远方',      en: 'It is far ahead' },
    { zh: '出发吧',          en: 'Set out now' },
    { zh: '别停下',          en: 'Do not stop' },
    { zh: '继续前行',        en: 'Keep moving on' },
    { zh: '答案会回响',      en: 'It will echo back' },
    { zh: '相信光',          en: 'Trust the light' },
    { zh: '黑暗会过去',      en: 'The dark will pass' },
    { zh: '答案是坚持',      en: 'The answer is to persist' },
    { zh: '咬牙撑住',        en: 'Hold the line' },
    { zh: '别放弃',          en: 'Do not give up' },
    { zh: '再走一段',        en: 'Walk a bit further' },
    { zh: '答案在脚下',      en: 'It is beneath your feet' },
    { zh: '迈开腿',          en: 'Get moving' },
    { zh: '别怕未知',        en: 'Do not fear the unknown' },
    { zh: '拥抱变化',        en: 'Embrace the change' },
    { zh: '答案是改变',      en: 'The answer is to change' },
    { zh: '换个活法',        en: 'Live another way' },
    { zh: '别将就',          en: 'Do not settle' },
    { zh: '你值得更好',      en: 'You deserve better' },
    { zh: '答案在沉默里',    en: 'It is in the silence' },
    { zh: '静下来',          en: 'Be still' },
    { zh: '听内心说话',      en: 'Let the heart speak' },
    { zh: '答案是行动',      en: 'The answer is to act' },
    { zh: '现在就做',        en: 'Do it now' },
    { zh: '别等了',          en: 'Stop waiting' },
    { zh: '答案是休息',      en: 'The answer is to rest' },
    { zh: '歇一歇',          en: 'Take a break' },
    { zh: '你累了',          en: 'You are tired' },
    { zh: '照顾自己',        en: 'Care for yourself' },
    { zh: '答案很简单',      en: 'It is quite simple' },
    { zh: '别想复杂',        en: 'Do not complicate' },
    { zh: '保持简单',        en: 'Keep it simple' },
    { zh: '答案是诚实',      en: 'The answer is honesty' },
    { zh: '对自己诚实',      en: 'Be honest with you' },
    { zh: '说真话',          en: 'Tell the truth' },
    { zh: '答案是宽容',      en: 'The answer is to forgive' },
    { zh: '放过自己',        en: 'Forgive yourself' },
    { zh: '原谅别人',        en: 'Let others off' },
    { zh: '答案是感恩',      en: 'The answer is gratitude' },
    { zh: '心存感激',        en: 'Stay grateful' },
    { zh: '珍惜现在',        en: 'Cherish the now' },
    { zh: '答案是当下',      en: 'The answer is the present' },
    { zh: '活在此刻',        en: 'Live in the moment' },
    { zh: '别想太远',        en: 'Do not look too far' },
    { zh: '答案是勇气',      en: 'The answer is courage' },
    { zh: '鼓起勇气',        en: 'Summon courage' },
    { zh: '勇往直前',        en: 'Press straight on' },
    { zh: '答案是信念',      en: 'The answer is faith' },
    { zh: '信自己',          en: 'Trust yourself' },
    { zh: '信会更好',        en: 'Trust it gets better' },
    { zh: '答案在专注里',    en: 'It is in focus' },
    { zh: '一次一件',        en: 'One thing at a time' },
    { zh: '别分心',          en: 'Do not get distracted' },
    { zh: '答案是重来',      en: 'The answer is to restart' },
    { zh: '重新开始',        en: 'Begin anew' },
    { zh: '清空自己',        en: 'Empty yourself' },
    { zh: '答案在倾听里',    en: 'It is in listening' },
    { zh: '多听少说',        en: 'Listen more' },
    { zh: '答案是接纳',      en: 'The answer is to accept' },
    { zh: '接纳自己',        en: 'Accept yourself' },
    { zh: '答案是果断',      en: 'The answer is decisiveness' },
    { zh: '干脆一点',        en: 'Be decisive' },
    { zh: '别犹豫了',        en: 'Hesitate no more' },
    { zh: '顺势而行',        en: 'Go with the flow' },
    { zh: '答案是积累',      en: 'The answer is to build up' },
    { zh: '积少成多',        en: 'Little by little' },
    { zh: '答案是认真',      en: 'The answer is to mean it' },
    { zh: '认真对待',        en: 'Take it seriously' },
    { zh: '答案是留白',      en: 'The answer is to leave space' },
    { zh: '留点余地',        en: 'Leave some room' },
    { zh: '答案是表达',      en: 'The answer is to express' },
    { zh: '说出来',          en: 'Say it out' },
    { zh: '当面去说',        en: 'Say it face to face' },
    { zh: '写下来',          en: 'Write it down' },
    { zh: '答案在尝试里',    en: 'It is in trying' },
    { zh: '答案在观察里',    en: 'It is in watching' },
    { zh: '看仔细些',        en: 'Look closer' },
    { zh: '答案是提问',      en: 'The answer is to ask' },
    { zh: '多问问',          en: 'Keep asking' },
    { zh: '答案是迎难',      en: 'The answer is to face it' },
    { zh: '迎难而上',        en: 'Face it head on' },
    { zh: '答案是退一步',    en: 'The answer is to step back' },
    { zh: '退一步想',        en: 'Step back and think' },
    { zh: '答案是缘分',      en: 'The answer is fate' },
    { zh: '随缘吧',          en: 'Let fate decide' },
    { zh: '答案是放下手机',  en: 'Put the phone down' },
    { zh: '抬起头看',        en: 'Look up' },
    { zh: '答案是靠近',      en: 'The answer is to draw near' },
    { zh: '主动靠近',        en: 'Reach out first' },
    { zh: '答案是先爱自己',  en: 'Love yourself first' },
    { zh: '别比较',          en: 'Do not compare' },
    { zh: '做你自己',        en: 'Just be you' },
    { zh: '答案是好好睡',    en: 'Sleep well' },
    { zh: '睡一觉再说',      en: 'Sleep on it' },
    { zh: '答案是说不',      en: 'The answer is to say no' },
    { zh: '学会拒绝',        en: 'Learn to refuse' },
    { zh: '答案是说好',      en: 'The answer is to say yes' },
    { zh: '答应下来',        en: 'Say yes to it' },
    { zh: '答案在理解里',    en: 'It is in understanding' },
    { zh: '慢慢懂得',        en: 'Come to understand' },
    { zh: '答案是第一步',    en: 'The answer is the first step' },
    { zh: '先走一步',        en: 'Take one step' },
    { zh: '答案是明天',      en: 'The answer is tomorrow' },
    { zh: '明天会好',        en: 'Tomorrow is better' },
    { zh: '答案是独处',      en: 'The answer is solitude' },
    { zh: '享受独处',        en: 'Enjoy being alone' },
    { zh: '答案是深想',      en: 'The answer is to think deep' },
    { zh: '想深一点',        en: 'Think it through' },
    { zh: '答案是顺心',      en: 'Follow your heart' },
    { zh: '顺从内心',        en: 'Obey your heart' },
    { zh: '答案是稳住',      en: 'The answer is to stay steady' },
    { zh: '稳住心神',        en: 'Hold steady' },
    { zh: '答案是努力',      en: 'The answer is effort' },
    { zh: '努力会有回报',    en: 'Effort pays off' },
    { zh: '答案是抬头',      en: 'The answer is to look up' },
    { zh: '抬起头来',        en: 'Lift your head' },
    { zh: '答案是等花开',    en: 'Wait for the bloom' },
    { zh: '静待花开',        en: 'Wait for it to bloom' },
    { zh: '答案是先放下',    en: 'The answer is to set it down' },
    { zh: '先放一放',        en: 'Set it aside' },
    { zh: '答案在身体里',    en: 'It is in your body' },
    { zh: '听身体的话',      en: 'Listen to your body' },
    { zh: '答案是不后悔',    en: 'The answer is no regret' },
    { zh: '别留遗憾',        en: 'Leave no regret' },
    { zh: '答案是重逢',      en: 'The answer is reunion' },
    { zh: '后会有期',        en: 'We will meet again' },
    { zh: '答案是温柔',      en: 'The answer is gentleness' },
    { zh: '温柔坚持',        en: 'Hold on gently' },
    { zh: '答案是点亮自己',  en: 'Light up yourself' },
    { zh: '照亮自己',        en: 'Light your own way' },
    { zh: '答案是继续',      en: 'The answer is to go on' },
    { zh: '答案是相信',      en: 'The answer is to believe' },
    { zh: '信一次',          en: 'Believe just once' },
    { zh: '答案是开始',      en: 'The answer is to begin' },
    { zh: '现在开始',        en: 'Start right now' },
    { zh: '答案是结束',      en: 'The answer is to end it' },
    { zh: '该结束了',        en: 'Time to end it' },
    { zh: '答案是清醒',      en: 'The answer is to stay clear' },
    { zh: '保持清醒',        en: 'Stay clear headed' },
    { zh: '答案是热爱',      en: 'The answer is to love it' },
    { zh: '热爱所做',        en: 'Love what you do' },
    { zh: '答案是专注当下',  en: 'Focus on now' },
    { zh: '答案是放过自己',  en: 'Forgive yourself' },
    { zh: '别苛责自己',      en: 'Do not blame yourself' },
    { zh: '答案是再来一次',  en: 'Try once more' },
    { zh: '重来一次',        en: 'Start over again' },
    { zh: '答案是看远点',    en: 'Look further' },
    { zh: '放眼长远',        en: 'Look long term' },
    { zh: '答案是守住',      en: 'The answer is to hold on' },
    { zh: '守住初心',        en: 'Hold your first heart' },
    { zh: '答案是松手',      en: 'The answer is to let go' },
    { zh: '该松手了',        en: 'Time to let go' },
    { zh: '答案是珍惜',      en: 'The answer is to cherish' },
    { zh: '珍惜眼前人',      en: 'Cherish who is here' },
    { zh: '答案是宽心',      en: 'Set your heart at ease' },
    { zh: '宽心一点',        en: 'Ease your mind' },
    { zh: '答案是踏实',      en: 'Stay grounded' },
    { zh: '脚踏实地',        en: 'Keep your feet down' },
    { zh: '答案是从容',      en: 'Stay composed' },
    { zh: '从容一些',        en: 'Be more at ease' },
    { zh: '答案是笃定',      en: 'Be certain' },
    { zh: '心要笃定',        en: 'Hold your certainty' },
    { zh: '答案是知足',      en: 'Be content' },
    { zh: '知足常乐',        en: 'Contentment brings joy' },
    { zh: '答案是包容',      en: 'Be tolerant' },
    { zh: '多些包容',        en: 'Hold more space' },
    { zh: '答案是真心',      en: 'Be sincere' },
    { zh: '拿出真心',        en: 'Offer your true heart' },
    { zh: '活在当下',        en: 'Live in the present' },
    { zh: '答案是远方',      en: 'The answer is far ahead' },
    { zh: '看向远方',        en: 'Look to the distance' },
    { zh: '答案是初心',      en: 'Return to the start' },
    { zh: '莫忘初心',        en: 'Do not forget why' },
    { zh: '答案是清零',      en: 'Start from zero' },
    { zh: '清零再来',        en: 'Reset and begin' },
    { zh: '答案是深耕',      en: 'Dig deep' },
    { zh: '深耕一处',        en: 'Cultivate one spot' },
    { zh: '答案是破局',      en: 'Break the deadlock' },
    { zh: '主动破局',        en: 'Break it open' },
    { zh: '适当留白',        en: 'Leave a little space' },
    { zh: '答案是减法',      en: 'Do less' },
    { zh: '学会减法',        en: 'Learn to subtract' },
    { zh: '答案是聚焦',      en: 'Focus in' },
    { zh: '聚焦一点',        en: 'Narrow your focus' },
    { zh: '答案是松弛',      en: 'Loosen up' },
    { zh: '松弛有度',        en: 'Stay loose enough' },
    { zh: '答案是允许',      en: 'Allow it' },
    { zh: '允许发生',        en: 'Let it happen' },
    { zh: '答案是接住',      en: 'Catch yourself' },
    { zh: '接住自己',        en: 'Hold your own fall' },
    { zh: '答案是看见',      en: 'See it clearly' },
    { zh: '被看见就好',      en: 'To be seen is enough' },
    { zh: '答案是抵达',      en: 'You will arrive' },
    { zh: '终会抵达',        en: 'You will get there' },
    { zh: '答案是回应',      en: 'It will answer' },
    { zh: '生活会回应',      en: 'Life will respond' },
    { zh: '答案是发芽',      en: 'It will sprout' },
    { zh: '静待发芽',        en: 'Wait for the sprout' },
    { zh: '答案是渡过',      en: 'You will pass through' },
    { zh: '都会渡过',        en: 'This too will pass' },
    { zh: '答案是和解',      en: 'Make your peace' },
    { zh: '与己和解',        en: 'Make peace within' },
    { zh: '答案是奔赴',      en: 'Go toward it' },
    { zh: '向光奔赴',        en: 'Run toward the light' },
    { zh: '答案是相逢',      en: 'You will meet again' },
    { zh: '答案是真诚',      en: 'The answer is sincerity' },
    { zh: '答案是专注',      en: 'The answer is focus' },
    { zh: '答案是分享',      en: 'The answer is to share' },
    { zh: '答案是好奇',      en: 'The answer is curiosity' },
    { zh: '答案是出发',      en: 'The answer is to set off' },
    { zh: '答案是回家',      en: 'The answer is to go home' },
    { zh: '答案是陪伴',      en: 'The answer is company' },
    { zh: '答案是微笑',      en: 'The answer is to smile' },
    { zh: '答案是倾听',      en: 'The answer is to listen' },
    { zh: '答案是拥抱',      en: 'The answer is a hug' },
    { zh: '答案是当下一刻',  en: 'The answer is this moment' },
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
