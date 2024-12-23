import { useWindowSize } from "../../WindowsSizeContext";

interface QuoteSectionProps {
  text: string;
  bgImage: string;
  cit: string;
}

export default function QuoteSection({
  text,
  bgImage,
  cit,
}: QuoteSectionProps) {
  const { isMobile } = useWindowSize();

  return (
    <div
      className="relative flex flex-col gap-2 justify-start px-12 py-6 sm:px-32 sm:py-20 w-full bg-[#F4F4F4] bg-cover bg-center sm:text-white"
      style={{
        backgroundImage: isMobile ? undefined : `url("/images/${bgImage}")`,
      }}
    >
      <i className="fa-solid fa-quote-left absolute top-4 left-4 text-3xl sm:text-8xl text-[#0101010D]"></i>
      <p className="text-[24px] sm:text-[40px] font-bold leading-[32px] sm:leading-[46px]">
        {text}
      </p>
      <p className="text-[14px] sm:text-[16px] italic">{cit}</p>
    </div>
  );
}
