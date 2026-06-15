// ==================== 物理屏幕尺寸 ====================
const SCREEN_W = 1640;
const SCREEN_H = 348;

// ==================== result-the 三页帧高（源稿 THE_HEIGHTS） ====================
const THE_HEIGHTS = [1180, 1006, 1196];

// ==================== 每页 Figma 帧高 ====================
// 来源：App.tsx FRAME_H（由 calc(50%) 锚点与绝对像素交叉推导）
const FRAME_HEIGHTS = {
  'juzi-shouye': 348,
  'scan': 348,
  'result-book': 1022,
  'lishi': 410,
  'jianjie': 348,
  'chooes-3': 1089,
  'yinwen-chaci': 348,
  'hunhe': 348,
  'result-AI': 1395,
  'result-the': THE_HEIGHTS[0],
};

// ==================== 共享 SVG 路径 ====================
// 返回箭头有两种字形：p39072e00（多数页）/ p1efa7300（chooes-3、result-book、result-AI、result-the*）
const SVG_PATHS = {
  backArrowA: 'M45.2626 17.8333C46.4729 16.7019 48.3713 16.7656 49.5028 17.9759C50.6342 19.1863 50.5706 21.0847 49.3602 22.2162L35.6386 35.0423L49.0087 49.138C50.1487 50.3402 50.0984 52.2391 48.8964 53.3792C47.6943 54.5194 45.7954 54.4691 44.6552 53.2669L29.9345 37.7464C29.611 37.59 29.3088 37.3753 29.0487 37.097C27.9173 35.8867 27.981 33.9883 29.1913 32.8568L45.2626 17.8333Z',
  backArrowB: 'M45.2626 17.8333C46.4729 16.7019 48.3713 16.7656 49.5028 17.9759C50.6342 19.1863 50.5706 21.0847 49.3602 22.2162L35.6386 35.0423L49.0087 49.138C50.1488 50.3401 50.0993 52.239 48.8974 53.3792C47.6953 54.5194 45.7964 54.4689 44.6561 53.2669L29.9345 37.7464C29.611 37.59 29.3088 37.3753 29.0487 37.097C27.9173 35.8867 27.981 33.9883 29.1913 32.8568L45.2626 17.8333Z',
};

// 顶部装饰矩形（result-book / result-the1 用到的 Group 215 容器）
const SVG_GROUP215 = {
  // 左卡 Rectangle 130
  p35a83e80: 'M546 20C546 8.9543 537.046 0 526 0H20C8.9543 0 0 8.95431 0 20V268C0 279.046 8.95431 288 20 288H526C537.046 288 546 279.046 546 268V20Z',
  // 右卡 Rectangle 129
  p2e661b80: 'M550 20C550 8.9543 558.954 0 570 0H1463C1474.05 0 1483 8.95431 1483 20V268C1483 279.046 1474.05 288 1463 288H570C558.954 288 550 279.046 550 268V20Z',
};

// JuziShouye 右卡蓝色渐变蒙版（data-URI rect mask）
const MASK_JUZI_GRADIENT = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%20616%20228%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20id%3D%22Rectangle%20176%22%20width%3D%22616%22%20height%3D%22228%22%20rx%3D%2220%22%20fill%3D%22url(%23paint0_linear_1_37)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_1_37%22%20x1%3D%2274%22%20y1%3D%2230%22%20x2%3D%22579.55%22%20y2%3D%22257.349%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23C1DDFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%235CA3FF%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A";

// ==================== 全局应用状态 ====================
const state = {
  history: ['juzi-shouye'],
  textbookInfo: '英语 pep 三年级上册(新)',
  theIndex: 0,
  selectedGrade: '二年级',
  selectedVersion: '外研版',
  selectedVolume: '下册',
};

// 渲染器注册表（各页面文件填充）
window.PAGES = {};
