import CoverImage from '@components/CoverImage'
import PostTitle from '@components/PostTitle'

type Props = {
  title: string
  coverImage: string
}

const PostHeader = ({ title, coverImage }: Props) => {
  return (
    <>
      <div className="mb-7 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
    </>
  )
}

export default PostHeader