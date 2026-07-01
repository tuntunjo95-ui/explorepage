# 屏规格 · 私聊 Details ChatDetails

> 来源 `src/popup/screens/ChatDetails.jsx`。视觉优先 web-capture `?s=details&p=hhhhll`。

## 1. 身份与导航
- 入口：私聊右上 `⋯` → 本屏，带 `peer`。
- 出口：返回 ‹ → `chat(peer)`；`Report` 行 → `report(peer)`。
- StatusBar：默认（浅色）。

## 2. 结构
- 顶栏：返回 ‹ + 居中 `Details`。
- 对方区：对方头像 + 名字。
- 列表：
  - `Nick Name` → 右值 = 对方名 + ›
  - `Search chat history` ›
  - —（分隔）—
  - `Pin`（开关 Toggle）
  - `Block`（开关 Toggle）
  - `Report` ›（→ 举报页）

## 3. 交互与状态
- `pin` / `block` 两个开关可拨动（受控）。
- `Report` → 举报页；返回 → 私聊。

## 4. 验收点
- [ ] Pin / Block 开关可切。
- [ ] Report 跳举报、返回回私聊。
