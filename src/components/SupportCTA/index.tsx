export default function SupportCTA() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-3 p-4 py-8 sm:py-16 sm:px-8 bg-[#F4F1DE] text-black">
      <h2 className="!text-[24px] !sm:text-[40px] font-bold">
        Il tuo supporto è fondamentale
      </h2>
      <button className="flex gap-2">
        <span>Dai il tuo contributo</span>
        <i className="fa-solid fa-arrow-right text-lg"></i>
      </button>
    </div>
  );
}
