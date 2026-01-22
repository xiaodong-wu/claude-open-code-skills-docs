import { allTutorials } from "@/data/tutorials"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, Terminal, Book, AlertCircle } from "lucide-react"
import TutorialContent from "./tutorial-content"

export function generateStaticParams() {
  return allTutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }))
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = allTutorials.find(t => t.slug === params.slug)

  if (!tutorial) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">教程未找到</h1>
        <Button asChild>
          <Link href="/tutorials">返回教程列表</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/tutorials">
              <ChevronLeft className="mr-2 h-4 w-4" />
              返回教程列表
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
              {tutorial.tool}
            </span>
            <span className="text-sm text-muted-foreground">
              {tutorial.duration}
            </span>
            <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">
              {tutorial.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{tutorial.title}</h1>
          <p className="text-xl text-muted-foreground">{tutorial.description}</p>
        </div>

        <TutorialContent slug={params.slug} />
      </div>
    </div>
  )
}
