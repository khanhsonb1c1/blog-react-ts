import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import MusicPlay from "../types/MusicPlay";
// // import type { RootState } from '../../app/store'

interface PlayMusicState {
  play_list: Array<MusicPlay>
}

// Define the initial state using that type
const initialState: PlayMusicState = {
  play_list: [],
};

export const playMusicSlice = createSlice({
  name: "played", // match with row 6 in index.ts in store folder
  initialState,
  reducers: {
    updatePlayMusic(state, action) {
      console.log('state: ',state)
      console.log('action: ',action.payload)
      state.play_list = action.payload
      
    },
  },
});

const { actions, reducer } = playMusicSlice;
export const { updatePlayMusic } = actions; // name export
export default reducer; // default export
