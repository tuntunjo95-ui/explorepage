# 屏规格 · 破冰提问 Set my chat question

> 来源 `src/popup/screens/ChatQuestion.jsx`。视觉优先 web-capture `?s=chat-question`。

## 1. 身份与导航
- 入口：社交工具页「Chat question」行 → 本屏（`from=social-tools`）；对话列表 banner 也可进（`from=message`）。
- 出口：顶栏返回 ‹ → `from`（来源页，默认 social-tools）。
- StatusBar：`time=22:58`、`focus` 图标、动态岛 `island`。

## 2. 结构
- **顶栏**：返回 ‹ + 居中 `Set my chat question` + 右 `Save`。
- `My Questions (0/3)` 标题。
- **✎ Customize** 按钮 → 打开自定义弹层。
- **三 Tab**：`Hai` / `Tentangmu` / `Biarkan mereka menjawab`（点击切换）。
- **问题卡**：列出当前 Tab 的预设问题（印尼语），点选作为我的破冰题。
  - **Hai**（9 条）：Gimana kabarnya hari ini? / Mood kamu gimana hari ini? / Ada kejadian seru hari ini? / Lagi lancar aja nggak belakangan ini? / Ada hal yang bikin kamu happy nggak? / Ada yang bikin kamu bete nggak? / Momen paling santai kamu apa? / Ada hal yang ditunggu-tunggu nggak? / Lagi sering ngerasa capek nggak
  - **Tentangmu**（3 条）：Apa mimpi teraneh yang pernah kamu alami? / Apa kamu orang yang humoris? / Apa ketakutan terbesarmu?
  - **Biarkan mereka menjawab**（3 条）：Tempat terbaik buat kencan dimana? / Makanan apa yang belum pernah kamu coba? / Rekomendasi tempat nongkrong asik?

## 3. 自定义弹层（点 ✎ Customize）
底部升起 sheet：抓手条 + `Customize question` + `Save`；textarea（maxLength 50）+ `0/50` 计数；下方一个**仿中文拼音键盘**（联想词 我/你/哈/是… + qwerty 三行 + `123 ☺ 空格 完成`）。点背板关闭。

## 4. 交互与状态
- Tab 切换（`tab`：hai/about/answer）。
- 自定义弹层开关（`custom`）。

## 5. 验收点
- [ ] 三 Tab 可切，问题卡内容随之更换。
- [ ] ✎ Customize 弹出底部 sheet + 仿键盘，点背板可关。
- [ ] 顶栏 Save、返回到来源页正确。
