# AGENTS.md — Pop Up 复刻 · Codex 与 Claude Code 的共享上下文

> 本文件是两个 AI 工具的**共享记忆入口**。每次开工先读这里。Claude 读 CLAUDE.md（已软链到本文件）。

## 开工必读（按顺序）
1. `HANDOFF.md` — 完整项目上下文（产品逻辑/代码结构/配色/素材/抠图法/待办）。
2. `PROGRESS.md` — 进展日志，**每有进展在此追加一条**（仓库内可写）。

## 读写边界（重要）
- **写**：只写本仓库 `~/popup-replica/`（代码 + PROGRESS.md + HANDOFF.md）。你有写权限。
- **读**：坚果云 `~/Library/CloudStorage/坚果云-c770629380@163.com/我的坚果云/PopUpReplica/`（截图/视频/知识文档）= **只读**，别写（沙箱会拒）。坚果云镜像由用户/Claude 维护。
- 别用 `~/Documents/` 中转（被 macOS TCC 锁，互相读不到）。

## 跨电脑 / 跨工具 同步
- 本仓库用 **git** 同步到两台 Mac（个人机 + 工作机）。**开工先 `git pull`，收工 `git add -A && git commit && git push`**。
- 这样 Claude 与 Codex、个人机与工作机，都看同一份代码与文档。

## 工作约定
- dev 预览用 `http://127.0.0.1:5173/`（别用 localhost，会因 IPv6 拒连）。
- 改任意屏后**必用无头 Chrome 截图对照原图**（命令见 HANDOFF.md §7），别凭感觉。
- 用户语言简体中文。复杂视觉**从截图抠图**，别手搓 SVG。

## 当前永久事实（2026-06-17）
- 永久公开站已上线：`https://popup-replica.pages.dev/`。
- 线上站不是本地 `127.0.0.1`；其他电脑要看公网链接。
- 改完代码后重新部署：
  ```bash
  cd ~/popup-replica && npm run build && npx wrangler@latest pages deploy dist --project-name=popup-replica --branch=main --commit-dirty=true
  ```
- 进展只追加到仓库 `PROGRESS.md`，不要写坚果云，不要用 `~/Documents` 中转。
