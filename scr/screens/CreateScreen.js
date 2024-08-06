import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from "react-redux";
import { PhotoPicker } from "../components/PhotoPicker";
import { addPost } from "../store/posts/postsSlice";
import { THEME } from "../theme";

export const CreateScreen = ({ navigation }) => {
	const [text, setText] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();
	const imgRef = useRef();

	const saveHandler = () => {
		const post = {
			date: new Date().toJSON(),
			textTitle: text,
			description: description,
			img: imgRef.current,
			booked: false
		};
		dispatch(addPost(post));
		setText('');
		setDescription('');
		imgRef.current = null;
		navigation.navigate('MainTab');
	};

	const photoPickHandler = uri => {
		imgRef.current = uri;
	};

	const resetPhotoHandler = () => {
		imgRef.current = null;
	};

	return (
		<ScrollView>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.wrapper}>
					<Text style={styles.title}>Поделись с друзьями своими новостями:</Text>
					<View style={styles.inputWrapper}>
						<TextInput style={styles.input}
							placeholder='Введите текст поста'
							value={text}
							onChangeText={setText}
							multiline />
						<TextInput style={styles.input}
							placeholder='Введите описание поста'
							value={description}
							onChangeText={setDescription}
							multiline />
					</View>
					<PhotoPicker onPick={photoPickHandler} resetPhoto={resetPhotoHandler} />
					<View style={styles.wrapCreateBtn} >
						<TouchableOpacity
							style={[styles.createPostBtn, { backgroundColor: THEME.MAIN_COLOR, opacity: text ? 1 : 0.5 }]}
							onPress={saveHandler}
							disabled={!text}
						>
							<Text style={styles.buttonText}>Создать пост</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	)
};


const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 10,
		paddingTop: 50,
		paddingBottom: 20,
		shadowColor: '#000',
		shadowRadius: 2,
		shadowOpacity: 0.3,
		shadowOffset: { width: 2, height: 2 },
		elevation: 8,
		backgroundColor: '#fff',
		borderRadius: 10,
		marginHorizontal: 10,
		marginTop: 50
	},
	title: {
		fontSize: 16,
		fontFamily: 'open-bold',
		textAlign: 'center'
	},
	inputWrapper: {
		alignItems: 'center',
		borderRadius: 10
	},
	input: {
		width: '70%',
		padding: 10,
		marginVertical: 15,
		backgroundColor: '#E4E4E4'
	},
	wrapCreateBtn: {
		marginTop: 15,
		alignSelf: 'center'
	},
	wrapCreateBtn: {
		alignItems: 'center',
		marginVertical: 15
	},
	createPostBtn: {
		width: '40%',
		padding: 8,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 18
	}
});