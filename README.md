# 东南亚时区转换工具 (SEA Time Convert)

一个简洁易用的东南亚及东亚地区时区转换工具，帮助你快速查看不同时区的对应时间。

## 🌐 在线演示

访问 [https://time-convert-80j.pages.dev/](https://time-convert-80j.pages.dev/) 立即体验！

## ✨ 功能特性

- 🕐 **灵活的时间输入**：支持选择日期、时区和多种时间格式（24小时制、AM/PM、日语时间表达等）
- 🌏 **覆盖东南亚主要时区**：
  - 韩国、日本、印尼东部 (UTC+9)
  - 中国、新加坡、马来西亚、菲律宾等 (UTC+8)
  - 泰国、越南、柬埔寨等 (UTC+7)
  - 缅甸 (UTC+6:30)
  - 孟加拉国、不丹 (UTC+6)
  - 尼泊尔 (UTC+5:45)
  - 印度、斯里兰卡 (UTC+5:30)
  - UTC标准时
- 💡 **智能提示**：自动提醒非工作时间，避免打扰
- 📱 **响应式设计**：支持桌面端和移动端访问
- 🎨 **现代化界面**：基于 Naive UI 组件库，界面简洁美观

## 🛠️ 技术栈

- **框架**: [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- **语言**: [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- **构建工具**: [Vite](https://vitejs.dev/) - 下一代前端构建工具
- **UI 组件库**: [Naive UI](https://www.naiveui.com/) - Vue 3 组件库
- **时间处理**: [Day.js](https://day.js.org/) - 轻量级时间处理库
- **自动导入**: unplugin-auto-import & unplugin-vue-components

## 📦 安装

```bash
# 克隆项目
git clone https://github.com/sun128764/time-convert.git

# 进入项目目录
cd time-convert

# 安装依赖（推荐使用 pnpm）
npm install
# 或
pnpm install
# 或
yarn install
```

## 🚀 开发

```bash
# 启动开发服务器
npm run dev
```

开发服务器启动后，访问 `http://localhost:5173` 即可预览。

## 🏗️ 构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

构建完成后，产物将输出到 `dist` 目录。

## 📝 使用说明

1. **选择日期**：点击日期选择器选择目标日期
2. **选择时区**：从下拉菜单中选择输入时间所在的时区（日本时间或中国时间）
3. **选择时段**：可选择 AM/PM、日语时间表达（午前/午後/朝/よる/深夜）或不选择
4. **输入时间**：输入小时（0-29）和分钟（0-59）
5. **查看结果**：下方表格将自动显示各个时区的对应时间

## 🌟 特别说明

- 小时数支持 0-29，便于跨日期的时间计算
- 选择"深夜"等时段时，系统会自动处理日期进位
- "非工作时间"提示可以手动关闭

## 📄 开源协议

本项目采用 MIT 协议开源，详见 [LICENSE](LICENSE) 文件。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题或建议，请通过 GitHub Issues 联系。

---

使用 ❤️ 和 Vue 3 构建
