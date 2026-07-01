# 屏规格 · 对方主页 OtherProfile（Rave Zone）

> 来源 `src/popup/screens/OtherProfile.jsx`。深色顶。视觉优先 web-capture `?s=other&p=hhhhll`。

## 1. 身份与导航
- 入口：私聊点头像/名字 → 本屏；对话列表点头像 → 本屏，带 `peer`。
- 出口：返回 ‹ → `chat(peer)`；`Chat Now` → `chat(peer)`。
- StatusBar：`dark`。

## 2. 结构
- 天空渐变封面（`#8FA6D6→#AEB9D8→#CDD2E0`）。
- 顶栏：返回 ‹（白）+ 居中 `Rave Zone` + 右 `🎁` `···`。
- 主体：大头像 + 名字 + `ID: 56715125`。
- 标签：`♋ Gemini`（星座）+ `Begadang` / `Animation` / `Mystery` / `Pop`。
- 数据：`3 Following 6 Followers`。
- 按钮：`＋`（关注）+ `Chat Now`（→ 私聊）。
- 空态：`🔍 It seems there is nothing here`。

## 3. 交互
返回、Chat Now 跳转；＋/🎁/··· 为可点态。

## 4. 验收点
- [ ] 天空渐变 + 大头像 + 标签 + 关注数。
- [ ] Chat Now / 返回 都回私聊。
- [ ] 底部空态文案。
