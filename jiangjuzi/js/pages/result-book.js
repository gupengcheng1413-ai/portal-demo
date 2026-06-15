// result-book — 教材结果页（帧高 1022）
// 源稿：imports/ResultBook-2/index.tsx
(function () {
  const F = "'Noto Sans SC',sans-serif";
  window.PAGES['result-book'] = {
    render() {
      return `
<div style="position:absolute;inset:0;background:#000;">
  <!-- 背景紫色光晕（高斯模糊椭圆） -->
  <div style="position:absolute;left:-300px;top:-224px;width:816px;height:520px;">
    <div style="position:absolute;inset:-38.46% -24.51%;">
      <svg style="display:block;width:100%;height:100%;" fill="none" preserveAspectRatio="none" viewBox="0 0 1216 920">
        <g filter="url(#filter0_f_1_223)" id="Ellipse 3">
          <ellipse cx="608" cy="460" fill="#812566" fill-opacity="0.2" rx="408" ry="260" />
        </g>
        <defs>
          <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="920" id="filter0_f_1_223" width="1216" x="0" y="0">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_223" stdDeviation="100" />
          </filter>
        </defs>
      </svg>
    </div>
  </div>

  <!-- 青色波浪下划线（Union） -->
  <div style="position:absolute;left:106px;top:166px;width:487.819px;height:56.878px;">
    <svg style="position:absolute;display:block;inset:0;width:100%;height:100%;" fill="none" preserveAspectRatio="none" viewBox="0 0 487.819 56.8783">
      <path d="M31.9678 55.5502C32.7407 55.5502 34.4584 54.5201 35.4268 54.768C35.4278 54.7731 35.4281 54.7784 35.4287 54.7836C36.3 54.8933 36.8968 55.5502 38.1816 55.5502C39.5834 55.5501 40.311 54.7681 42.1943 54.768C44.0792 54.768 43.8414 55.5501 45.3389 55.5502C46.838 55.5502 46.8863 54.768 49.1582 54.768C51.4303 54.768 50.9942 55.5502 52.5967 55.5502C54.2005 55.5502 53.7517 54.768 56.2178 54.768C58.6853 54.768 58.9253 55.7358 59.8457 55.7358C60.7648 55.7356 61.9246 54.7681 63.4727 54.768C65.0196 54.768 66.3752 55.5501 67.1494 55.5502C67.9223 55.5502 69.5668 54.5581 70.5352 54.8061C70.6323 55.2247 70.6323 55.6492 70.5352 56.0678C69.471 56.0678 68.8426 56.8783 66.9072 56.8783C64.9735 56.8783 64.7325 56.068 63.5225 56.0678C62.3121 56.0678 62.3116 56.8783 59.75 56.8783C57.1867 56.8783 58.0068 56.0678 56.4131 56.0678C54.8196 56.0679 54.7237 56.8783 52.6006 56.8783C50.4773 56.8783 50.4668 56.0678 49.1113 56.0678C47.7562 56.0679 47.5652 56.8783 45.4346 56.8783C43.3056 56.8782 42.873 56.068 41.7588 56.0678C40.6455 56.0678 40.597 56.8339 38.2266 56.8783C36.9708 56.8783 35.1816 56.2026 35.1816 56.2026L35 56.2094C34.0582 56.2804 33.5462 56.8783 31.7256 56.8783C29.7916 56.8783 29.5502 56.0678 28.3398 56.0678C27.1299 56.068 27.1291 56.8783 24.5674 56.8783C22.0046 56.8783 22.8251 56.0678 21.2314 56.0678C19.6379 56.0678 19.5407 56.8783 17.4189 56.8783C15.2957 56.8783 15.2851 56.0678 13.9297 56.0678C12.5745 56.0679 12.3824 56.8783 10.2529 56.8783C8.12366 56.8783 7.69071 56.0678 6.57617 56.0678C5.46203 56.068 5.41501 56.8339 3.04492 56.8783C1.79568 56.8783 0.0185694 56.2105 0 56.2035C0 56.2035 0.0503913 55.1451 0 54.768C1.01499 54.768 1.59764 55.5502 3.00098 55.5502C4.40039 55.5502 5.12792 54.768 7.0127 54.768C8.89757 54.768 8.6596 55.5501 10.1572 55.5502C11.6564 55.5502 11.7045 54.768 13.9766 54.768C16.2486 54.768 15.8125 55.5502 17.415 55.5502C19.0188 55.5502 18.57 54.768 21.0361 54.768C23.5036 54.768 23.7436 55.7358 24.6641 55.7358C25.5831 55.7355 26.743 54.768 28.291 54.768C29.8381 54.768 31.1936 55.5502 31.9678 55.5502ZM102.573 55.5502C103.346 55.5502 105.064 54.5201 106.032 54.768C106.033 54.7731 106.034 54.7784 106.034 54.7836C106.905 54.8933 107.502 55.5502 108.787 55.5502C110.189 55.5501 110.916 54.7681 112.8 54.768C114.685 54.768 114.447 55.5501 115.944 55.5502C117.443 55.5502 117.492 54.768 119.764 54.768C122.036 54.768 121.6 55.5502 123.202 55.5502C124.806 55.5502 124.357 54.768 126.823 54.768C129.291 54.768 129.531 55.7358 130.451 55.7358C131.37 55.7356 132.53 54.7681 134.078 54.768C135.625 54.768 136.981 55.5501 137.755 55.5502C138.528 55.5502 140.172 54.5581 141.141 54.8061C141.238 55.2247 141.238 55.6492 141.141 56.0678C140.076 56.0678 139.448 56.8783 137.513 56.8783C135.579 56.8783 135.338 56.068 134.128 56.0678C132.918 56.0678 132.917 56.8783 130.355 56.8783C127.792 56.8783 128.612 56.0678 127.019 56.0678C125.425 56.0679 125.329 56.8783 123.206 56.8783C121.083 56.8783 121.072 56.0678 119.717 56.0678C118.362 56.0679 118.171 56.8783 116.04 56.8783C113.911 56.8782 113.478 56.068 112.364 56.0678C111.251 56.0678 111.202 56.8339 108.832 56.8783C107.576 56.8783 105.787 56.2026 105.787 56.2026L105.605 56.2094C104.664 56.2804 104.152 56.8783 102.331 56.8783C100.397 56.8783 100.156 56.0678 98.9453 56.0678C97.7354 56.068 97.7346 56.8783 95.1729 56.8783C92.6101 56.8783 93.4305 56.0678 91.8369 56.0678C90.2434 56.0678 90.1462 56.8783 88.0244 56.8783C85.9011 56.8783 85.8906 56.0678 84.5352 56.0678C83.18 56.0679 82.9878 56.8783 80.8584 56.8783C78.7291 56.8783 78.2962 56.0678 77.1816 56.0678C76.0675 56.068 76.0205 56.8339 73.6504 56.8783C72.4012 56.8783 70.624 56.2105 70.6055 56.2035C70.6055 56.2035 70.6559 55.1451 70.6055 54.768C71.6205 54.768 72.2031 55.5502 73.6064 55.5502C75.0059 55.5502 75.7334 54.768 77.6182 54.768C79.503 54.768 79.2651 55.5501 80.7627 55.5502C82.2618 55.5502 82.31 54.768 84.582 54.768C86.8541 54.768 86.418 55.5502 88.0205 55.5502C89.6242 55.5502 89.1754 54.768 91.6416 54.768C94.1091 54.768 94.3491 55.7358 95.2695 55.7358C96.1886 55.7355 97.3484 54.768 98.8965 54.768C100.444 54.768 101.799 55.5502 102.573 55.5502ZM173.179 55.5502C173.952 55.5502 175.669 54.5201 176.638 54.768C176.639 54.7731 176.639 54.7784 176.64 54.7836C177.511 54.8933 178.108 55.5502 179.393 55.5502C180.794 55.5501 181.522 54.7681 183.405 54.768C185.29 54.768 185.052 55.5501 186.55 55.5502C188.049 55.5502 188.097 54.768 190.369 54.768C192.641 54.768 192.205 55.5502 193.808 55.5502C195.411 55.5502 194.963 54.768 197.429 54.768C199.896 54.768 200.136 55.7358 201.057 55.7358C201.976 55.7356 203.136 54.7681 204.684 54.768C206.231 54.768 207.586 55.5501 208.36 55.5502C209.133 55.5502 210.778 54.5581 211.746 54.8061C211.843 55.2247 211.843 55.6492 211.746 56.0678C210.682 56.0678 210.054 56.8783 208.118 56.8783C206.184 56.8783 205.943 56.068 204.733 56.0678C203.523 56.0678 203.523 56.8783 200.961 56.8783C198.398 56.8783 199.218 56.0678 197.624 56.0678C196.031 56.0679 195.935 56.8783 193.812 56.8783C191.688 56.8783 191.678 56.0678 190.322 56.0678C188.967 56.0679 188.776 56.8783 186.646 56.8783C184.517 56.8782 184.084 56.068 182.97 56.0678C181.856 56.0678 181.808 56.8339 179.438 56.8783C178.182 56.8783 176.393 56.2026 176.393 56.2026L176.211 56.2094C175.269 56.2804 174.757 56.8783 172.937 56.8783C171.002 56.8783 170.761 56.0678 169.551 56.0678C168.341 56.068 168.34 56.8783 165.778 56.8783C163.216 56.8783 164.036 56.0678 162.442 56.0678C160.849 56.0678 160.752 56.8783 158.63 56.8783C156.507 56.8783 156.496 56.0678 155.141 56.0678C153.785 56.0679 153.593 56.8783 151.464 56.8783C149.335 56.8783 148.902 56.0678 147.787 56.0678C146.673 56.068 146.626 56.8339 144.256 56.8783C143.007 56.8783 141.23 56.2105 141.211 56.2035C141.211 56.2035 141.261 55.1451 141.211 54.768C142.226 54.768 142.809 55.5502 144.212 55.5502C145.611 55.5502 146.339 54.768 148.224 54.768C150.109 54.768 149.871 55.5501 151.368 55.5502C152.867 55.5502 152.915 54.768 155.188 54.768C157.46 54.768 157.023 55.5502 158.626 55.5502C160.23 55.5502 159.781 54.768 162.247 54.768C164.715 54.768 164.955 55.7358 165.875 55.7358C166.794 55.7355 167.954 54.768 169.502 54.768C171.049 54.768 172.405 55.5502 173.179 55.5502ZM406.239 0.820728C406.816 0.820728 408.099 -0.209374 408.822 0.0385011C408.823 0.0436926 408.824 0.0489079 408.824 0.0541261C409.475 0.163837 409.92 0.820516 410.879 0.820728C411.926 0.820728 412.47 0.0386361 413.876 0.0385011C415.284 0.0385011 415.106 0.820728 416.225 0.820728C417.344 0.820714 417.38 0.0386183 419.076 0.0385011C420.773 0.0385011 420.448 0.820728 421.645 0.820728C422.842 0.820572 422.507 0.0385011 424.349 0.0385011C426.191 0.0386101 426.37 1.00627 427.058 1.00627C427.744 1.00586 428.61 0.0387269 429.766 0.0385011C430.921 0.0385011 431.934 0.820728 432.512 0.820728C433.089 0.820598 434.317 -0.170295 435.04 0.0775636C435.112 0.495903 435.113 0.91997 435.04 1.33831C434.245 1.33831 433.776 2.14877 432.331 2.14885C430.887 2.14885 430.707 1.33831 429.803 1.33831C428.899 1.33832 428.899 2.14885 426.985 2.14885C425.071 2.14878 425.684 1.33831 424.494 1.33831C423.304 1.33836 423.233 2.1487 421.647 2.14885C420.062 2.14885 420.054 1.33845 419.042 1.33831C418.03 1.33831 417.887 2.14885 416.296 2.14885C414.706 2.14877 414.383 1.33845 413.551 1.33831C412.719 1.33831 412.683 2.10444 410.913 2.14885C409.984 2.14877 408.663 1.48507 408.64 1.47307L408.504 1.47991C407.801 1.55083 407.418 2.14885 406.059 2.14885C404.614 2.14885 404.434 1.33831 403.53 1.33831C402.627 1.33846 402.626 2.14872 400.714 2.14885C398.8 2.14885 399.412 1.33831 398.222 1.33831C397.032 1.33847 396.959 2.14878 395.375 2.14885C393.789 2.14885 393.782 1.33833 392.77 1.33831C391.757 1.33831 391.614 2.14885 390.023 2.14885C388.434 2.14869 388.111 1.33831 387.278 1.33831C386.446 1.33832 386.411 2.10444 384.641 2.14885C383.703 2.14865 382.367 1.47307 382.367 1.47307C382.368 1.45029 382.404 0.411189 382.367 0.0385011C383.125 0.0385018 383.56 0.820728 384.608 0.820728C385.653 0.820573 386.197 0.0385011 387.604 0.0385011C389.012 0.0386397 388.834 0.82063 389.952 0.820728C391.072 0.820728 391.108 0.0385011 392.805 0.0385011C394.501 0.0386113 394.175 0.820728 395.372 0.820728C396.57 0.820676 396.235 0.0385011 398.076 0.0385011C399.919 0.038527 400.098 1.00627 400.785 1.00627C401.472 1.00608 402.338 0.0385011 403.494 0.0385011C404.649 0.0386508 405.661 0.820614 406.239 0.820728ZM458.964 0.820728C459.541 0.820728 460.824 -0.209374 461.547 0.0385011C461.548 0.0436927 461.548 0.0489079 461.549 0.0541261C462.199 0.163836 462.645 0.820516 463.604 0.820728C464.65 0.820728 465.194 0.0386364 466.601 0.0385011C468.008 0.0385011 467.831 0.820728 468.949 0.820728C470.069 0.820714 470.104 0.0386186 471.801 0.0385011C473.497 0.0385011 473.172 0.820728 474.369 0.820728C475.566 0.820572 475.232 0.0385011 477.073 0.0385011C478.916 0.0386098 479.095 1.00627 479.782 1.00627C480.468 1.00586 481.334 0.0387275 482.49 0.0385011C483.646 0.0385011 484.658 0.820728 485.236 0.820728C485.814 0.8206 487.042 -0.170295 487.765 0.0775636C487.837 0.495903 487.837 0.919971 487.765 1.33831C486.97 1.33831 486.501 2.14877 485.056 2.14885C483.611 2.14885 483.431 1.33831 482.527 1.33831C481.623 1.33832 481.623 2.14885 479.71 2.14885C477.796 2.14878 478.409 1.33831 477.219 1.33831C476.029 1.33836 475.957 2.1487 474.372 2.14885C472.787 2.14885 472.778 1.33845 471.767 1.33831C470.754 1.33831 470.612 2.14885 469.021 2.14885C467.431 2.14877 467.108 1.33845 466.275 1.33831C465.444 1.33831 465.408 2.10444 463.638 2.14885C462.708 2.14877 461.388 1.48507 461.364 1.47307L461.229 1.47991C460.525 1.55083 460.143 2.14885 458.783 2.14885C457.339 2.14885 457.159 1.33831 456.255 1.33831C455.351 1.33846 455.351 2.14872 453.438 2.14885C451.524 2.14885 452.136 1.33831 450.946 1.33831C449.757 1.33847 449.684 2.14878 448.1 2.14885C446.514 2.14885 446.506 1.33833 445.494 1.33831C444.482 1.33831 444.338 2.14885 442.748 2.14885C441.158 2.14869 440.835 1.33831 440.003 1.33831C439.171 1.33832 439.135 2.10444 437.365 2.14885C436.427 2.14865 435.092 1.47307 435.092 1.47307C435.093 1.45035 435.129 0.411201 435.092 0.0385011C435.85 0.0385011 436.285 0.820728 437.333 0.820728C438.378 0.820574 438.922 0.0385011 440.329 0.0385011C441.736 0.0386393 441.559 0.82063 442.677 0.820728C443.796 0.820728 443.833 0.0385011 445.529 0.0385011C447.226 0.038611 446.9 0.820728 448.097 0.820728C449.294 0.820676 448.959 0.0385011 450.801 0.0385011C452.643 0.0385266 452.822 1.00627 453.51 1.00627C454.196 1.00608 455.063 0.0385011 456.219 0.0385011C457.374 0.0386503 458.386 0.820613 458.964 0.820728Z" fill="#34F8FF" id="Union" />
    </svg>
  </div>

  <!-- 返回箭头（装饰，不可点） -->
  ${backArrowSvg('B')}

  <!-- image 1：右上角大装饰图 -->
  <div style="position:absolute;left:983px;top:0;width:657px;height:663px;">
    <img alt="" src="${img('817edf6b30a267aefdd561990d0c28dfcc4ecdf6')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;max-width:none;">
  </div>

  <!-- image 11：句子前小图标 -->
  <div style="position:absolute;left:80px;top:499px;width:27px;height:26px;">
    <img alt="" src="${img('915b7e8a3e9e287dfa6f5fb62c8b51e98dac253d')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;max-width:none;">
  </div>
  <p style="margin:0;word-break:break-word;position:absolute;left:123px;top:488px;width:507px;font-family:${F};line-height:46px;font-style:normal;color:#7b8396;font-size:32px;text-transform:uppercase;">我可以与人打招呼并表现出友好。</p>

  <!-- 虚线分隔线（Group） -->
  <div style="position:absolute;left:80px;top:556.98px;width:1483px;height:0;">
    <div style="position:absolute;inset:-1px 0;">
      <svg style="display:block;width:100%;height:100%;" fill="none" preserveAspectRatio="none" viewBox="0 0 1483 2">
        <g id="Group 10">
          <path d="M0 1H1483" id="Vector 2" stroke="#464953" stroke-dasharray="4 4" stroke-opacity="0.6" stroke-width="2" />
        </g>
      </svg>
    </div>
  </div>

  <!-- image 12：发音测评图标 -->
  <div style="position:absolute;left:76px;top:591px;width:33px;height:25px;">
    <img alt="" src="${img('e793f7c57dd287b00729e05e0a236d19136b4b8f')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;max-width:none;">
  </div>
  <p style="margin:0;word-break:break-word;position:absolute;left:123px;top:579px;width:140px;height:46px;font-family:${F};font-weight:500;line-height:46px;color:#636973;font-size:32px;">发音测评</p>

  <!-- image 15（与 image12 同图）：知识点讲解图标 -->
  <div style="position:absolute;left:76px;top:805px;width:33px;height:25px;">
    <img alt="" src="${img('e793f7c57dd287b00729e05e0a236d19136b4b8f')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;max-width:none;">
  </div>
  <p style="margin:0;word-break:break-word;position:absolute;left:123px;top:793px;width:175px;height:46px;font-family:${F};font-weight:500;line-height:46px;color:#636973;font-size:32px;">知识点讲解</p>

  <!-- Group4：发音测评卡片 + 句子 -->
  <div style="position:absolute;left:80px;top:641px;width:1483px;height:122px;background:#18181c;border-radius:14px;"></div>
  <p style="margin:0;word-break:break-word;position:absolute;left:171px;top:679px;width:700px;font-family:${F};font-weight:400;line-height:46px;color:#cfd6e2;font-size:36px;">I can greet people and show friendliness.</p>

  <!-- image 13：发音卡片右侧大图标 -->
  <div style="position:absolute;left:1193px;top:671px;width:62px;height:62px;">
    <img alt="" src="${img('6f03b3cb0f17d664874967959cee002dd9106da1')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;max-width:none;">
  </div>
  <!-- image 14（与 image11 同图）：句子前小图标 -->
  <div style="position:absolute;left:120px;top:685px;width:34px;height:33px;">
    <img alt="" src="${img('915b7e8a3e9e287dfa6f5fb62c8b51e98dac253d')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;max-width:none;">
  </div>

  <!-- Group6：知识点卡片 + 标题 + image16 -->
  <div style="position:absolute;left:80px;top:855px;width:732px;height:90px;background:#18181c;border-radius:14px;"></div>
  <p style="margin:0;word-break:break-word;position:absolute;left:120px;top:877px;width:197px;font-family:${F};font-weight:400;line-height:46px;color:#cfd6e2;font-size:36px;"> can 的用法</p>
  <div style="position:absolute;left:714px;top:882px;width:38px;height:38px;">
    <img alt="" src="${img('df8ed54d8875217cfd30cd648abb73846cc39331')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;max-width:none;">
  </div>

  <!-- image 17 / image 18：标签条 -->
  <div style="position:absolute;left:80px;top:394px;width:153px;height:57px;">
    <img alt="" src="${img('722d473ad18bae8b324cb01df7bc518fedfc712b')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;max-width:none;">
  </div>
  <div style="position:absolute;left:244px;top:394px;width:153px;height:57px;">
    <img alt="" src="${img('4a544389344410878ae362dca1d5a2da8a4b9dd2')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;max-width:none;">
  </div>

  <!-- Group7：顶部 Group 215 装饰容器 -->
  <div style="position:absolute;left:78px;top:90px;width:1483px;height:288px;">
    <svg style="position:absolute;display:block;inset:0;width:100%;height:100%;" fill="none" preserveAspectRatio="none" viewBox="0 0 1483 288">
      <g id="Group 215">
        <path d="${SVG_GROUP215.p35a83e80}" fill="white" fill-opacity="0.14" id="Rectangle 130" />
        <path d="${SVG_GROUP215.p2e661b80}" fill="white" fill-opacity="0.12" id="Rectangle 129" />
        <path d="M548 15V266" id="Vector 1" stroke="#9C9C9F" stroke-dasharray="5 5" stroke-opacity="0.42" stroke-width="4" />
      </g>
    </svg>
  </div>

  <!-- 高亮底色块（蓝 / 粉） -->
  <div style="position:absolute;left:105px;top:174px;width:206px;height:41px;background:rgba(11,132,231,0.7);border-radius:8px;"></div>
  <div style="position:absolute;left:192px;top:123px;width:100px;height:40px;background:rgba(255,81,159,0.7);border-radius:8px;"></div>
  <p style="margin:0;word-break:break-word;position:absolute;left:108px;top:118px;width:507px;height:91px;font-family:${F};font-weight:500;line-height:50px;font-size:36px;color:#fff;">I can greet people and show friendliness.</p>

  <!-- greet 渐变竖条 + 标签 -->
  <div style="position:absolute;display:flex;align-items:center;justify-content:center;left:665.5px;top:142px;width:108.218px;height:13.944px;">
    <div style="flex:none;transform:rotate(90deg);">
      <div style="position:relative;width:13.944px;height:108.218px;border-radius:4px;background-image:linear-gradient(0.0282977deg, rgba(255, 81, 159, 0.68) 0%, rgba(153, 49, 96, 0.68) 105.47%);"></div>
    </div>
  </div>
  <div style="word-break:break-word;position:absolute;display:flex;flex-direction:column;justify-content:center;left:660px;top:120px;width:123px;height:28px;font-family:${F};font-weight:700;line-height:0;font-size:32px;color:#fff;">
    <p style="margin:0;line-height:46px;"> greet： </p>
  </div>

  <!-- friendliness 渐变竖条 + 标签 -->
  <div style="position:absolute;display:flex;align-items:center;justify-content:center;left:659.5px;top:232.95px;width:206.502px;height:13.944px;">
    <div style="flex:none;transform:rotate(90deg);">
      <div style="position:relative;width:13.944px;height:206.502px;border-radius:4px;background-image:linear-gradient(0.0539979deg, rgba(16, 124, 214, 0.85) 0%, rgba(10, 75, 130, 0.85) 105.47%);"></div>
    </div>
  </div>
  <div style="word-break:break-word;position:absolute;display:flex;flex-direction:column;justify-content:center;left:659px;top:210px;width:221px;height:34px;font-family:${F};font-weight:700;line-height:0;font-size:32px;text-align:center;color:#fff;">
    <p style="margin:0;line-height:46px;">friendliness： </p>
  </div>

  <!-- show friendliness 渐变竖条 + 标签 -->
  <div style="position:absolute;display:flex;align-items:center;justify-content:center;left:659px;top:292px;width:296.995px;height:13.944px;">
    <div style="flex:none;transform:rotate(90deg);">
      <div style="position:relative;width:13.944px;height:296.995px;border-radius:4px;background-image:linear-gradient(0.0776608deg, rgba(14, 167, 172, 0.63) 0%, rgba(41, 73, 78, 0.63) 105.47%);"></div>
    </div>
  </div>
  <div style="word-break:break-word;position:absolute;display:flex;flex-direction:column;justify-content:center;left:659px;top:269px;width:314px;height:34px;font-family:${F};font-weight:700;line-height:0;font-size:32px;text-align:center;color:#fff;">
    <p style="margin:0;line-height:46px;">show friendliness： </p>
  </div>

  <!-- 释义正文 -->
  <p style="margin:0;word-break:break-word;position:absolute;left:792px;top:120px;width:723px;font-family:${F};font-weight:400;line-height:36px;font-size:28px;color:rgba(255,255,255,0.8);">动词，意为“打招呼”。常见问候方式还有: smile, wave, </p>
  <p style="margin:0;word-break:break-word;position:absolute;left:880px;top:208px;width:625px;font-family:${F};font-weight:400;line-height:36px;font-size:28px;color:rgba(255,255,255,0.8);">名词，意为 “友好”。由形容词 friendly（友好</p>
  <p style="margin:0;word-break:break-word;position:absolute;left:973px;top:269px;width:537px;font-family:${F};font-weight:400;line-height:36px;font-size:28px;color:rgba(255,255,255,0.8);">动词短语，意为 “表现出友好”。show 后</p>
  <p style="margin:0;word-break:break-word;position:absolute;left:660px;top:164px;width:723px;font-family:${F};font-weight:400;line-height:36px;font-size:28px;color:rgba(255,255,255,0.8);">say hello 等。</p>
  <p style="margin:0;word-break:break-word;position:absolute;left:659px;top:311px;width:851px;font-family:${F};font-weight:400;line-height:36px;font-size:28px;color:rgba(255,255,255,0.8);">接抽象名词表示展现某种品质，如 show kindness（表现善意）。</p>
</div>`;
    }
  };
})();
