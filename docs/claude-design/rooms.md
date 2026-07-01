# 屏规格 · 房间大厅 RoomList（Party Chat）

> 来源 `src/popup/screens/RoomList.jsx`。原版是整屏图素材（IMG_0934）。视觉优先 web-capture `?s=rooms`，或上传 IMG_0934。

## 1. 身份与导航
- 入口：匹配主页 `Party Chat` 卡 / `Parties` 标签 → 本屏。
- 出口：左上返回 ‹ → `match`。
- StatusBar：默认（浅色）。底部带导航栏（active=match）。

## 2. 结构
整屏 = 房间大厅完整列表（照 IMG_0934）：`Following / All` + 故事条 + `Recently / Recommend / Hot / Game / Chit Chat` 筛选 + 房间卡 + 运营 banner。
> 原型里可直接用整张高清截图铺满，叠一个左上返回 ‹ 热区即可（与复刻工程一致）。

## 3. 交互
返回 ‹ → match。其余为静态展示（如需，后续再把房卡做成可点）。

## 4. 验收点
- [ ] 整屏视觉与 IMG_0934 一致。
- [ ] 左上返回回到匹配主页。
- [ ] 底部导航高亮在 🏠 match。
