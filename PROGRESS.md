# Pop Up 复刻 · 进展日志

> Codex/Claude 每有进展就在此**追加**一条（仓库内，可写）。坚果云目录只读，别往那写。
> 完整上下文见 `HANDOFF.md`。

## 2026-06-17（Claude 初版）
- 完成 8 屏 + 交互：对话列表(左滑删除)、私聊(Q&A/礼物/表情/语音/通话面板)、Details、举报、对方主页 Rave Zone、星际之旅、匹配主页、房间大厅。
- 素材全部从用户截图抠出（src/assets/）。画布 402×874pt。
- dev 预览用 `http://127.0.0.1:5173/`（localhost 会因 IPv6 拒绝连接）。

## 2026-06-17（Codex 接手后）
- （Codex 在补：广场 Feed `PlazaFeed.jsx`、我的主页 `MyProfile.jsx`；匹配主页用户列表扩到 9 人 + "renew the list"；StatusBar 加 time/timeIcon/battery 参数；设备外框去掉。）
- 待续……

## 待办（详见 HANDOFF.md §9）
1. **部署 CF Pages 永久公开站**（头号）。
2. 补 ➕发帖 Write a Post（含匿名）。
3. 私聊补：阅后即焚 / GIPHY / 贴纸面板 / 语音录制细化。
4. 星际之旅打磨：下方星球+头像舱+地球滚动校准、星球点击详情、Journey Memories。
5. 按用户逐屏验收做像素微调。

## 2026-06-17（部署上线 ✅）
- **永久公开站已上线：https://popup-replica.pages.dev/**（CF Pages，账号 joxonpopup@gmail.com，项目 popup-replica）。HTTP 200，线上渲染正常（首次访问头像略慢=冷缓存，刷新即满）。
- **以后改完代码重新部署，跑这一行**：
  ```
  cd ~/popup-replica && npm run build && npx wrangler@latest pages deploy dist --project-name=popup-replica --branch=main --commit-dirty=true
  ```

## 2026-06-17（功能设计·共同兴趣标签）
- **新功能（变体开关，默认 ON）**：对话列表里，对方首条是 hi 型低效开场（firstHi）且与我有共同兴趣（sharedInterests）时，在名字右侧定格一个淡紫「✦ 兴趣」胶囊，帮收信方（女生）首条即筛选。**点进该私聊再退回 → 标签消失**（localStorage `popup_opened_chats` 记忆，轻量）。走心开场白（如 calista）不打标签作对比。
- 实现：`data.js` 加 firstHi/sharedInterests（aponmooo=Gaming、RAYA=K-pop、natasya=Anime）；`MessageList.jsx` 加 InterestTag + opened 逻辑 + 左下「✦ 兴趣标签 ON/OFF ↺」变体开关；`popup.css` 加 `.interest-tag`/`.feat-toggle`。
- 设计沙盒方法：以后每个新功能都做成可切换变体，真机一键对比现状↔提案。

## 2026-06-17（兴趣标签·四方案对比器）
- 据用户原型 interest_tag_prototype，把标签从"名字旁"移到**消息行顶头**（直接给"hi"补语境），并**按兴趣分色**（CATS 色板：kpop紫/game靛/anime粉/photo青/music琥珀/book红）。
- 4 套方案做成**真机对比器**（底部 schemebar：现状/轻量A/高亮B/多兴趣C/星光D + ↺ 重置）：A=彩色小chip；B=整行淡底色+左色条+"You both like X"替换问候；C=最多2个chip；D=品牌渐变+流光。`?scheme=a|b|c|d` 可直达。
- 沿用"点开即消失"（localStorage）。开发自评建议：默认 A、A/B 测 A↔B 转化；D 偏重慎用（用户亦觉太重）。

## 2026-06-17（轻量方案精修·统一星标）
- 据用户反馈：很多兴趣无干净 emoji（LOL/虚荣等）→ 轻量方案 A 统一为 **✦ 紫星标 + 兴趣词**（SVG 四角星，不依赖 emoji），**单一品牌紫 #6e54e6 + 浅紫胶囊 #ece8fb**，解决"五彩斑斓"与"喧宾夺主"。照用户图（image #2）还原。
- B/C/D 暂保留作对比；用户偏爱 D（星光）配色，待定是否 star 化 + 缩短文案。
- 待定：①是否锁定 A 为终版/简化对比器 ②消失逻辑 点开↔回复 ③D 是否保留为备选。

## 2026-06-17（锁定轻量·清理对比器）
- 用户拍板：**只保留 现状 / 轻量 两套**，去掉 高亮B / 多兴趣C / 星光D。
- `MessageList.jsx`：SCHEMES 砍到 [现状, 轻量]；MsgLine 删 b/c/d 渲染分支（仅留 ✦星标+兴趣词）；ConvRow 删 b 的行底色逻辑。dead CSS（.tag-b/.tag-c/.tag-d/.chips-c/@keyframes shimmer）暂留，后续可清。
- 已 build + 部署 popup-replica.pages.dev + git commit。
- 下一步：用户将给视频/图片，**优化主页**（待确认是 广场feed / 匹配主页 / 我的主页 哪个）。

## 2026-06-17（我的主页 + 资料编辑页 + Vibe Test 复刻）
- 范围（用户定）：做法=先1:1复刻到位再优化；本轮=我的主页+资料编辑页+Vibe Test(Aurora Zone)。其余子页（成就/设置/钱包/礼物/背包/StarLight/对话列表&私聊进一步交互）放后续。
- 素材：6.17 共 34 图(IMG_0950–0985)+3 视频，已留痕坚果云 ref/screenshots、ref/videos。三视频=A 我的主页主线 / B 对话列表→他人资料→私聊 / C 我的主页→Vibe Test。
- **我的主页**(MyProfile 重写)：渐变头部(Aurora Zone胶囊+礼物/金币P0/设置 · Joxon/ID 56715146 · ✲Achievement · "Laughing with you, not at you." · ♌Leo高亮+9兴趣chips · 14 Following/4 Followers/32 Visitors · 🪶En Route) + 白卡(Today/Share/Photo + ✦Pinned #PenggunaBaru flowers)。注意：我的主页**无大头像**(他人页0969才有)。
- **资料编辑页**(新增 ProfileEdit，IMG_0957)：粉色 High Attractiveness 95% 卡 + Avatar/Nickname(Joxon)/Gender(Male)/Birthday/Education/Vibe Test(→vibe)/Interest(10 chips)/Background/About Me。
- **Vibe Test**(新增 VibeTest，IMG_0982-0984)：starfield + Creed of Aurora Zone + 抠图光球(vibe_orb.png 径向alpha) + Aurora Zone金标题 + 3特质 + About You + catchphrase三气泡(白/青/黄) + Happy trigger/Pet peeves + Same Vibe(Santa Claus/Judy Hopps/Barack Obama，头像暂emoji占位) + Who's right(3条) + Post/Share。
- 路由：App.jsx 加 profile-edit / vibe。入口：Aurora Zone胶囊→vibe；En Route→universe；齿轮→profile-edit(设置页本轮未做，暂接编辑页)；编辑页 Vibe Test 行→vibe。
- 踩坑：`.vibe-screen{position:relative}` 覆盖 `.screen{position:absolute}` 致设备高度塌缩、底部 Post/Share 被挤出（与早期 UniverseRoute 同坑）→去掉 relative；滚动区 flex 子项加 `min-height:0` 才能内部滚动。
- 已 build+部署 popup-replica.pages.dev + git commit(66cd380)。无头截图核对 me/profile-edit/vibe 三屏均贴合原图。
- 待优化/后续：①Same Vibe 真人小头像抠图替换 emoji ②齿轮→真正的设置页(0955) ③Vibe 中下段(Same Vibe/Who's right)仅结构核对，未逐像素 ④对话列表/私聊"进一步交互"未动。

## 2026-06-18（Codex 临时补丁：6.17 缺口续补）
- 读取 6.17 坚果云更新：IMG_0950–0985 + 6 条录屏 + 新增 0617 复刻笔记；确认 Claude 留下的缺口集中在 Settings/Social Tools/Star Light/Set chat question/Vibe 下半段/私聊贴纸入口。
- 临时副本完成：新增 Settings(IMG_0955)、Social Tools(IMG_0958/0973)、Star Light 列表(IMG_0970)、Set my chat question(IMG_0974/0977) 四组页面与路由。
- Vibe Test：Same Vibe 从 IMG_0984 抠出 Santa/Judy/Obama 真人头像；下半段改成亮紫半调大卡、交错名人条、三角 bullet 和玻璃高光 Post/Share；Vibe/Star Light/Chat question 状态栏支持动态岛录屏点。
- 私聊：补贴纸面板入口，沿用已抠 `sticker_panel.png`。
- 注意：当前 Codex 会话没有 `~/popup-replica` 写权限，以上改动落在 `/private/tmp/popup-replica-work-0617-41898` 临时副本；`npm run lint` 与 `npm run build` 均通过。待切到可写仓库后应用补丁、截图复核并部署。

- 补充 Figma 用户卡字体规范：Users 卡姓名使用 Montserrat ExtraBold 800 / 14px / line-height 100%；副文案使用 Montserrat Regular 400 / 14px / line-height 20；右侧操作按钮按 46×46、#5D57ED→#A257ED 渐变、3px 10% 紫边记录并写入临时补丁。
- 依据 Figma `171:4406` 广场稿校准信息流字体后完成实机可读性修正：页面与正文恢复系统字体，作者名保留 Montserrat 14/18、600，时间 12/16、400、#8C8C8E，正文 15/21、400，互动与辅助文案 13/18；名字与时间并排且无圆点。比例演示帖改用英文、印尼语、越南语拉丁字母真实文案，预览控制也改为英文。已完成本地构建与 393×852 浏览器验收，未提交、未发布。
- 继续按 Threads 信息流节奏压缩作者区：正文改为 14/20；头像改为独立的 36px 左侧轨道，作者栏自身由 36px 压缩为 20px，正文紧接姓名行且继续与媒体、互动栏保持 45px 左对齐。393×852 实测姓名与正文之间仅 3px 视觉间隔，首屏可完整展示一帖并露出下一帖，Follow 44px 点击区保留。已构建并打开实时预览，未提交、未发布。
- 修复紧凑作者区下 Follow 按钮遮挡正文：通过首行专用 82×18px 右侧环绕区避让 Follow/More，第二行起恢复完整内容宽度，保留紧凑节奏且不永久压窄正文。已构建并在 393×852 实时预览验证，未提交、未发布。
- 根据复核意见改为直接轻量化 Follow：撤销正文首行环绕方案，去掉 Follow 的淡紫圆形底，图标缩至 18px 并上移到姓名行；保留 44px 隐形点击热区和 Follow→Chat 状态逻辑，正文恢复完整宽度。已构建并刷新本地预览，未提交、未发布。
- 将 Follow 状态改为 Threads 式头像徽标：未关注时在 36px 头像右下角显示 24px 紫底白色 Follow 徽标（白色描边与轻阴影增强底色清晰度）；点击关注后徽标消失，右侧恢复 44px Chat 点击区与 26px 浅紫圆底。Follow 图标 SVG 攷为 currentColor 以适配两种状态，原有 Follow→Chat 逻辑保留。已构建并刷新交互预览，未提交、未发布。
- 纠正头像关注徽标图形：未关注态改为 Threads 风格的纯加号，不再使用“人物＋”；徽标为 24px 白色圆底、黑色 16px 加号、1px 浅灰边与轻阴影。点击后仍切换为右侧 Chat。已构建并刷新预览，未提交、未发布。
- 完善关注双状态：头像徽标内“+”缩至 13px 并改为品牌紫；点击后头像徽标原位变为 13px 品牌紫“✓”，同时右侧新增独立 Chat 按钮。Chat 图标重画为 Figma 风格的圆角对话框轮廓与两条文本线，移除通知圆点；点击 Chat 进入聊天，点击头像“✓”可切回未关注。已构建并刷新交互预览，未提交、未发布。
- 按 Figma 截图纠正 Chat 形态：右侧不再使用聊天图标，改为 56×28px 的 `Chat` 文字胶囊，白底、1px #E3E3E7 描边、15px 圆角、13px Montserrat 600 黑字，位于 More 左侧。头像品牌紫“+ / ✓”双状态保持不变。已构建并刷新预览，未提交、未发布。
- 参考 Threads 实机截图缩小头像关注徽标：36px 头像上的可见圆形由 22px 收至 18px（24px 外层点击盒、3px 内缩），`+ / ✓` 从 13px 收至 10px，并由品牌紫改为与正文相同的 `--plaza-text` 深色；白底、1px 细灰边与轻阴影保留。已构建并刷新预览，未提交、未发布。
- 对 Chat 胶囊做光学校正：因描边容器与 Montserrat 600 会放大视觉字级，将 Chat 从 13px 降至 12px，按钮从 56×28 收至 52×26，用户名继续保持 14px，从而明确 Chat 为次级操作。已构建并刷新预览，未提交、未发布。
- 继续收小头像关注徽标：可见圆形由 18px 调为 16px，`+ / ✓` 由 10px 调为 9px，24px 外层点击盒保持不变。已构建并刷新预览，未提交、未发布。

## 2026-06-18（Codex 修复：我的主页主视觉回退）
- 用户反馈“我的主页头像和背景图没了”。定位为 MyProfile 仍有 `profile_hero.jpg` / `profile_status.jpg` 素材和 CSS 遗留类，但 JSX 改成了手写渐变结构，导致头像、云层背景、编辑铅笔、Visitors +28 等主视觉细节消失。
- 修复方案：我的主页顶部恢复为 402×54 状态栏截图 + 402×410 主视觉截图，并用透明热区保留 Aurora Zone、设置、编辑资料、En Route 点击；避免再用手写 CSS 拼这一屏的复杂视觉。

## 2026-06-18（Codex 视觉优化：录屏状态栏 + Vibe 首屏）
- 继续复核 402×874 画布：我的主页上半段已恢复，白卡接缝基本对齐；继续优化录屏态状态栏、Vibe 首屏、Star Light 与 Set my chat question 的关键比例。
- 修复动态岛被 `.vibe-screen > * { position: relative }` 挤进普通文档流的问题；录屏态隐藏蜂窝信号图标，调整红点/橙点位置，使时间、动态岛、WiFi、电量回到同一行。
- Vibe Test 首屏压缩 Creed/球体/标签区高度，并把 Post/Share 改为底部浮层，首屏能露出 “Your catchphrase” 区域，接近 IMG_0982。
- Star Light 行头像/字体缩小到参考比例；Set my chat question 压缩 Customize、Tabs、问题卡间距，向 IMG_0974 靠齐。

## 2026-06-18（Codex 继续优化：广场 / 匹配 / 私聊）
- 广场 Feed：放大 For You 标题、筛选胶囊、作者头像与正文，使 IMG_0904 的标题重量和卡片密度更接近；卡片圆角、图片圆角和指标行略加粗。
- 匹配主页：微调 POPUP 标题、雷达胶囊、三张匹配卡和用户卡垂直节奏；保留用户提供 Figma 后的 46×46 紫色聊天按钮规范。
- 私聊：底部输入区增高，麦克风/输入框/表情/工具栏图标放大；Exchange answer 卡、帖子卡、贴纸和文字气泡略放大；顶栏宇宙入口从放射状图标改为灰色星球图标。

## 2026-06-18（Codex 修复：我的主页头像与真实滚动）
- 用户指出“头像还是没有、帖子无法下滑”。复核后确认旧实现过度依赖整张 `profile_hero.jpg` 背景图，且置顶帖只有一张 155px 高的浅裁切，内容高度不足，底部导航还会盖住帖子。
- 修复：我的主页顶部改为显式渲染头像、Aurora Zone 顶部按钮、礼物/金币/设置、Joxon/ID/成就/兴趣/统计/En Route，不再把头像藏在背景图里；滚动容器加入触摸滚动与底部安全留白。
- 帖子流补齐 6.17 视频里的结构：从 IMG_0950/0952 重新裁出完整花束帖和海边视频帖，新增 06-03 海边帖与 05-08 文字帖，使帖子区可以真实下滑到第二、第三条。

## 2026-06-18（部署收尾·全站对齐线上）
- 发现：线上停在 66cd380，Codex 后续的 4 新屏(设置/SocialTools/聊天问题/StarLight)+我的主页/VibeTest/私聊精修全部未部署 → 用户反馈"网站没完善好"。
- 处理：提交全部未提交改动(commit 6aa99c6) → build → 部署 popup-replica.pages.dev。
- 全站 15 屏无头截图回归：message/chat/me/profile-edit/vibe/settings/social-tools/chat-question/starlight/match/plaza/rooms/universe/other/details 均正常，无崩坏。
- 线上验证：设置页(原线上没有)与精修版我的主页均已生效。
- 另：整理了《对话列表-交互清单-给ClaudeDesign.md》→ 坚果云 docs/。

## 2026-06-18（Codex 对话列表交互补齐）
- 补齐 Message 右上 Social Tools 入口、CQA 横幅关闭、Message→ChatQuestion/SocialTools 的返回来源、头像点进对方主页/行体点进私聊分支。
- 根据用户反馈，去掉共同兴趣标签“轻微消失动效”；只保留点开会话后标签从列表消失的记忆逻辑。
- 同频信号逻辑更新：凡当前显示同频标签的 firstHi 会话，右侧同步显示紫色未读 `1`（与 natasya 同款），点开后随标签一起消失。
- `npm run lint`、`npm run build` 均通过；已部署到 `https://popup-replica.pages.dev/`，本次 Cloudflare 部署预览为 `https://cd4d49e7.popup-replica.pages.dev`。

## 2026-06-18（Figma 工作流记忆）
- 用户将在工作电脑登录设计账号后，把 Figma 具体 Frame 链接和说明发给 Codex/Claude；不批量下载 `.fig`，避免大文件和历史版本混杂。
- 新增 `docs/FIGMA_SOURCES.md` 作为 Figma 设计稿索引，按 `当前可用 / 未上线，仅参考 / 历史版本，谨慎用 / 待确认` 分类记录。
- 约定：未上线稿默认只记录、不实现、不部署、不保存图片；当前要校准的网站 Frame 才选择性保存参考图/资源。

## 2026-06-18（6.18 figma PRD 接入·对话列表头像状态 + 私聊图标）
- 用户给了坚果云 assets/6.18 figma PRD（Figma 导出切图，按 avatar/Chat_list/Chat_oneperson/Page/universe/Match 分类）。两个新功能潜伏其中：Chat_list 的「Continue The Journey 召回卡」、Chat_oneperson 的「AI 灵感推荐」图标。
- 本轮做 a（用切图精修现有屏）：
  ① 对话列表头像加「人物状态」装饰：在线绿点 / New Post(紫环+胶囊) / 爱心LOVE框 / 数据徽标——data.js 加 online/deco，MessageList 加 AvatarStatus 组件。
  ② 私聊底部 6 个工具图标换成 figma 原设计切图（chat_icons/ic_ai|camera|photo|question|gift|phone，去白底），含新增「AI 灵感推荐」(最左)。
- 抠图：ic_*（从 750×216 输入栏底排切+去白底）、avframe_love（download.png 挖空中心当叠加框）。
- 已 build+部署+commit。无头截图确认：在线点/New Post/爱心框/6 图标均生效。
- 后续可做：Continue The Journey 召回卡(对话列表新功能)、AI 灵感推荐面板逻辑、Page/avatar 其余切图精修资料页。

## 2026-06-19（对话列表新功能：Continue the journey 召回卡 + 富 Star Light）
- 参考：坚果云 6.18 figma PRD 的 Chat_list（有卡片/关闭卡片后）+ 用户交互视频（飞书20260619-104202.qt，已抽帧）。
- 关键机制（用户澄清）：召回卡是**堆叠卡组**——一张卡背后叠 2 张（只占一个卡位却装 3 个用户），不是横排横滑。关掉前一张、后一张顶上。
- 实现（MessageList 的 JourneyStarLight 组件）：
  - 召回卡：标题 Continue the journey + ✕；头像+⭐能量值；名字+召回文案（逐卡不同）；`Send a ⭐` 按钮。
  - 关法两种：Send a⭐ 或 ✕，都关掉当前卡、下一张顶上。底部圆点 = 剩余卡数（当前=深色长条，其余=灰点，剩 1 张无点）。
  - 三张全关 → Star Light 从右滑入、顶格全宽（slIn 动画）。
  - 富 Star Light：5 项带状态装饰（未读数 count / New Post 紫环 / 数据徽标 stats / 在线点 / More），复用 figma avatar 切图样式。
- data.js 加 recallCards + starLightRich；`?s=message&cj=off` 调试直达终态。
- 头像/昵称暂随机（用户说搞完再改）。已 build+部署+commit。无头截图确认两态均贴合 figma。
- 待办：①召回卡的真人头像/文案按需替换 ②Send a⭐ 可加飞星动效 ③用户提的「手动把 Star Light 拖过来盖卡」手势暂未做（核心堆叠流程已覆盖）④AI 灵感推荐面板逻辑。

## 2026-06-19（召回卡按 figma 精修·第二轮）
- 用户反馈：别自创、直接用原型图。已照办：
  - 卡背景**直接用 figma `download-5.png`**（Chat_list），拷为 src/assets/profile/journey_card_bg.png；不再用 CSS 渐变。
  - 去阴影；aspect-ratio 558/228 + journey-row align-items:stretch，卡片与 Star Light **等高**。
  - 按钮 `Send a⭐`→**`Hi⭐`**（粉紫渐变）；`⭐数`从头像下移到名字旁 **🪐12**。
  - 关闭/发送动画 上滑→**左滑**（cjOutLeft）。
  - 全关后 Star Light **顶格全宽**（.full border-radius:0、无侧白边）。
  - BottomNav 加 **.home-indicator**（iOS 黑色 home 横条，照 download.png）。
  - 指示器仍为小圆点（当前长条+灰点），非数字。
- 已 build+部署+commit；线上无缓存截图确认卡片/StarLight/home 横条均生效。与 download-2.png 并排对照一致（头像随机占位待改）。

## 2026-06-19（召回卡第三轮 + 底部导航微调）
- 召回卡：① 堆叠改成**背后两张旋转倾斜**(inset:0 + rotate +2°/-1.5°)露角，不再往下露边；② 卡片与 Star Light **严格等高**(去 aspect-ratio，height:100% 随 align-items:stretch)；③ **支持横滑**(journey-row.has-cards overflow-x:auto + 桌面鼠标 pointer 拖动滚动，guard 防误触；触摸端原生)；④ 圆点移到**底部居中**。
- 底部导航：**收窄**(left/right 14→26)、**图标放大**(svg 26→29 / +50→54 / avatar 34→37)、home 黑横条 bottom 8→9 **与导航留间距**。
- 已 build+部署+commit；无头截图确认旋转露角/等高/居中圆点/导航均生效（横滑需真机或鼠标拖动验证）。

## 2026-06-19（Codex 召回卡第四轮：改用 Figma 原图视觉层）
- 用户反馈卡片区仍不满意，要求参考坚果云 `assets/6.18 figma PRD/Chat_list/有卡片的效果.png` 与 `关闭卡片后的效果.png`。
- 读取 Claude 今日交接与坚果云素材后，确认旧实现偏差：仍显示旧 CQA 横幅、Message 标题为手写代码字、右上图标比例偏离、召回卡/Star Light 使用代码重画导致字体/头像/按钮细节偏差。
- 修复：Message 标题改用 Figma `Group.png`；旧 CQA 横幅默认隐藏（仅 `?cqa=on` 调试显示）；底部兴趣方案调试条默认隐藏（仅 `?debug=scheme` 显示）。
- 召回卡视觉层改用 Figma 完整 `download-2.png`，关闭后 Star Light 改用完整 `Frame 864.png`；代码只保留透明点击热区、堆叠、横滑和关闭逻辑，减少手搓偏差。
- Message 页状态栏按 Figma 改为 `9:41` 且电池无数字；两态均用浏览器截图核对，`npm run lint` 与 `npm run build` 通过。

## 2026-06-19（工作版修复 + 案例页 Showcase）
- 修复 Codex 改动带来的问题：①Star Light 静态图太糊→换回**清晰 DOM 版**；②召回卡顶部**截断**(journey-row 的 margin-top:-24px)→去掉、顶部留 16px；③**恢复 现状/轻量 切换**(schemebar 工作版默认显示)；④弃用静态图(还原"Fadedon't"文字 bug)。
- **架构**：`MessageList({variant})` —— original=无召回卡+无同频信号；work/enhanced=有。`showCard` 传给 JourneyStarLight。一份组件、两处复用。
- **新增案例页 `?s=showcase`**(全屏桌面版，给领导看的前后对比作品集)：Hero + 原版(variant=original)｜我的版本(variant=enhanced) 真机并排 + VS + 两个功能(召回卡 / 同频信号)的 痛点/方案/效果。App.jsx 对 showcase 全屏渲染(不套手机外框)。
- 入口：工作版 `?s=message`；案例页 `?s=showcase`。已 build+部署+commit。

## 2026-06-19（晚·召回卡照图定稿）
- 卡片改回**直接用 figma download-2.png 原图**(像素级) + 透明热区；关键坑：`cj-card-img` 用 `height:auto` 保原比例(558:228)，**不可 object-fit:fill**(会压扁)。
- 卡片宽 286 + cj-stack align-self:flex-start；右侧 StarLight 自然只露 1 人。
- 全关 StarLight 淡紫底**满屏零侧白边**(.full margin:0 + border-radius:16 16 0 0)。
- 记忆已同步坚果云 docs/0619 文档。

## 2026-06-19（召回卡定稿·收尾）
- 全关后 StarLight 四角圆角+加大(radius 24)，满屏零侧白边。召回卡 + 同频信号 至此定稿。

## 2026-06-22（Claude）
- 修对话列表两处逻辑（MessageList.jsx）：
  1. 未读数改为按「对方 hi 型开场且未点开」判定（`c.firstHi && !opened`），**现状/轻量都显示**右侧未读 1，点开即清；不再依赖标签是否可见。
  2. **New Post 不再渲染在对话列表行**（AvatarStatus 去掉 ring + av-newpost），New Post 只保留在 Star Light（StarAvatar 不动）。Beth 数据仍带 deco:'newpost' 但列表不渲染。
- 已部署：https://popup-replica.pages.dev/

## 2026-06-22（Claude·加两个方案沙盒）
- 对话列表对比器从 2 档扩到 4 档（MessageList.jsx SCHEMES）：现状 / 轻量 / **方案1** / **方案2**。
  - **方案1（b）**：未读数并入左侧 ✦ 紫 pill（`.tag-n` 紫底白字小圆角），右侧不再单独显示未读（`mergeUnread`）。一簇信号，顺带让"退出后消失"继承未读心智。
  - **方案2（c）**：兴趣词改 `[中括号]`、灰色、字号同正文（`.tag-c`=var(--sub)/400），弱化不抢眼；未读 1 仍在右侧。
- 清掉历史 A/B/C/D 残留 CSS（旧 scheme-b/tag-b/tag-c/tag-d/chips-c）。
- 已部署：https://popup-replica.pages.dev/?s=message （切换器四档可点）

## 2026-06-22（Claude·方案1 重做 + 方案3）
- 对比器五档：现状 / 轻量 / 方案1 / 方案2 / 方案3。
  - **方案1（b）改正**：未读数字回到**最右**（同现状/轻量），兴趣 ✦ pill 移到右侧、贴在未读数**左边**（`.right-cluster`）；消息行不再显示 tag。即"未读+tag 结合在右侧一簇"。
  - **方案3（d）新增**：`♥ Gaming` 灰色、字体同正文（复用 `.tag-c`），未读数仍在右侧。比方案2 暖一点（爱心替代中括号）。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-22（Claude·方案1 合并 pill + 随机 tag + 方案3 中括号）
- **方案1（b）**：兴趣 pill 与未读数合并为单个 `.tag-merge` pill，`1` 包进去（`.tm-n` 紫底白字小圆，贴 pill 右端=最右），Gaming 文字色调浅（#a294e4，比轻量 #7b69ea 浅）。
- **随机感**：blue / virginiatui1 加 firstHi 但无 sharedInterests → 只显示未读数、无标签。现列表里"带标签的未读"和"纯未读"交错，更真实（对所有方案生效）。
- **方案3（d）**：改成 `[♥ Gaming]`（方案2 中括号 + 桃心），灰色同正文。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-22（Claude·方案1 改回分开）
- 方案1（b）：撤销"合并 pill"，兴趣 pill 与未读数**重新分开**——`.tag-soft` 浅紫 pill 在左、独立 `.conv-badge` 圆徽标在最右（gap 7px），避免数字被误读成"兴趣相关计数"。文字色保留浅一档（#a294e4）。删除 .tag-merge/.tm-n。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-22（Claude·方案2 淡紫+已读转灰不消失）
- **方案2（c）专属逻辑**：标签打开后**不再消失**，改为转灰保留（showTag 对 c 不再 gate `!opened`）。
  - 未读态 `[Gaming]` = 淡紫 `.tag-pl`(#9384e0，品牌色、同正文字体)；点开已读 → `.tag-c` 灰；未读数字照常清。
  - 这正回应老板最早"退出后 tag 消失会困惑"的顾虑（方案2 用"变灰不消失"解法）。
- 其余方案仍是打开即隐藏标签。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-22（Claude·删方案3 + 方案2 加深 + 修返回丢方案 bug）
- **删方案3（d）**：SCHEMES 去掉 d，MsgLine 去掉 d 分支。对比器回到 4 档：现状/轻量/方案1/方案2。
- **方案2 未读色加深**：`.tag-pl` 从 #9384e0 → `var(--purple)`(#6858E5)，与右侧未读圆圈同色。
- **修 bug：进私聊再返回会掉回"轻量"**。根因：scheme 是 MessageList 的局部 state，跳到 chat 后组件卸载、返回时按 URL 默认重置成 a。修法：把 scheme 提升到 App 级（`useState`，随 nav 存活），通过 props 传给 MessageList（showcase 不传则回退本地态）。现在进私聊/切底栏再回来都保持当前方案。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-22（Claude·右侧 tag 样式家族 / Lucas 方向）
- Lucas 喜欢"tag 出现在右侧"的方向，围绕它做了 5 种右侧风格（都保留独立未读圈在最右）：
  - 方案1（b）柔紫胶囊 / 渐变（e）品牌渐变白字 / 描边（f）透明+紫描边 / 流光（g）渐变+移动高光(炫酷,shimmer 动画) / 圆点（h）无底色·彩点+纯文字(极简)。
- 实现：`RIGHT_TAG_CLASS` 映射 scheme→样式 class，`tagRight = !!RIGHT_TAG_CLASS[scheme] && showTag`；右簇按 scheme 套不同 class，圆点用 `.cdot` 替代 ✦。
- 切换器扩到 8 档（flex:1 仍排得下）：现状/轻量/方案1/方案2/渐变/描边/流光/圆点。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·收敛右侧家族）
- 删掉渐变/流光/圆点（太抢戏）。右侧 tag 家族只留：方案1（b 柔紫胶囊）+ 描边（f）。RIGHT_TAG_CLASS={b,f}，删对应 CSS（tag-grad/tag-shimmer/shimmer keyframe/tag-dot/cdot）。
- 描边调淡：文字 #b3a7ec、边框 rgba(104,88,229,.28)，比方案1 更轻。
- 切换器 5 档：现状/轻量/方案1/方案2/描边。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·方案1 衍生：灰胶囊 + 无星标）
- 右侧家族新增 2 款（基于方案1、走"不抢戏"）：
  - 灰胶囊（i, .tag-gray 灰底#f0f0f3/灰字#9a9aa6）：兴趣退成灰，全行只有未读圈是紫，层级最干净。
  - 无星标（j, 复用 .tag-soft）：方案1 减 ✦，纯文字柔紫胶囊（JSX 对 j 不渲染 Sparkle）。
- 切换器 7 档：现状/轻量/方案1/方案2/描边/灰胶囊/无星标。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·删方案2/无星标 + 加 Your Turn）
- 删：方案2（c 中括号，含 MsgLine 分支）、无星标（j）。RIGHT_TAG_CLASS={b,f,i}。showTag 简化回 !isOpened，并排除 y。
- 加：**等你回复（y）= Your Turn**。对方发来、你还没回（c.firstHi）→ 右侧显示 `Your Turn` 浅紫 pill（.yt-badge）。读≠回，故不随点开消失。是"换一种信号"：从兴趣信息 → 社交义务/催回复。
- 切换器 6 档：现状/轻量/方案1/描边/灰胶囊/等你回复。
- 注：.tag-c/.tag-pl 已成 dead CSS（方案2/3 删后无引用），暂留未清。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·Your Turn 三 UI + 精准子集）
- Your Turn 拆成三档 UI（YT_SCHEMES）：等A=pill(.yt-badge) / 等B=icon(↩ .yt-icon) / 等D=ambient(整行 .conv.yt-row 淡底+左色条)。
- **精准子集**：不再对所有 firstHi 显示，改由 data 标记 `yourTurn:true` 控制（仅 aponmooo、RAYA 两个高潜会话）。其余未读会话照常显示未读数 → 实现"状态分工"：没看过=数字 / 看过没回(高潜)=Your Turn。
- ytMode=(c.yourTurn && YT_SCHEMES[scheme])；showTag 排除所有 YT 档。
- 切换器 8 档：现状/轻量/方案1/描边/灰胶囊/等A/等B/等D。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·收敛 + Your Turn 概念修正）
- 删：等D（氛围 yd + .conv.yt-row）、灰胶囊（i + .tag-gray）。
- **概念修正**：Your Turn ≠ 同频信号人群。同频信号=hi 开场新用户（plain hi / hi+共同兴趣，见方案1）；Your Turn=进行中、轮到你回的会话。故把 yourTurn 标记从 hi 开场(aponmooo/RAYA) 移到进行中会话(hhhhll unread:2 / calista unread:1)。两拨人不重叠，不做叠加。
- **等B 融合**：↩ 图标 + 未读数同一胶囊（.yt-icon + .yt-n）。等A 仍纯文字 pill。
- 切换器 6 档：现状/轻量/方案1/描边/等A/等B。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·Your Turn 重定位为"今天热聊·刚停下" + 等A 混排）
- Your Turn 概念再校准（同事观点）：目标=**今天高强度、刚停下、球在你这**的会话（≠深度关系，深度关系本就愿回）；解决"对话被意外聊死/打断致死"，在 App 再打开时把注意力拽回还热的未完成对话。
- demo 英文化 + 重定位：yourTurn 标在 hhhhll（"wait you actually did that?? 😂" 2m unread:2）、calista（"haha omg then what happened 😭" 18m unread:1）= 像热聊刚停。
- **等A(y) 改成混排**：同一列表里同时显示 方案1 同频信号(hi 开场+共同兴趣，借 .tag-soft) 和 Your Turn(进行中刚停)，两类不同会话；showTag 放开 'y'，rightTagClass=tag-soft。等B 仍只 Your Turn。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·Your Turn 与同频信号做区分 + 等B 重做）
- 问题：等A 混排时 Your Turn 与同频信号都是右列紫 pill → "一片紫色"难分。
- 解法：**把 Your Turn 挪进消息行**，与右列同频信号在位置上拉开：
  - 等A前（y, prefix）：消息「前缀」实心紫 pill `Your turn`（有存在感、在阅读路径）+ 右侧普通未读圈。
  - 等A后（ya, suffix）：消息文字后紧跟 ↩ 图标 + 右侧普通未读圈（偏克制）。
  - 两者都保留右列 ✦ 同频信号（hi 开场+兴趣），实现位置区分。
- 等B（yi, badge）重做：正常未读圈（同色同大小 conv-badge）+ 右侧 ↩ 回复图标（.yt-badge2/.yt-rep），不再是浅紫融合胶囊。
- 切换器 7 档：现状/轻量/方案1/描边/等A前/等A后/等B。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·等A后融合 + 等A前间距）
- 等A后（ya, suffix）：↩ 图标与未读数融合成 `.yt-suf-n` 浅紫 chip（↩+数字）跟在消息后；右列不再单独显示未读数（ytMode==='suffix' → null）。MsgLine 收 unread 参数。
- 等A前（y, prefix）：`.yt-pre` 加 margin-right:7px（flex 会吃掉字面空格，必须用 margin），Your turn 与消息留出距离。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·回复/已读逻辑 + 等A后实心对齐 + 气泡图标）
- **回复/已读逻辑（永久，已记忆）**：未读数=已读(点开)即清；Your Turn=只有"回复"才清（读≠回，点开后仍在）。
  - 实现：unread=isOpened?null:(c.unread||firstHi?1)；ytMode=c.yourTurn&&!isReplied&&YT_SCHEMES[scheme]。
  - replied 存 localStorage `popup_replied_chats`；Chat.jsx send→markReplied(peer)（含以后 inline 回复也算）。reset(↺) 同时清 opened+replied。
- **等A后(ya)** 重做：从消息行浅紫 chip → 右列 **实心紫 pill `.yt-fuse`**（气泡+未读数融合，height 18 同 conv-badge、var(--purple) 同色，与其他未读右对齐）。
- **图标**：↩(像撤回) → 对话气泡（更直观），用于 等A后 + 等B。
- 切换器 7 档：现状/轻量/方案1/描边/等A前/等A后/等B。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·Your Turn 图标调研→改文字/左箭头）
- 调研：Hinge 用"Your turn"文字徽标(+单独分区)，Bumble 用"Your Move"文字+沙漏；无通用"该你回"图标(↩像撤回、气泡太泛)。结论：业界用文字。
- 等A后（ya）：右列实心紫 **"Your turn" 文字 pill**(.yt-fuse，去图标去数字，Hinge 风)，同未读圈紫/同高/右对齐。
- 等B（yi）：未读圈 + **横向左箭头**(用户提议)替代气泡。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·删描边 + 等B 融合左箭头 + 新增等C）
- 删 描边(f)（含 .tag-ghost）。RIGHT_TAG_CLASS={b}。
- 等B（yi）：改成「← + 未读数」融合实心 pill（箭头在数字左、白色同色、复用 .yt-fuse，右对齐）。
- 新增 等C（yc, prefixArrow）：等A前 错开布局，把「Your turn」文字换成「← 箭头」实心 chip 前缀（.yt-pre-arr）；也混入同频信号。
- YT_SCHEMES={y:prefix, ya:fused, yi:badge, yc:prefixArrow}；ytMix 加 yc。
- 切换器 7 档：现状/轻量/方案1/等A前/等A后/等B/等C。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-23（Claude·等C 箭头配色调淡）
- .yt-pre-arr 从实心紫(var(--purple)/白) → 同同频信号配色：浅紫底 #f2eefc + 淡紫箭头 #a294e4（同 .tag-soft）。等C 不再抢眼、与兴趣标签协调。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-06-29（Claude·收敛定稿：同频信号定 UI + Your Turn 二选一）
- 删：轻量(a)、等A后(ya/fused)、等B(yi/badge) 及 .yt-fuse。
- 方案1 → 重命名 **同频信号**（key 仍 'b'，.tag-soft 右侧柔紫胶囊）= 已定 UI。
- Your Turn 收敛到两个「错开放消息左侧」的变体（不与同频信号在右列堆叠）：
  - **等回复·字**（y, prefix）= "Your turn" 文字前缀；
  - **等回复·←**（yc, prefixArrow）= 淡紫 ← 箭头前缀（配色同 .tag-soft）。
  - 两者列表里都同时显示同频信号(右) + Your Turn(左)。
- 切换器 4 档：现状 / 同频信号 / 等回复·字 / 等回复·←。
- 已部署：https://popup-replica.pages.dev/?s=message

## 2026-08-24（Codex·Plaza 视觉节奏优化，本地预览）
- 保留现有信息架构、底部导航、Follow→Chat 状态与 inset/edge 双布局，仅重构视觉表现。
- 广场页改为系统字体与更克制的 Threads 式层级；统一顶部页签、分类 pill、发帖入口、帖子作者区、媒体圆角、互动栏与评论预览的字号、间距、颜色和对齐。
- Follow 图标保持原形态；评论图标调整为更清晰的标准对话气泡。
- 新增帖子语境入口：普通帖显示首个 Tag 聚合入口（示例 `#modalnekat 1415 Posts`），匿名帖优先显示匿名广场入口；入口可交互并按 Tag 筛选。
- 修正匿名广场在新版卡片样式下的白底/白字冲突，保留星空主题和匿名入口。
- 响应式 QA：360×800、375×812、393×852、402×874、430×932 均无横向溢出。
- `npm run build` 通过；本轮未提交、未发布。
- 按后续确认移除 Plaza 的“不贴边/贴边”切换器，页面固定使用不贴边布局；旧 `layout=edge` 参数也不再触发贴边效果。
- 新增 Plaza 桌面评审尺寸切换器：Android 小屏 360×800、iPhone 小屏 375×812、iPhone 标准 393×852、iPhone Pro 402×874、大屏/Max 430×932；选择会写入 `device` 查询参数并真实修改画布尺寸。
- 媒体改为响应式密度规则：横图 `min(28vh, 235)`、方图 `clamp(276, 76vw, 312)`、竖图 `min(48vh, 415)`、多图 `clamp(216, 27vh, 235)`；单图右侧至少保留 16px，并让评论预览与评论引导互斥。
- 修正评审控件被浏览器断点及垂直裁切的问题：画布右下角在所有窗口宽度下始终显示“尺寸 402×874”固定入口，菜单相对浏览器视口定位；已在用户当前 812×677 标签中确认按钮与五档菜单完整可见。
- 新增 4:5 单图实物演示：Explore 首帖使用同一张真实照片和固定 4:5 比例，顶部可切换“当前贴边 / 修正留白”；393×852 下实测由 315×394（右侧16）变为 270×338（右侧61），帖子缩短约56。
- 实物演示增加 3:4 比例开关，并与留白策略独立切换；393×852 下现行规则约 307×409（距屏幕右侧24），修正规则约 270×360（距屏幕右侧61），帖子缩短约49；构建通过，未提交、未发布。
- 根据评审反馈取消 4:5/3:4 比例切换：Explore 首屏改为连续两条独立真实帖子，同图分别按 4:5 与 3:4 渲染；仅保留“当前贴边 / 修正留白”作为共同变量。393×852 当前规则实测分别为 315×394 与 307×409。
- 修正比例对比不明显：两条演示帖改为等高渲染，宽度严格随原始比例变化；393×852 标准高度下，4:5 为 300×375、3:4 为 281×375，右边界相差19px。切换器相应改为“标准高度 / 紧凑高度”。
- 单图比例演示扩展为连续7条真实帖子：16:9、4:3、1:1、4:5、3:4、2:3、9:16。统一放入300×375最大约束框；393×852标准尺寸实测依次为300×169、300×225、300×300、300×375、281×375、250×375、211×375，另可切换紧凑尺寸。
- 纠正横竖图不应共用同一约束框：16:9、4:3 横图改为铺满帖子内容栏，393×852 实测均宽315、距屏幕右侧16（内容栏右侧0）；方图保持克制，竖图继续按统一高度随比例收窄。
- 帖子作者信息改为“名字 + 时间”同一行同一基线，信息流与帖子详情页同步；长用户名省略、时间不换行，避免挤压 Follow→Chat 与更多按钮。构建通过，未提交、未发布。
- 作者栏进一步紧凑化：头像与作者栏均降至36px，名字后增加弱化“· 时间”，正文上间距降至5px；Follow/Chat视觉缩至32px但与更多按钮均保留44×44点击区，并通过绝对定位避免撑高作者栏。393×852实测无按钮重叠，构建通过。
- 头像 Follow 状态按 Threads 形态收敛：外圈视觉直径保持16px，内部“+ / ✓”由9px放大至11px，颜色与正文一致；已构建通过，未提交、未发布。
