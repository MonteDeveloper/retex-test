import { useWindowSize } from "../../WindowsSizeContext";
import ArticleAuthor, { Author } from "./components/ArticleAuthor";
import ArticleTag from "./components/ArticleTag";

interface ArticlePreviewProps {
  bgImage?: string;
  bgColor?: string;
  height?: string;
  width?: string;
  title: string;
  author: Author;
  publicationDate: string;
  authorColLayout?: boolean;
  route?: string;
  type?:
    | "trend"
    | "video"
    | "imagePresentation"
    | "interview"
    | "base"
    | "sponsor";
  smallHeight?: boolean;
  textColor?: string;
  interviewedName?: string;
}

export default function ArticlePreview({
  bgImage,
  bgColor = "#FFF",
  height,
  width = "100%",
  title,
  author,
  publicationDate,
  authorColLayout = false,
  route,
  type = "base",
  smallHeight,
  textColor,
  interviewedName,
}: ArticlePreviewProps) {
  const renderContent = () => {
    const { isMobile } = useWindowSize();

    switch (type) {
      case "trend":
        return (
          <div
            className={"relative p-6 bg-cover bg-center flex items-end text-white"}
            style={{
              backgroundImage: `url("/images/${bgImage}")`,
              height: isMobile ? "326px" : height,
              width: isMobile ? "100%" : width,
              backgroundColor: bgColor,
              color: textColor ?? undefined,
            }}
          >
            {bgImage && <div className="absolute inset-0 bg-black opacity-40"></div>}
            <div className="flex flex-col items-start gap-3 z-10">
              <ArticleTag name="Migranti" />
              <div
                className={
                  "text-[24px] sm:text-[40px] font-bold leading-[32px] sm:leading-[54px]"
                }
              >
                {title}
              </div>
              <ArticleAuthor
                author={author}
                date={publicationDate}
                columnLayout={authorColLayout}
              />
              {route && !isMobile && <i className="fa-solid fa-arrow-right text-lg"></i>}
            </div>
          </div>
        );

      case "video":
        return (
          <div
            className={
              "relative p-6 bg-cover bg-center flex items-end sm:items-start sm:justify-end sm:text-white border-b border-black sm:border-none"
            }
            style={{
              backgroundImage: isMobile
                ? undefined
                : `url("/images/${bgImage}")`,
              height: isMobile ? undefined : height,
              width: isMobile ? "100%" : width,
              backgroundColor: bgColor,
              color: textColor ?? undefined,
            }}
          >
            {bgImage && !isMobile && <div className="absolute inset-0 bg-black opacity-40"></div>}
            <div className="flex flex-col items-start sm:w-2/5 gap-3 z-10">
              {isMobile && (
                <div
                  className="flex justify-end items-end w-full aspect-video bg-cover border border-black"
                  style={{
                    backgroundImage: `url("/images/${bgImage}")`,
                  }}
                >
                  <div className="bg-white w-8 aspect-square flex justify-center items-center">
                    <i className="fa-solid fa-play text-xs"></i>
                  </div>
                </div>
              )}
              <ArticleTag name="Migranti" />
              <div
                className={
                  "text-[20px] sm:text-[24px] font-bold leading-[30px] sm:leading-[32px]"
                }
              >
                {title}
              </div>
              <ArticleAuthor
                author={author}
                date={publicationDate}
                columnLayout={authorColLayout}
              />
              {route && !isMobile && <i className="fa-solid fa-arrow-right text-lg"></i>}
            </div>
          </div>
        );

      case "interview":
        return (
          <div
            className={
              "relative p-6 bg-cover bg-center flex items-end sm:items-start sm:justify-end sm:text-white border-b border-black sm:border-none"
            }
            style={{
              backgroundImage: isMobile
                ? undefined
                : `url("/images/${bgImage}")`,
              height: isMobile ? undefined : height,
              width: isMobile ? "100%" : width,
              backgroundColor: bgColor,
              color: textColor ?? undefined,
            }}
          >
            {bgImage && !isMobile && <div className="absolute inset-0 bg-black opacity-40"></div>}
            <div className={`flex flex-col items-start sm:w-1/2 gap-4 z-10`}>
              {isMobile && (
                <div
                  className="relative flex justify-start p-6 items-end w-full aspect-square bg-cover border border-black"
                  style={{
                    backgroundImage: `url("/images/${bgImage}")`,
                  }}
                >
                  {bgImage && <div className="absolute inset-0 bg-black opacity-40"></div>}
                  {interviewedName && (
                    <div className="flex flex-col gap-1 items-start text-white text-[24px] z-20">
                      <p className="font-extralight">Intervista a</p>
                      <p className="font-semibold ">{interviewedName}</p>
                    </div>
                  )}
                </div>
              )}
              <ArticleTag name="Migranti" />
              <div
                className={
                  "text-[20px] sm:text-[24px] font-bold leading-[30px] sm:leading-[32px]"
                }
              >
                {title}
              </div>
              <ArticleAuthor
                author={author}
                date={publicationDate}
                columnLayout={authorColLayout}
              />
              {route && !isMobile && <i className="fa-solid fa-arrow-right text-lg"></i>}
            </div>
          </div>
        );

      case "imagePresentation":
        return (
          <div
            className={
              "relative p-6 bg-cover bg-center flex items-end sm:text-white border-b border-black sm:border-none"
            }
            style={{
              backgroundImage: isMobile
                ? undefined
                : `url("/images/${bgImage}")`,
              height: isMobile ? undefined : height,
              width: isMobile ? "100%" : width,
              backgroundColor: bgColor,
              color: textColor ?? undefined,
            }}
          >
            {bgImage && !isMobile && <div className="absolute inset-0 bg-black opacity-40"></div>}
            <div className="flex flex-col items-start gap-3 z-10">
              {isMobile && (
                <div
                  className="flex justify-end items-end w-full aspect-video bg-cover border border-black"
                  style={{
                    backgroundImage: `url("/images/${bgImage}")`,
                  }}
                >
                  <div className="flex flex-col gap-3 items-end">
                    <ArticleTag icon="fa-regular fa-image" />
                    <div className="bg-white w-8 aspect-square flex justify-center items-center">
                      <i className="fa-solid fa-play text-xs"></i>
                    </div>
                  </div>
                </div>
              )}
              <ArticleTag name="Migranti" />
              <div
                className={
                  "text-[20px] sm:text-[24px] font-bold leading-[30px] sm:leading-[32px]"
                }
              >
                {title}
              </div>
              <ArticleAuthor
                author={author}
                date={publicationDate}
                columnLayout={authorColLayout}
              />
              {route && !isMobile && <i className="fa-solid fa-arrow-right text-lg"></i>}
            </div>
          </div>
        );

      case "sponsor":
        return (
          <div
            className={
              "relative p-6 bg-cover bg-center flex items-end sm:text-black border-b border-black sm:border-none"
            }
            style={{
              backgroundImage: isMobile
                ? undefined
                : `url("/images/${bgImage}")`,
              height: isMobile ? undefined : height,
              width: isMobile ? "100%" : width,
              backgroundColor: "white",
            }}
          >
            {bgImage && !isMobile && <div className="absolute inset-0 bg-black opacity-40"></div>}
            <div className="flex flex-col items-start gap-3 z-10">
              <div className="flex gap-2 text-[#E63036] items-center">
                <i className="fa-solid fa-bullhorn"></i>
                <span className="uppercase font-semibold">Sponsored</span>
              </div>
              <div
                className={
                  "text-[14px] sm:text-[24px] font-bold leading-[24px] sm:leading-[32px]"
                }
              >
                {title}
              </div>
              <ArticleAuthor
                author={author}
                date={publicationDate}
                columnLayout={authorColLayout}
              />
              {route && !isMobile && <i className="fa-solid fa-arrow-right text-lg"></i>}
            </div>
          </div>
        );

      case "base":
      default:
        return (
          <div
            className={
              `relative p-6 bg-cover bg-center flex items-end sm:text-white border-b border-black sm:border-none`
            }
            style={{
              backgroundImage: isMobile
                ? undefined
                : `url("/images/${bgImage}")`,
              height: isMobile ? undefined : height,
              width: isMobile ? "100%" : width,
              backgroundColor: bgColor,
              color: textColor ?? undefined,
            }}
          >
            {bgImage && !isMobile && <div className="absolute inset-0 bg-black opacity-40"></div>}
            <div className={`flex flex-col items-start gap-3 z-10 ${smallHeight ? '!flex-row justify-between items-center' : ''}`}>
              <div className="flex flex-col items-start gap-3">
                <ArticleTag name="Migranti" />
                <div
                  className={
                    `text-[14px] sm:text-[24px] font-bold leading-[24px] sm:leading-[32px] ${smallHeight ? '!text-[18px] !leading-[28px]' : ''}`
                  }
                >
                  {title}
                </div>
                <ArticleAuthor
                  author={author}
                  date={publicationDate}
                  columnLayout={authorColLayout}
                />
              </div>
              {route && !isMobile && <i className="fa-solid fa-arrow-right text-lg"></i>}
            </div>
          </div>
        );
    }
  };

  return <>{renderContent()}</>;
}
