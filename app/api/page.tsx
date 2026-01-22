import { Search, FileText, Terminal, Settings, AlertTriangle, Code2, Play } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const apiSections = [
  {
    title: "Claude Code CLI 参考",
    icon: <Terminal className="h-5 w-5" />,
    commands: [
      {
        name: "claude",
        description: "在项目目录启动 Claude Code 交互式会话",
        usage: "cd your-project && claude",
        options: [
          { flag: "-p, --prompt", description: "直接提供提示词" },
          { flag: "--model", description: "指定使用的模型" },
          { flag: "--config", description: "指定配置文件路径" }
        ]
      }
    ]
  },
  {
    title: "Claude Code 功能",
    icon: <Code2 className="h-5 w-5" />,
    commands: [
      {
        name: "从描述构建功能",
        description: "用自然语言描述你想构建什么，Claude 会制定计划、编写代码并确保其正常工作",
        usage: "描述你的需求，Claude Code 会自动处理",
        options: []
      },
      {
        name: "调试和修复问题",
        description: "描述错误或粘贴错误消息，Claude Code 会分析代码库、识别问题并实施修复",
        usage: "粘贴错误消息，Claude Code 会分析并修复",
        options: []
      },
      {
        name: "导航代码库",
        description: "询问有关代码库的任何内容，Claude Code 维护对整个项目结构的认识",
        usage: "使用 @ 符号引用文件进行提问",
        options: []
      },
      {
        name: "MCP 集成",
        description: "通过 Model Context Protocol 连接外部数据源（Google Drive、Figma、Slack 等）",
        usage: "配置 MCP 服务器以扩展 Claude Code 能力",
        options: []
      }
    ]
  },
  {
    title: "Open Code 命令",
    icon: <Play className="h-5 w-5" />,
    commands: [
      {
        name: "opencode",
        description: "启动 Open Code TUI 界面",
        usage: "opencode",
        options: []
      },
      {
        name: "/connect",
        description: "配置 LLM provider 和 API 密钥",
        usage: "/connect",
        options: []
      },
      {
        name: "/init",
        description: "分析项目并创建 AGENTS.md 配置文件",
        usage: "/init",
        options: []
      },
      {
        name: "/share",
        description: "生成当前对话的分享链接",
        usage: "/share",
        options: []
      },
      {
        name: "/undo",
        description: "撤销最近的更改",
        usage: "/undo",
        options: []
      },
      {
        name: "/redo",
        description: "重做被撤销的更改",
        usage: "/redo",
        options: []
      }
    ]
  },
  {
    title: "Open Code Plan 模式",
    icon: <Terminal className="h-5 w-5" />,
    commands: [
      {
        name: "Plan 模式",
        description: "禁用修改能力，只提供实现方案。可以迭代和审查 AI 的计划",
        usage: "按 Tab 键切换到 Plan 模式",
        options: []
      },
      {
        name: "Build 模式",
        description: "启用修改能力，执行已计划的更改",
        usage: "按 Tab 键切换到 Build 模式",
        options: []
      }
    ]
  },
  {
    title: "Open Code 配置",
    icon: <Settings className="h-5 w-5" />,
    commands: [
      {
        name: "LLM Providers",
        description: "配置不同的 LLM provider",
        usage: "通过 /connect 命令选择 provider",
        options: [
          { flag: "OpenCode Zen", description: "精选和验证的模型列表（推荐）" },
          { flag: "OpenAI", description: "GPT 系列模型" },
          { flag: "Anthropic", description: "Claude 系列模型" },
          { flag: "其他", description: "任何兼容的 LLM provider" }
        ]
      },
      {
        name: "自定义配置",
        description: "配置主题、快捷键、代码格式化器、命令等",
        usage: "编辑 Open Code 配置文件",
        options: [
          { flag: "主题", description: "自定义颜色方案" },
          { flag: "快捷键", description: "自定义键盘快捷键" },
          { flag: "格式化器", description: "配置代码格式化工具" },
          { flag: "自定义命令", description: "创建自定义命令别名" }
        ]
      }
    ]
  },
  {
    title: "常见问题",
    icon: <AlertTriangle className="h-5 w-5" />,
    commands: [
      {
        name: "安装失败",
        description: "确保使用现代终端模拟器（WezTerm、Alacritty、Ghostty、Kitty）",
        usage: "检查终端兼容性和网络连接",
        options: []
      },
      {
        name: "API 密钥问题",
        description: "确保 API 密钥正确且有效，检查账户余额",
        usage: "重新配置 provider 并验证密钥",
        options: []
      },
      {
        name: "项目初始化失败",
        description: "确保在项目根目录运行 /init，检查文件权限",
        usage: "手动创建 AGENTS.md 文件",
        options: []
      }
    ]
  }
]

export default function ApiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">API 文档</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Claude Code 和 Open Code 的完整命令参考和配置指南
          </p>
          <p className="text-lg text-muted-foreground">
            基于官方文档整理，帮助你快速掌握两个工具的使用方法
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索命令和功能..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-12">
            {apiSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="p-2 bg-primary/10 rounded-lg text-primary">
                    {section.icon}
                  </span>
                  {section.title}
                </h2>
                
                <div className="space-y-4">
                  {section.commands.map((command, cmdIndex) => (
                    <Card key={cmdIndex}>
                      <CardHeader>
                        <CardTitle className="text-lg font-mono">{command.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{command.description}</p>
                        
                        {command.usage && (
                          <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4">
                            <code className="text-sm font-mono">
                              {command.usage}
                            </code>
                          </div>
                        )}

                        {command.options.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3">选项和参数</h4>
                            <div className="space-y-2">
                              {command.options.map((option, optIndex) => (
                                <div key={optIndex} className="flex gap-4 p-3 bg-muted/30 rounded">
                                  <code className="font-mono text-sm bg-background px-2 py-1 rounded flex-shrink-0">
                                    {option.flag}
                                  </code>
                                  <span className="text-sm text-muted-foreground">
                                    {option.description}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">需要更多帮助？</h2>
          <p className="text-xl text-muted-foreground mb-8">
            查看官方文档和教程，了解更多实际应用场景
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="https://code.claude.com/docs/zh-CN/cli-reference" target="_blank" rel="noopener noreferrer">
                Claude Code 官方文档
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://opencode.ai/docs" target="_blank" rel="noopener noreferrer">
                Open Code 官方文档
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
