// 简单测试能量卡提示词模块
const energyCard = require('./energy-card-prompt.js');

console.log('=== 测试能量卡提示词模块 ===\n');

// 测试1: 主题索引计算
const name1 = "雷军";
const date1 = "2024-06-24";
const themeIndex1 = energyCard.getThemeIndex(name1, date1);
const theme1 = energyCard.ENERGY_THEMES[themeIndex1];

console.log(`姓名: ${name1}, 日期: ${date1}`);
console.log(`主题索引: ${themeIndex1}`);
console.log(`能量方向: ${theme1.direction}`);
console.log(`主题色: ${theme1.color}\n`);

// 测试2: 相同姓名不同日期
const date2 = "2024-06-25";
const themeIndex2 = energyCard.getThemeIndex(name1, date2);
const theme2 = energyCard.ENERGY_THEMES[themeIndex2];

console.log(`姓名: ${name1}, 日期: ${date2}`);
console.log(`主题索引: ${themeIndex2}`);
console.log(`能量方向: ${theme2.direction}`);
console.log(`主题色: ${theme2.color}\n`);

// 测试3: 生成提示词
const systemPrompt = energyCard.getSystemPrompt();
const userPrompt = energyCard.getUserPrompt(name1, date1);

console.log('=== 系统提示词 ===');
console.log(systemPrompt.substring(0, 200) + '...\n');

console.log('=== 用户提示词 ===');
console.log(userPrompt);

console.log('\n✓ 测试完成');
