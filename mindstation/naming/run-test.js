const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();
  
  await page.goto('http://localhost:18766/test-scene.html', {waitUntil: 'networkidle0'});
  
  // 点击测试按钮
  await page.click('button');
  
  // 等待测试完成
  await page.waitForTimeout(12000);
  
  // 获取日志内容
  const log = await page.$eval('#log', el => el.textContent);
  console.log(log);
  
  await browser.close();
})();
