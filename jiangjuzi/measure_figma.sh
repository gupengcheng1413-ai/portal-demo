#!/bin/bash
# 测量Figma设计稿中的关键元素位置

echo "=== 左侧区域 (0-656px) ==="
echo "1. 句子文本起始位置: left:80px, top:30px"
echo "2. 发音按钮位置: left:80px, top:101px (220x82)"
echo "3. 翻译文本位置: left:80px, top:203px"
echo "4. 装饰图位置: left:163px, top:300px (329x332)"

echo ""
echo "=== 右侧区域 (658-1640px, 相对位置0-982px) ==="
echo "标题模块检测..."

# 裁剪右侧"短语讲解"标题区域
convert figma_design_5226-813.png -crop 300x60+691+93 right_title1.png

# 裁剪"发音测评"标题区域
convert figma_design_5226-813.png -crop 300x60+691+322 right_title2.png

# 裁剪"知识点讲解"标题区域
convert figma_design_5226-813.png -crop 300x60+691+546 right_title3.png

echo "右侧标题位置提取完成"
ls -lh right_title*.png

