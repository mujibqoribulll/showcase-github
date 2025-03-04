import { ButtonTypes } from "@/app/store/types";

const ButtonDropdown = (props: ButtonTypes) => {
  const { onChange, icon: Icon, type, size = 20 } = props;
  return (
    <button onClick={onChange} className="cursor-pointer" type={type}>
      <Icon size={size} />
    </button>
  );
};

export default ButtonDropdown;
