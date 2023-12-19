interface IProps {
  content: string;
  classes?: 'filled' | 'outlined';
}

const Button: React.FC<IProps> = ({ content, classes }) => {
  return <button className={`${classes}`}>{content}</button>;
};

export default Button;
