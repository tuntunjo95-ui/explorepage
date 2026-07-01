# Pop Up 1:1 高保真交互复刻 — 完整交接文档（给 Codex）

> 你（Codex）将接手一个**已完成主体、待继续打磨与部署**的项目。本文件是全部上下文，读完即可无缝继续，无需重新推导。用户是 Pop Up 这款 App 的产品经理（PM），要求把**自己产品**的交互 1:1 像素级复刻成一个**可交互网页**。所有素材、逻辑、决策都在下面。

---

## 0. 三条基石原则（用户反复强调，最高优先级）

1. **全程留痕**：项目知识/素材的权威库在**坚果云**
   `~/Library/CloudStorage/坚果云-c770629380@163.com/我的坚果云/PopUpReplica/`。
   ⚠️ **Codex 沙箱说明**：你（Codex，workspace-write）对坚果云目录**只有读权限、不能写**。
   - **读**：放心读坚果云里的截图/视频/知识文档（refs）。
   - **写**：你的进展/笔记一律写进**仓库内** `~/popup-replica/PROGRESS.md` 和 `HANDOFF.md`（你有写权限）。
   - **同步**：仓库文档 → 坚果云 的镜像，由用户或具备写权限的 Claude 会话定期执行，你不用管。
2. **永久公开网站**：最终产物必须是**任何人拿链接都能打开的永久网站**（计划 Cloudflare Pages）。这是头号未完成目标。
3. **后续一切围绕它展开**：这是长期主线项目。

## 1. 还原标准（铁律）

- **一比一、用尽算力、完全照用户截图的配色/排版/交互逻辑，每个位置都要"一模一样"。**
- 复杂视觉（星球、星空、匹配卡、礼物/表情面板、房间列表）一律**从用户截图羽化抠图**当素材；UI 骨架（状态栏/卡片/文字/按钮/导航）用代码按截图取色重建。
- 文案以**印尼语**为主，**严格照截图实际所见**，不要自创/翻译。
- 用户已**批准照搬真实头像和昵称**（这些是测试号，可公开）。

---

## 2. 设备与画布（锁死）

- 用户录屏/截图均为 **iPhone 16 Pro：物理 1206×2622 @3x ⇒ CSS 视口 402×874pt**。
- 所有截图都是 1206×2622。抠图坐标都按这个像素空间。
- 顶部有**动态岛**（药丸），状态栏时间多为 22:41/22:42。

---

## 3. 技术栈与工程

- **React + Vite**，工程在 `~/popup-replica`（本地 git 仓库，**不放坚果云**——避免 node_modules 同步冲突）。
- 启动开发：`cd ~/popup-replica && npm run dev` → http://localhost:5173
- **状态路由**（无 react-router）：`src/App.jsx` 里用 `useState(screen)` switch 渲染；`nav(screen, param)` 切换。
- **调试直达任意屏**：URL 加 `?s=<screen>&p=<peer>`，例如 `?s=universe&p=hhhhll`、`?s=match`、`?s=chat`、`?s=other`、`?s=report`、`?s=rooms`、`?s=details`、`?s=message`。
- 装饰字体 **Playfair Display**（斜体，用于星际之旅文字），已在 `index.html` 用 Google Fonts 引入。
- Node v24 / npm 11 已装。无全局 ffmpeg、无 brew。

### 工程文件树
```
~/popup-replica/
├── index.html                 # 含 Playfair Display 字体 link
├── HANDOFF.md                 # 本文件
├── src/
│   ├── main.jsx               # 入口，import './index.css' + <App/>
│   ├── index.css              # 最小复位（#root flex 居中）
│   ├── App.jsx                # 路由 + .stage>.device(402×874) 容器；?s= ?p= 读 URL
│   └── popup/
│       ├── popup.css          # 全部样式（所有屏都在这）
│       ├── StatusBar.jsx      # iOS 状态栏（props: time, dark）
│       ├── BottomNav.jsx      # 底部导航（props: active, nav, meAvatar）
│       ├── data.js            # conversations 数组 + avatars 映射(import.meta.glob)
│       └── screens/
│           ├── MessageList.jsx    # 对话列表（含左滑删除）
│           ├── Chat.jsx           # 私聊（含 Q&A/礼物/表情/语音/通话面板）
│           ├── ChatDetails.jsx    # 私聊设置 Details
│           ├── ReportScreen.jsx   # 举报
│           ├── OtherProfile.jsx   # 对方主页 Rave Zone
│           ├── UniverseRoute.jsx  # 星际之旅
│           ├── MatchHome.jsx      # 匹配主页
│           └── RoomList.jsx       # 房间大厅
└── src/assets/
    ├── bubble_logo.png        # 顶部 POPUP 气泡 logo（紫圆+全息泡）
    ├── star_sticker.png       # 私聊大星星贴纸
    ├── flowers_post.png       # 私聊分享帖花束图
    ├── avatars/               # 13 会话头像 + me.png + me_nav.png(干净无铅笔,导航用)
    ├── universe/              # flicker/echo/bend/eternal.png(羽化星球) + starfield.jpg
    ├── match/                 # card_vibe/voice/party.png(整卡) + fathinn/cilaaaa/raflesia/milaimut.png
    ├── panels/               # gift_panel/emoji_panel/sticker_panel.png(整块面板)
    └── rooms/roomlist.png     # 房间大厅整屏
```

---

## 4. 产品逻辑（用户亲自校正，务必照此，别按直觉）

### 底部导航 4 Tab + 中间发帖
| 图标 | 进入 | 名称 |
|---|---|---|
| 🏠 房子 | Vibe Match / Voice Match / Party Chat；其下 **Users(深色匹配)/Parties(房间)** 两 Tab | **匹配主页** |
| 🧭 指南针 | 一进 App 的 **feed 流** | **广场** |
| ➕ | 发帖 Write a Post | — |
| 💬 对话框 | **对话/私信列表**（Message） | — |
| 👤 头像 | **我的主页**（Aurora Zone，中间有 **On Road** 星球 → 星际之旅好友） | — |

### 关键机制
- **破冰** = 在🏠 Vibe/Voice Match **匹配用户 → 打招呼**。这套"匹配+首次打招呼"才叫破冰。
  （⚠️ Q&A 交换答案/Exchange answer 是**破冰后聊天里的玩法**，不是破冰本身。别混。）
- **星际之旅 = 关系养成体系**：聊满 **20 轮→点亮2星**；**50 轮→3星→变灰色星球(logo)**。
  - 入口A：**私聊右上灰色卫星 🛰️** → Universe Route 宇宙图。
  - 入口B：👤我的主页中间 **On Road 星球** → 我的星旅好友列表，可直接发起对话。
  - 星球（从近到远 = 天数从小到大，越远越高）：**Flicker Star 7天(178,879对) / Echo Star 30天(12,864对) / Bend Star 120天(0对) / Eternal Star 365天(0对)**。
  - 进度 `Day x/7`，7 = 天。星球**可点**，点了显示该阶段"多少对关系进入"。
  - 解锁卡（"Congratulations! You've unlocked the Universe Journey"）在**聊满50轮点亮第3星那刻**于私聊内弹出。
- **Star Light**（对话列表顶部）：聊满 **50 轮自动收纳**的深度好友（相当于置顶），**同时仍在下方普通列表显示**。不是普通星标。
- **Fate Radar**（Star Light 里某人的标）：基于**地理位置**的额外匹配来源——两人物理距离近时弹对方头像卡问是否聊天，双方点了就接上。**只在 Star Light 显示来源标，普通对话列表不显示来源。**
- **对话列表左滑红色** = **删除对话**（点红色 → 二次确认 → 删除）。
- **房间大厅(IMG_0934 浅色)** = Party Chat 的完整列表。两条路径到这：① 深色 Parties 标签一直下拉到底，出现 "Swipe up to see all parties" → 跳转；② 直接点 Party Chat 卡 → 也到这。

---

## 5. 已完成的 8 个屏 + 交互（全部能跑）

1. **对话列表 MessageList**（💬 Tab）：13 条真实头像会话 + Star Light(Hhhhll) + "Tired of Hi?" banner。交互：点会话→私聊；**左滑露红 Delete→二次确认弹窗→删除**；banner/Star Light 可点。
2. **私聊 Chat**：顶栏(返回/"1"徽章/头像/名/蓝色关系图标/灰卫星/···)；消息（分享帖白卡、Exchange answer 紫卡×2、大星星贴纸、Morning!气泡，**全右对齐+我的头像在右**）；输入栏(🎤/Say something/🙂/📷🖼️❓🎁📞)。交互：打字回车/点➤**发消息冒泡**；❓→**Q&A 破冰弹层**(深色底+紫卡+↻change换题+Confirm)；🎁→**礼物面板**(整图)；🙂→**表情面板**(整图)；📞→**语音通话确认弹窗**；🎤→切**Press-to-talk**(长按变紫)；🛰️卫星→**星际之旅**；···→Details；点头像/名→对方主页。
3. **Details ChatDetails**：头像名 + Nick Name(显示对方名) / Search chat history / **Pin 开关** / **Block 开关** / Report。交互：开关可拨；Report→举报页；返回→私聊。
4. **举报 ReportScreen**：Report Type* + 9 类(Vulgar or Porn/Insult/Advertising/Discrimination/Sensitive Political Issues/Fraud/Illegal Gambling/Violation of Guideline/Other) 单选圈 + 附件(0/4)+ 描述 textarea + Continue(选了才高亮可点)。
5. **对方主页 OtherProfile（Rave Zone）**：天空渐变 + 大头像 + 名 + ID:56715125 + 标签(♋Gemini/Begadang/Animation/Mystery/Pop) + 3 Following 6 Followers + ＋ / **Chat Now** + 空态"It seems there is nothing here"。Chat Now→私聊。
6. **星际之旅 UniverseRoute**：固定顶栏(返回/Universe Route/?)+ 可滚动星河(Eternal→Bend→Echo→Flicker 四星球+轨道虚线+双人头像舱+地球)+ 固定底 Day 2/7 + Memory。星球可点(高亮放大)。
7. **匹配主页 MatchHome**（🏠 Tab）：POPUP + Radar Searching + Vibe/Voice(半宽)/Party(全宽) 三整卡 + Users/Parties 标签 + "1,401,488 active" + 用户卡(头像/名/星座 pill/状态/兴趣 tag/对话图标)。Party 卡 & Parties 标签→房间大厅。
8. **房间大厅 RoomList**：IMG_0934 整屏图(Following/All+故事条+Recently/Recommend/Hot/Game/Chit Chat 筛选+房卡+运营 banner)+ 返回 + 底部导航。

### 全局组件
- **StatusBar**：动态岛 + 时间 + 信号/wifi/电量。`dark` 用于深色屏（星旅/匹配/对方主页）。
- **BottomNav**：🏠房子(实心) · 🧭指南针(灰圆+白斜针) · ➕**正圆**渐变(#8E7CF3→#6246EA) · 💬对话框(当前页黑) · 👤头像(me_nav,灰环)。`active` 控制高亮。
  - ⚠️ 历史坑：放大截图时纵向拉伸2倍会把**正圆+误判成椭圆**——+ 是**正圆**，别改回椭圆。

---

## 6. 配色速查（从截图取色，照用）

```
对话列表  bg #FFF | Star Light盒 #F4F5FA | 主紫 #6858E5 | 紫渐变 #9D7DF5→#5F5BE6
          未读徽章 #6858E5 | banner淡紫 #EEECFB | Message高亮条 #D9D6F4 | 时间灰 #CFCFD6
私聊      chat bg #F4F5FB | Exchange卡 #5D57ED | Exchange按钮 #7570EF | 文字气泡 #6457FE
匹配主页  bg #000 | 用户卡 #1C1C22 | active绿 #38DCA0 | tag #4A40B8 | sign pill #322C66
星空      渐变 #0A0B32→#151A58→#0B0926（取色点 #060A30/#181E5E/#110C2A）
对方主页  天空渐变 #8FA6D6→#AEB9D8→#CDD2E0
导航      灰图标 #C2C2CC | 激活 #15151C | +渐变 #8E7CF3→#6246EA
字体      UI: -apple-system/SF Pro；装饰: 'Playfair Display' italic
```

---

## 7. 素材与抠图方法（坚果云 PopUpReplica/ 内）

- **参考素材**：`ref/screenshots/`（31 张原图 IMG_0904–0934）、`ref/frames/`（视频抽帧）、`ref/sheets/`（联系表/网格/裁切验证图）。
- **3 个源视频**（在桌面，不在坚果云）：`~/Desktop/Pop up/产品原型/`
  - `RPReplay_Final1781621477.MP4`（开App→广场→匹配主页，170s）
  - `RPReplay_Final1781621777.MP4`（个人主页/发帖/交互，283s）
  - `RPReplay_Final1781622193.MP4`（私聊列表/对话/星际之旅，396s）
  - 均 1206×2622 60fps。
- **工具脚本**（坚果云 PopUpReplica/）：
  - `extract_frames.py`：PyAV 抽帧。`probe/grid/scenes/range` 子命令。场景检测把上万帧压成几十张分镜。
  - `montage.py` / `montage_shots.py`：拼联系表。
  - `tools/measure.py`：`grid <img> <out> [step]` 叠坐标网格；`pick <img> x,y...` 取色；`crop <img> x y w h <out>` 裁切。
  - 依赖：`python3 -m pip install --user av Pillow`（PyAV 自带 ffmpeg，无需系统 ffmpeg）。
- **抠图技巧**：星球用径向 alpha 羽化（PIL putalpha + 距离衰减），叠到星空无缝；整卡/整面板直接矩形抠图（含文字/插画，最保真）。
- **截图验证回路**（无头 Chrome，系统自带）：
  ```bash
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
    --hide-scrollbars --screenshot=/tmp/x.png --window-size=458,930 \
    --force-device-scale-factor=2 "http://localhost:5173/?s=universe"
  ```
  改完一屏就截图和 `ref/screenshots/` 对应原图肉眼比对、微调，直到一致。

### 坚果云项目知识文档（先读这些）
```
PopUpReplica/
├── 00-项目说明.md            # 主索引 + 进度时间线（最新进度看这）
├── docs/
│   ├── 00-总览-四大流程地图.md  # 四大流程↔视频证据；★用户校正章节（权威）
│   ├── 截图归类索引.md          # 31 张截图各属哪屏 + 已确认澄清
│   ├── 视频1-理解笔记.md
│   ├── 视频2-理解笔记.md
│   └── 视频3-理解笔记.md
```

---

## 8. 截图归属速查（要做哪屏就读对应原图取色/抠图）

- 对话列表：IMG_0911(顶部+Star Light+banner) / 0912(下滑+导航) / 0913(Star Light页,含Fate Radar)
- 私聊：0914(主界面) / 0917(Q&A) / 0915(礼物) / 0916(语音通话) / 0918(阅后即焚) / 0922(表情) / 0923(贴纸) / 0924(加号) / 0925(语音) / 0926(Details) / 0927(对方主页Rave Zone) / 0928(星旅解锁卡)
- 星际之旅：0919/0920/0921(三档星球) / 0928(解锁卡)
- 匹配主页：0929(三卡+Users) / 0930·0933(Parties) / 0931·0932(Users下滑,含"换一批/Times Left Today:10") / 0934(房间大厅)
- 其他（未建，备查）：0904(广场Feed) / 0905(我的主页Aurora Zone) / 0906(标签编辑) / 0907·0908·0910(帖子/详情) / 0909(设置页)

---

## 9. 待办（按优先级，Codex 接着做）

1. **【头号】部署成永久公开站**（CF Pages）：
   - `cd ~/popup-replica && npm run build`（产出 dist/）
   - `npx wrangler pages deploy dist --project-name=popup-replica --branch=main`
   - CF 账号 `joxonpopup@gmail.com`，wrangler OAuth 凭证带 refresh token 自动续期（见用户记忆 popup_prototypes_deploy.md，与 popup-prototypes 同账号）。建议**新建独立项目 popup-replica**，别塞进现有 popup-prototypes。⚠️ 部署前用户没说就别上线，先确认。
2. **补未建的 3 个 Tab 主屏**（目前是占位 Stub）：
   - 👤 **我的主页 Aurora Zone**（IMG_0905）：含 **On Road 星球→星旅好友**（星际之旅入口B）。
   - 🧭 **广场 Feed**（IMG_0904）：Following/For You + Explore/Social/Anonymous/Latest + 图文帖。
   - ➕ **发帖 Write a Post**（含匿名开关，IMG_0905 体系视频2）。
3. **私聊补全**：阅后即焚(Disappearing Image, IMG_0918)、GIPHY 搜索、贴纸面板(sticker_panel.png 已抠)、语音录制 UI 细化。
4. **星际之旅打磨**：下方 Echo/Flicker 星球+双人头像舱+地球的滚动位置校准；星球点击弹详情；Journey Memories 时间线日志。
5. **Star Light 专属页**（IMG_0913）、对话列表 banner 点击→Q&A。
6. **匹配主页**：Users 列表加更多条、"click to renew the list / Times Left Today: 10"。
7. **像素打磨**：按用户逐屏反馈调（用户会一屏屏验收提要求）。
8. **每步留痕**：进展写进**仓库内** `~/popup-replica/PROGRESS.md`（你有写权限）。**别尝试写坚果云目录——会被沙箱拒**。镜像到坚果云由用户/Claude 做。

---

## 10. 给 Codex 的工作方式建议

- 改任意屏后**必用无头 Chrome 截图 + 对照原图**（第 7 节命令），别凭感觉。
- 用户语言是**简体中文**，回复用中文。
- 用户节奏：他会一屏屏验收、逐处挑（"右上角应该是…"、"这里该加粗"），照改即可，别争。
- 涉及系统级更改（装软件、改全局配置）要先问；纯做产品/改代码用户已默认同意。
- 复杂视觉永远优先**从截图抠图**，不要手搓 SVG 去硬画插画/星球。
- **坚果云目录只读**：你的沙箱不能写它，写在仓库内即可（见 §0）。
- **dev 预览 URL 用 `http://127.0.0.1:5173/`**（不要用 `localhost`）：本机 `localhost` 会优先解析成 IPv6 `::1`，而 Vite 默认只绑 IPv4，导致"拒绝连接"。或在 `vite.config.js` 加 `server:{host:true}` 让两者都通。
```
```

## 11. Figma 设计稿工作流（2026-06-18 更新）

- 用户会在工作电脑登录设计账号，把 Figma **具体 Frame 链接 + 简单说明** 发给 Codex/Claude。
- 不建议批量下载 `.fig`：文件大，且常把多个迭代版本放在一起，容易误用旧稿。
- Figma 链接统一登记到仓库 `docs/FIGMA_SOURCES.md`，按 `当前可用 / 未上线，仅参考 / 历史版本，谨慎用 / 待确认` 分类。
- 未上线稿默认只记录、不实现、不部署、不保存图片；只有用户明确说可以用时才进入实现。
- 只有当前网站马上要校准/复刻的 Frame，才选择性保存参考截图或资源；参考图优先放 `docs/figma_refs/`，代码实际引用的素材才放 `src/assets/`。
- 使用 Figma 稿前，先读取该 Frame 的字体、字号、字重、行高、颜色、圆角、间距、截图和必要素材，再对照当前 React/CSS 微调。

（完）
