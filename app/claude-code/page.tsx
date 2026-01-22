import { Zap, Download, Terminal, Shield, Code2, Globe, GitBranch, Cpu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ClaudeCodePage() {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "从描述构建功能",
      description: "用纯英文或中文告诉 Claude 你想构建什么。它将制定计划、编写代码并确保其正常工作。"
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "调试和修复问题",
      description: "描述一个错误或粘贴错误消息。Claude Code 将分析你的代码库、识别问题并实施修复。"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "导航任何代码库",
      description: "询问有关团队代码库的任何内容，并获得深思熟虑的答案。Claude Code 维护对整个项目结构的认识。"
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "自动化繁琐任务",
      description: "修复棘手的 lint 问题、解决合并冲突和编写发行说明。从开发机器上用一个命令完成所有这些。"
    }
  ]

  const advantages = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "在您的终端中工作",
      description: "不是另一个聊天窗口。不是另一个 IDE。Claude Code 在您已经工作的地方与您相遇，使用您已经喜欢的工具。"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "直接采取行动",
      description: "Claude Code 可以直接编辑文件、运行命令和创建提交。通过 MCP 连接外部数据源和服务。"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Unix 哲学",
      description: "Claude Code 是可组合和可脚本化的。可以轻松集成到 shell 脚本和 CI/CD 流程中。"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "企业就绪",
      description: "使用 Claude API，或在 AWS 或 GCP 上托管。企业级安全、隐私和合规性是内置的。"
    }
  ]

  const useCases = [
    "从零开始构建功能",
    "调试和修复 Bug",
    "代码库导航和理解",
    "代码审查和优化",
    "自动化重复性任务",
    "集成外部数据源（MCP）"
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
          <p className="text-xl text-muted-foreground mb-4">
            Anthropic 推出的 AI 编程代理工具，存在于你的终端中，帮助你比以往任何时候都更快地将想法转化为代码。
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            30 秒内开始使用，在你的开发环境中直接与 AI 协作
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tutorials?tool=claude-code">
                开始使用 <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://code.claude.com/docs/zh-CN/overview" target="_blank" rel="noopener noreferrer">
                官方文档 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Claude Code 能为您做什么</h2>
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
          <h2 className="text-3xl font-bold text-center mb-6">为什么开发者喜欢 Claude Code</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {advantage.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">30 秒快速开始</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">安装 Claude Code</h3>
                <p className="text-muted-foreground mb-4">选择以下任一方式安装（推荐 Native Install）：</p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">macOS, Linux, WSL:</p>
                    <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                      <code>curl -fsSL https://claude.ai/install.sh | bash</code>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Windows PowerShell:</p>
                    <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                      <code>irm https://claude.ai/install.ps1 | iex</code>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Windows CMD:</p>
                    <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                      <code>curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">登录并开始使用</h3>
                <p className="text-muted-foreground mb-4">首次使用时会提示你登录 Claude.ai 账户</p>
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                  <code>cd your-project</code>
                </div>
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm mt-2">
                  <code>claude</code>
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
            查看我们的详细教程，掌握 Claude Code 的高级功能和工作流
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tutorials">
                浏览教程 <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://code.claude.com/docs/zh-CN/common-workflows" target="_blank" rel="noopener noreferrer">
                常见工作流 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
