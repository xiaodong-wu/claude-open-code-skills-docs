"use client"

import { Puzzle, Download, Globe, Book, Zap, Terminal, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: <Puzzle className="h-6 w-6" />,
    title: "可复用的 AI 能力",
    description: "Skills 是为 AI agent 设计的可复用能力包"
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "一键安装",
    description: "使用 npx skills add <owner/repo> 快速集成任何 skill"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "丰富的生态系统",
    description: "支持 Claude Code、Open Code、Cursor 等多个 agent"
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "社区驱动",
    description: "全球开发者贡献的 skill 库，涵盖各种使用场景"
  }
]

const skills = [
  { name: "vercel-react-best-practices", author: "vercel-labs", installs: "28.0K" },
  { name: "web-design-guidelines", author: "vercel-labs", installs: "21.2K" },
  { name: "remotion-best-practices", author: "remotion-dev", installs: "6.3K" },
  { name: "frontend-design", author: "anthropics", installs: "1.9K" },
  { name: "systematic-debugging", author: "obra/superpowers", installs: "364" },
  { name: "test-driven-development", author: "obra/superpowers", installs: "381" },
  { name: "crafting-effective-readmes", author: "softaworks", installs: "169" },
  { name: "database-schema-designer", author: "softaworks", installs: "144" },
  { name: "mcp-builder", author: "anthropics", installs: "406" }
]

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Puzzle className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Agent Skills</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Skills.sh - 开放式 AI Agent 技能目录
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            为 AI Agent 提供可复用能力包，一键安装，立即增强
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="https://skills.sh" target="_blank" rel="noopener noreferrer">
                访问 Skills.sh <Globe className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#how-to-use">
                如何使用 <ArrowRight className="ml-2 h-5 w-5" />
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
          <h2 className="text-3xl font-bold text-center mb-6" id="how-to-use">
            如何使用 Skills
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">安装 Skill</h3>
                <p className="text-muted-foreground mb-4">
                  在支持 AI agent 的目录中运行以下命令：
                </p>
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm">
                  <code>npx skills add &lt;owner/repo&gt;</code>
                </div>
                <p className="text-sm text-muted-foreground">
                  例如：<code className="font-mono">npx skills add vercel-labs/agent-skills</code>
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">自动集成</h3>
                <p className="text-muted-foreground">
                  Skills 会自动集成到支持的 AI agent 中，无需额外配置
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">开始使用</h3>
                <p className="text-muted-foreground">
                  安装完成后，重起 agent 即可在对话中使用新技能
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">热门 Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                  <a
                    href={`https://skills.sh/${skill.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    在 Skills.sh 查看
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">作者:</span> {skill.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">安装量:</span> {skill.installs}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/50 rounded-lg my-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">支持的 Agent</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { name: "Claude Code", url: "https://claude.com/product/claude-code", icon: <Zap /> },
              { name: "OpenCode", url: "https://opencode.ai", icon: <Terminal /> },
              { name: "Cursor", url: "https://cursor.sh", icon: <Book /> },
              { name: "GitHub Copilot", url: "https://github.com/features/copilot", icon: <Puzzle /> },
              { name: "Goose", url: "https://block.github.io/goose", icon: <Globe /> }
            ].map((agent, index) => (
              <a
                key={index}
                href={agent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all text-center"
              >
                <div className="p-2 bg-primary/10 rounded text-primary mb-3">
                  {agent.icon}
                </div>
                <span className="font-medium">{agent.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">为什么使用 Skills？</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">节省时间</h3>
            <p className="text-muted-foreground">
              无需从头开始编写复杂功能，直接使用经过验证的 skill 实现
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">提高质量</h3>
            <p className="text-muted-foreground">
              利用社区维护的 skill，确保代码和架构符合最佳实践
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">快速集成</h3>
            <p className="text-muted-foreground">
              一键安装，无需复杂的配置流程和依赖管理
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">持续更新</h3>
            <p className="text-muted-foreground">
              skill 由社区维护，获得最新的功能和 bug 修复
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">开始探索 Skills</h2>
          <p className="text-xl text-muted-foreground mb-8">
            访问 Skills.sh，探索数百个可用的 AI agent skills
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="https://skills.sh" target="_blank" rel="noopener noreferrer">
                浏览所有 Skills <Globe className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tutorials">
                查看教程 <Book className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
