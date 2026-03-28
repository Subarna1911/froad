export default function Button({ children, className, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative outline-none
        px-8 py-4 rounded-full whitespace-nowrap
        text-sm font-bold tracking-widest
        border-2 border-secondary-dark
        shadow-[4px_6px_0px_#3A001D]
        transition-all duration-150 ease-out cursor-pointer
        hover:shadow-[6px_8px_0px_#2d0a1e] hover:-translate-y-0.5
        active:shadow-[1px_2px_0px_#2d0a1e] active:translate-y-1 active:translate-x-0.5
        ${className}
      `}
    >
      {children}
    </button>
  );
}