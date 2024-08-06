import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	allPosts: [],
	bookedPosts: [],
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		loadPosts: (state, action) => {
			state.allPosts = action.payload;
			state.bookedPosts = action.payload.filter(post => post.booked);
		},
		toggleBooked: (state, action) => {
			const updatedPosts = state.allPosts.map(post => {
				if (post.id === action.payload) {
					return { ...post, booked: !post.booked };
				}
				return post;
			});

			state.allPosts = updatedPosts;
			state.bookedPosts = updatedPosts.filter(post => post.booked);
		},
		removePost: (state, action) => {
			state.allPosts = state.allPosts.filter(post => post.id !== action.payload);
			state.bookedPosts = state.bookedPosts.filter(post => post.id !== action.payload);
		},
		addPost: (state, action) => {
			const newPost = { ...action.payload, id: Date.now().toString() };
			state.allPosts = [newPost, ...state.allPosts];
		}
	}
});

export const { loadPosts, toggleBooked, removePost, addPost } = postsSlice.actions;
export default postsSlice.reducer;