"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function ExampleContent() {
  const [copied, setCopied] = useState(false)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">场景描述</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              在这个示例中，我们将重构一个包含重复代码的组件。原始代码存在以下问题：
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span>代码重复，违反 DRY 原则</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span>命名不清晰，难以理解</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span>缺少错误处理</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span>性能可优化</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">原始代码</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Before Refactoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8"
                onClick={() => copyCode("const handleUserUpdate = (user) => {\n  if (user.name && user.email) {\n    const name = user.name.trim()\n    const email = user.email.trim()\n    if (name.length > 0 && email.includes('@')) {\n      updateUser(user.id, { name, email })\n    }\n  }\n}\n\nconst handleProductUpdate = (product) => {\n  if (product.title && product.description) {\n    const title = product.title.trim()\n    const desc = product.description.trim()\n    if (title.length > 0 && desc.length > 0) {\n      updateProduct(product.id, { title, description: desc })\n    }\n  }\n}")}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
              <pre className="text-sm font-mono bg-black/5 dark:bg-white/5 p-6 rounded-lg overflow-x-auto">
{`const handleUserUpdate = (user) => {
  if (user.name && user.email) {
    const name = user.name.trim()
    const email = user.email.trim()
    if (name.length > 0 && email.includes('@')) {
      updateUser(user.id, { name, email })
    }
  }
}

const handleProductUpdate = (product) => {
  if (product.title && product.description) {
    const title = product.title.trim()
    const desc = product.description.trim()
    if (title.length > 0 && desc.length > 0) {
      updateProduct(product.id, { title, description: desc })
    }
  }
}`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">使用 AI 工具重构</h2>
        <Card className="border-primary/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Play className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">运行重构命令</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4">
              <code className="text-sm font-mono">
                claude-code refactor --file src/components/UserForm.tsx --improve-readability --optimize-performance
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              这个命令将分析代码，识别问题，并提供改进建议
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">重构后的代码</h2>
        <Card className="border-green-500/50">
          <CardHeader>
            <CardTitle className="text-lg text-green-600 dark:text-green-400">After Refactoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8"
                onClick={() => copyCode("const validateAndTrim = (value: string) => {\n  const trimmed = value.trim()\n  return trimmed.length > 0 ? trimmed : null\n}\n\nconst validateEmail = (email: string) => {\n  return email.includes('@') ? email.trim() : null\n}\n\ninterface UpdateHandler<T> {\n  (id: string, data: Partial<T>): void\n}\n\nconst createUpdateHandler = <T extends Record<string, any>>(\n  updateFn: UpdateHandler<T>,\n  validators: Record<keyof T, (value: any) => any>\n) => {\n  return (item: { id: string } & Partial<T>) => {\n    const updates: Partial<T> = {}\n    \n    for (const [key, validator] of Object.entries(validators)) {\n      if (item[key]) {\n        const validated = validator(item[key])\n        if (validated !== null) {\n          updates[key as keyof T] = validated\n        }\n      }\n    }\n\n    if (Object.keys(updates).length > 0) {\n      updateFn(item.id, updates)\n    }\n  }\n}\n\nconst handleUserUpdate = createUpdateHandler(updateUser, {\n  name: validateAndTrim,\n  email: validateEmail\n})\n\nconst handleProductUpdate = createUpdateHandler(updateProduct, {\n  title: validateAndTrim,\n  description: validateAndTrim\n})")}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
              <pre className="text-sm font-mono bg-black/5 dark:bg-white/5 p-6 rounded-lg overflow-x-auto">
{`const validateAndTrim = (value: string) => {
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

const validateEmail = (email: string) => {
  return email.includes('@') ? email.trim() : null
}

interface UpdateHandler<T> {
  (id: string, data: Partial<T>): void
}

const createUpdateHandler = <T extends Record<string, any>>(
  updateFn: UpdateHandler<T>,
  validators: Record<keyof T, (value: any) => any>
) => {
  return (item: { id: string } & Partial<T>) => {
    const updates: Partial<T> = {}
    
    for (const [key, validator] of Object.entries(validators)) {
      if (item[key]) {
        const validated = validator(item[key])
        if (validated !== null) {
          updates[key as keyof T] = validated
        }
      }
    }

    if (Object.keys(updates).length > 0) {
      updateFn(item.id, updates)
    }
  }
}

const handleUserUpdate = createUpdateHandler(updateUser, {
  name: validateAndTrim,
  email: validateEmail
})

const handleProductUpdate = createUpdateHandler(updateProduct, {
  title: validateAndTrim,
  description: validateAndTrim
})`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">改进总结</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">消除代码重复</h4>
                  <p className="text-sm text-muted-foreground">
                    提取通用逻辑到可复用的函数中
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">改进类型安全</h4>
                  <p className="text-sm text-muted-foreground">
                    添加 TypeScript 接口和泛型
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">提升可维护性</h4>
                  <p className="text-sm text-muted-foreground">
                    清晰的函数命名和职责分离
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">增强可扩展性</h4>
                  <p className="text-sm text-muted-foreground">
                    高阶函数模式便于添加新的处理器
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="pt-8 border-t">
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <Link href="/examples">
              查看更多示例
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/tutorials">
              学习相关教程
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
