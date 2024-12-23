import { useWindowSize } from "../../WindowsSizeContext";

interface Blog {
  authorImage: string;
  authorName: string;
  blogName: string;
}

const blogs: Blog[] = [
  { authorImage: "author-1.jpg", authorName: "Author 1", blogName: "Blog 1" },
  { authorImage: "author-1.jpg", authorName: "Author 2", blogName: "Blog 2" },
  { authorImage: "author-1.jpg", authorName: "Author 3", blogName: "Blog 3" },
  { authorImage: "author-1.jpg", authorName: "Author 4", blogName: "Blog 4" },
  { authorImage: "author-1.jpg", authorName: "Author 5", blogName: "Blog 5" },
];

export default function AllBlogs() {
  const { isMobile } = useWindowSize();

  const displayedBlogs = isMobile ? blogs.slice(0, 4) : blogs;

  return (
    <div className="flex flex-wrap sm:flex-nowrap w-full border-black">
      <div
        className={`p-4 flex flex-col items-center justify-center gap-4 w-1/2 sm:w-full aspect-square border-black border-r border-t ${!isMobile ? "border-b" : ""}`}
      >
        <h2 className="text-[#E63036] font-bold text-[24px] sm:text-[40px]">
          {" "}
          Il Blog
        </h2>
      </div>
      {displayedBlogs.map((blog, index) => {
        const isLastColumn = isMobile ? (index) % 2 === 0 : index === displayedBlogs.length - 1;
        const isLastRow = isMobile && index >= displayedBlogs.length - 2;

        return (
          <div
            key={index}
            className={`p-4 flex flex-col items-center justify-center gap-4 w-1/2 sm:w-full aspect-square border-black border-t ${isLastRow || !isMobile ? "border-b" : ""}
            } ${isLastColumn ? "" : "border-r"}`}
          >
            <img
              src={`/images/${blog.authorImage}`}
              alt={blog.authorName}
              className="w-[84px] aspect-square rounded-full object-cover"
            />
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold">{blog.authorName}</span>
              <span className="text-sm">{blog.blogName}</span>
            </div>
          </div>
        );
      })}
      {isMobile && (
        <div className="p-4 flex flex-col items-center justify-center w-1/2 sm:w-full aspect-square border-black border-b">
          <span className="text-center text-[16px] font-bold">Tutti i blog</span>
          <i className="fa-solid fa-arrow-right text-2xl"></i>
        </div>
      )}
    </div>
  );
}
