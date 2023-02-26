import { User } from "firebase/auth";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { signOutUser } from "../utils/firebase/firebase";
import useOuterClick from "../utils/useOuterClick";

import "./dropdown-menu.scss";

type MenuProps = {
  open: boolean;
  menu: React.ReactNode[];
  trigger: React.ReactNode;
};

type DropdownProps = {
  userName: User;
};

export const DropdownMenu: FC<DropdownProps> = ({
  userName,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  const signOut = () => {
    setOpen(false);
    signOutUser();
    navigate("/");
  };

  const openProfile = () => {
    setOpen(false);
    navigate("/profile");
  };

  const ref = useOuterClick<HTMLDivElement>((e: Function) => {
    setOpen(false);
  });

  return (
    <div ref={ref}>
      <DropdownItem
        open={open}
        trigger={
          <Button
            content={`${userName.email?.split("@")[0].slice(0, 6)}`}
            type={Button.TYPES.DEFAULT}
            onClick={handleOpen}
          />
        }
        menu={[
          <button onClick={openProfile}>Profile</button>,
          <button onClick={signOut}>Sign out</button>,
        ]}
      />
    </div>
  );
};

const DropdownItem = ({ open, trigger, menu }: MenuProps) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="dropdown-menu">
          {menu.map((menuItem, index) => (
            <li key={index}>{menuItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
