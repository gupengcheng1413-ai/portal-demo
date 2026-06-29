/* =========================================================
   答案之书 · 状态机 + 答案库 + 动效编排
   ========================================================= */

(() => {
  const STATES = ['guide', 'menu', 'question', 'loading', 'answer', 'depleted'];
  const MAX_ASKS = 10;

  const ANSWERS = [
    // ===== 肯定 Yes — 强肯定/直接做 =====
    { zh: '是的，去做吧',    en: 'Yes, do it' },
    { zh: '毫无疑问',        en: 'Without a doubt' },
    { zh: '尽管去吧',        en: 'Go right ahead' },
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
    { zh: '现在就动手',      en: 'Just start now' },
    { zh: '大胆一点',        en: 'Be bold' },
    { zh: '这是个好兆头',    en: 'It is a good sign' },
    { zh: '顺势而上',        en: 'Ride the momentum' },
    { zh: '你已经准备好了',  en: 'You are ready' },
    { zh: '答应它',          en: 'Say yes to it' },
    { zh: '形势对你有利',    en: 'The odds favor you' },
    { zh: '别再犹豫',        en: 'Hesitate no more' },
    { zh: '就此出发',        en: 'Set out now' },
    { zh: '全力以赴',        en: 'Give it your all' },
    { zh: '去争取',          en: 'Go and claim it' },
    { zh: '你配得上',        en: 'You deserve it' },
    { zh: '迎上去',          en: 'Step up to it' },
    { zh: '这条路是对的',    en: 'This path is right' },
    { zh: '相信这次会成',    en: 'It will work this time' },
    { zh: '拥抱这个机会',    en: 'Embrace this chance' },
    { zh: '现在就开口',      en: 'Speak up now' },
    { zh: '心里那个是，对的', en: 'That quiet yes is right' },
    { zh: '跟随这股冲动',    en: 'Follow this urge' },
    { zh: '是时候了',        en: 'The time has come' },
    { zh: '你的判断没错',    en: 'Your judgment is right' },
    { zh: '向前一步',        en: 'One step forward' },
    { zh: '这值得你付出',    en: 'It is worth your effort' },
    { zh: '当然可以',        en: 'Of course you can' },
    { zh: '就照你想的做',    en: 'Do as you imagine' },
    { zh: '好运站在你这边',  en: 'Luck is on your side' },
    { zh: '大胆去爱',        en: 'Dare to love' },
    { zh: '你会庆幸自己做了', en: 'You will be glad you did' },
    { zh: '点头吧',          en: 'Give it a nod' },
    { zh: '这次相信冲动',    en: 'Trust the impulse this time' },
    { zh: '一路绿灯',        en: 'The light is green' },
    { zh: '机会为你而来',    en: 'The chance comes for you' },
    { zh: '赢面很大',        en: 'The odds are strong' },
    { zh: '放心去吧',        en: 'Go ahead with ease' },
    { zh: '这是你的时刻',    en: 'This is your moment' },
    { zh: '把握住它',        en: 'Seize it' },
    { zh: '答应自己一次',    en: 'Say yes to yourself once' },
    { zh: '路已经铺好',      en: 'The road is paved' },
    { zh: '值得一试',        en: 'It is worth it' },
    { zh: '往前冲',          en: 'Charge ahead' },
    { zh: '你想对了',        en: 'You guessed right' },
    { zh: '就是它了',        en: 'This is the one' },
    { zh: '欣然接受',        en: 'Accept it gladly' },
    { zh: '勇敢拥抱改变',    en: 'Embrace the change' },
    { zh: '这次会不一样',    en: 'This time is different' },
    { zh: '板上钉钉',        en: 'It is a definite yes' },
    { zh: '去敲那扇门',      en: 'Go knock on that door' },
    // ===== 否定 No — 不/别急着上 =====
    { zh: '不行',            en: 'No, not this one' },
    { zh: '别指望它',        en: 'Do not count on it' },
    { zh: '现在不行',        en: 'Not now' },
    { zh: '放手吧',          en: 'Let this one go' },
    { zh: '这不是你要的',    en: 'This is not yours' },
    { zh: '绝对不要',        en: 'Absolutely not' },
    { zh: '收手吧',          en: 'Step away from it' },
    { zh: '不',              en: 'No' },
    { zh: '别碰它',          en: 'Do not touch it' },
    { zh: '此路不通',        en: 'This road is closed' },
    { zh: '还是算了',        en: 'Better not' },
    { zh: '这次说不',        en: 'Say no this time' },
    { zh: '不值得',          en: 'It is not worth it' },
    { zh: '摇摇头吧',        en: 'Shake your head on this' },
    { zh: '放下这个念头',    en: 'Drop this thought' },
    { zh: '不是这一个',      en: 'Not this one' },
    { zh: '风险太大',        en: 'The risk is too high' },
    { zh: '别去',            en: 'Do not go' },
    { zh: '省省力气',        en: 'Save your energy' },
    { zh: '这不会有结果',    en: 'It will lead nowhere' },
    { zh: '别勉强',          en: 'Do not force it' },
    { zh: '拒绝它',          en: 'Decline it' },
    { zh: '转身离开',        en: 'Turn and walk away' },
    { zh: '这扇门关着',      en: 'This door is shut' },
    { zh: '不要回头找它',    en: 'Do not look back for it' },
    { zh: '停下来',          en: 'Come to a stop' },
    { zh: '这不适合你',      en: 'It does not suit you' },
    { zh: '别上这条船',      en: 'Do not board this boat' },
    { zh: '时机全错',        en: 'The timing is all wrong' },
    { zh: '松手吧',          en: 'Let it go' },
    { zh: '这次别冒险',      en: 'Do not risk it this time' },
    { zh: '听不到好消息',    en: 'No good news here' },
    { zh: '不必了',          en: 'There is no need' },
    { zh: '别白费心思',      en: 'Do not waste the effort' },
    { zh: '这只是幻觉',      en: 'It is only an illusion' },
    { zh: '离它远点',        en: 'Stay away from it' },
    { zh: '不要答应',        en: 'Do not say yes' },
    { zh: '这会让你后悔',    en: 'You will regret it' },
    { zh: '关上那扇门',      en: 'Close the door on it' },
    { zh: '别再投入了',      en: 'Invest no more' },
    { zh: '这条路不对',      en: 'This is not the way' },
    { zh: '收回来',          en: 'Take it back' },
    { zh: '就此打住',        en: 'Stop right here' },
    { zh: '别被它牵着走',    en: 'Do not let it lead you' },
    { zh: '不可以',          en: 'It cannot be' },
    // ===== 延迟 Wait — 等时机/缓一缓 =====
    { zh: '再等一等',        en: 'Wait a little longer' },
    { zh: '时机还没到',      en: 'The time is not yet' },
    { zh: '慢慢来',          en: 'Take your time' },
    { zh: '等一个更好的时机', en: 'Wait for a better moment' },
    { zh: '现在还太早',      en: 'It is still too early' },
    { zh: '让它再沉淀沉淀',  en: 'Let it settle longer' },
    { zh: '不急于这一刻',    en: 'No need to rush this' },
    { zh: '再等等',          en: 'Wait it out' },
    { zh: '再观察一阵',      en: 'Observe a while longer' },
    { zh: '让子弹飞一会儿',  en: 'Give it some time' },
    { zh: '等你准备好再说',  en: 'Not until you are ready' },
    { zh: '它会晚些来',      en: 'It comes a bit later' },
    { zh: '先按兵不动',      en: 'Hold your position' },
    { zh: '这事急不得',      en: 'This cannot be rushed' },
    { zh: '等风向变了再说',  en: 'Wait for the wind to shift' },
    { zh: '再睡一觉看看',    en: 'Sleep on it once more' },
    { zh: '交给时间',        en: 'Let time decide it' },
    { zh: '还需要再等等',    en: 'It still needs waiting' },
    { zh: '不到火候',        en: 'Not yet ripe' },
    { zh: '往后才见分晓',    en: 'It lies further ahead' },
    { zh: '稍安勿躁',        en: 'Stay calm and wait' },
    { zh: '等水到渠成',      en: 'Wait for it to flow naturally' },
    { zh: '现在先放着',      en: 'Set it aside for now' },
    { zh: '再给它一点时间',  en: 'Give it a little more time' },
    { zh: '下个路口见分晓',  en: 'Clear at the next turn' },
    { zh: '等机会自己来',    en: 'Let the chance come to you' },
    { zh: '先缓一缓',        en: 'Ease off for now' },
    { zh: '从长计议',        en: 'Take the long view' },
    { zh: '别急着收尾',      en: 'Do not rush to finish' },
    { zh: '让它慢慢成熟',    en: 'Let it ripen slowly' },
    { zh: '再忍一阵子',      en: 'Endure a while more' },
    { zh: '时候未到别强求',  en: 'Do not force what is not due' },
    { zh: '往后放放',        en: 'Postpone it' },
    { zh: '等尘埃落定',      en: 'Wait for the dust to settle' },
    { zh: '现在静静等着',    en: 'Wait quietly now' },
    { zh: '好饭不怕晚',      en: 'Good things are worth the wait' },
    { zh: '再多看几眼',      en: 'Look a few more times' },
    { zh: '再酝酿酝酿',      en: 'It needs to brew' },
    { zh: '按住性子',        en: 'Hold your temper' },
    { zh: '让明天回答',      en: 'Let tomorrow answer' },
    { zh: '等心定下来再决定', en: 'Decide once your heart is calm' },
    { zh: '再缓一缓',        en: 'Hold off a bit more' },
    { zh: '不要催它',        en: 'Do not hurry it' },
    { zh: '这步先别迈',      en: 'Do not take this step yet' },
    { zh: '时候到了自然明朗', en: 'It clears at the right time' },
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
    { zh: '月光会指引你',    en: 'The moonlight will guide you' },
    { zh: '风会带你到那里',  en: 'The wind will carry you' },
    { zh: '路的尽头自有分晓', en: 'It waits at the road\'s end' },
    { zh: '光会照进来',      en: 'The light will find its way' },
    { zh: '种子已经埋下',    en: 'The seed is already sown' },
    { zh: '河流知道方向',    en: 'The river knows the way' },
    { zh: '看看你的影子',    en: 'Look to your own shadow' },
    { zh: '潮水自有涨落',    en: 'The tide rises in its time' },
    { zh: '星光为你指路',    en: 'The stars will guide you' },
    { zh: '花开自有时',      en: 'It blooms in its own time' },
    { zh: '门一直开着',      en: 'The door has been open' },
    { zh: '桥就在前方',      en: 'The bridge lies just ahead' },
    { zh: '静下来就懂了',    en: 'Stillness will tell you' },
    { zh: '夜里会有回声',    en: 'An echo comes at night' },
    { zh: '雾散了就明白',    en: 'It clears like morning mist' },
    { zh: '路会自己显现',    en: 'The path will reveal itself' },
    { zh: '就在远山那边',    en: 'Beyond the far hills' },
    { zh: '火种仍在燃烧',    en: 'The ember still burns' },
    { zh: '看看水面',        en: 'Read it on the water' },
    { zh: '影子终会转向',    en: 'The shadow will turn' },
    { zh: '第一缕光会带来',  en: 'The first light brings it' },
    { zh: '风向已经改变',    en: 'The wind has shifted' },
    { zh: '归途上自会明白',  en: 'Clear on the way home' },
    { zh: '雨后会有彩虹',    en: 'A rainbow follows the rain' },
    { zh: '它沉在你心底',    en: 'It rests deep in your heart' },
    { zh: '钟声会响起',      en: 'The bell will ring' },
    { zh: '就在两条路之间',  en: 'It lies between two roads' },
    { zh: '海会回应你',      en: 'The sea will answer you' },
    { zh: '转角就遇见',      en: 'Just around the corner' },
    { zh: '抬头看星辰',      en: 'Look up to the stars' },
    { zh: '晨光终会到来',    en: 'The dawn will surely come' },
    { zh: '它随风飘着',      en: 'It drifts on the wind' },
    { zh: '落叶自会归根',    en: 'The leaf returns to its root' },
    { zh: '地平线那头',      en: 'Out on the horizon' },
    { zh: '萤火会亮起来',    en: 'The firefly will glow' },
    { zh: '梦里会告诉你',    en: 'Your dreams will tell you' },
    { zh: '潮水带来消息',    en: 'The tide brings word' },
    { zh: '云散开就见',      en: 'It clears when the clouds part' },
    { zh: '雪化后见分晓',    en: 'It shows when the snow melts' },
    { zh: '听听你的心跳',    en: 'Listen to your heartbeat' },
    { zh: '远方有灯火',      en: 'A light burns far away' },
    { zh: '种子里还睡着',    en: 'It sleeps inside the seed' },
    { zh: '风穿过山谷',      en: 'The wind crosses the valley' },
    { zh: '潮涨时自现',      en: 'It surfaces at high tide' },
    { zh: '星子坠入湖心',    en: 'A star falls into the lake' },
    { zh: '最暗处会发光',    en: 'It glows in the darkest place' },
    { zh: '归鸟知道路',      en: 'The homing bird knows the way' },
    { zh: '花谢之后才懂',    en: 'Understood after the bloom fades' },
    { zh: '月亮会盈满',      en: 'The moon will grow full' },
    { zh: '雾散的早晨自明',  en: 'Clear when the fog lifts' },
    { zh: '长夜终有尽头',    en: 'The long night will end' },
    { zh: '涟漪深处',        en: 'Beneath the ripples' },
    { zh: '晨钟唤醒山林',    en: 'The morning bell wakes the woods' },
    { zh: '余烬里还留着',    en: 'It lingers in the embers' },
    { zh: '春天总会回来',    en: 'Spring will always return' },
    { zh: '转身就看见',      en: 'You will see it when you turn' },
    { zh: '微光足以引路',    en: 'A faint light is enough' },
    { zh: '潮声会捎来',      en: 'The tide will carry it' },
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

  // ========================================================
  //  首次引导动画（小友 · 4 步）
  // ========================================================
  const GUIDE_KEY = 'ab_guide_seen';   // localStorage：是否看过引导
  const GUIDE_STEPS = 5;               // 1开场 2小友 3无需纠结(3-1半句) 4勇敢的舵手(3-2) 5深呼吸
  const GUIDE_STEP1_AUTO = 1600;       // step1 开场气泡浮现后自动进 step2 的时长
  const GUIDE_STEP3_AUTO = 2000;       // step3(3-1) 停留时长，到时进 step4(3-2)
  const GUIDE_BLACK_FADE = 900;        // 黑场淡入/淡出时长（与 .g-blackout transition 一致）
  // 需要自动翻页的步骤 → 停留时长(ms)；其余步骤靠点击箭头推进
  const GUIDE_AUTO = { 1: GUIDE_STEP1_AUTO, 3: GUIDE_STEP3_AUTO };
  let guideStep = 1;
  let guideAutoTimer = null;
  let guideTransiting = false;         // 黑场转场进行中，忽略重复推进
  const guideBlackTimers = [];
  const skipBtn = document.querySelector('.g-skip');

  const clearGuideTimers = () => {
    clearTimeout(guideAutoTimer);
    while (guideBlackTimers.length) clearTimeout(guideBlackTimers.pop());
  };

  // 黑场转场：盖黑 → 全黑时执行 onBlack → 撤黑。所有步骤切换共用。
  const blackoutTo = (onBlack) => {
    if (guideTransiting) return;
    guideTransiting = true;
    clearTimeout(guideAutoTimer);        // 暂停自动定时器，转场期间不重入
    body.dataset.guideTrans = 'black';
    guideBlackTimers.push(setTimeout(() => {
      onBlack();                         // 全黑时切换，外观无交叉淡变
      guideBlackTimers.push(setTimeout(() => {
        delete body.dataset.guideTrans;  // 撤黑，露出新内容
        guideTransiting = false;
      }, 30));
    }, GUIDE_BLACK_FADE));
  };

  const setGuideStep = (n) => {
    guideStep = n;
    body.dataset.guideStep = String(n);
    // 自动翻页步骤：停留指定时长后经黑场转场推进到下一步
    clearGuideTimers();
    if (GUIDE_AUTO[n]) {
      guideAutoTimer = setTimeout(() => {
        if (body.dataset.state !== 'guide' || guideStep !== n) return;
        blackoutTo(() => setGuideStep(n + 1));
      }, GUIDE_AUTO[n]);
    }
  };

  // 引导走完 / 跳过 → 记录已看过，淡出引导进 menu
  const finishGuide = () => {
    clearGuideTimers();
    delete body.dataset.guideTrans;
    guideTransiting = false;
    try { localStorage.setItem(GUIDE_KEY, '1'); } catch (e) {}
    setState('menu');
  };

  // 推进到下一步；最后一步后进入主流程。每步切换均经黑场转场。
  const guideNext = () => {
    if (guideTransiting) return;
    if (guideStep >= GUIDE_STEPS) {
      blackoutTo(finishGuide);
    } else {
      blackoutTo(() => setGuideStep(guideStep + 1));
    }
  };

  // 启动引导：step1 开场后自动进 step2，step3 自动进 step4，其余靠点击箭头推进
  const startGuide = (seenBefore) => {
    guideTransiting = false;
    setGuideStep(1);   // setGuideStep 内部已挂 step1 的自动推进定时器
    setState('guide');
    // 二次进入显示跳过按钮；首次隐藏，强制走完
    if (seenBefore && skipBtn) skipBtn.classList.add('is-show');
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
    // 引导层：方向箭头推进 / 跳过
    const gTarget = e.target.closest('[data-guide]');
    if (gTarget && body.dataset.state === 'guide') {
      const g = gTarget.dataset.guide;
      if (g === 'next') guideNext();
      else if (g === 'skip') finishGuide();
      return;
    }

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
      case 'g':
      case 'G':
        // 调试：重播引导（含跳过按钮）
        startGuide(true);
        break;
      case 'n':
      case 'N':
        if (body.dataset.state === 'guide') guideNext();
        break;
    }
  });

  // ---------- 初始：预填一个答案以便 #3 键直接看到 ----------
  writeAnswer(ANSWERS[0]);

  // ---------- 启动决策 ----------
  // 优先级：?skip-menu=1（直接进 question） > ?skip-guide=1（跳过引导进 menu）
  //        > 首次/二次进入播放引导
  (function bootstrap() {
    const q = new URLSearchParams(location.search);
    if (q.get('skip-menu') === '1') { setState('question'); return; }
    if (q.get('skip-guide') === '1') { setState('menu'); return; }

    let seen = false;
    try { seen = localStorage.getItem(GUIDE_KEY) === '1'; } catch (e) {}
    startGuide(seen);   // 首次 seen=false 不显示跳过；二次 seen=true 显示跳过
  })();
})();
