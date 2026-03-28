export default function CardButton({ children, className, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative outline-none
        px-4 py-2 rounded-full whitespace-nowrap
        text-sm font-bold tracking-widest
        border-2 border-secondary-dark
        transition-all duration-150 ease-out cursor-pointer
        hover:-translate-y-0.5
        active:translate-y-1 active:translate-x-0.5
        ${className}
      `}
    >
      {children}
    </button>
  );
}