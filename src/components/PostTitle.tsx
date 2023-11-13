import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl mb-6 font-bold tracking-tighter leading-tight md:leading-none text-center">
      {children}
    </h1>
  )
}

export default PostTitle