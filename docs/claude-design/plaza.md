# 屏规格 · 广场 Feed PlazaFeed（🧭 Tab）

> 来源 `src/popup/screens/PlazaFeed.jsx`。视觉优先 web-capture `?s=plaza`。

## 1. 身份与导航
- 底部导航第 2 个 Tab（🧭），`active=plaza`。
- 本屏无跳转出口（除底部导航）。
- StatusBar：`time=22:40`、`location` 图标、`battery=26`。

## 2. 结构
- **顶栏**：左 `Following`（下方有下划线条，当前态）/ `For You` 切换；右 搜索图标 + 铃铛图标。
- **筛选 pill 行**：`Explore`（高亮）/ `Social` / `Anonymous` / `Latest`。
- **Feed 卡 1（完整）**：
  - 作者行：Senja 头像 + 名 `Senja` + `1 second ago` + Follow(♣) + 更多(•••)。
  - 正文：`rindu pengen pergi...` 多行印尼语。
  - 大图（senja_kaaba）。
  - 互动行：分享 / 评论 `114` / 爱心 `1060`。
  - 一条评论：Santy 头像 + `Santy deman insa Allah kk` + 爱心 `31`。
- **Feed 卡 2（露头 peek）**：dede apina 😔 头像 + 名 + `3 minutes ago` + Follow + 更多（只露作者行，暗示下还有内容）。

## 3. 交互
以**展示 + 滚动**为主；Following/For You 切换、pill 切换、Follow、互动图标为可点元素（原型做成态即可）。

## 4. 验收点
- [ ] Following/For You + 搜索/铃铛 顶栏。
- [ ] 4 个筛选 pill，Explore 高亮。
- [ ] 第一条完整帖（图 + 114 评 + 1060 赞 + 一条评论）。
- [ ] 第二条只露作者行（peek）。
