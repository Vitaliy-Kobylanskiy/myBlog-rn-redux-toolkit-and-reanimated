import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text, Image, Button, View, Alert } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import Animated, { ZoomInLeft } from "react-native-reanimated";
import { removePost } from "../store/posts/postsSlice";
import { THEME } from "../theme";

export const PostScreen = ({ navigation, route }) => {
	console.log('render');
	const dispatch = useDispatch();
	const postId = route.params.post.id;
	const post = useSelector(state => state.posts.allPosts.find(p => p.id === postId));

	const removeHandler = () => {
		Alert.alert('Удаление поста', 'Вы точно хотите удалить пост?', [
			{
				text: 'Отменить',
				style: 'cancel',
			},
			{
				text: 'Удалить', style: 'destructive', onPress: () => {
					navigation.navigate('MainTab');
					dispatch(removePost(postId));
				}
			},
		]);
	};

	if (!post) {
		return null;
	}

	return (
		<ScrollView style={styles.container}>
			<Animated.View
				key={postId}
			>
				<Animated.Image entering={ZoomInLeft.duration(500)} style={styles.img} source={{ uri: post.img }} />
				<Animated.View entering={ZoomInLeft.duration(1000)} style={styles.wrapText}>
					<Text style={styles.text}>{post.textTitle}</Text>
				</Animated.View>
				<Animated.View entering={ZoomInLeft.duration(1500)} style={styles.wrapText}>
					<Text style={styles.description}>{post.description}</Text>
				</Animated.View>
				<Animated.View entering={ZoomInLeft.duration(2000)} style={styles.wrapBtn}>
					<Button style={styles.button} color={THEME.DANGER_COLOR} title="Удалить" onPress={removeHandler} />
				</Animated.View>
			</Animated.View>
		</ScrollView >
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 15
	},
	img: {
		width: '100%',
		height: 350,
		borderRadius: 20
	},
	wrapText: {
		alignItems: 'center',
		paddingTop: 10
	},
	text: {
		fontFamily: 'open-bold',
		fontSize: 16
	},
	wrapBtn: {
		alignItems: 'center',
		paddingTop: 10,
	},
	error: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	description: {
		fontFamily: 'open-regular'
	}
});