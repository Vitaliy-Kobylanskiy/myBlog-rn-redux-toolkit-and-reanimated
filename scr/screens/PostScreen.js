import React from "react";
import { StyleSheet, ScrollView, Text, Image, Button, View, Alert } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../store/action/post";
import { THEME } from "../theme";


export const PostScreen = ({ navigation, route }) => {

	const dispatch = useDispatch();
	const postId = route.params.post.id;
	const post = useSelector(state => state.post.allPosts.find(p => p.id === postId));


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
			<Image style={styles.img} source={{ uri: post.img }} />
			<View style={styles.wrapText}>
				<Text style={styles.text}>{post.text}</Text>
			</View>
			<View style={styles.wrapBtn}>
				<Button style={styles.button} color={THEME.DANGER_COLOR} title="Удалить" onPress={removeHandler} />
			</View>
		</ScrollView>
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
		height: 350
	},
	wrapText: {
		alignItems: 'center',
		paddingTop: 10
	},
	text: {
		fontFamily: 'open-regular'
	}
	,
	wrapBtn: {
		alignItems: 'center',
		paddingTop: 10,
	},
	error: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});