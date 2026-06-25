// 能量卡提示词模块
// 根据姓名 + 日期生成每日能量卡（新版：包含能量指数和古诗句）

// 能量主题方向池（用日期哈希确定方向）
const ENERGY_THEMES = [
  { direction: "坚持", hint: "强调不屈的意志、坚韧不拔的精神", color: "#6E8B69" },
  { direction: "智慧", hint: "强调洞察、明澈通达、深思熟虑", color: "#4A7BA7" },
  { direction: "勇气", hint: "强调果敢、无畏、敢于突破", color: "#A0522D" },
  { direction: "温润", hint: "强调温和、包容、雅致内敛", color: "#718B6C" },
  { direction: "创新", hint: "强调突破常规、开拓进取", color: "#6E8B69" },
  { direction: "自由", hint: "强调不拘一格、追求自我", color: "#5F9EA0" },
  { direction: "和合", hint: "强调和谐共生、凝聚人心", color: "#9B8B6E" },
  { direction: "精进", hint: "强调追求卓越、精益求精", color: "#6B8E23" }
];

// 日期哈希函数 - 确保相同name+date总是返回相同主题
function getThemeIndex(name, date) {
  const seed = `${name}:${date}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash) % ENERGY_THEMES.length;
}

// 生成系统提示词
function getSystemPrompt() {
  return `你是一位精通中国传统文化和现代心理学的能量卡内容创作专家。

你的任务是为用户生成每日专属能量卡，内容需要：
1. 深度结合用户的姓名寓意
2. 融入今日的能量主题方向
3. 语言积极正向、富有诗意和启发性
4. 引用真实可考的古诗词或典籍
5. 输出严格遵循JSON格式

输出要求：
{
  "title": "能量主题，2个字（如：坚持、智慧、勇气）",
  "content": "正文内容，60-90字，分为三个层次：1)昭示能量特质（如山石、古松等意象） 2)阐释意义和价值 3)今日寄语",
  "energyLevel": 3到5之间的整数，表示今日能量强度,
  "poem": "古诗句或名言，8-16字，需真实可考",
  "source": "诗句出处，如：《荀子·劝学》、唐·李白《将进酒》等"
}

文案风格参考示例：
标题：坚持
正文：此卡昭示着不屈的意志，如山石般屹立，如古松般长青。坚持是通往成功的桥梁，每一次不放弃的努力，都在让未来的你更加强大。今日若遇阻碍，勿忘初心。
诗句：锲而不舍，金石可镂
出处：《荀子·劝学》

注意事项：
- title必须是2个字的主题词
- content分三段：昭示意象、阐释价值、今日寄语，总计60-90字
- energyLevel根据姓名和今日主题判断，3-5之间
- poem和source必须真实可考，不可杜撰
- 整体风格：国风雅致、积极向上、启发人心`;
}

// 生成用户提示词
function getUserPrompt(name, date, nameContext = null) {
  const themeIndex = getThemeIndex(name, date);
  const theme = ENERGY_THEMES[themeIndex];

  // 构建姓名上下文信息
  let contextInfo = "";
  if (nameContext) {
    if (nameContext.hero) {
      contextInfo += `\n姓名核心特质：${nameContext.hero}`;
    }
    if (nameContext.tones && nameContext.tones.length > 0) {
      contextInfo += `\n姓名关键词：${nameContext.tones.flat().join("、")}`;
    }
    if (nameContext.blessing) {
      contextInfo += `\n姓名祝福语：${nameContext.blessing}`;
    }
  }

  return `请为名为「${name}」的人生成今日（${date}）的专属能量卡。

今日能量主题：${theme.direction}
主题提示：${theme.hint}
${contextInfo}

请基于以上信息，创作一张富有启发性和个性化的能量卡内容，以JSON格式输出。`;
}

module.exports = {
  ENERGY_THEMES,
  getThemeIndex,
  getSystemPrompt,
  getUserPrompt
};
