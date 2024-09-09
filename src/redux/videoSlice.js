import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    videoUrl: "https://www.youtube.com/embed/fgye3en2mv8", 
    isPlaying: false,
};

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setVideoUrl: (state, action) => {
            state.videoUrl = action.payload;
        },
        playVideo: (state) => {
            state.isPlaying = true;
        },
        pauseVideo: (state) => {
            state.isPlaying = false;
        },
    },
});

export const { setVideoUrl, playVideo, pauseVideo } = videoSlice.actions;
export default videoSlice.reducer;
