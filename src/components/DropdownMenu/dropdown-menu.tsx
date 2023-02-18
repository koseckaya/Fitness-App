import { User } from "firebase/auth";
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { signOutUser } from "../utils/firebase/firebase";
import useOuterClick from "../utils/useOuterClick";

import './dropdown-menu.scss'

type MenuProps = {
  open: boolean,
  menu: React.ReactNode[],
  trigger: React.ReactNode
};

type DropdownProps = {
  userName: User
}

export const DropdownMenu: FC<DropdownProps> = ({userName}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleOpen = () => {
    setOpen(!open);
  }

  const signOut = () => {
    console.log('sign out')
    setOpen(false);
    signOutUser();
    navigate('/')
  }

  const ref = useOuterClick<HTMLDivElement>(
    (e: Function ) => { setOpen(false) });

  return (
    <div ref={ref}>
      <DropdownItem
        open={open}
        trigger={<Button content={`${userName.email}`} 
        type={Button.TYPES.DEFAULT} 
        onClick={handleOpen}/>}
        menu={[
          <Link to={`/profile`}>
            Profile
          </Link>,
          <button onClick={signOut}>Sign out</button>,
        ]}
      />
    </div>
  );
}

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