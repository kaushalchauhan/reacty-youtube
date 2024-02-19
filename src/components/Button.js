const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-2 rounded-lg bg-gray-200 capitalize hover:bg-gray-400">
        {name}
      </button>
    </div>
  );
};

export default Button;
