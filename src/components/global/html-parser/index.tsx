import parse from "html-react-parser"
import { useEffect, useState } from "react"

type HtmlParserProps = {
  html: string
}

export const HtmlParser = ({ html }: HtmlParserProps) => {
  // Avoid hydration error with SSR by setting mounted to true on the client
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="[&_h1]:text-4xl [&_h2]:text-3xl [&_blockqoute]:italic [&_iframe]:aspect-video [&_h3]:text-2xl text-themeTextGray flex flex-col gap-y-3">
      {mounted && typeof html === "string" && parse(html)}
    </div>
  )
}
