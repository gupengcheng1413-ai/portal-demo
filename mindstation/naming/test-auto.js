// 自动化测试能量卡渲染
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  console.log('访问测试页面...');
  await page.goto('http://localhost:18766/test-energy-render.html');
  
  await page.waitForTimeout(1000);
  
  // 测试1: 检查DOM元素
  console.log('\n=== 测试1: 检查DOM元素 ===');
  await page.click('button:nth-of-type(1)');
  await page.waitForTimeout(500);
  const test1Result = await page.$eval('#result', el => el.textContent);
  console.log(test1Result);
  
  // 测试2: 更新内容
  console.log('\n=== 测试2: 更新内容 ===');
  await page.click('button:nth-of-type(2)');
  await page.waitForTimeout(500);
  const test2Result = await page.$eval('#result', el => el.textContent);
  console.log(test2Result);
  
  // 截图
  await page.screenshot({ path: 'test-result.png' });
  console.log('\n✓ 截图已保存: test-result.png');
  
  await browser.close();
})();
