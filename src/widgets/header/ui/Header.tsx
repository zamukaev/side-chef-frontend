import { useRef, useEffect } from "react";

import { useAppDispatch } from "app/store";

import { toggleBurgerMenuModal } from "entities/modals";
import { useOnClickOutside, useTypedSelector } from "shared/hooks";
import { Logo } from "../../../shared/ui";
import { HeaderNavDesktop } from "../../../features/headerNavDesktop";
import { HeaderNavMobile } from "../../../features/headerNavMobile";
import { Search } from "../../../features/search";
import { Drawer } from "../../../features/drawer";

import { BackgroundImages } from "../../backgroundImages";

import styles from "./Header.module.scss";

export const Header = () => {
    const { burgerMenuModal } = useTypedSelector((state) => state.modals);

    const dispatch = useAppDispatch();

    const node = useRef<HTMLDivElement>(null);

    useOnClickOutside(node, () => {
        if (burgerMenuModal) {
            dispatch(toggleBurgerMenuModal());
        }
    });

    const handleDrawerClick = () => {
        dispatch(toggleBurgerMenuModal());
    };

    useEffect(() => {
        if (burgerMenuModal) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
    }, [burgerMenuModal]);

    return (
        <header className={styles.header}>
            <Logo handleDrawerClick={handleDrawerClick} />
            <HeaderNavMobile />
            <Search />
            <HeaderNavDesktop />
            <BackgroundImages />
            <Drawer node={node} isOpen={burgerMenuModal} />
        </header>
    );
};
