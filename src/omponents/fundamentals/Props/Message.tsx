type MessageProps = {
  text: string;
};

const Message = ({ text }: MessageProps) => {
  return <h2>{text}</h2>;
};

const Parent = () => {
  return <Child Component={Message} />;
};
