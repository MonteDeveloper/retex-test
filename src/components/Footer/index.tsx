import HeaderButton from "../Header/components/HeaderButton";

export default function Footer() {

    const linkTextList = [
        "Il Gruppo",
        "Note Legali",
        "Chi Siamo",
        "Condizioni d'uso",
        "Privacy",
        "Scrivici",
        "Pubblicità",
    ]

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between p-6 gap-4 sm:gap-10">
        <div className="flex flex-col items-start sm:flex-row sm:flex-wrap gap-3 sm:gap-6 sm:items-center">
            {
                linkTextList.map((linkText, index) => (
                    <HeaderButton key={index} text={linkText} extraClasses="!p-0 font-bold text-[16px] sm:text-[14px] sm:font-normal text-nowrap" />
                ))
            }
        </div>
        <div className="flex items-center">
            <span className="text-[14px] pe-6 text-nowrap">© 1994-2022 Vita Società Editoriale S.p.A.</span>
        </div>
    </div>
  );
}
