import { User } from "firebase/auth";
import { FC, useState } from "react";
import { Button } from "../Button";
import { signOutUser } from "../utils/firebase/firebase";

import './dropdown-menu.scss'

export type MenuProps = {
  open: boolean,
  menu: React.ReactNode[],
  trigger: React.ReactNode
};

export type DropdownProps = {
  userName: User
}

export const DropdownMenu: FC<DropdownProps> = ({userName}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(!open);
  }

  const openProfile = () => {
    console.log('profile');
    setOpen(false);
  }

  const signOut = () => {
    console.log('sign out')
    setOpen(false);
    signOutUser();
  }

  return (
    <DropdownItem
      open={open}
      trigger={<Button content={`${userName.email}`} 
        type={Button.TYPES.DEFAULT} 
        onClick={handleOpen}/>}
      menu={[
        <button onClick={openProfile}>Profile</button>,
        <button onClick={signOut}>Sign out</button>,
      ]}
    />
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