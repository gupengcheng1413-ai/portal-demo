// 能量卡提示词模块
// 根据姓名 + 日期生成每日能量卡

// 能量主题方向池（用日期哈希确定方向）
const ENERGY_THEMES = [
  { direction: "创新突破", hint: "强调创新、突破常规、引领潮流的力量", color: "#6E8B69" },
  { direction: "坚韧沉稳", hint: "强调坚韧、定力、厚积薄发的品质", color: "#8B7355" },
  { direction: "智慧通达", hint: "强调智慧、洞察、明澈通达的能力", color: "#4A7BA7" },
  { direction: "温润如玉", hint: "强调温和、包容、雅致内敛的气质", color: "#718B6C" },
  { direction: "果敢决断", hint: "强调果敢、决断、雷厉风行的魄力", color: "#A0522D" },
  { direction: "自由探索", hint: "强调自由、探索、不拘一格的精神", color: "#5F9EA0" },
  { direction: "和合共生", hint: "强调和谐、共赢、凝聚人心的力量", color: "#9B8B6E" },
  { direction: "卓越精进", hint: "强调追求卓越、精益求精的态度", color: "#6B8E23" }
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
4. 输出严格遵循JSON格式

输出要求：
{
  "title": "能量主题标题，4-6个字，提炼核心特质",
  "subtitle": "副标题，8-12个字，诗意化表达",
  "description": "描述文案，30-50字，将姓名寓意与今日能量结合，积极正面且具体",
  "keywords": ["关键词1", "关键词2", "关键词3"],  // 3-5个，每个2字
  "color": "#RRGGBB"  // 主题色HEX格式，符合能量氛围
}

注意事项：
- title要简洁有力，体现核心能量
- subtitle要有诗意韵味，可用对仗或意象
- description要结合姓名的具体含义，不要泛泛而谈
- keywords要精准，避免重复
- color要符合今日能量的氛围（如：创新用绿色系、智慧用蓝色系、温润用灰绿等）
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

今日能量方向：${theme.direction}
方向提示：${theme.hint}
建议主题色：${theme.color}
${contextInfo}

请基于以上信息，创作一张富有启发性和个性化的能量卡内容，以JSON格式输出。`;
}

module.exports = {
  ENERGY_THEMES,
  getThemeIndex,
  getSystemPrompt,
  getUserPrompt
};
