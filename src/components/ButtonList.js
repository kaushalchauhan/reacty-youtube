import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "all",
    "cricket",
    "live",
    "song",
    "Kapil Sharma",
    "trending",
    "news",
    "books",
    "tech",
    "world cup",
  ];
  return (
    <div className="flex gap-2 m-2 flex-wrap">
      {btnList.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
