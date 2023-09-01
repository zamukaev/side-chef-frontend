import { createSlice } from "@reduxjs/toolkit";

import { ModalsState } from "./types";

const initialState: ModalsState = {
    burgerMenuModal: false,
    shoppingListModal: false,
};

export const modalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        toggleBurgerMenuModal: (state) => {
            state.burgerMenuModal = !state.burgerMenuModal;
        },
        toggleShoppingListModal: (state) => {
            state.shoppingListModal = !state.shoppingListModal;
        },
    },
});

export const { toggleBurgerMenuModal, toggleShoppingListModal } =
  modalSlice.actions;
