import { FileCode, Puzzle, Wrench, Layout, Terminal, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OpenCodePage() {
  const features = [
    {
      icon: <Puzzle className="h-6 w-6" />,
      title: "Skills 系统",
      description: "强大的插件系统，支持自定义 Skills 来扩展功能"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "丰富的工具",
      description: "内置多种工具，支持文件操作、代码搜索、Git 管理等"
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "多编辑器支持",
      description: "可与 VS Code、Vim、Emacs 等主流编辑器无缝集成"
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "命令行友好",
      description: "灵活的命令交互，支持批处理和自动化脚本"
    }
  ]

  const skills = [
    {
      name: "代码生成",
      description: "基于模板和上下文生成代码"
    },
    {
      name: "代码分析",
      description: "深入分析代码结构和质量"
    },
    {
      name: "文件操作",
      description: "智能的文件创建、修改和删除"
    },
    {
      name: "Git 集成",
      description: "版本控制操作和代码审查"
    },
    {
      name: "测试生成",
      description: "自动生成单元测试和集成测试"
    },
    {
      name: "文档生成",
      description: "从代码自动生成文档"
    }
  ]

  const tools = [
    "Read - 读取文件内容",
    "Write - 写入文件内容",
    "Grep - 搜索文件内容",
    "Bash - 执行命令行操作",
    "Glob - 文件模式匹配",
    "Edit - 编辑文件"
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
          <p className="text-xl text-muted-foreground mb-8">
            灵活的 AI 编程工具，支持自定义 Skills 系统，可与多种编辑器集成
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tutorials?tool=open-code">
                查看教程 <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/anomalyco/opencode" target="_blank" rel="noopener noreferrer">
                GitHub 仓库
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

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">内置 Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/50 rounded-lg my-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">可用工具</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                <Wrench className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-6">开发自定义 Skill</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Open Code 允许你创建自定义 Skills 来扩展功能。每个 Skill 都是一组预定义的任务和工具调用。
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="bg-black/5 dark:bg-white/5 rounded-lg p-6 font-mono text-sm">
            <pre className="whitespace-pre-wrap">
{`// 示例：自定义 Skill 配置
{
  "name": "code-review",
  "description": "代码审查技能",
  "tasks": [
    {
      "description": "分析代码质量",
      "tools": ["read", "grep", "analyze"]
    },
    {
      "description": "生成审查报告",
      "tools": ["write", "format"]
    }
  ]
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">开始使用 Open Code</h2>
          <p className="text-xl text-muted-foreground mb-8">
            查看完整教程，学习如何安装、配置和使用 Open Code
          </p>
          <Button size="lg" asChild>
            <Link href="/tutorials">
              浏览教程 <Play className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
