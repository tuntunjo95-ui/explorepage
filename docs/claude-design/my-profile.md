# 屏规格 · 我的主页 MyProfile（👤 Tab，Aurora Zone）

> 来源 `src/popup/screens/MyProfile.jsx`。视觉优先 web-capture `?s=me`。

## 1. 身份与导航
- 底部导航第 5 个 Tab（👤），`active=me`。
- 出口：`Aurora Zone` 胶囊 → `vibe`；齿轮 → `settings`；大头像 → `profile-edit`；`🪐 En Route` → `universe`。
- StatusBar：`dark`、`time=22:52`、`focus` 图标、`battery=24`。

## 2. 结构（自上而下）
**渐变头部 Hero（profile-hero-live）**：
- 顶行：左 `Aurora Zone` 胶囊（带小光球）；右 礼物按钮 + 金币按钮 `P 0` + 齿轮。
- 大头像（圆，点击 → 编辑资料）。
- 名 `Joxon` / `ID: 56715146` / `✣ Achievement` / 个签 `Laughing with you, not at you.`
- 标签流：首个 `♌ Leo`（星座高亮）+ Sci-Fi/Action/Fantasy/Superhero/Blues/Jazz/K-Pop/Fortnite/LoL + 末尾 `›`。
- 数据行：`14 Following` · `4 Followers` · `+28 32 Visitors`。
- `🪐 En Route ›` 按钮 → 星际之旅。

**发帖区（compose）**：`Today` / `Share a thought or moment` / `📷 Photo` 投放框。

**帖子流（3 条 article）**：
1. **置顶帖**：`✦ Pinned · 05-08 16:45 · 👁 158 Views · •••`；标题 `#PenggunaBaru flowers`；花束图；操作行（分享/评论1/赞1）。
2. **视频帖**：`06-03 20:26 · 👁 104 Views`；🌊；海景视频帧（时长 `00:12` + 声音图标）；操作行（评论0/赞1）。
3. **文字帖**：`05-08 15:03 · 👁 0 Views`；`Hey everyone! I'm a Leo. Just joined PopUp today, super excited!`；操作行（0/0）。

## 3. 交互
本屏以**展示 + 导航**为主：4 个出口跳转（见 §1）+ 帖子操作按钮态。注意：**我的主页无独立大头像弹层**（点头像直接进编辑页）。

## 4. 验收点
- [ ] 渐变头部 + Aurora Zone 胶囊 + 顶部三按钮。
- [ ] 标签首个星座高亮，其余常规。
- [ ] 三类帖子（图/视频/纯文）结构与浏览数一致。
- [ ] 四个跳转：Aurora Zone→vibe、齿轮→settings、头像→profile-edit、En Route→universe。
