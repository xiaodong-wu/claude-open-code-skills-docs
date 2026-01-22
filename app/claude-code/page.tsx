import { Zap, Download, Terminal, Shield, Cpu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ClaudeCodePage() {
  const features = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "强大的代码理解",
      description: "深度理解项目结构和代码逻辑，提供精准的建议和修改"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "智能代码生成",
      description: "基于上下文自动生成高质量代码，支持多种编程语言"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "安全可靠",
      description: "Anthropic 的安全模型确保代码质量和最佳实践"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "全球可用",
      description: "支持多语言环境，适应不同的开发需求"
    }
  ]

  const useCases = [
    "代码重构与优化",
    "Bug 诊断与修复",
    "新功能开发",
    "代码审查",
    "文档生成",
    "单元测试编写"
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Zap className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Claude Code</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Anthropic 推出的 AI 编程助手，提供卓越的代码理解、生成和重构能力
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tutorials?tool=claude-code">
                查看教程 <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer">
                官方文档
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">核心特性</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/50 rounded-lg my-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">快速开始</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">安装 Claude Code</h3>
                <p className="text-muted-foreground mb-4">使用 npm 或 pip 安装 Claude Code 命令行工具</p>
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                  <code>npm install -g @anthropic-ai/claude-code</code>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">配置 API 密钥</h3>
                <p className="text-muted-foreground mb-4">设置你的 Anthropic API 密钥以启用所有功能</p>
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                  <code>export ANTHROPIC_API_KEY=your-api-key</code>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">开始使用</h3>
                <p className="text-muted-foreground mb-4">在项目目录中运行 Claude Code 并开始交互</p>
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                  <code>claude-code</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">使用场景</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} className="border rounded-lg p-6 hover:border-primary/50 transition-colors text-center">
              <p className="font-semibold">{useCase}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">想了解更多？</h2>
          <p className="text-xl text-muted-foreground mb-8">
            查看我们的详细教程，掌握 Claude Code 的高级功能
          </p>
          <Button size="lg" asChild>
            <Link href="/tutorials">
              浏览教程 <Download className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
