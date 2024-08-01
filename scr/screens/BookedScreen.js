import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector, UseSelector } from "react-redux";
import { Post } from "../components/Post";

export const BookedScreen = ({navigation}) => {

	const openPost = (post) => {
		navigation.navigate('Post', { post });
	};

	const bookedPosts = useSelector(state => state.post.bookedPosts);

	return (
		<View style={styles.container}>
			<FlatList data={bookedPosts}
				renderItem={({ item }) => <Post onOpen={() => openPost(item)} post={item} />}
				keyExtractor={post => post.id.toString()} />
		</View>
		
	)
};


const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		marginTop: 20
	}
});