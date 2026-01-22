# Claude Code & Open Code 教程网站

这是一个介绍 Claude Code 和 Open Code 工具及 Skills 系统使用的教程网站。

## 功能特性

- 📚 **教程中心** - 从入门到进阶的完整教程体系
- 📖 **API 文档** - 详细的命令参考和配置说明
- 💡 **交互示例** - 实际案例和代码演示
- 🎨 **明暗主题** - 支持明暗双模式切换
- 📱 **响应式设计** - 适配各种设备屏幕

## 技术栈

- **Next.js 14+** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **shadcn/ui** - UI 组件库
- **next-themes** - 主题切换
- **Lucide React** - 图标库

## 项目结构

```
claude-open-code-docs/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # 根布局（主题切换、导航栏）
│   ├── page.tsx              # 首页
│   ├── claude-code/          # Claude Code 专题页
│   ├── open-code/            # Open Code 专题页
│   ├── tutorials/            # 教程列表和详情
│   ├── api/                  # API 文档
│   └── examples/            # 交互示例
├── components/               # React 组件
│   ├── ui/                   # shadcn/ui 组件
│   ├── layout/               # 布局组件
│   └── theme-provider.tsx    # 主题提供者
├── data/                     # 静态数据
│   ├── tutorials.ts          # 教程数据
│   └── examples.ts           # 示例数据
├── lib/                      # 工具函数
└── public/                   # 静态资源
```

## 开始使用

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 导出静态网站

```bash
npm run build
```

静态文件将生成在 `out/` 目录中，可以部署到任何静态网站托管服务。

## 部署到 Cloudflare Pages

1. 将代码推送到 GitHub 仓库
2. 在 Cloudflare Pages 中连接仓库
3. 配置构建设置：
   - 构建命令：`npm run build`
   - 输出目录：`out`
4. 点击部署

## 添加新教程

在 `data/tutorials.ts` 中添加新的教程信息：

```typescript
{
  slug: "your-tutorial-slug",
  title: "教程标题",
  description: "教程描述",
  tool: "Claude Code | Open Code | Both",
  category: "beginner | advanced | practical",
  duration: "阅读时间",
  readTime: 阅读分钟数,
  date: "发布日期"
}
```

然后在 `app/tutorials/[slug]/tutorial-content.tsx` 中添加教程内容。

## 添加新示例

在 `data/examples.ts` 中添加新的示例信息，并在 `app/examples/[id]/example-content.tsx` 中添加示例内容。

## 自定义主题

在 `app/globals.css` 中修改颜色变量来自定义主题：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --secondary: 0 0% 14.9%;
  /* ... */
}
```

## License

MIT
