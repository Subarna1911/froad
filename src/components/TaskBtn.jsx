export default function TaskButn({ children, className, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative outline-none
        px-4 py-2 rounded-lg whitespace-nowrap
        text-sm font-bold tracking-widest
        border bg-gray-200 shadow-lg
        transition-all duration-150 ease-out cursor-pointer
        hover:text-[#4c69d8]
        hover:shadow-[6px_8px_0px_#3658D3] hover:-translate-y-0.5
        active:shadow-[1px_2px_0px_#3658D3] active:translate-y-1 active:translate-x-0.5
        ${className}
      `}
    >
      {children}
    </button>
  );
}