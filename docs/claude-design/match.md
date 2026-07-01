# 屏规格 · 匹配主页 MatchHome（🏠 Tab）

> 来源 `src/popup/screens/MatchHome.jsx`。深色屏。视觉优先 web-capture `?s=match`。

## 1. 身份与导航
- 底部导航第 1 个 Tab（🏠），`active=match`。
- 出口：`Vibe Match`/`Voice Match` 卡 → `match`（自身，占位）；`Party Chat` 卡 → `rooms`；`Parties` 标签 → `rooms`。
- StatusBar：`dark`、`time=22:43`、`location` 图标、`battery=35`。

## 2. 结构（深色，整页滚动）
- **顶栏**：`POPUP` 大标题 + `● Radar Searching ›` 胶囊（带脉冲点）。
- **三张匹配卡**（整图素材）：
  - 一行两张半宽：`Vibe Match` + `Voice Match`。
  - 一张全宽：`Party Chat`。
- **Tab 行**：`Users`（默认高亮）/ `Parties`（点击直接 → rooms）。
- `1,401,488 active`。
- **用户卡列表（9 张）**：每张 = 头像 + （名 + `♋ 星座`）+ 状态文案 + 兴趣 tag（最多 3）+ 右侧聊天图标按钮。
  - 9 人：fathinn(Carpricorn) / cilaaaa(Gen Z) / raflesia(Gemini) / Mila imut(Taurus) / wulan(Gen Z) / zelena(Gen Z) / rapunzel ❤️ ren(Sagittarius) / ayleh aile(Pisces) / dawv(Gen Z)。状态/兴趣照线上（印尼语，如 `mau yang just friend`、tags `BTS/Ed Sheeran/Belajar`）。
- **换一批**：`click to renew the list` / `Times Left Today: 10`。

## 3. 交互与状态
- `tab`（users/parties）。点 Users 切高亮；点 Parties 直接跳 rooms。
- 三卡、聊天图标、renew 为可点元素。

## 4. 验收点
- [ ] 深色底 + POPUP + Radar Searching 脉冲。
- [ ] 三卡布局（2 半宽 + 1 全宽），Party→rooms。
- [ ] 9 张用户卡（头像/名/星座/状态/3 tag/聊天键）。
- [ ] 底部 renew + Times Left Today: 10。
