# 屏规格 · 举报 ReportScreen

> 来源 `src/popup/screens/ReportScreen.jsx`。视觉优先 web-capture `?s=report&p=hhhhll`。

## 1. 身份与导航
- 入口：Details 页「Report」行 → 本屏，带 `peer`。
- 出口：返回 ‹ → `details(peer)`；选了类型后点 `Continue` → `details(peer)`。
- StatusBar：默认（浅色）。

## 2. 结构
- 顶栏：返回 ‹ + 居中 `Report`。
- `Report Type *`，9 个单选项（右侧 ✓ 圈，单选）：
  `Vulgar or Porn` / `Insult` / `Advertising` / `Discrimination` / `Sensitive Political Issues` / `Fraud` / `Illegal Gambling` / `Violation of Guideline` / `Other`。
- `The attachment (0/4)` + 提示 `Reports with pictures will be dealt with first` + `+` 上传框。
- `Description` + textarea（placeholder `Please provide details to help us with your case`）。
- 底部 `Continue` 按钮。

## 3. 交互与状态
- `sel`（选中的类型，单选）；选中行 ✓ 高亮。
- `desc`（描述文本）。
- **`Continue` 只有选了类型才高亮可点**（未选灰置）。

## 4. 验收点
- [ ] 9 类单选互斥，选中显 ✓。
- [ ] 未选类型时 Continue 不可点；选后高亮。
