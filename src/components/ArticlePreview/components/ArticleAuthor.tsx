export interface Author {
  name: string;
  image?: string;
}

interface ArticleAuthorProps {
  author: Author;
  date: string;
  columnLayout?: boolean;
}

export default function ArticleAuthor({ author, date, columnLayout = false }: ArticleAuthorProps) {
  return (
    <div className={`flex ${columnLayout ? "flex-col items-start" : "items-center"} gap-4 `}>
      <div className="w-[32px] sm:w-[48px] aspect-square rounded-full overflow-hidden">
        {author.image ? (
          <img
            src={`/images/${author.image}`}
            alt={author.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            {author.name?.[0]}{" "}
          </div>
        )}
      </div>

      <div>
        <p>{author.name}</p>
        <p className="text-[10px]">{date}</p>
      </div>
    </div>
  );
}
