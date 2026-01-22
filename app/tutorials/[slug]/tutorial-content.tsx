"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Copy, Check, Terminal, Book, AlertCircle, Cloud, Github, Zap, Settings, Globe, Code, CheckCircle2, XCircle } from "lucide-react"
import { useState } from "react"

interface TutorialContentProps {
  slug: string
}

export default function TutorialContent({ slug }: TutorialContentProps) {
  const [copied, setCopied] = useState(false)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Cloudflare Pages 自动部署教程
  if (slug === "cloudflare-pages-auto-deploy") {
    return (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Cloud className="h-6 w-6" />
            教程概述
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            本教程将指导你完成从零配置 Cloudflare Pages 与 GitHub 集成，实现代码推送后自动构建和部署。
            整个过程无需手动干预，让你的 Next.js 静态网站实现真正的 CI/CD 自动化。
          </p>
          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm font-medium mb-2">你将学习：</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 配置 Next.js 项目进行静态导出</li>
              <li>• 连接 GitHub 仓库到 Cloudflare Pages</li>
              <li>• 配置自动构建和部署规则</li>
              <li>• 设置环境变量和自定义域名</li>
              <li>• 监控部署状态和回滚</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="h-6 w-6" />
            前置准备
          </h2>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg">1. 准备 GitHub 仓库</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                确保你的项目已推送到 GitHub 仓库：
              </p>
              <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <code className="text-sm font-mono">初始化并推送</code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => copyCode("git init && git add . && git commit -m 'Initial commit' && git remote add origin https://github.com/your-username/your-repo.git && git push -u origin main")}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <pre className="text-sm font-mono text-foreground/90 overflow-x-auto">
                  {`git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg">2. 配置 Next.js 静态导出</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                在项目根目录创建或更新 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">next.config.ts</code>：
              </p>
              <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4">
                <pre className="text-sm font-mono text-foreground/90">
                  {`import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3. 添加构建配置文件</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                创建 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">.cloudflare-pages-build.json</code>：
              </p>
              <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 mb-4">
                <pre className="text-sm font-mono text-foreground/90">
                  {`{
  "build_command": "npm install && npm run build",
  "destination_dir": "out",
  "node_version": "18",
  "compatibility_flags": ["nodejs_compat"]
}`}
                </pre>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                同时创建 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">.nvmrc</code> 指定 Node 版本：
              </p>
              <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4">
                <pre className="text-sm font-mono text-foreground/90">
                  18.20.0
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Github className="h-6 w-6" />
            连接 Cloudflare Pages
          </h2>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg">步骤 1：登录 Cloudflare</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p>访问 <a href="https://dash.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cloudflare Dashboard</a> 并登录</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p>选择 <strong>Workers & Pages</strong> → <strong>创建应用</strong> → <strong>Pages</strong> → <strong>连接到 Git</strong></p>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg">步骤 2：授权并选择仓库</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p>点击 <strong>连接 GitHub</strong> 并授权 Cloudflare 访问你的仓库</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <p>从列表中选择你要部署的仓库</p>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">步骤 3：配置构建设置</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Cloudflare 会自动读取 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">.cloudflare-pages-build.json</code>，你也可以手动配置：
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">设置项</th>
                      <th className="text-left p-2">值</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">构建命令</td>
                      <td className="p-2"><code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">npm install && npm run build</code></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">构建输出目录</td>
                      <td className="p-2"><code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">out</code></td>
                    </tr>
                    <tr>
                      <td className="p-2 font-mono text-xs">Node.js 版本</td>
                      <td className="p-2"><code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">18</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="h-6 w-6" />
            自动部署测试
          </h2>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg">首次部署</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                点击 <strong>保存并部署</strong> 后，Cloudflare Pages 会：
              </p>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p>克隆你的 GitHub 仓库</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p>安装项目依赖（npm install）</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p>构建项目（npm run build）</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p>将 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">out</code> 目录部署到全球 CDN</p>
                </li>
              </ol>
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-sm text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-4 w-4 inline mr-2" />
                  首次部署约需 2-3 分钟，成功后会获得一个 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">*.pages.dev</code> 域名
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">测试自动部署</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                修改代码并推送到 GitHub，观察自动部署：
              </p>
              <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 mb-4">
                <pre className="text-sm font-mono text-foreground/90 overflow-x-auto">
                  {`# 修改代码
echo "# Hello World" >> README.md

# 提交并推送
git add .
git commit -m "测试自动部署"
git push`}
                </pre>
              </div>
              <p className="text-sm text-muted-foreground">
                推送后，Cloudflare Pages 会自动触发新的构建。你可以在控制台实时查看构建日志。
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="h-6 w-6" />
            高级配置
          </h2>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg">配置环境变量</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                在项目设置中添加环境变量：
              </p>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. 进入 <strong>Settings</strong> → <strong>Environment variables</strong></li>
                <li>2. 添加变量（如 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">NODE_ENV=production</code>）</li>
                <li>3. 选择环境（Production / Preview / Development）</li>
                <li>4. 保存并重新部署</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg">配置自定义域名</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                使用自己的域名：
              </p>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. 进入 <strong>Custom domains</strong> → <strong>Set up a custom domain</strong></li>
                <li>2. 输入域名（如 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">docs.example.com</code>）</li>
                <li>3. 配置 DNS 记录（Cloudflare 会自动添加）</li>
                <li>4. 等待 SSL 证书自动生成</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">配置预览部署</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                为每个 Pull Request 自动生成预览链接：
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 在 pull request 和所有分支上启用预览</li>
                <li>• 每个 PR 会获得唯一的预览 URL</li>
                <li>• 代码合并后预览自动清理</li>
                <li>• 支持在预览环境中评论和测试</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="h-6 w-6" />
            部署工作流示例
          </h2>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">典型 CI/CD 工作流</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 bg-black/5 dark:bg-white/5 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">1. 本地开发</p>
                    <p className="text-xs text-muted-foreground mt-1">在本地完成功能开发和测试</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-black/5 dark:bg-white/5 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Github className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">2. 推送到分支</p>
                    <p className="text-xs text-muted-foreground mt-1">推送代码到功能分支（触发预览部署）</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-black/5 dark:bg-white/5 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">3. 创建 Pull Request</p>
                    <p className="text-xs text-muted-foreground mt-1">在预览环境中测试和审查代码</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-black/5 dark:bg-white/5 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">4. 合并到 main</p>
                    <p className="text-xs text-muted-foreground mt-1">合并后自动部署到生产环境</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-black/5 dark:bg-white/5 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">5. 全球分发</p>
                    <p className="text-xs text-muted-foreground mt-1">更新自动推送到 Cloudflare 全球 CDN</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="h-6 w-6" />
            故障排除
          </h2>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg">构建失败</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p><strong>Node 版本不匹配</strong>：检查 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">.nvmrc</code> 和构建设置中的 Node 版本</p>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p><strong>依赖安装失败</strong>：删除 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">package-lock.json</code> 并重新推送</p>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p><strong>构建命令错误</strong>：在 Cloudflare 控制台查看详细构建日志</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">部署后 404</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p>确认输出目录配置为 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">out</code></p>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p>检查 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">next.config.ts</code> 中 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">output: 'export'</code> 已设置</p>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p>验证 <code className="bg-black/5 dark:bg-white/5 px-2 py-1 rounded">public/_redirects</code> 文件存在</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">下一步</h2>
          <p className="text-muted-foreground mb-6">
            完成本教程后，你可以继续学习：
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-base">查看部署文档</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  详细的部署指南和故障排除
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="/">
                    查看 DEPLOYMENT.md →
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-base">更多实战教程</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  学习更多项目开发实践
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="/tutorials">
                    浏览教程列表 →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  // 默认教程内容
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Book className="h-6 w-6" />
          简介
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          本教程将带你了解 Claude Code 和 Open Code 的核心功能和使用方法。通过实际示例，
          你将掌握如何使用这些工具来提高编程效率。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="h-6 w-6" />
          快速开始
        </h2>

        <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <code className="text-sm font-mono">安装命令</code>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => copyCode("npm install -g @anthropic-ai/claude-code")}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <pre className="text-sm font-mono text-foreground/90">
            npm install -g @anthropic-ai/claude-code
          </pre>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          安装完成后，你需要配置 API 密钥才能开始使用。
        </p>

        <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <code className="text-sm font-mono">配置 API 密钥</code>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => copyCode("export ANTHROPIC_API_KEY=your-api-key")}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <pre className="text-sm font-mono text-foreground/90">
            export ANTHROPIC_API_KEY=your-api-key
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">常用命令</h2>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg">启动工具</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm font-mono bg-black/5 dark:bg-white/5 p-4 rounded">
              claude-code
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              在项目目录中运行此命令启动交互式会话
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg">分析代码</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm font-mono bg-black/5 dark:bg-white/5 p-4 rounded">
              analyze src/components/
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              分析指定目录中的代码，提供优化建议
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">生成测试</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm font-mono bg-black/5 dark:bg-white/5 p-4 rounded">
              generate tests --coverage 80
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              为指定代码生成测试，目标覆盖率为 80%
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle className="h-6 w-6" />
          注意事项
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-bold">1</span>
            </div>
            <p className="text-muted-foreground">
              确保你的 API 密钥安全，不要提交到版本控制系统
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-bold">2</span>
            </div>
            <p className="text-muted-foreground">
              大型项目可能需要更多的 API 调用，请注意配额限制
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-bold">3</span>
            </div>
            <p className="text-muted-foreground">
              建议在非生产环境中测试 AI 生成的代码
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">下一步</h2>
        <p className="text-muted-foreground mb-6">
          完成本教程后，你可以继续学习更高级的主题：
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-base">进阶教程</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/tutorials">
                  查看进阶教程 →
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-base">API 文档</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/api">
                  查看 API 文档 →
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
