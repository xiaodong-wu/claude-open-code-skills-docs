import { allExamples } from "@/data/examples"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, Play, Terminal } from "lucide-react"
import ExampleContent from "./example-content"

export function generateStaticParams() {
  return allExamples.map((example) => ({
    id: example.id,
  }))
}

export default function ExampleDetailPage({ params }: { params: { id: string } }) {
  const example = allExamples.find(e => e.id === params.id)

  if (!example) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">示例未找到</h1>
        <Button asChild>
          <Link href="/examples">返回示例列表</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/examples">
              <ChevronLeft className="mr-2 h-4 w-4" />
              返回示例列表
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <div>
              <span className="text-sm text-muted-foreground">{example.difficulty}示例</span>
              <h1 className="text-4xl font-bold">{example.title}</h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground">
            {example.description}
          </p>
        </div>

        <ExampleContent />
      </div>
    </div>
  )
}
