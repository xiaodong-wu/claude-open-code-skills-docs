"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Copy, Check, Terminal, Book, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function TutorialContent() {
  const [copied, setCopied] = useState(false)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Book className="h-6 w-6" />
          简介
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          本教程将带你了解 Claude Code 和 Open Code 的核心功能和使用方法。通过实际示例，
          你将掌握如何使用这些工具来提高编程效率。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="h-6 w-6" />
          快速开始
        </h2>
        
        <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <code className="text-sm font-mono">安装命令</code>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => copyCode("npm install -g @anthropic-ai/claude-code")}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <pre className="text-sm font-mono text-foreground/90">
            npm install -g @anthropic-ai/claude-code
          </pre>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          安装完成后，你需要配置 API 密钥才能开始使用。
        </p>

        <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <code className="text-sm font-mono">配置 API 密钥</code>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => copyCode("export ANTHROPIC_API_KEY=your-api-key")}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <pre className="text-sm font-mono text-foreground/90">
            export ANTHROPIC_API_KEY=your-api-key
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">常用命令</h2>
        
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg">启动工具</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm font-mono bg-black/5 dark:bg-white/5 p-4 rounded">
              claude-code
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              在项目目录中运行此命令启动交互式会话
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg">分析代码</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm font-mono bg-black/5 dark:bg-white/5 p-4 rounded">
              analyze src/components/
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              分析指定目录中的代码，提供优化建议
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">生成测试</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm font-mono bg-black/5 dark:bg-white/5 p-4 rounded">
              generate tests --coverage 80
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              为指定代码生成测试，目标覆盖率为 80%
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle className="h-6 w-6" />
          注意事项
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-bold">1</span>
            </div>
            <p className="text-muted-foreground">
              确保你的 API 密钥安全，不要提交到版本控制系统
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-bold">2</span>
            </div>
            <p className="text-muted-foreground">
              大型项目可能需要更多的 API 调用，请注意配额限制
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-bold">3</span>
            </div>
            <p className="text-muted-foreground">
              建议在非生产环境中测试 AI 生成的代码
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">下一步</h2>
        <p className="text-muted-foreground mb-6">
          完成本教程后，你可以继续学习更高级的主题：
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-base">进阶教程</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/tutorials">
                  查看进阶教程 →
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-base">API 文档</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/api">
                  查看 API 文档 →
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
