# 屏规格 · 设置 SettingsScreen

> 来源 `src/popup/screens/SettingsScreen.jsx`。视觉优先 web-capture `?s=settings`。

## 1. 身份与导航
- 入口：我的主页齿轮 → 本屏。
- 出口：返回 ‹ → `me`；`Profile` 行 → `profile-edit`；`General Settings` 行 → `social-tools`。
- StatusBar：`time=22:51`、`focus` 图标、`battery=24`。

## 2. 结构
- 顶栏：返回 ‹ + 居中 `Settings`。
- **Profile 卡行**：头像 + `Profile` + `95% Complete` + › → 资料编辑。
- 列表行（图标 + 名 + ›）：
  - `Account` / `Notification` / `Privacy` / `Select language` / `Help Center` / `General Settings`(→ social-tools) / `About`
- 底部 `Log Out` 按钮。

## 3. 交互
`Profile` → profile-edit；`General Settings` → social-tools；返回 → me。其余行为可点态（占位）。

## 4. 验收点
- [ ] Profile 卡 95% Complete。
- [ ] 7 个设置行 + Log Out。
- [ ] General Settings → 社交工具页。
