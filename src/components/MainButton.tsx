type Params = {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit";
};

export const MainButton = ({ onClick, text, type = "button" }: Params) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg`}
    >
      {text}
    </button>
  );
};
