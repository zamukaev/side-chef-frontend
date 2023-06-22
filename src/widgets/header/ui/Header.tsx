import { useState, useRef, useEffect } from "react";

import { HeaderNavDesktop } from "../../../features/headerNavDesktop";
import { HeaderNavMobile } from "../../../features/headerNavMobile";
import { Search } from "../../../features/search";
import { BackgroundImages } from "../../backgroundImages";
import { Drawer } from "../../../features/drawer";
import { Logo } from "../../../shared/ui";
import useOnClickOutside from "../../../shared/hooks/onClickOutside";

import styles from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const node = useRef(null);

  useOnClickOutside(node, () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  });

  const handleDrawerClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <Logo handleDrawerClick={handleDrawerClick} />
      <HeaderNavMobile />
      <Search />
      <HeaderNavDesktop />
      <BackgroundImages />
      <Drawer isOpen={isOpen} node={node} />
    </header>
  );
};
