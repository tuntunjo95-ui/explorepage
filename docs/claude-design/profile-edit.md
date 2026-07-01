# 屏规格 · 资料编辑 ProfileEdit

> 来源 `src/popup/screens/ProfileEdit.jsx`（照 IMG_0957）。视觉优先 web-capture `?s=profile-edit`。

## 1. 身份与导航
- 入口：我的主页点大头像 → 本屏；设置页「Profile」行 → 本屏。
- 出口：返回 ‹ → `me`；`Vibe Test` 行 → `vibe`。
- StatusBar：`time=22:51`、`battery=14`。

## 2. 结构
- **顶栏**：返回 ‹ + 居中 `Profile`。
- **吸引力卡（粉色）**：`🧑 High Attractiveness ?` + 进度条 `95%` + 提示 `📍 Complete profile to get more chat chances. Check Guide>>`。
- **编辑列表**（每行：左标签[+小字说明] / 右值[+ › 箭头]）：
  - `Avatar` → 右侧小头像缩略图
  - `Nickname`（小字 Change once within 7 days）= `Joxon`
  - `Gender`（小字 Cannot be changed after registration）= `Male`（灰，不可改）
  - `Birthday`（Visible Only To Me）= `2000-07-31`
  - `Education`（Visible Only To Me）= `Graduate School`
  - `Vibe Test` = `Aurora Zone` → 点击进 `vibe`
  - `Interest`（› ）下方 chips：Sci-Fi/Action/Fantasy/Superhero/Blues/Jazz/K-Pop/Fortnite/LoL/Fashion
  - `Background` → 右侧背景图缩略图
  - `About Me`（› ）下方：`Laughing with you, not at you.`

## 3. 交互
各行可点（弹编辑，原型做成 › 可点态即可）；`Vibe Test` 行真实跳转 `vibe`；返回回 `me`。

## 4. 验收点
- [ ] 粉色吸引力卡 95% 进度。
- [ ] 9 个编辑行，Gender 灰、Vibe Test 行可跳 vibe。
- [ ] Interest 10 个 chip、About Me 文案一致。
