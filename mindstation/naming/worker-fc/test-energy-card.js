// 能量卡后端本地测试脚本
// 模拟 FC 环境测试 energy-card API

const http = require("http");

// 模拟环境变量
process.env.DEEPSEEK_KEY = process.env.DEEPSEEK_KEY || "YOUR_KEY_HERE";
process.env.FC_SERVER_PORT = "9001"; // 使用不同端口避免冲突

// 加载主服务
const indexPath = "./index.js";
console.log("Loading server from:", indexPath);

// 启动服务器
require(indexPath);

console.log("\n✓ 测试服务器已启动在 http://localhost:9001");
console.log("\n测试命令:");
console.log("  curl 'http://localhost:9001/energy-card?name=雷军&date=2024-06-24'");
console.log("  curl 'http://localhost:9001/energy-card?name=李明'");
console.log("\n按 Ctrl+C 停止服务器\n");
