# 屏规格 · Vibe Test（Aurora Zone 人格测试结果页）

> 来源 `src/popup/screens/VibeTest.jsx`。深色屏，长滚动。视觉优先 web-capture `?s=vibe`。

## 1. 身份与导航
- 入口：我的主页「Aurora Zone」胶囊 → 本屏；资料编辑页「Vibe Test」行 → 本屏。
- 出口：顶栏返回 ‹ → `me`。
- StatusBar：`dark`、`time=23:00`、带动态岛 `island`。

## 2. 结构（自上而下，深色背景）
- **顶栏**：返回 ‹ + 居中 `PopUp Vibe Test` + 右 刷新 ↻。
- **副标**：me 小头像 + `Joxon's Vibe Profile`。
- **信条**：`Creed of Aurora Zone` / 小字 `Everything is growing, everything is noisy`。
- **光球舞台**：抠图光球（vibe_orb，径向发光）+ 右下 `All Zone →` 按钮。
- **Zone 名**：`Aurora Zone`。
- **三特质 pill**：`Encouraging` · `Influential` · `Organizing`。
- **About You 卡**：标题 `About You ▸▸▸` + 正文 `You guide others, inspiring growth and collaboration, bringing warmth and motivation.`
- **Catchphrase 卡**：标题 + 三个气泡（白 `Are you ok?` / 青 `I think we can think about it together.` / 黄 `Everyone's feelings are also important.`）。
- **Happy trigger 卡（窄）**：`Wait — how did you know I like this?! 🥰`
- **Pet peeves 卡（窄）**：`Why do you even care? Just drop it. 😡`
- **Same Vibe 卡**：三位名人左右交错排：`Santa Claus (Gift deliveryman)` / `Judy Hopps (Police)` / `Barack Obama (President)`，各带小头像。
- **Who's right for you 卡**：3 条 bullet（emotionally responsive… / see me, understand me… / reciprocate when I give）。

## 3. 固定底部
`✎ Post` + `↗ Share` 两个按钮（始终在底，不随内容滚）。

## 4. 交互
本屏以**展示 + 滚动**为主：返回、刷新 ↻、All Zone →、Post、Share 为可点元素（原型里做成按钮态即可，无复杂状态）。

## 5. 验收点
- [ ] 深色背景 + 发光光球。
- [ ] 各分段卡顺序、文案、emoji 一致。
- [ ] Same Vibe 三人左右交错。
- [ ] Post/Share 固定底部。
