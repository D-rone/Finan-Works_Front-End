import { useState } from "react";
import { BiHide } from "@react-icons/all-files/bi/BiHide";

const UsePasswordToggle = () => {
  const [visible, setVisibilty] = useState(false);
  const Icon = (
    <BiHide
      icon={visible ? "eye-splash" : "eye"}
      onClick={() => setVisibilty((visibility) => !visibility)}
    />
  );
  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default UsePasswordToggle;
