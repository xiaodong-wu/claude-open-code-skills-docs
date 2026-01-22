import Link from "next/link"
import { Zap, FileCode, ArrowRight, Book, Code2, Search, Play } from "lucide-react"
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
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            全面学习这两个强大的 AI 编程工具，从基础命令到高级 Skills 开发，提升你的编程效率
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tutorials">
                开始学习 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/claude-code">
                了解 Claude Code <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">核心工具对比</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Claude Code</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Anthropic 推出的 AI 编程助手，提供强大的代码理解、生成和重构能力
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>智能代码生成与补全</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>复杂问题的分析与解决</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>跨语言代码转换</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>项目架构设计与优化</span>
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/claude-code">深入了解</Link>
            </Button>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Open Code</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              灵活的 AI 编程工具，支持自定义 Skills 系统，可与多种编辑器集成
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>高度可定制的 Skills 系统</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>丰富的工具生态</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>多编辑器支持</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>灵活的命令交互</span>
              </li>
            </ul>
            <Button asChild className="w-full" variant="outline">
              <Link href="/open-code">深入了解</Link>
            </Button>
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
            <Button asChild variant="outline" className="w-full">
              <Link href="/examples">查看示例</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">准备好开始了吗？</h2>
          <p className="text-xl text-muted-foreground mb-8">
            无论你是初学者还是经验丰富的开发者，这些教程都会帮助你更好地使用 AI 编程助手
          </p>
          <Button size="lg" asChild>
            <Link href="/tutorials">
              立即开始学习 <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
