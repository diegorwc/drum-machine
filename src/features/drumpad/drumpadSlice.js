import { createSlice } from "@reduxjs/toolkit";

export const drumpadSlice = createSlice({
    name: 'drumpad',
    initialState: {
        value: '',
        soundType: ''
    },
    reducers: {
        playSound: (state, soundType) => {
            state.value = soundType.payload                        
            document.getElementById(soundType.payload).play()
            // console.log(soundType)
        }
    }
})

export const { playSound } = drumpadSlice.actions

export default drumpadSlice.reducer