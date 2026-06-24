# Result-AI页面像素级还原计划

## 设计稿分析
- Figma节点：5226-813
- 尺寸：1640x932
- 布局：左右分屏（左656px固定 + 2px分隔线 + 右982px可滚动）

## 左侧固定区域 (656x348px)

### 背景和装饰
1. **背景光晕**（紫红色渐变）
   - 位置：left:-300px, top:-255px
   - 尺寸：816x520px
   - SVG椭圆：#812566, opacity:0.2, blur:100

2. **返回按钮**
   - 使用 backArrowSvg('B')
   - 位置：左上角标准位置

### 主要内容
3. **句子文本**: "Don't eat too much meat!"
   - 位置：left:80px, top:30px
   - 字体：Noto Sans SC, 36px, weight:500, line-height:50px
   - 颜色：#fff
   - 波浪线标记：需要在实际文本中找到带波浪线的词

4. **发音按钮**
   - 图片资源：hash 722d473ad18bae8b324cb01df7bc518fedfc712b
   - 位置：left:80px, top:101px
   - 尺寸：220x82px

5. **翻译文本**："不要吃太多肉！"
   - 位置：left:80px, top:203px
   - 图标：e793f7c57dd287b00729e05e0a236d19136b4b8f (33x25px)
   - 字体：32px, color:#7b8396

6. **左侧切换箭头**
   - 资源：a85df25c51241ab28f147423cd6f2c626eca7dc3
   - 位置：left:15px, top:124px
   - 尺寸：54x54px
   - 样式：opacity:0.3, transform:rotate(180deg)

7. **装饰插图**
   - 资源：7cc122cbbcd839d47a83488c0ddcdd633c1e24bb
   - 位置：left:163px, top:300px
   - 尺寸：329x332px

## 中间分隔线 (2px)
- 位置：left:656px, top:0
- 尺寸：2px x 932px
- 颜色：#464953, opacity:0.6

## 右侧可滚动区域 (982px x 932px)

### 顶部元素
1. **Logo**
   - 资源：a5834e76fc77ce5ff6ded4852fcc821966776202
   - 位置：right:33px, top:16px
   - 尺寸：187x51px

2. **右侧切换箭头**
   - 资源：a85df25c51241ab28f147423cd6f2c626eca7dc3
   - 位置：right:30px, top:144px
   - 尺寸：54x54px

3. **背景装饰图**（大角色）
   - 资源：817edf6b30a267aefdd561990d0c28dfcc4ecdf6
   - 位置：right:-150px, top:-13px
   - 尺寸：657x663px
   - z-index:1（在背景层）

### 内容模块

#### 第一部分：短语讲解
4. **标题**："短语讲解"
   - 位置：margin-top:104px, margin-left:33px
   - 图标：e793f7c57dd287b00729e05e0a236d19136b4b8f (33x25px)
   - 字体：32px, weight:500, color:rgb(99,105,115)

5. **短语标题**："Don't eat too much meat："
   - 带波浪线装饰
   - 字体：32px, weight:700, color:#fff

6. **解释文本**
   - 最大宽度：851px
   - 字体：28px, line-height:36px, color:#fff

#### 第二部分：发音测评
7. **标题**："发音测评"
   - 位置：margin-top:32px, margin-left:33px
   - 图标：e793f7c57dd287b00729e05e0a236d19136b4b8f

8. **测评底框**
   - 尺寸：918x120px
   - 背景：rgba(255,255,255,0.08)
   - 圆角：8px
   - 内容：
     - 播放图标：915b7e8a3e9e287dfa6f5fb62c8b51e98dac253d (34x33px)
     - 句子文本："Don't eat too much meat!"
     - 右侧大图标：6f03b3cb0f17d664874967959cee002dd9106da1 (62x62px)

#### 第三部分：知识点讲解
9. **标题**："知识点讲解"
   - 位置：margin-top:24px, margin-left:33px

10. **讲解底框**
    - 尺寸：918px width, min-height:100px
    - 背景：rgba(255,255,255,0.08)
    - 圆角：8px
    - 内容：多个知识点，每个包含：
      - 高亮词汇（color:#34F8FF, weight:600）
      - 解释文本

#### 底部区域
11. **虚线分隔**
    - 位置：margin-top:40px
    - SVG虚线：#464953, stroke-dasharray:4 4, opacity:0.6

12. **AI生成标识**
    - 文本："以上内容由AI生成"
    - 字体：32px, color:#7b8396, text-transform:uppercase

13. **底部装饰图标**
    - 左侧：9dbb701ad33a5bb6f759b071f24ef03dfbc9f7c7 (128x54px)
    - 右侧：67b7136a64965ad74a8f1fdd55864c26e2b6c182 (70x68px)

## 实现步骤

1. **清理现有代码**
   - 删除result-ai.js中的所有内容
   - 重新开始编写

2. **实现左侧固定区域**
   - 背景光晕SVG
   - 返回按钮
   - 句子文本（需要确认哪些词有波浪线）
   - 发音按钮
   - 翻译
   - 切换箭头
   - 装饰插图

3. **实现分隔线**
   - 2px垂直线

4. **实现右侧可滚动区域**
   - 容器设置overflow-y:auto
   - Logo和切换箭头
   - 背景装饰图（z-index:1）
   - 所有内容模块（z-index:2）

5. **添加mount/unmount钩子**
   - 参考result-book.js
   - mount时禁用外层滚动
   - unmount时恢复

6. **测试验证**
   - 检查左侧348px可见区域
   - 检查右侧滚动功能
   - 检查所有图片资源加载
   - 检查文本内容和样式

## 关键注意事项

1. **波浪线标记**：需要从Figma设计中精确识别哪些词有青色波浪线
2. **z-index层次**：背景装饰图z-index:1，内容z-index:2
3. **滚动控制**：左侧固定（overflow:hidden），右侧可滚动（overflow-y:auto）
4. **透明度**：灰色底框使用rgba(255,255,255,0.08)
5. **字体**：全部使用Noto Sans SC
6. **颜色一致性**：青色#34F8FF，灰色#7b8396
