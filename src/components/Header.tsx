type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="mb-6 border-b pb-4">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    </div>
  );
};

export default Header;
