/* =========================================================
   答案之书 · 状态机 + 答案库 + 动效编排
   ========================================================= */

(() => {
  const STATES = ['menu', 'question', 'loading', 'answer', 'depleted'];
  const MAX_ASKS = 10;

  const ANSWERS = [
    // ===== 肯定 Yes — 强肯定/直接做 =====
    { zh: '是的，去做吧',    en: 'Yes, do it' },
    { zh: '毫无疑问',        en: 'Without a doubt' },
    { zh: '答案是肯定的',    en: 'The answer is yes' },
    { zh: '绝对可以',        en: 'Absolutely yes' },
    { zh: '放手去做',        en: 'Go for it' },
    { zh: '值得一搏',        en: 'Worth a shot' },
    { zh: '机会就在眼前',    en: 'The chance is here' },
    { zh: '就是现在',        en: 'Now is the time' },
    { zh: '你能做到',        en: 'You can do it' },
    { zh: '勇敢迈出第一步',  en: 'Take the first step' },
    { zh: '相信会有转机',    en: 'A turn will come' },
    { zh: '一切都会好起来',  en: 'Everything will be fine' },
    { zh: '比你想的更好',    en: 'Better than you expect' },
    { zh: '答案就是行动',    en: 'The answer is action' },
    { zh: '大胆一点',        en: 'Be bold' },
    { zh: '这是个好兆头',    en: 'It is a good sign' },
    { zh: '顺势而上',        en: 'Ride the momentum' },
    { zh: '你已经准备好了',  en: 'You are ready' },
    { zh: '答应它',          en: 'Say yes to it' },
    { zh: '形势对你有利',    en: 'The odds favor you' },
    { zh: '别再犹豫',        en: 'Hesitate no more' },
    { zh: '就此出发',        en: 'Set out now' },
    { zh: '全力以赴',        en: 'Give it your all' },
    { zh: '答案是去争取',    en: 'Go and claim it' },
    { zh: '你配得上',        en: 'You deserve it' },
    { zh: '迎上去',          en: 'Step up to it' },
    { zh: '这条路是对的',    en: 'This path is right' },
    { zh: '相信这次会成',    en: 'It will work this time' },
    { zh: '拥抱这个机会',    en: 'Embrace this chance' },
    { zh: '现在就开口',      en: 'Speak up now' },
    { zh: '答案藏着一个是',  en: 'The answer hides a yes' },
    { zh: '跟随这股冲动',    en: 'Follow this urge' },
    { zh: '是时候了',        en: 'The time has come' },
    { zh: '你的判断没错',    en: 'Your judgment is right' },
    { zh: '向前一步',        en: 'One step forward' },
    { zh: '这值得你付出',    en: 'It is worth your effort' },
    { zh: '答案是当然',      en: 'The answer is of course' },
    { zh: '就照你想的做',    en: 'Do as you imagine' },
    { zh: '好运站在你这边',  en: 'Luck is on your side' },
    { zh: '答案是大胆去爱',  en: 'Dare to love' },
    { zh: '你会庆幸自己做了', en: 'You will be glad you did' },
    { zh: '点头吧',          en: 'Give it a nod' },
    { zh: '这次相信冲动',    en: 'Trust the impulse this time' },
    { zh: '答案是绿灯',      en: 'The light is green' },
    { zh: '机会为你而来',    en: 'The chance comes for you' },
    { zh: '赢面很大',        en: 'The odds are strong' },
    { zh: '答案是放心去',    en: 'Go ahead with ease' },
    { zh: '这是你的时刻',    en: 'This is your moment' },
    { zh: '把握住它',        en: 'Seize it' },
    { zh: '答应自己一次',    en: 'Say yes to yourself once' },
    { zh: '路已经铺好',      en: 'The road is paved' },
    { zh: '答案是值得',      en: 'It is worth it' },
    { zh: '往前冲',          en: 'Charge ahead' },
    { zh: '你想对了',        en: 'You guessed right' },
    { zh: '就是它了',        en: 'This is the one' },
    { zh: '答案是欣然接受',  en: 'Accept it gladly' },
    { zh: '勇敢拥抱改变',    en: 'Embrace the change' },
    { zh: '这次会不一样',    en: 'This time is different' },
    { zh: '答案是肯定无疑',  en: 'It is a definite yes' },
    { zh: '去敲那扇门',      en: 'Go knock on that door' },
    // ===== 否定 No — 不/别急着上 =====
    { zh: '答案是否定的',    en: 'The answer is no' },
    { zh: '别指望它',        en: 'Do not count on it' },
    { zh: '现在不行',        en: 'Not now' },
    { zh: '答案是放弃',      en: 'Let this one go' },
    { zh: '这不是你要的',    en: 'This is not yours' },
    { zh: '绝对不要',        en: 'Absolutely not' },
    { zh: '收手吧',          en: 'Step away from it' },
    { zh: '答案是不',        en: 'No is the answer' },
    { zh: '别碰它',          en: 'Do not touch it' },
    { zh: '此路不通',        en: 'This road is closed' },
    { zh: '还是算了',        en: 'Better not' },
    { zh: '这次说不',        en: 'Say no this time' },
    { zh: '不值得',          en: 'It is not worth it' },
    { zh: '答案是摇头',      en: 'The answer is a shake of the head' },
    { zh: '放下这个念头',    en: 'Drop this thought' },
    { zh: '不是这一个',      en: 'Not this one' },
    { zh: '风险太大',        en: 'The risk is too high' },
    { zh: '答案是别去',      en: 'Do not go' },
    { zh: '省省力气',        en: 'Save your energy' },
    { zh: '这不会有结果',    en: 'It will lead nowhere' },
    { zh: '别勉强',          en: 'Do not force it' },
    { zh: '答案是拒绝',      en: 'Decline it' },
    { zh: '转身离开',        en: 'Turn and walk away' },
    { zh: '这扇门关着',      en: 'This door is shut' },
    { zh: '不要回头找它',    en: 'Do not look back for it' },
    { zh: '答案是停下',      en: 'The answer is stop' },
    { zh: '这不适合你',      en: 'It does not suit you' },
    { zh: '别上这条船',      en: 'Do not board this boat' },
    { zh: '时机全错',        en: 'The timing is all wrong' },
    { zh: '答案是放手',      en: 'The answer is to let go' },
    { zh: '这次别冒险',      en: 'Do not risk it this time' },
    { zh: '听不到好消息',    en: 'No good news here' },
    { zh: '答案是不必',      en: 'There is no need' },
    { zh: '别白费心思',      en: 'Do not waste the effort' },
    { zh: '这只是幻觉',      en: 'It is only an illusion' },
    { zh: '答案是远离',      en: 'Stay away from it' },
    { zh: '不要答应',        en: 'Do not say yes' },
    { zh: '这会让你后悔',    en: 'You will regret it' },
    { zh: '答案是关上门',    en: 'Close the door on it' },
    { zh: '别再投入了',      en: 'Invest no more' },
    { zh: '这不是答案',      en: 'This is not the answer' },
    { zh: '答案是收回',      en: 'Take it back' },
    { zh: '就此打住',        en: 'Stop right here' },
    { zh: '别被它牵着走',    en: 'Do not let it lead you' },
    { zh: '答案是不可以',    en: 'It cannot be' },
    // ===== 延迟 Wait — 等时机/缓一缓 =====
    { zh: '再等一等',        en: 'Wait a little longer' },
    { zh: '时机还没到',      en: 'The time is not yet' },
    { zh: '慢慢来',          en: 'Take your time' },
    { zh: '等一个更好的时机', en: 'Wait for a better moment' },
    { zh: '现在还太早',      en: 'It is still too early' },
    { zh: '让它再沉淀沉淀',  en: 'Let it settle longer' },
    { zh: '不急于这一刻',    en: 'No need to rush this' },
    { zh: '答案是等待',      en: 'The answer is to wait' },
    { zh: '再观察一阵',      en: 'Observe a while longer' },
    { zh: '让子弹飞一会儿',  en: 'Give it some time' },
    { zh: '等你准备好再说',  en: 'Not until you are ready' },
    { zh: '答案会迟一点到',  en: 'It will come a bit later' },
    { zh: '先按兵不动',      en: 'Hold your position' },
    { zh: '这事急不得',      en: 'This cannot be rushed' },
    { zh: '等风向变了再说',  en: 'Wait for the wind to shift' },
    { zh: '再睡一觉看看',    en: 'Sleep on it once more' },
    { zh: '让时间给答案',    en: 'Let time answer it' },
    { zh: '还需要再等等',    en: 'It still needs waiting' },
    { zh: '不到火候',        en: 'Not yet ripe' },
    { zh: '答案藏在以后',    en: 'The answer lies ahead' },
    { zh: '稍安勿躁',        en: 'Stay calm and wait' },
    { zh: '等水到渠成',      en: 'Wait for it to flow naturally' },
    { zh: '现在先放着',      en: 'Set it aside for now' },
    { zh: '再给它一点时间',  en: 'Give it a little more time' },
    { zh: '答案在下个路口',  en: 'The answer is at the next turn' },
    { zh: '等机会自己来',    en: 'Let the chance come to you' },
    { zh: '先缓一缓',        en: 'Ease off for now' },
    { zh: '答案是从长计议',  en: 'Take the long view' },
    { zh: '别急着收尾',      en: 'Do not rush to finish' },
    { zh: '让它慢慢成熟',    en: 'Let it ripen slowly' },
    { zh: '再忍一阵子',      en: 'Endure a while more' },
    { zh: '时候未到别强求',  en: 'Do not force what is not due' },
    { zh: '答案是延后',      en: 'Postpone it' },
    { zh: '等尘埃落定',      en: 'Wait for the dust to settle' },
    { zh: '现在静静等着',    en: 'Wait quietly now' },
    { zh: '好饭不怕晚',      en: 'Good things are worth the wait' },
    { zh: '再多看几眼',      en: 'Look a few more times' },
    { zh: '答案需要酝酿',    en: 'The answer needs to brew' },
    { zh: '按住性子',        en: 'Hold your temper' },
    { zh: '让明天回答',      en: 'Let tomorrow answer' },
    { zh: '等心定下来再决定', en: 'Decide once your heart is calm' },
    { zh: '答案是再缓缓',    en: 'Hold off a bit more' },
    { zh: '不要催它',        en: 'Do not hurry it' },
    { zh: '这步先别迈',      en: 'Do not take this step yet' },
    { zh: '答案会在合适时出现', en: 'It will appear at the right time' },
    // ===== 反问 Ask back — 把问题抛回给你 =====
    { zh: '你的直觉怎么说',  en: 'What does your gut say' },
    { zh: '你早就知道答案',  en: 'You already know the answer' },
    { zh: '你真正想要的是什么', en: 'What do you truly want' },
    { zh: '你在怕什么',      en: 'What are you afraid of' },
    { zh: '如果不会失败你会做吗', en: 'Would you, if you could not fail' },
    { zh: '这真的是你想要的吗', en: 'Is this really what you want' },
    { zh: '你问过自己的心吗', en: 'Have you asked your heart' },
    { zh: '最坏能坏到哪里',  en: 'What is the worst that happens' },
    { zh: '你愿意承担后果吗', en: 'Are you ready for the cost' },
    { zh: '为什么是现在',    en: 'Why now' },
    { zh: '你还在等什么',    en: 'What are you waiting for' },
    { zh: '谁说了算',        en: 'Who gets to decide' },
    { zh: '你想成为谁',      en: 'Who do you want to become' },
    { zh: '这件事对你多重要', en: 'How much does this matter' },
    { zh: '你后悔过不做吗',  en: 'Have you regretted not trying' },
    { zh: '你听谁的',        en: 'Whose voice are you following' },
    { zh: '五年后你会怎么看', en: 'How will you see it in five years' },
    { zh: '你准备好放手了吗', en: 'Are you ready to let go' },
    { zh: '这是恐惧还是直觉', en: 'Is it fear or instinct' },
    { zh: '你想要答案还是许可', en: 'Do you want an answer or permission' },
    { zh: '换作是他会怎么做', en: 'What would they do' },
    { zh: '你能接受不变吗',  en: 'Can you accept no change' },
    { zh: '什么让你犹豫',    en: 'What makes you hesitate' },
    { zh: '你为谁而做',      en: 'Who are you doing it for' },
    { zh: '值得吗',          en: 'Is it worth it' },
    { zh: '你的心更偏向哪边', en: 'Which way does your heart lean' },
    { zh: '如果没人知道你会做吗', en: 'Would you, if no one knew' },
    { zh: '你真的没有答案吗', en: 'Do you really have no answer' },
    { zh: '这是借口还是理由', en: 'Is it an excuse or a reason' },
    { zh: '你想停下还是继续', en: 'Stop or go on' },
    // ===== 行动 Take action — 给出具体动作 =====
    { zh: '列个利弊清单',    en: 'Make a list of pros and cons' },
    { zh: '睡一觉再决定',    en: 'Sleep on it' },
    { zh: '找人聊聊',        en: 'Talk it over with someone' },
    { zh: '问问过来人',      en: 'Get a second opinion' },
    { zh: '先迈出第一步',    en: 'Begin with one step' },
    { zh: '深呼吸三次',      en: 'Take three deep breaths' },
    { zh: '写下来再看',      en: 'Write it down first' },
    { zh: '给自己定个期限',  en: 'Set yourself a deadline' },
    { zh: '做最坏的打算',    en: 'Plan for the worst' },
    { zh: '先试一小步',      en: 'Try a small step first' },
    { zh: '把它说出口',      en: 'Say it out loud' },
    { zh: '现在就开始',      en: 'Start right now' },
    { zh: '先收集信息',      en: 'Gather the facts first' },
    { zh: '找个安静的地方想', en: 'Find a quiet place to think' },
    { zh: '列出你想要的',    en: 'List what you want' },
    { zh: '先照顾好自己',    en: 'Take care of yourself first' },
    { zh: '打个电话',        en: 'Make the call' },
    { zh: '迈开腿去做',      en: 'Get up and do it' },
    { zh: '把目标拆小',      en: 'Break it into smaller goals' },
    { zh: '先睡饱再说',      en: 'Rest before you decide' },
    { zh: '主动开口',        en: 'Speak up first' },
    { zh: '约个时间面谈',    en: 'Meet them face to face' },
    { zh: '先放下手机',      en: 'Put down your phone' },
    { zh: '给自己一点奖励',  en: 'Give yourself a reward' },
    { zh: '立刻行动',        en: 'Act on it now' },
    { zh: '先听对方说完',    en: 'Hear them out first' },
    { zh: '做个实验试试',    en: 'Run a small test' },
    { zh: '把担心写下来',    en: 'Write down your worries' },
    { zh: '先存点底气',      en: 'Build a safety net first' },
    { zh: '今天就去做',      en: 'Do it today' },
    { zh: '先问清楚再做',    en: 'Ask before you act' },
    { zh: '退一步看全局',    en: 'Step back and see it whole' },
    { zh: '把它分享出去',    en: 'Share it with others' },
    { zh: '找回最初的理由',  en: 'Recall why you started' },
    { zh: '先解决最难的',    en: 'Tackle the hardest first' },
    { zh: '留点余地给自己',  en: 'Leave yourself some room' },
    { zh: '把它记在本子上',  en: 'Note it in your journal' },
    { zh: '先暂停一下',      en: 'Pause for a moment' },
    { zh: '去现场看看',      en: 'Go and see for yourself' },
    { zh: '先练习几次',      en: 'Practice it a few times' },
    { zh: '把它说给镜子听',  en: 'Say it to the mirror' },
    { zh: '找个搭档一起',    en: 'Find a partner to join' },
    { zh: '先扫清障碍',      en: 'Clear the obstacles first' },
    { zh: '给它一个机会',    en: 'Give it a chance' },
    { zh: '动手做个原型',    en: 'Build a quick prototype' },
    { zh: '先定个小目标',    en: 'Set a small goal first' },
    { zh: '把精力放在能改变的事上', en: 'Focus on what you can change' },
    { zh: '先问问你的身体',  en: 'Check in with your body' },
    { zh: '今晚就写下计划',  en: 'Write the plan tonight' },
    { zh: '先迈出舒适区',    en: 'Step out of your comfort zone' },
    { zh: '把它读三遍',      en: 'Read it three times' },
    { zh: '找个理由开始',    en: 'Find one reason to begin' },
    { zh: '先做好准备',      en: 'Prepare before you leap' },
    { zh: '把它画出来',      en: 'Draw it out' },
    { zh: '先清空思绪',      en: 'Clear your mind first' },
    { zh: '跟着清单走',      en: 'Follow your checklist' },
    { zh: '先确认事实',      en: 'Confirm the facts' },
    { zh: '把它交给时间',    en: 'Hand it over to time' },
    { zh: '先迈一只脚',      en: 'Lead with one foot' },
    { zh: '就从今天起',      en: 'Start from today' },
    // ===== 诗意 Poetic — 留白让你自己投射 =====
    { zh: '答案在风中',      en: 'The answer is in the wind' },
    { zh: '答案藏在月光里',  en: 'It hides in the moonlight' },
    { zh: '风会带你到那里',  en: 'The wind will carry you' },
    { zh: '答案在路的尽头',  en: 'It waits at the road\'s end' },
    { zh: '光会照进来',      en: 'The light will find its way' },
    { zh: '种子已经埋下',    en: 'The seed is already sown' },
    { zh: '河流知道方向',    en: 'The river knows the way' },
    { zh: '答案在你的影子里', en: 'It is in your shadow' },
    { zh: '潮水自有涨落',    en: 'The tide rises in its time' },
    { zh: '星光为你指路',    en: 'The stars will guide you' },
    { zh: '答案随花开绽放',  en: 'It blooms with the flowers' },
    { zh: '门一直开着',      en: 'The door has been open' },
    { zh: '桥就在前方',      en: 'The bridge lies just ahead' },
    { zh: '答案在静默之中',  en: 'It rests in the silence' },
    { zh: '夜里会有回声',    en: 'An echo comes at night' },
    { zh: '答案像晨雾散去',  en: 'It clears like morning mist' },
    { zh: '路会自己显现',    en: 'The path will reveal itself' },
    { zh: '答案在远山那边',  en: 'It lies beyond the hills' },
    { zh: '火种仍在燃烧',    en: 'The ember still burns' },
    { zh: '答案写在水面上',  en: 'It is written on the water' },
    { zh: '影子终会转向',    en: 'The shadow will turn' },
    { zh: '答案在第一缕光里', en: 'It is in the first light' },
    { zh: '风向已经改变',    en: 'The wind has shifted' },
    { zh: '答案在归途上',    en: 'It waits on the way home' },
    { zh: '雨后会有彩虹',    en: 'A rainbow follows the rain' },
    { zh: '答案沉在心底',    en: 'It rests deep in your heart' },
    { zh: '钟声会响起',      en: 'The bell will ring' },
    { zh: '答案在两条路之间', en: 'It lies between two roads' },
    { zh: '海会回应你',      en: 'The sea will answer you' },
    { zh: '答案在下一个转角', en: 'It is around the next corner' },
    { zh: '答案在星辰之间',  en: 'It is among the stars' },
    { zh: '晨光终会到来',    en: 'The dawn will surely come' },
    { zh: '答案随风飘远',    en: 'It drifts off with the wind' },
    { zh: '落叶自会归根',    en: 'The leaf returns to its root' },
    { zh: '答案在地平线上',  en: 'It rests on the horizon' },
    { zh: '萤火会亮起来',    en: 'The firefly will glow' },
    { zh: '答案在你的梦里',  en: 'It lives within your dreams' },
    { zh: '潮水带来消息',    en: 'The tide brings word' },
    { zh: '答案在云的后面',  en: 'It hides behind the clouds' },
    { zh: '雪化后见分晓',    en: 'It shows when the snow melts' },
    { zh: '答案在心跳之间',  en: 'It beats between heartbeats' },
    { zh: '远方有灯火',      en: 'A light burns far away' },
    { zh: '答案在沉睡的种子里', en: 'It sleeps inside the seed' },
    { zh: '风穿过山谷',      en: 'The wind crosses the valley' },
    { zh: '答案在涨潮时浮现', en: 'It surfaces at high tide' },
    { zh: '星子坠入湖心',    en: 'A star falls into the lake' },
    { zh: '答案在最暗处发光', en: 'It glows in the darkest place' },
    { zh: '归鸟知道路',      en: 'The homing bird knows the way' },
    { zh: '答案在花谢之后',  en: 'It comes after the bloom fades' },
    { zh: '月亮会盈满',      en: 'The moon will grow full' },
    { zh: '答案在雾散的早晨', en: 'It waits in the clearing fog' },
    { zh: '长夜终有尽头',    en: 'The long night will end' },
    { zh: '答案在涟漪深处',  en: 'It lies beneath the ripples' },
    { zh: '晨钟唤醒山林',    en: 'The morning bell wakes the woods' },
    { zh: '答案在余烬里',    en: 'It rests in the embers' },
    { zh: '春天总会回来',    en: 'Spring will always return' },
    { zh: '答案在你转身时',  en: 'It comes when you turn around' },
    { zh: '微光足以引路',    en: 'A faint light is enough' },
    { zh: '答案在潮声里',    en: 'It murmurs in the tide' },
    { zh: '远山自有回响',    en: 'The far hills will echo back' },
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
