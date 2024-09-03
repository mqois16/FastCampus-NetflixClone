import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const languageAtom = atomWithStorage("language", "id")
export const idMovieAtom = atom(null)
export const isOpenModalAtom = atom(false)