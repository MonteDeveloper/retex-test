import { useState } from "react";

interface Props {
  text?: string;
  title?: string;
  defaultIcon?: string;
  activeIcon?: string;
  extraClasses?: string;
  onClick?: () => void;
}

export default function HeaderButton({
  text,
  title,
  defaultIcon,
  activeIcon,
  extraClasses = "",
  onClick,
}: Props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick();
  };

  const transitionClasses = "transition-opacity duration-200 ease-in-out";
  const hoverClasses = "hover:opacity-70";

  return (
    <button
      className={`flex items-center py-2 px-5 border-black ${title ? 'justify-start sm:pt-52' : 'justify-center'} ${hoverClasses} ${transitionClasses} ${extraClasses}`}
      onClick={handleClick}
    >
      <div className={`flex items-center justify-center`}>
        {defaultIcon && <i className={`${activeIcon && isActive ? activeIcon : defaultIcon} w-6`} />}
        <div className={`flex flex-col ${title ? 'items-start sm:gap-4' : 'items-center'}`}>
          {title && <span className="text-xl sm:text-[48px] font-bold block">{title}</span>}
          {text && <span className={`${title ? 'text-start' : ''} `}>{text}</span>}
        </div>
      </div>
    </button>
  );
}
