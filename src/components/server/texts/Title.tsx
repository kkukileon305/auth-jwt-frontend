interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return <h2 className='text-2xl font-bold'>{title}</h2>;
};

export default Title;
