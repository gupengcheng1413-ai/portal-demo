// chooes-3 — 选择年级 / 出版社 / 册别（帧高 1089）
// 源稿：imports/Chooes-3/index.tsx
(function () {
  const F = "'Noto Sans SC',sans-serif";

  const grades = [
    ['一年级',0,0],['二年级',0,1],['三年级',0,2],
    ['四年级',1,0],['五年级',1,1],['六年级',1,2],
    ['七年级',2,0],['八年级',2,1],['九年级',2,2],
    ['高一',3,0],['高二',3,1],['高三',3,2],
  ];
  const versions = [
    ['人教版',0,0],['外研版',0,1],['沪教版',0,2],
    ['北师大版',1,0],['冀教版',1,1],['译林版',1,2],
    ['闽教版',2,0],['牛津上海版',2,1],['科普版',2,2],
  ];
  const versionTops = [563, 670, 774];
  const volumes = [['上册',0],['下册',1]];

  function item(label, left, top, sel, action) {
    const bg = sel ? '#2a271c' : '#23272e';
    const color = sel ? '#ec9609' : '#7b8396';
    return `
<div data-action="${action}" data-value="${label}" style="position:absolute;left:${left}px;top:${top}px;width:482px;height:90px;border-radius:14px;background:${bg};cursor:pointer;">
  <p style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-family:${F};font-weight:500;line-height:46px;font-size:36px;color:${color};text-transform:uppercase;white-space:nowrap;margin:0;">${label}</p>
</div>`;
  }

  window.PAGES['chooes-3'] = {
    render() {
      let h = `<div style="position:absolute;inset:0;background:#000;">`;

      // 确定按钮
      h += `<div data-action="confirm-chooes" style="position:absolute;left:1566px;top:20px;width:60px;height:60px;cursor:pointer;">
        <img src="${img('bae23b7f0cf2c6f65ea22f828b16f9976dd72ae9')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;" alt="确定" />
      </div>`;

      // 选择年级
      h += `<p style="position:absolute;left:80px;top:18px;font-family:${F};font-weight:400;line-height:46px;color:#7b8396;font-size:34px;margin:0;">选择年级</p>`;
      grades.forEach(([label, row, col]) => {
        h += item(label, 80 + col * 498, 76 + row * 104, state.selectedGrade === label, 'select-grade');
      });

      // 选择出版社
      h += `<p style="position:absolute;left:82px;top:505px;font-family:${F};font-weight:400;line-height:46px;color:#7b8396;font-size:34px;margin:0;">选择出版社</p>`;
      versions.forEach(([label, row, col]) => {
        h += item(label, 82 + col * 498, versionTops[row], state.selectedVersion === label, 'select-version');
      });

      // 选择册别
      h += `<p style="position:absolute;left:82px;top:888px;font-family:${F};font-weight:400;line-height:46px;color:#7b8396;font-size:34px;margin:0;">选择册别</p>`;
      volumes.forEach(([label, col]) => {
        h += item(label, 82 + col * 498, 946, state.selectedVolume === label, 'select-volume');
      });

      h += `</div>`;
      return h;
    }
  };
})();
