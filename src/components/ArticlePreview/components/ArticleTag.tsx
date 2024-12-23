interface ArticleTagProps {
  name?: string;
  icon?: string;
}

export default function ArticleTag({ name, icon }: ArticleTagProps) {
  const isIconOnly = !!icon && !name;

  return (
    <div
      className={`bg-white px-2 sm:px-4 text-center border rounded-md border-black shadow-[-2px_2px_0px_0px_rgba(0,0,0,1)] ${
        isIconOnly ? "w-12 aspect-square flex items-center justify-center" : ""
      }`}
    >
      {name && (
        <span className="text-[10px] uppercase font-medium text-black">
          {name}
        </span>
      )}
      {icon && <i className={icon}></i>}
    </div>
  );
}
