# 部署指南

## Cloudflare Pages 部署

### 方法一：通过 GitHub 集成自动部署

1. 将项目推送到 GitHub 仓库
2. 登录 Cloudflare 控制台
3. 进入 Pages → 创建项目
4. 选择连接到 Git
5. 授权 Cloudflare 访问你的 GitHub 仓库
6. 选择 `claude-open-code-docs` 仓库
7. 配置构建设置：
   ```
   构建命令: npm run build
   输出目录: out
   ```
8. 点击保存并部署

### 方法二：通过 wrangler CLI 手动部署

1. 安装 Wrangler CLI：
   ```bash
   npm install -g wrangler
   ```

2. 登录 Cloudflare：
   ```bash
   wrangler login
   ```

3. 构建项目：
   ```bash
   npm run build
   ```

4. 部署到 Cloudflare Pages：
   ```bash
   wrangler pages publish out --project-name=claude-open-code-docs
   ```

## Vercel 部署

1. 将项目推送到 GitHub 仓库
2. 登录 [Vercel](https://vercel.com)
3. 点击 "New Project"
4. 导入你的 GitHub 仓库
5. Vercel 会自动检测 Next.js 并配置构建设置
6. 点击 "Deploy"

## Netlify 部署

1. 将项目推送到 GitHub 仓库
2. 登录 [Netlify](https://netlify.com)
3. 点击 "Add new site" → "Import an existing project"
4. 连接到 GitHub
5. 配置构建设置：
   ```
   Build command: npm run build
   Publish directory: out
   ```
6. 点击 "Deploy site"

## GitHub Pages 部署

由于 Next.js 静态导出的结构特点，需要额外配置才能部署到 GitHub Pages。推荐使用 Cloudflare Pages 或 Vercel。

## 本地预览构建结果

构建完成后，可以使用以下方式预览：

### 使用 Python 简单服务器
```bash
cd out
python -m http.server 8000
```

### 使用 Node.js http-server
```bash
npx http-server out -p 8000
```

### 使用 Vite preview
```bash
npx serve out -p 8000
```

然后访问 http://localhost:8000 查看网站。

## 自定义域名

### Cloudflare Pages
1. 在 Cloudflare Pages 项目设置中
2. 选择 "Custom domains"
3. 添加你的域名
4. 按照提示配置 DNS 记录

### Vercel
1. 在 Vercel 项目设置中
2. 选择 "Domains"
3. 添加你的域名
4. 配置 DNS 记录

## 环境变量

如果需要配置环境变量（如 API 密钥），在部署平台的设置中添加：

```
ANTHROPIC_API_KEY=your_api_key_here
```

## 故障排除

### 构建失败
- 确保 Node.js 版本 >= 18
- 删除 `node_modules` 和 `package-lock.json`，重新安装依赖
- 检查 `next.config.ts` 配置

### 部署后页面 404
- 确保输出目录配置正确（`out`）
- 检查路由配置是否正确

### 样式加载异常
- 清除浏览器缓存
- 检查 Tailwind CSS 配置
- 确保构建过程中没有警告

## 性能优化建议

1. 启用图片优化（如需要）
2. 配置 CDN 缓存规则
3. 使用 Cloudflare Workers 进行边缘计算
4. 启用压缩和 minification
5. 配置适当的缓存策略
