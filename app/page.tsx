import Link from "next/link"
import { Zap, FileCode, ArrowRight, Book, Code2, Search, Play, Terminal, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">AI 编程助手完全指南</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            掌握 Claude Code 和 Open Code
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            全面学习这两个强大的 AI 编程工具，从 30 秒快速开始到高级功能开发
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            基于官方文档整理，包含完整的安装指南、工作流程和实际案例
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tutorials">
                开始学习 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/claude-code">
                Claude Code 教程 <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/open-code">
                Open Code 教程 <FileCode className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">为什么选择这些工具？</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Claude Code</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Anthropic 推出的 AI 编程代理，在你的终端中工作，帮助你比以往任何时候都更快地将想法转化为代码。
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Terminal className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm"><strong>30 秒快速开始</strong> - 一个命令即可安装使用</span>
              </div>
              <div className="flex items-start gap-3">
                <Code2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm"><strong>智能代码理解</strong> - 维护对整个项目结构的认识</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm"><strong>企业级安全</strong> - 内置安全、隐私和合规性</span>
              </div>
            </div>
            <Button asChild className="w-full" size="lg">
              <Link href="/claude-code">
                了解 Claude Code <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <FileCode className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Open Code</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              开源 AI 编程代理，原生终端 UI，支持任意 LLM provider，强大的 Plan & Build 工作流。
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Terminal className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm"><strong>Plan & Build 模式</strong> - 先规划再执行，提高代码质量</span>
              </div>
              <div className="flex items-start gap-3">
                <Code2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm"><strong>完全开源</strong> - GitHub 上完全开源，社区活跃</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm"><strong>高度可定制</strong> - 主题、快捷键、命令完全可配置</span>
              </div>
            </div>
            <Button asChild className="w-full" variant="outline" size="lg">
              <Link href="/open-code">
                了解 Open Code <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">核心功能对比</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-primary">Claude Code</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">从描述构建功能</p>
                  <p className="text-sm text-muted-foreground">用自然语言描述，Claude 制定计划并编写代码</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">调试和修复问题</p>
                  <p className="text-sm text-muted-foreground">分析代码库，识别问题并实施修复</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">导航任何代码库</p>
                  <p className="text-sm text-muted-foreground">询问有关代码库的任何内容，获得深思熟虑的答案</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">MCP 集成</p>
                  <p className="text-sm text-muted-foreground">连接外部数据源（Google Drive、Figma、Slack）</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-primary">Open Code</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Plan & Build 工作流</p>
                  <p className="text-sm text-muted-foreground">先规划再执行，轻松迭代和审查计划</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">撤销/重做功能</p>
                  <p className="text-sm text-muted-foreground">使用 /undo 和 /redo 轻松管理更改历史</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">团队协作</p>
                  <p className="text-sm text-muted-foreground">分享对话链接，与团队成员协作</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">多 LLM Provider</p>
                  <p className="text-sm text-muted-foreground">支持 OpenAI、Anthropic 等多种 provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">学习路径</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Book className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold">入门教程</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              快速开始，掌握基础操作和核心概念
            </p>
            <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
              <li>• 安装和配置指南</li>
              <li>• 基础命令和工作流</li>
              <li>• Plan & Build 模式使用</li>
            </ul>
            <Button asChild variant="outline" className="w-full">
              <Link href="/tutorials">查看教程</Link>
            </Button>
          </div>

          <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Search className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold">API 文档</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              完整的命令参考和配置选项说明
            </p>
            <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
              <li>• Claude Code CLI 命令</li>
              <li>• Open Code 命令参考</li>
              <li>• 配置选项详解</li>
            </ul>
            <Button asChild variant="outline" className="w-full">
              <Link href="/api">查看文档</Link>
            </Button>
          </div>

          <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Play className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold">交互示例</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              实际案例和可运行的代码演示
            </p>
            <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
              <li>• 项目重构实战</li>
              <li>• Bug 修复工作流</li>
              <li>• 功能开发案例</li>
            </ul>
            <Button asChild variant="outline" className="w-full">
              <Link href="/examples">查看示例</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">准备好开始了吗？</h2>
          <p className="text-xl text-muted-foreground mb-4">
            无论你是初学者还是经验丰富的开发者，这些教程都会帮助你更好地使用 AI 编程助手
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            基于 Claude Code 和 Open Code 官方文档整理，确保内容准确和及时
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tutorials">
                开始学习之旅 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/xiaodong-wu/claude-open-code-docs" target="_blank" rel="noopener noreferrer">
                GitHub 仓库 <FileCode className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
