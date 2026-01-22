# 部署指南

本文档提供详细的部署指南，支持多种主流部署平台。

## 前置要求

- Node.js >= 20.11.1（项目已通过 `.nvmrc` 指定版本）
- npm 或 yarn 包管理器
- Git 版本控制

## 快速部署

推荐平台：**Cloudflare Pages**（零配置、全球 CDN、免费 SSL）

## Cloudflare Pages 部署

### 方法一：通过 GitHub 集成自动部署（推荐）

1. **准备代码仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **创建 Cloudflare Pages 项目**
   - 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
   - 进入 **Workers & Pages** → **创建应用** → **Pages** → **连接到 Git**
   - 选择你的 GitHub 仓库并授权
   - 配置构建设置：

   | 设置项 | 值 |
   |--------|-----|
   | 构建命令 | `npm install && npm run build` |
   | 构建输出目录 | `out` |
   | Node.js 版本 | `20` |

3. **环境变量（可选）**
   - 如需 API 密钥等，在 **设置** → **环境变量** 中添加

4. **部署**
   - 点击 **保存并部署**
   - 首次部署约需 2-3 分钟
   - 后续每次推送到 main 分支会自动触发部署

### 方法二：通过 Wrangler CLI 手动部署

1. **安装 Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **构建项目**
   ```bash
   npm ci
   npm run build
   ```

4. **部署到 Cloudflare Pages**
   ```bash
   wrangler pages publish out --project-name=claude-open-code-docs
   ```

5. **设置自定义域名（可选）**
   ```bash
   wrangler pages deploy out --project-name=claude-open-code-docs
   ```

## Vercel 部署

1. **准备代码仓库**
   ```bash
   # 确保代码已推送到 GitHub
   ```

2. **导入项目**
   - 登录 [Vercel Dashboard](https://vercel.com/new)
   - 点击 **Add New** → **Project**
   - 选择你的 GitHub 仓库

3. **配置项目**
   - **Framework Preset**: Next.js（自动检测）
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm install`

4. **环境变量（可选）**
   - 在 **Environment Variables** 中添加：
     ```
     NODE_ENV=production
     ```

5. **部署**
   - 点击 **Deploy**
   - 等待构建完成（约 1-2 分钟）

### Vercel 注意事项

⚠️ **重要**：由于项目使用静态导出（`output: 'export'`），需要在 Vercel 中禁用某些 Next.js 特定功能：

1. 在项目根目录创建 `vercel.json`：
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "out",
     "cleanUrls": true,
     "trailingSlash": true
   }
   ```

## Netlify 部署

1. **准备代码仓库**
   ```bash
   # 确保代码已推送到 GitHub
   ```

2. **创建新站点**
   - 登录 [Netlify Dashboard](https://app.netlify.com/start)
   - 点击 **Add new site** → **Import an existing project**
   - 选择 **GitHub** 并授权
   - 选择你的仓库

3. **配置构建设置**
   | 设置项 | 值 |
   |--------|-----|
   | Build command | `npm run build` |
   | Publish directory | `out` |
   | Branch to deploy | `main` |

4. **部署配置（可选）**
   创建 `netlify.toml` 文件：
   ```toml
   [build]
     command = "npm run build"
     publish = "out"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

5. **点击部署站点**

## GitHub Pages 部署

### 方法一：使用 GitHub Actions（推荐）

1. **创建 GitHub Actions 工作流**
   创建 `.github/workflows/deploy.yml`：

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: "18"
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './out'

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. **在 GitHub 仓库设置中启用 Pages**
   - 进入 **Settings** → **Pages**
   - **Source** 选择 **GitHub Actions**

3. **推送代码**
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push
   ```

### 方法二：手动部署

1. **修改 `next.config.ts`** 添加 basePath：
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     basePath: '/your-repo-name', // 替换为你的仓库名
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
   };
   ```

2. **构建并推送**
   ```bash
   npm run build
   git checkout -b gh-pages
   cp -r out/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

### GitHub Pages 注意事项

⚠️ **不推荐使用**：GitHub Pages 不支持 SPA 路由，需要额外配置。建议使用 Cloudflare Pages 或 Vercel。

## 本地预览构建结果

在部署前，建议先在本地预览构建结果：

### 方法一：使用 serve（推荐）

```bash
npm install -g serve
npm run build
serve out -l 3000
```

### 方法二：使用 http-server

```bash
npx http-server out -p 8000 -o
```

### 方法三：使用 Python 简单服务器

```bash
cd out
python3 -m http.server 8000
```

### 方法四：使用 PHP 内置服务器

```bash
cd out
php -S localhost:8000
```

访问地址：http://localhost:8000（或 3000）

## 自定义域名配置

### Cloudflare Pages

1. **在 Cloudflare Pages 项目中**
   - 进入 **Pages** → 选择你的项目 → **Custom domains**
   - 点击 **Set up a custom domain**
   - 输入你的域名（如 `docs.example.com`）

2. **配置 DNS**
   - 如果域名在 Cloudflare：自动添加 DNS 记录
   - 如果域名在其他提供商：
     ```
     类型: CNAME
     名称: docs (或你的子域名)
     目标: your-project.pages.dev
     ```

3. **等待生效**
   - DNS 传播通常需要几分钟到几小时

### Vercel

1. **在 Vercel 项目中**
   - 进入 **Settings** → **Domains**
   - 点击 **Add Domain**
   - 输入你的域名

2. **配置 DNS**
   - Vercel 会提供所需的 DNS 记录
   - 在你的域名提供商中添加记录：
     ```
     类型: A 或 CNAME
     名称: @ (或子域名)
     值: cname.vercel-dns.com
     ```

3. **验证域名**
   - 等待 DNS 传播
   - Vercel 会自动配置 SSL 证书

### Netlify

1. **在 Netlify 项目中**
   - 进入 **Domain settings** → **Add custom domain**
   - 输入你的域名

2. **配置 DNS**
   - Netlify 会提供 DNS 记录：
     ```
     类型: CNAME
     名称: www (或子域名)
     值: your-site.netlify.app
     ```

## CI/CD 自动化部署

### GitHub Actions 示例

创建 `.github/workflows/deploy-cloudflare-pages.yml`：

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: claude-open-code-docs
          directory: out
```

## 环境变量配置

### Cloudflare Pages

在 **Settings** → **Environment variables** 中添加：

```bash
# 生产环境
NODE_ENV=production
# API 密钥（如需要）
ANTHROPIC_API_KEY=your_api_key_here
# 分析工具（如需要）
NEXT_PUBLIC_GA_ID=your_ga_id
```

### Vercel

在 **Settings** → **Environment Variables** 中添加：

```bash
NODE_ENV=production
ANTHROPIC_API_KEY=your_api_key_here
NEXT_PUBLIC_GA_ID=your_ga_id
```

### 本地开发

创建 `.env.local` 文件：

```bash
NODE_ENV=development
ANTHROPIC_API_KEY=your_api_key_here
```

⚠️ **重要**：将 `.env.local` 添加到 `.gitignore`，避免敏感信息泄露。

## 故障排除

### 构建失败

**问题**：Node.js 版本不兼容
```bash
# 解决方案：使用 nvm 切换版本
nvm install 20
nvm use 20
npm ci
npm run build
```

**问题**：依赖安装失败
```bash
# 解决方案：清理并重新安装
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**问题**：TypeScript 错误
```bash
# 解决方案：检查类型错误
npm run lint
# 修复错误或添加类型声明
```

**问题**：内存溢出
```bash
# 解决方案：增加 Node.js 内存限制
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### 部署后问题

**问题**：页面 404
- 检查输出目录配置是否为 `out`
- 确认 `next.config.ts` 中 `output: 'export'` 已设置
- 验证 `public/_redirects` 文件存在（Cloudflare Pages）

**问题**：样式未加载
```bash
# 检查 Tailwind CSS 配置
# 确保 postcss 配置正确
# 清除浏览器缓存并刷新
```

**问题**：路由无法访问
- 检查 `trailingSlash: true` 配置
- 验证重定向规则（`public/_redirects`）
- 确保平台支持 SPA 路由

**问题**：图片不显示
- 检查 `next.config.ts` 中 `images.unoptimized: true`
- 确认图片路径正确
- 验证图片文件已部署

### 性能问题

**问题**：首次加载慢
- 检查构建输出大小
- 优化图片和资源
- 启用代码分割

**问题**：Lighthouse 分数低
- 优化 CSS 和 JS
- 压缩图片资源
- 启用浏览器缓存

## 性能优化建议

### 1. 构建优化

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 压缩输出
  compress: true,
  // 生成 Source Map（开发时）
  productionBrowserSourceMaps: false,
};
```

### 2. 资源优化

- **图片优化**
  - 使用 WebP 格式
  - 压缩图片（tinypng.com）
  - 使用响应式图片

- **代码优化**
  - 移除未使用的依赖
  - 启用 Tree Shaking
  - 使用动态导入

### 3. CDN 缓存策略

**Cloudflare Pages**：
- 自动缓存静态资源
- 缓存 HTML 页面
- 使用 Cache API

**Vercel**：
- 自动 Edge Network
- 智能缓存
- ISR 支持

### 4. 监控和分析

**添加 Google Analytics**：
```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**使用 Vercel Analytics**：
```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 5. 安全性建议

- **启用 HTTPS**：所有推荐平台都提供免费 SSL
- **设置 CSP 头**：防止 XSS 攻击
- **定期更新依赖**：`npm audit fix`
- **环境变量保护**：不要在代码中硬编码密钥
- ** robots.txt**：控制搜索引擎爬虫

### 6. SEO 优化

创建 `public/robots.txt`：
```txt
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

创建 `app/sitemap.ts`：
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // 添加更多页面
  ]
}
```

## 部署检查清单

部署前确认：

- [ ] 本地构建成功（`npm run build`）
- [ ] 本地预览正常（`serve out`）
- [ ] 环境变量已配置
- [ ] `.gitignore` 包含敏感文件
- [ ] 代码已提交到 Git
- [ ] README.md 已更新
- [ ] 检查清单完成

部署后验证：

- [ ] 网站可访问
- [ ] 所有页面正常加载
- [ ] 样式显示正确
- [ ] 导航功能正常
- [ ] 响应式设计正常
- [ ] 检查控制台无错误
- [ ] Lighthouse 分数良好
- [ ] SEO 元数据完整

## 获取帮助

- **Cloudflare Pages**: [Documentation](https://developers.cloudflare.com/pages/)
- **Vercel**: [Documentation](https://vercel.com/docs)
- **Netlify**: [Documentation](https://docs.netlify.com/)
- **Next.js**: [Documentation](https://nextjs.org/docs)
- **GitHub Issues**: [Report a problem](https://github.com/vercel/next.js/issues)
