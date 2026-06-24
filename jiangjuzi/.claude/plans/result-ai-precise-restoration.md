# Result-AI页面像素级还原实施计划

## Figma设计稿信息
- 节点ID: 5226-813
- 总尺寸: 1640x932px
- 布局: 左侧656px固定 + 2px分隔线 + 右侧982px可滚动

## 当前问题分析
通过对比Figma设计稿和现有代码，发现以下主要问题：
1. 右侧内容模块的垂直位置不准确
2. 元素间距不符合设计稿
3. 部分元素的定位方式需要优化

## 精确测量结果

### 左侧固定区域 (656x348px可见)

**已确认正确的元素：**
1. 句子文本: left:80px, top:30px ✓
2. 发音按钮: left:80px, top:101px (220x82) ✓
3. 翻译文本: left:80px, top:203px ✓
4. 装饰图: left:163px, top:300px (329x332) ✓

### 右侧可滚动区域 (982px宽，932px总高)

根据Figma设计稿截图分析，精确定位如下：

#### 顶部固定元素
- Logo: right:33px, top:16px (187x51)
- 右侧箭头: right:30px, top:144px (54x54)
- 背景大角色图: right:-150px, top:-13px (657x663, opacity:0.1, z-index:1)

#### 模块1: 短语讲解
从截图分析，"短语讲解"标题应该在约top:104px位置

**精确坐标：**
- 图标位置: left:33px, top:104px (33x25)
- 标题文字: left:81px, top:93px (对齐图标中心)
- 短语标题 "Don't eat too much meat：": left:33px, top:157px
- 解释文本: left:33px, top:211px, max-width:851px

#### 模块2: 发音测评
从中部截图看，发音测评模块在约top:333px开始

**精确坐标：**
- 图标位置: left:33px, top:333px (33x25)
- 标题文字: left:81px, top:322px
- 灰色底框: left:33px, top:386px, width:918px, height:120px
- 播放图标: left:49px, top:429px (34x33) - 相对底框left:16px, top:43px
- 句子文本: left:103px, top:422px - 相对底框left:70px, top:36px
- 右侧大图标: left:883px, top:422px (62x62) - 相对底框right:16px

#### 模块3: 知识点讲解
从下部截图看，知识点讲解模块在约top:557px开始

**精确坐标：**
- 图标位置: left:33px, top:557px (33x25)
- 标题文字: left:81px, top:546px
- 灰色底框: left:33px, top:610px, width:918px, min-height:160px
- 内容起始: left:49px, top:630px (相对底框padding:20px)
  - 播放图标: 34x33, flex布局
  - 文本内容: flex:1, 多段落，每段间距12px

#### 底部区域
从底部截图看，底部信息在约top:830px开始

**精确坐标：**
- 虚线分隔: left:33px, top:830px, width:918px, height:2px
- AI标识: left:33px, top:862px
  - 图标: 33x25
  - 文字: 32px, color:#7b8396, uppercase
- 底部图标容器: left:33px, top:928px, width:918px
  - 左侧图标: 128x54
  - 右侧图标: 70x68 (flex布局space-between)

## 关键修正点

### 1. 使用绝对定位替代margin布局
**问题：** 当前代码使用了相对定位和margin，导致位置不精确
**解决：** 所有元素使用`position:absolute`配合精确的left/top值

### 2. 分隔线高度修正
**问题：** 分隔线高度设为348px（仅覆盖可见区域）
**解决：** 应该设为932px（覆盖整个帧高）

### 3. 右侧容器高度设置
**问题：** 右侧容器高度设为348px（物理屏幕高度）
**解决：** 保持348px高度用于overflow-y:auto，内部内容高度设为932px

### 4. z-index层次
- 背景装饰图: z-index:1, opacity:0.1
- 所有内容元素: z-index:2-3
- 顶部固定元素(Logo, 箭头): z-index:10

## 实施步骤

### Step 1: 重写左侧区域
保持当前实现（已验证正确）：
- 背景光晕SVG
- 返回按钮
- 句子文本（带波浪线）
- 发音按钮
- 翻译文本
- 装饰图

### Step 2: 修正分隔线
```css
left:656px; top:0; width:2px; height:932px;
```

### Step 3: 重写右侧区域结构
```html
<div style="position:absolute;left:658px;top:0;width:982px;height:348px;overflow-y:auto;">
  <div style="position:relative;width:982px;height:932px;">
    <!-- 所有内容使用绝对定位 -->
  </div>
</div>
```

### Step 4: 逐模块实现
按照精确测量的坐标，依次实现：
1. 顶部固定元素（Logo, 箭头, 背景图）
2. 短语讲解模块
3. 发音测评模块
4. 知识点讲解模块
5. 底部信息区域

### Step 5: 验证和微调
- 对比Figma设计稿截图
- 检查滚动行为
- 验证所有元素位置

## 代码实现原则

1. **绝对定位优先**: 所有元素使用`position:absolute`配合精确px值
2. **避免margin/padding布局**: 仅在文本容器内部使用
3. **z-index分层**: 背景层1，内容层2-3，顶部固定10
4. **颜色统一**: 
   - 青色波浪线/高亮: #34F8FF
   - 灰色文本: #7b8396
   - 标题灰: rgb(99,105,115)
   - 灰色底框: rgba(255,255,255,0.08)
5. **字体统一**: Noto Sans SC
6. **参考result-book.js**: 使用相同的mount/unmount模式

## 预期效果
- 左侧348px可见区域显示句子和装饰
- 右侧348px可见区域可垂直滚动查看932px内容
- 所有元素位置与Figma设计稿像素级一致
- 滚动流畅，无布局抖动
