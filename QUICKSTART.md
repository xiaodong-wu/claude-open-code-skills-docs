# 快速开始

## 安装

### 克隆仓库
```bash
git clone https://github.com/yourusername/claude-open-code-docs.git
cd claude-open-code-docs
```

### 安装依赖
```bash
npm install
```

## 开发

### 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000 查看网站。

### 常用命令
- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行代码检查

## 添加内容

### 添加新教程

1. 在 `data/tutorials.ts` 中添加教程信息：
   ```typescript
   {
     slug: "your-tutorial-slug",
     title: "教程标题",
     description: "教程描述",
     tool: "Claude Code", // 或 "Open Code", "Both"
     category: "beginner", // 或 "advanced", "practical"
     duration: "10 分钟",
     readTime: 8,
     date: "2026-01-22"
   }
   ```

2. 在 `app/tutorials/[slug]/tutorial-content.tsx` 中添加内容（如果需要特定内容）

### 添加新示例

1. 在 `data/examples.ts` 中添加示例信息：
   ```typescript
   {
     id: "your-example-id",
     title: "示例标题",
     description: "示例描述",
     tool: "Both",
     difficulty: "中级",
     duration: "15 分钟",
     tags: ["tag1", "tag2"]
   }
   ```

2. 在 `app/examples/[id]/example-content.tsx` 中添加内容（如果需要特定内容）

### 添加新 API 文档

在 `app/api/page.tsx` 中的 `apiSections` 数组添加新的 API 部分。

## 自定义样式

### 修改主题颜色

编辑 `app/globals.css` 中的 CSS 变量：

```css
:root {
  --background: 0 0% 100%;      /* 背景色 */
  --foreground: 0 0% 3.9%;       /* 前景色 */
  --primary: 0 0% 9%;            /* 主色调 */
  --secondary: 0 0% 96.1%;       /* 次要色调 */
  --accent: 0 0% 96.1%;          /* 强调色 */
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

### 自定义字体

在 `app/layout.tsx` 中修改字体配置：

```typescript
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

## 项目结构说明

```
claude-open-code-docs/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页
│   ├── globals.css         # 全局样式
│   ├── claude-code/        # Claude Code 页面
│   ├── open-code/          # Open Code 页面
│   ├── tutorials/          # 教程页面
│   │   ├── page.tsx        # 教程列表
│   │   └── [slug]/        # 教程详情
│   ├── api/                # API 文档页面
│   └── examples/           # 示例页面
│       ├── page.tsx        # 示例列表
│       └── [id]/          # 示例详情
├── components/            # React 组件
│   ├── ui/               # shadcn/ui 组件
│   ├── layout/           # 布局组件
│   ├── theme-provider.tsx # 主题提供者
│   └── theme-toggle.tsx  # 主题切换按钮
├── data/                # 静态数据
│   ├── tutorials.ts     # 教程数据
│   └── examples.ts      # 示例数据
├── lib/                 # 工具函数
│   └── utils.ts        # 工具函数
├── public/             # 静态资源
├── next.config.ts      # Next.js 配置
├── tailwind.config.ts  # Tailwind 配置
└── package.json        # 项目依赖
```

## 测试

### 检查构建
```bash
npm run build
```

### 运行生产服务器
```bash
npm start
```

### 代码检查
```bash
npm run lint
```

## 常见问题

### Q: 如何更改网站标题和描述？
A: 在 `app/layout.tsx` 中修改 `metadata` 对象。

### Q: 如何添加新的页面？
A: 在 `app/` 目录下创建新的文件夹和 `page.tsx` 文件。

### Q: 如何修改导航栏？
A: 编辑 `components/layout/navigation.tsx` 中的 `navigation` 数组。

### Q: 如何禁用主题切换？
A: 在 `app/layout.tsx` 中移除 `ThemeProvider` 组件。

### Q: 如何添加新的 UI 组件？
A: 使用 shadcn/ui CLI：
```bash
npx shadcn@latest add [component-name]
```

## 下一步

- 查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 了解如何部署
- 查看 [README.md](./README.md) 了解更多项目信息
- 访问 [Next.js 文档](https://nextjs.org/docs) 学习更多框架功能

## 支持

如有问题，请：
1. 查看 Next.js 官方文档
2. 搜索 GitHub Issues
3. 创建新的 Issue 描述你的问题
