import AllBlogs from "../components/AllBlogs";
import ArticlePreview from "../components/ArticlePreview";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuoteSection from "../components/QuoteSection";
import SupportCTA from "../components/SupportCTA";
import ThemeSelection from "../components/ThemeSelection";
import { ThemeProvider } from "../components/ThemeSelection/contexts/ThemeContext";
import { useWindowSize } from "../WindowsSizeContext";

export default function HomePage() {
  const { isMobile } = useWindowSize();

  return (
    <div className="flex flex-col">
      <Header />
      <div className="max-w-[1440px] mx-auto ">
        <ThemeProvider>
          <ThemeSelection />
        </ThemeProvider>

        <ArticlePreview
          bgImage="article-1.jpg"
          title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
          author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
          publicationDate={"29 Giugno 2022"}
          type="trend"
          height="506px"
        />
        <div className="flex flex-col sm:flex-row sm:h-[845px]">
          <ArticlePreview
            bgImage="article-2.png"
            title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
            author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
            publicationDate={"29 Giugno 2022"}
            type="imagePresentation"
            height="100%"
            width={isMobile ? "100%" : "60%"}
          />
          <div className="flex flex-col sm:w-[40%]">
            <ArticlePreview
              bgImage="article-3.jpg"
              title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
              author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
              publicationDate={"29 Giugno 2022"}
              type="base"
              height={isMobile ? undefined : "60%"}
            />
            <ArticlePreview
              bgImage="article-4.png"
              title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
              author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
              publicationDate={"29 Giugno 2022"}
              type="base"
              height={isMobile ? undefined : "40%"}
            />
          </div>
        </div>
        <SupportCTA />
        <div className="flex flex-col sm:flex-row">
          <ArticlePreview
            title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
            author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
            publicationDate={"29 Giugno 2022"}
            bgColor="#E63036"
            textColor="white"
            type="base"
            height="436px"
          />
          <ArticlePreview
            bgImage="article-5.jpg"
            title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
            author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
            publicationDate={"29 Giugno 2022"}
            type="base"
            height="436px"
          />
          <ArticlePreview
            bgImage="article-6.jpg"
            title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
            author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
            publicationDate={"29 Giugno 2022"}
            type="base"
            height="436px"
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <ArticlePreview
            bgImage="article-7.jpg"
            title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
            author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
            publicationDate={"29 Giugno 2022"}
            type="base"
            height="436px"
            width={`${100 / 3}%`}
          />
          <ArticlePreview
            bgImage="article-8.jpg"
            title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
            author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
            publicationDate={"29 Giugno 2022"}
            type="interview"
            interviewedName="Mariangela Cassano"
            height="436px"
            width={`${(100 / 3) * 2}%`}
          />
        </div>
        <QuoteSection
          text="Essere troppo seri non è cosa molto seria"
          cit="[ Detto Africano ]"
          bgImage={"quote-image.png"}
        />
        <AllBlogs />
        <ArticlePreview
          bgImage="article-9.png"
          title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
          author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
          publicationDate={"29 Giugno 2022"}
          type="video"
          height="436px"
          authorColLayout
          route="/test"
        />
        <div className="flex flex-col sm:flex-row">
          <ArticlePreview
            title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
            author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
            publicationDate={"29 Giugno 2022"}
            type="sponsor"
            height="372px"
            route="/test"
          />
          <ArticlePreview
            bgImage="article-10.jpg"
            title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
            author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
            publicationDate={"29 Giugno 2022"}
            type="base"
            height="372px"
            route="/test"
          />
          <ArticlePreview
            bgColor="#E63036"
            textColor="white"
            title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
            author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
            publicationDate={"29 Giugno 2022"}
            type="base"
            height="372px"
            route="/test"
          />
          <ArticlePreview
            bgImage="article-11.jpg"
            title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
            author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
            publicationDate={"29 Giugno 2022"}
            type="base"
            height="372px"
            route="/test"
          />
        </div>
        {
          !isMobile && 
          <div className="flex">
            <div className="flex w-full flex-col min-h-[746px]">
              <ArticlePreview
                bgImage="article-12.jpg"
                title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
                author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
                publicationDate={"29 Giugno 2022"}
                type="base"
                height="100%"
                smallHeight
                route="/test1"
              />
              <ArticlePreview
                bgImage="article-13.jpg"
                title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
                author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
                publicationDate={"29 Giugno 2022"}
                type="base"
                smallHeight
                height="100%"
                route="/test1"
              />
              <ArticlePreview
                bgImage="article-14.jpg"
                title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
                author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
                publicationDate={"29 Giugno 2022"}
                type="base"
                smallHeight
                height="100%"
                route="/test1"
              />
              <ArticlePreview
                bgImage="article-15.jpg"
                title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
                author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
                publicationDate={"29 Giugno 2022"}
                type="base"
                smallHeight
                height="100%"
                route="/test1"
              />
            </div>
            <div className="flex w-full flex-col min-h-[746px]">
              <ArticlePreview
                bgImage="article-16.png"
                title={"Roccella Jonica, la Lampedusa che l'Italia ignora"}
                author={{ name: "Di Alessandro Puglia", image: "author-1.jpg" }}
                publicationDate={"29 Giugno 2022"}
                type="base"
                height="100%"
                route="/test1"
              />
            </div>
          </div>
        }
      <Footer />
      </div>
    </div>
  );
}
