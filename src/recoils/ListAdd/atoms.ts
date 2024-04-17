import { atom } from "recoil";
import { LIST_STATE } from "../constants";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

export const listState = atom({
    key: LIST_STATE,
    default: [''] as Array<string>,
    effects_UNSTABLE: [persistAtom],
});