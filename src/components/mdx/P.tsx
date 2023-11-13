import React from "react"

export default function P({ children }: { children?: React.ReactNode }) {
  return <p className="mdx-p" suppressHydrationWarning={true}>{children}</p>
}