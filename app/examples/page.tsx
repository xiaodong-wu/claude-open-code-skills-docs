import { Play, Code2, Zap, FileCode, Lightbulb, Rocket } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const examples = [
  {
    id: "code-refactoring",
    title: "代码重构示例",
    description: "展示如何使用 AI 工具重构现有代码，提高可读性和性能",
    tool: "Both",
    difficulty: "中级",
    duration: "15 分钟",
    icon: <Code2 className="h-6 w-6" />,
    tags: ["refactoring", "optimization", "code-quality"]
  },
  {
    id: "bug-fixing",
    title: "Bug 修复演示",
    description: "通过实际案例展示如何定位、分析和修复代码中的 Bug",
    tool: "Both",
    difficulty: "初级",
    duration: "10 分钟",
    icon: <Zap className="h-6 w-6" />,
    tags: ["debugging", "bug-fixing", "troubleshooting"]
  },
  {
    id: "skill-creation",
    title: "自定义 Skill 开发",
    description: "创建一个自定义 Skill 来自动化重复性编程任务",
    tool: "Open Code",
    difficulty: "高级",
    duration: "20 分钟",
    icon: <FileCode className="h-6 w-6" />,
    tags: ["skills", "automation", "customization"]
  },
  {
    id: "test-generation",
    title: "自动测试生成",
    description: "使用 AI 工具为现有代码生成完整的测试套件",
    tool: "Claude Code",
    difficulty: "中级",
    duration: "12 分钟",
    icon: <Lightbulb className="h-6 w-6" />,
    tags: ["testing", "unit-tests", "coverage"]
  },
  {
    id: "api-integration",
    title: "API 集成示例",
    description: "演示如何集成外部 API 并处理常见集成问题",
    tool: "Both",
    difficulty: "中级",
    duration: "18 分钟",
    icon: <Rocket className="h-6 w-6" />,
    tags: ["api", "integration", "rest"]
  },
  {
    id: "documentation",
    title: "文档自动生成",
    description: "从代码自动生成高质量的文档和注释",
    tool: "Both",
    difficulty: "初级",
    duration: "8 分钟",
    icon: <Play className="h-6 w-6" />,
    tags: ["documentation", "comments", "auto-doc"]
  }
]

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Play className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">交互示例</h1>
          <p className="text-xl text-muted-foreground mb-8">
            通过实际案例学习如何使用 Claude Code 和 Open Code 解决实际问题
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((example) => (
              <Card key={example.id} className="hover:shadow-lg transition-all hover:border-primary/50 group">
                <Link href={`/examples/${example.id}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {example.icon}
                      </div>
                      <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {example.difficulty}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {example.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      {example.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {example.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-muted rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {example.tool}
                        </span>
                        <span>{example.duration}</span>
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 px-3">
                        开始学习
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50 rounded-lg my-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">为什么学习这些示例？</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">实践导向</h3>
              <p className="text-sm text-muted-foreground">
                所有示例都基于真实的开发场景，可直接应用到你的项目中
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">最佳实践</h3>
              <p className="text-sm text-muted-foreground">
                学习行业专家的使用技巧和工作流程
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">即学即用</h3>
              <p className="text-sm text-muted-foreground">
                逐步演示每个步骤，让你快速掌握并应用
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">准备好开始了吗？</h2>
          <p className="text-xl text-muted-foreground mb-8">
            选择一个示例，开始你的 AI 编程之旅
          </p>
          <Button size="lg" asChild>
            <Link href="/examples/code-refactoring">
              开始第一个示例
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
