# Pop Up · 设计系统（喂给 Claude Design 的第一份料）

> 用法：在 Claude Design 的 **Design systems** 里先建一个 "Pop Up"，把本表的 token + 核心组件灌进去。之后每个屏（Prototype）都引用这套系统，16 屏才一致。
> 数值全部来自线上真实代码 `src/popup/popup.css`，不是手搓估的。

## 画布
- 逻辑尺寸 **402 × 874 pt**（iPhone 16 Pro 逻辑分辨率），无设备外框，纯屏幕。
- 屏根容器 `.screen`：绝对定位铺满、纵向 flex 列。
- 顶部状态栏 54px 高；底部浮动导航栏（见组件）。

## 颜色 token
| 名 | 值 | 用途 |
|---|---|---|
| 品牌紫 `--purple` | `#6858E5` | 主色：关系图标、链接、强调 |
| 品牌紫渐变 `--purple-grad` | `135deg #9D7DF5 → #5F5BE6` | + 按钮、胶囊箭头、按钮底 |
| 墨黑 `--ink` | `#1d1d28` | 主文字、名字 |
| 次要灰 `--sub` | `#9a9aa6` | 预览文字、副信息 |
| 时间灰 `--time` | `#cfcfd6` | 聊天里时间分隔 |
| 星卡底 `--starbox` | `#f4f5fa` | Star Light 区块底 |
| Banner 底 `--banner-bg` | `#eeecfb` | 破冰 banner 浅紫底 |
| 分割线 `--line` | `#f0f0f3` | 列表分隔 |
| 通知红 | `#ff3b4e` / `#ff5b68` | 未读标、删除按钮 |
| 兴趣胶囊紫 | `#6e54e6` 字 / `#ece8fb` 底 | 同频信号「✦ 兴趣」标签（轻量方案锁定版） |

### 兴趣分类色板 CATS（同频信号按兴趣分色）
| key | label | icon | color | bg |
|---|---|---|---|---|
| kpop | K-pop | 🎵 | `#a855f7` | `#f6ecff` |
| game | Gaming | 🎮 | `#6366f1` | `#ecedfe` |
| anime | Anime | 🌸 | `#ec4899` | `#fdebf4` |
| photo | Photography | 📷 | `#14b8a6` | `#e3f8f4` |
| music | R&B | 🎧 | `#f59e0b` | `#fdf2dd` |
| book | Webtoon | 📖 | `#ef4444` | `#fdeaea` |

> 注：**轻量方案最终版**统一为「✦ 紫星标 + 兴趣词」单一品牌紫（不按 CATS 分色），CATS 仅保留作内部色彩库。

## 字体
- 正文/UI：系统栈 `-apple-system, "SF Pro Display/Text", "PingFang SC"`。
- 名字 `.conv-name`：800 字重；`calista` 这类 italic 会话用 **Georgia serif 斜体**（特殊态）。
- 品牌字（"Pop Up" logo / 大标题）：**Montserrat**（视觉永久规范）。Claude Design 里标题字族选 Montserrat。

## 核心组件（建系统时一并做成组件）
1. **StatusBar**（54px）：左 time（可带 focus 月亮图标），右 信号/Wi-Fi/电量。参数 `time / timeIcon / battery`。可 `dark` 反白。
2. **BottomNav**（浮动圆角栏）：`left/right:26px; bottom:26px; height:60px; radius:32px`，白底 + 柔阴影。中间 **+ 按钮**＝54px 圆、紫渐变 `180deg #8E7CF3→#6A4FEC→#6246EA`、外发光。图标态 active=墨黑、默认 `#c2c2cc`。可带红色 `nav-badge` 未读标。
3. **会话行 ConvRow**：左 52px 圆头像 → 中（名字行 + 预览灰字）→ 右（时间 + 未读红标/Your Turn）。**左滑露出 80px 红色「删除」**（`transition: transform .18s`）。
4. **聊天气泡**（全部右对齐 `out` + 我的头像）：
   - `text`：浅底圆角文字气泡
   - `exchange`：问题 + `🔒 Exchange answer` 按钮
   - `post`：动态卡（🪐轮次 + 图 + 头像名 + #tag）
   - `sticker`：贴纸图
   - `time`：居中时间分隔（time 灰）
5. **底部面板 sheet-img**：从底部升起的整图面板（礼物/表情/贴纸），点背板关闭，点面板本体不关。
6. **居中弹层 overlay**：Q&A 卡、语音通话确认框（半透明背板 + 居中白卡 + 主/次按钮）。
7. **兴趣标签 InterestTag**：消息行顶头的 `✦ + 兴趣词` 浅紫胶囊（同频信号轻量方案）。

## 全局交互语法（所有屏通用，建议写进系统说明）
- 点背板 / 滚动区空白 → 收起任何已开的底部面板或 overlay。
- 返回箭头 → 回上一屏（本原型用显式 `nav('屏名', 参数)`，不是浏览器后退）。
- 头像/名字通常可点 → 进对方主页或对应详情。
- 列表左滑 → 露删除；动效 `.18s`。
