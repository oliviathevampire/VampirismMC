export function List({ items, ordered }: { items: string[]; ordered?: boolean }) {
    const ListTag = ordered ? 'ol' : 'ul';
    return (
      <ListTag>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ListTag>
    );
}