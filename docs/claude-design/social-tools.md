# 屏规格 · 社交工具 SocialTools

> 来源 `src/popup/screens/SocialTools.jsx`。视觉优先 web-capture `?s=social-tools`。

## 1. 身份与导航
- 入口：对话列表右上工具按钮 → 本屏（`from=message`）；设置页「General Settings」→ 本屏（`from=settings`）。
- 出口：返回 ‹ → `from`（来源页）；`Chat question` 行 → `chat-question`。
- StatusBar：`time=22:51`、`focus` 图标、`battery=24`。

## 2. 结构
- 顶栏：返回 ‹ + 居中 `Social Tools`。
- 列表行：
  - `Chat question` + `To Complete` + › → 破冰提问页
  - `Show my Star Light list` + 开关（默认开）
  - `Find Friends` + ›

## 3. 交互与状态
- `showStar` 开关可切（默认开）。
- `Chat question` → chat-question；返回 → 来源页。

## 4. 验收点
- [ ] Show my Star Light list 开关可切。
- [ ] Chat question 跳破冰提问、返回回来源页。
