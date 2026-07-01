# 在 Claude Design 里复刻 Pop Up · 投喂指南

> 目标：在 Claude Design（Beta，claude.ai/design）里做出一个**功能级可交互原型**，跟 `popup-replica.pages.dev` 一模一样。
> 本文件是「怎么喂」，`00-design-system.md` 是设计系统，其余 `*.md` 是逐屏交互规格，`screenshot-index.md` 是截图对照表。

---

## 0. 三个输入通道（Claude Design 实际支持，2026-06 联网核实）

| 通道 | 怎么用 | 对应我们的资产 | 保真度 |
|---|---|---|---|
| **`/design-sync`** | 把本地代码仓库/GitHub repo 的设计系统导入 Claude Design | `~/popup-replica`（真实组件 + token） | 系统级最高 |
| **Web capture** | 从线上网站抓取真实元素/截图 | **`https://popup-replica.pages.dev/`**（活站、像素级准） | 视觉最高 |
| **上传图片/文档** | 拖图片或 MD/DOCX 进对话框 | 坚果云 65 张截图 + 本文件夹的逐屏规格 | 兜底 |

> Claude Design 由 **Opus 4.7** 驱动（首页模型选择器可改）。复刻这种交互密度，**模型尽量选最强的**（Opus），别用默认 Sonnet。

---

## 1. 推荐流水线（按这个顺序做，最省力且一致）

**第 0 步 · 灌设计系统（只做一次）**
- 在 Claude Design 里 `/design-sync`，指向 `~/popup-replica`（或先 push 到 GitHub 再指向 repo）。让它读出真实颜色/字体/组件。
- 或者把 `00-design-system.md` 当文档上传，让它据此建一个 "Pop Up" 设计系统。
- 之后每个屏都基于这套系统，16 屏才不会串味。

**第 1 步 · 新建 Prototype 项目 "Pop Up"**
- 模板选 **Prototype**，Design system 选上一步的 "Pop Up"。
- 在项目说明里粘贴本文件「§3 全局规则」+「§4 导航图」，让它先有全局认知。

**第 2 步 · 逐屏建（关键：别一次丢 16 屏）**
每屏一轮，给它三样：
1. 该屏的真实视觉 —— **优先 web-capture `popup-replica.pages.dev/?s=<屏id>`**；抓不动就上传 `screenshot-index.md` 里对应的坚果云截图。
2. 该屏的交互规格 —— 把对应 `<屏>.md` 文件内容贴进去。
3. 一句话指令：「按 Pop Up 设计系统把这屏做成可交互，交互照规格，视觉照截图」。

**第 3 步 · 连线**
- 按 §4 导航图，在 Prototype 里把屏与屏的跳转接起来（返回、Tab 切换、点头像进主页等）。

**第 4 步 · 验收**
- 每屏对照线上站逐处比；用各屏规格末尾的「验收点」清单过一遍。

> 调试直达任意屏：线上站支持 `?s=<屏id>&p=<peer>`，例如 `?s=universe&p=hhhhll`、`?s=match`、`?s=vibe`。web-capture 时直接用这些 URL。

---

## 2. 建屏顺序（先骨架后细节）

1. **设计系统**（§1 第 0 步）
2. **5 个底部导航主屏**（App 的骨架）：`message` 对话列表 · `match` 匹配主页 · `plaza` 广场 · `me` 我的主页 · `post` 发帖（占位）
3. **私聊链路**：`chat` → `details` → `report`；`chat` → `other` 对方主页；`chat` → `universe` 星际之旅
4. **我的链路**：`me` → `vibe` Vibe Test · `profile-edit` 资料编辑 · `settings` → `social-tools` → `chat-question`
5. **其余**：`rooms` 房间大厅 · `starlight` Star Light 页

---

## 3. 全局规则（粘进项目说明，所有屏通用）

- **画布 402 × 874 pt**（iPhone 16 Pro 逻辑分辨率），无设备外框，纯屏幕；部分深色屏顶部带动态岛。
- 文案以**印尼语/英语**为主，**严格照截图所见**，不要翻译或自创。头像、昵称是测试号，照搬即可。
- 导航是**显式状态切换**（非浏览器后退）：每屏规格写明「入口/出口」。
- 通用交互：点背板/滚动区空白 → 收起任何面板或弹层；列表左滑 → 露删除（.18s）；头像/名字多数可点进主页。
- 配色/字体/组件**一律引用 Pop Up 设计系统**，不要现编色值。

---

## 4. 导航图（屏 → 屏，括号内为带的参数）

```
[底部导航] match · plaza · post · message · me   （5 个 Tab 常驻）

message ──点会话→ chat(peer)
        ──点头像→ other(peer)
        ──右上工具→ social-tools
        ──banner→ chat-question
        ──Star Light More→ starlight
        ──Star Light 头像→ chat(peer)

chat ──返回→ message
     ──头像/名→ other(peer)
     ──土星→ universe(peer)
     ──⋯→ details(peer)
     （内部面板：gift/emoji/sticker/qa/call）

details ──返回→ chat(peer)   ──Report→ report(peer)
report  ──返回/Continue→ details(peer)
other   ──返回/Chat Now→ chat(peer)
universe──返回→ chat(peer)

match ──Vibe/Voice 卡→ match（自身）   ──Party 卡/Parties 标签→ rooms
rooms ──返回→ match

me ──Aurora Zone→ vibe   ──齿轮→ settings   ──头像→ profile-edit   ──En Route→ universe
profile-edit ──返回→ me   ──Vibe Test 行→ vibe
vibe ──返回→ me
settings ──返回→ me   ──Profile 行→ profile-edit   ──General Settings→ social-tools
social-tools ──返回→ 来源(settings/message)   ──Chat question→ chat-question
chat-question ──返回→ 来源(social-tools/message)
starlight ──返回→ message   ──点行→ chat(hhhhll)
```

---

## 5. 跨屏状态（容易漏，务必实现）

- **Your Turn 清除**：在 `chat` 发出消息 → 该会话在 `message` 列表的「Your Turn」标记消失。读≠回，只有真回复才消失。（见 `chat.md` / `message.md`）
- **同频信号「点开即消失」**：`message` 列表里 hi 型开场 + 共同兴趣的会话显示「✦ 兴趣」标签；点进该私聊再返回 → 标签消失。
- **对话删除**：`message` 左滑红「Delete」→ 二次确认弹窗 → 移除该行。
