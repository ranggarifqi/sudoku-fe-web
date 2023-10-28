type Props = {
  children?: string;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button className="px-4 py-2 bg-[#00A86B] rounded-sm" onClick={onClick}>
      <span className="text-white">{children ?? "Click me"}</span>
    </button>
  );
};

export default Button;
