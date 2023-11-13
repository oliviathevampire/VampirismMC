export function Heading({ level, text }: { level: 1 | 2 | 3 | 4 | 5 | 6; text: string }) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag className={`mdx-h${level}`}>{text}</Tag>;
}