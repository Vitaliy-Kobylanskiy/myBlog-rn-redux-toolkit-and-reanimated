import React from "react";
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from "react-native";


export const Post = ({ post, onOpen }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
			<View style={styles.post} >
					<ImageBackground style={styles.image} source={{ uri: post.img }} >
						<View style={styles.wrapperText}>
							<Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
						</View>
					</ImageBackground>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	post: {
		marginBottom: 30,
		overflow: 'hidden',
		borderRadius: 20
	},
	image: {
		width: '100%',
		height: 350,
	},
	wrapperText: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		paddingVertical: 5,
		alignItems: 'center',
		width: '100%',
	},
	title: {
		color: '#fff',
		fontFamily: 'open-regular'
	}
})