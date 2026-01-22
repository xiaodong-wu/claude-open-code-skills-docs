import { Search, FileText, Terminal, Settings, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const apiSections = [
  {
    title: "基础命令",
    icon: <Terminal className="h-5 w-5" />,
    commands: [
      {
        name: "claude-code",
        description: "启动 Claude Code 交互式会话",
        usage: "claude-code [options]",
        options: [
          { flag: "--config", description: "指定配置文件路径" },
          { flag: "--debug", description: "启用调试模式" },
          { flag: "--help", description: "显示帮助信息" }
        ]
      },
      {
        name: "analyze",
        description: "分析代码结构和质量",
        usage: "analyze <path> [options]",
        options: [
          { flag: "--depth", description: "分析深度 (默认: 3)" },
          { flag: "--format", description: "输出格式 (json, text)" },
          { flag: "--output", description: "输出文件路径" }
        ]
      },
      {
        name: "generate",
        description: "生成代码或文档",
        usage: "generate <type> [options]",
        options: [
          { flag: "--template", description: "使用指定模板" },
          { flag: "--output", description: "输出路径" },
          { flag: "--force", description: "覆盖现有文件" }
        ]
      }
    ]
  },
  {
    title: "Open Code 工具",
    icon: <FileText className="h-5 w-5" />,
    commands: [
      {
        name: "read",
        description: "读取文件内容",
        usage: "read <filepath>",
        options: []
      },
      {
        name: "write",
        description: "写入文件内容",
        usage: "write <filepath>",
        options: [
          { flag: "--create", description: "创建新文件" },
          { flag: "--append", description: "追加到文件末尾" }
        ]
      },
      {
        name: "grep",
        description: "搜索文件内容",
        usage: "grep <pattern> [path]",
        options: [
          { flag: "--ignore-case", description: "忽略大小写" },
          { flag: "--regex", description: "使用正则表达式" },
          { flag: "--include", description: "包含的文件类型" }
        ]
      },
      {
        name: "bash",
        description: "执行命令行操作",
        usage: "bash <command>",
        options: [
          { flag: "--timeout", description: "超时时间 (秒)" },
          { flag: "--capture", description: "捕获输出" }
        ]
      },
      {
        name: "glob",
        description: "文件模式匹配",
        usage: "glob <pattern> [path]",
        options: [
          { flag: "--exclude", description: "排除的文件" },
          { flag: "--max-depth", description: "最大搜索深度" }
        ]
      }
    ]
  },
  {
    title: "配置选项",
    icon: <Settings className="h-5 w-5" />,
    commands: [
      {
        name: "配置文件格式",
        description: "JSON 或 YAML 格式的配置文件",
        usage: ".claude-code/config.{json,yaml}",
        options: [
          { flag: "api_key", description: "API 密钥" },
          { flag: "model", description: "使用的模型名称" },
          { flag: "max_tokens", description: "最大 token 数" },
          { flag: "temperature", description: "生成温度 (0-1)" },
          { flag: "timeout", description: "请求超时时间" }
        ]
      }
    ]
  },
  {
    title: "错误处理",
    icon: <AlertTriangle className="h-5 w-5" />,
    commands: [
      {
        name: "常见错误码",
        description: "API 返回的错误码和说明",
        usage: "Error Handling",
        options: [
          { flag: "401", description: "未授权，API 密钥无效" },
          { flag: "429", description: "请求过多，超出配额限制" },
          { flag: "500", description: "服务器内部错误" },
          { flag: "503", description: "服务暂时不可用" }
        ]
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
          <p className="text-xl text-muted-foreground mb-8">
            完整的命令参考、配置选项和错误处理指南
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
                placeholder="搜索 API 文档..."
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
                        
                        <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4">
                          <code className="text-sm font-mono">
                            {command.usage}
                          </code>
                        </div>

                        {command.options.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3">选项参数</h4>
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
            查看我们的教程和示例，了解更多实际应用场景
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tutorials">
                查看教程
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/examples">
                查看示例
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
