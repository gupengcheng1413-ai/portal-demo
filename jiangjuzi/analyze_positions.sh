#!/bin/bash

echo "=== 分析Figma设计稿右侧内容的垂直位置 ==="

# 右侧区域从658px开始，宽度982px
# 提取关键水平线的位置

echo "1. 检测'短语讲解'图标位置 (绿色小图标)"
# 在右侧顶部区域搜索，预计在top:100px左右
convert figma_design_5226-813.png -crop 982x200+658+80 right_top_section.png
echo "   右侧顶部区域(top:80-280)已保存"

echo "2. 检测'发音测评'模块位置"
# 灰色底框应该在300-400px区域
convert figma_design_5226-813.png -crop 982x200+658+300 right_middle_section.png
echo "   右侧中部区域(top:300-500)已保存"

echo "3. 检测'知识点讲解'模块位置"
# 第二个灰色底框应该在500-700px区域
convert figma_design_5226-813.png -crop 982x300+658+500 right_lower_section.png
echo "   右侧下部区域(top:500-800)已保存"

echo "4. 检测底部信息区域"
convert figma_design_5226-813.png -crop 982x150+658+780 right_bottom_section.png
echo "   右侧底部区域(top:780-930)已保存"

ls -lh right_*_section.png

