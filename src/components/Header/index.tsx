import HeaderButton from "./components/HeaderButton";
import MenuBurger from "./components/MenuBurger";
import { useMenu } from "./contexts/MenuContext";

export default function Header() {
  const { toggleMenu } = useMenu();

  return (
    <>
      <div className="flex flex-col bg-white">
        <div className="py-6 sm:hidden" />

        <div className="flex border-y border-black sm:px-4 sm:justify-between">
          <div className="flex w-full">
            <HeaderButton text="Contribuisci" extraClasses="w-full sm:w-auto" />
            <HeaderButton
              text="Abbonati"
              extraClasses="border-l w-full sm:w-auto sm:border-none"
            />
          </div>
          <HeaderButton
            text="Accedi"
            defaultIcon="fa-regular fa-user"
            extraClasses="hidden border-l w-full sm:w-auto sm:border-none sm:flex"
          />
        </div>

        <div className="flex justify-between border-b border-black">
          <HeaderButton
            defaultIcon="fa-solid fa-bars"
            activeIcon="fa-solid fa-xmark"
            onClick={toggleMenu}
            extraClasses="border-r aspect-square text-[#E63036]"
          />
          <HeaderButton
            defaultIcon="fa-solid fa-magnifying-glass"
            extraClasses="border-l aspect-square text-[#E63036]"
          />
        </div>
      </div>

      <MenuBurger />
    </>
  );
}
