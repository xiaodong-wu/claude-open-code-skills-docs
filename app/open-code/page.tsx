import { FileCode, Terminal, Zap, Play, ArrowRight, Share2, Settings, Keyboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OpenCodePage() {
  const features = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "终端界面",
      description: "原生终端 UI，支持现代终端模拟器如 WezTerm、Alacritty、Ghostty、Kitty"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Plan & Build 模式",
      description: "先规划再执行，确保代码质量。轻松迭代和审查 AI 的计划"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "团队协作",
      description: "轻松分享对话链接，与团队成员协作，无需默认公开"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "高度可配置",
      description: "自定义主题、快捷键、代码格式化器、命令等"
    }
  ]

  const capabilities = [
    {
      title: "提问代码库",
      description: "使用 @ 符号模糊搜索文件，快速理解不熟悉的代码部分"
    },
    {
      title: "添加新功能",
      description: "描述需求，AI 制定计划并实现，支持图片参考"
    },
    {
      title: "直接修改",
      description: "对于简单改动，直接请求修改，无需查看计划"
    },
    {
      title: "撤销和重做",
      description: "使用 /undo 和 /redo 命令轻松管理更改历史"
    }
  ]

  const providers = [
    { name: "OpenCode Zen", description: "经过测试和验证的精选模型列表" },
    { name: "OpenAI", description: "GPT 系列模型支持" },
    { name: "Anthropic", description: "Claude 系列模型支持" },
    { name: "自定义", description: "支持任何兼容的 LLM provider" }
  ]

  const installMethods = [
    {
      name: "安装脚本",
      command: "curl -fsSL https://opencode.ai/install | bash",
      platform: "跨平台"
    },
    {
      name: "npm",
      command: "npm install -g opencode-ai",
      platform: "跨平台"
    },
    {
      name: "Homebrew",
      command: "brew install anomalyco/tap/opencode",
      platform: "macOS, Linux"
    },
    {
      name: "Docker",
      command: "docker run -it --rm ghcr.io/anomalyco/opencode",
      platform: "跨平台"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <FileCode className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Open Code</h1>
          <p className="text-xl text-muted-foreground mb-4">
            开源 AI 编程代理，可用作终端界面、桌面应用或 IDE 扩展
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            灵活可组合，支持任意 LLM provider，强大的 Plan & Build 工作流
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tutorials?tool=open-code">
                开始使用 <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://opencode.ai/docs" target="_blank" rel="noopener noreferrer">
                官方文档 <ArrowRight className="ml-2 h-5 w-5" />
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
          <h2 className="text-3xl font-bold text-center mb-12">快速开始</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">1. 安装 Open Code</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {installMethods.map((method, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-background">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-bold">{method.name}</p>
                        <p className="text-xs text-muted-foreground">{method.platform}</p>
                      </div>
                    </div>
                    <div className="bg-black/5 dark:bg-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                      <code>{method.command}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">2. 配置 LLM Provider</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground">
                      运行 <code className="font-mono">/connect</code> 命令，选择 opencode
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground">
                      访问 <a href="https://opencode.ai/auth" target="_blank" rel="noopener noreferrer" className="text-primary underline">opencode.ai/auth</a> 登录并复制 API 密钥
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground">
                      在终端中粘贴 API 密钥
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium mb-3">支持的 LLM Providers:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {providers.map((provider, index) => (
                    <div key={index} className="text-center p-3 bg-background rounded-lg border">
                      <p className="text-sm font-semibold">{provider.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">3. 初始化项目</h3>
              <div className="space-y-4">
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                  <code>cd /path/to/project</code>
                </div>
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                  <code>opencode</code>
                </div>
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                  <code>/init</code>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  这会分析你的项目并创建 AGENTS.md 文件。建议将此文件提交到 Git。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">使用方式</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <div key={index} className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
              <p className="text-muted-foreground">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/50 rounded-lg my-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Plan & Build 工作流</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">切换到 Plan 模式</h3>
                <p className="text-muted-foreground">
                  按 Tab 键切换到 Plan 模式。在此模式下，Open Code 会禁用修改能力，只提供实现方案。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">描述功能需求</h3>
                <p className="text-muted-foreground">
                  详细描述你想做什么。可以将图片拖拽到终端作为参考。给 AI 足够的上下文和示例。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">审查和迭代</h3>
                <p className="text-muted-foreground">
                  查看生成的计划，提供反馈或添加更多细节。可以请求多次修改直到满意。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">切换到 Build 模式</h3>
                <p className="text-muted-foreground">
                  按 Tab 键切换回 Build 模式，请求 Open Code 执行计划。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-6">强大功能</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="border rounded-lg p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Keyboard className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">撤销/重做</h3>
            <p className="text-sm text-muted-foreground">
              使用 <code className="font-mono">/undo</code> 和 <code className="font-mono">/redo</code> 命令轻松管理更改历史
            </p>
          </div>

          <div className="border rounded-lg p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Share2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">分享对话</h3>
            <p className="text-sm text-muted-foreground">
              使用 <code className="font-mono">/share</code> 命令生成链接分享给团队
            </p>
          </div>

          <div className="border rounded-lg p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Settings className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">深度自定义</h3>
            <p className="text-sm text-muted-foreground">
              主题、快捷键、格式化器、自定义命令等完全可配置
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">开始使用 Open Code</h2>
          <p className="text-xl text-muted-foreground mb-8">
            查看完整教程，学习如何安装、配置和使用 Open Code
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tutorials">
                浏览教程 <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://opencode.ai/discord" target="_blank" rel="noopener noreferrer">
                加入 Discord 社区 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
