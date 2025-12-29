type Props = {

  className?: string;
  onClick?: () => void;
    children?: React.ReactNode;
    Counter:number;
    setCounter:React.Dispatch<React.SetStateAction<number>>;
}

const Button = (props: Props) => {
  return (
    <div>
        <button className={props.className} onClick={props.onClick}>
            {props.children}
        </button>
    </div>
  )
};

export default Button;