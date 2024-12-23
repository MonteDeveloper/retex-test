import { useMenu } from "../contexts/MenuContext";
import HeaderButton from "./HeaderButton";

const MenuBurger = () => {
  const { isOpen } = useMenu();

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <HeaderButton
          title="Articoli"
          text="Trend, dati e novità del Terzo Settore."
          extraClasses="border-b border-r w-full"
        />
        <HeaderButton
          title="Storie"
          text="Letture ed approfondimenti dei fenomeni complessi."
          extraClasses="border-b border-r w-full"
        />
        <HeaderButton
          title="Interviste"
          text="Racconti reali di persone ed organizzazioni."
          extraClasses="border-b w-full"
        />
      </div>
      <div className="flex flex-col sm:flex-row">
        <HeaderButton
          title="Opinioni"
          text="Riflessioni e confronti dei nostri opinionisti."
          extraClasses="border-b border-r w-full"
        />
        <HeaderButton
          title="Podcast"
          text="Un luogo per dare voce ai protagonisti della sostenibilità."
          extraClasses="border-b border-r w-full"
        />
        <HeaderButton
          title="Bookazine"
          text="Una rivista da leggere e un libro da conservare."
          extraClasses="border-b w-full"
        />
      </div>
      <div className="sm:flex">
        <div className="flex w-full">
            <HeaderButton
            text="Chi siamo"
            extraClasses="border-b border-r w-full py-12"
            />
            <HeaderButton
            text="Comitato editoriale"
            extraClasses="border-b border-r w-full py-12"
            />
            <HeaderButton
            text="Servizi"
            extraClasses="border-b sm:border-r w-full py-12"
            />
        </div>
        <div className="flex w-full">
            <HeaderButton
            text="Agenda / Eventi"
            extraClasses="border-b border-r w-full py-12"
            />
            <HeaderButton
            text="Mappa dell’attivismo"
            extraClasses="border-b border-r w-full py-12"
            />
            <HeaderButton
            text="Inchieste crowdfunding"
            extraClasses="border-b w-full py-12"
            />
        </div>
      </div>
    </div>
  );
};

export default MenuBurger;
