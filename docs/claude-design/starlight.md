# 屏规格 · Star Light 页 StarLightScreen

> 来源 `src/popup/screens/StarLightScreen.jsx`。视觉优先 web-capture `?s=starlight`。

## 1. 身份与导航
- 入口：对话列表 Star Light 行「More」→ 本屏。
- 出口：返回 ‹ → `message`；点会话行 → `chat(hhhhll)`。
- StatusBar：`time=22:57`、`focus` 图标、`battery=23`、动态岛 `island`。

## 2. 结构
- 顶栏：返回 ‹ + 居中 `Star Light`。
- 会话行（深度好友，聊满 50 轮自动收纳）：
  - Hhhhll 头像 + 名 `Hhhhll 🪐 2 👥` + 预览 `🌙 Good night!` + 时间 `22:53`。
- 点行 → 进与 Hhhhll 的私聊。

> 产品语义（HANDOFF §4）：Star Light = 聊满 50 轮自动收纳的深度好友（相当于置顶），同时仍在普通列表显示。Fate Radar 来源标只在 Star Light 显示。

## 3. 验收点
- [ ] 顶栏 Star Light + 返回回对话列表。
- [ ] Hhhhll 行（🪐2 👥 + Good night）可点进私聊。
