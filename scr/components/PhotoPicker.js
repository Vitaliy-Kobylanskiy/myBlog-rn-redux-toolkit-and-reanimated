import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Alert, Platform, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';


const requestPermissions = async () => {
	if (Platform.OS !== 'web') {
		const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
		const mediaLibraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (cameraStatus.status !== 'granted' || mediaLibraryStatus.status !== 'granted') {
			Alert.alert('Ошбика', 'Вы не дали согласия на создания фото');
			return false;
		}
		return true;
	}
	return true;
};


export const PhotoPicker = ({ onPick, resetPhoto }) => {
	const [image, setImage] = useState(null);

	const takePhoto = async () => {
		const hasPermissions = await requestPermissions();
		if (!hasPermissions) {
			return;
		}

		const result = await ImagePicker.launchCameraAsync({
			quality: 0.7,
			allowsEditing: false,
			aspect: [16, 9]
		});

		if (!result.canceled && result.assets.length > 0) {
			setImage(result.assets[0].uri);
		}
		onPick(result.assets[0].uri);

	};

	useEffect(() => {
		resetPhoto();
		setImage(null);
	}, [resetPhoto]);

	return (
		<View style={styles.wrapper}>
			<View style={styles.createBtn}>
				{/* <Button color='#ED8482' title="Сделать фото" onPress={takePhoto} /> */}
				<TouchableOpacity style={[styles.makePostBtn, { backgroundColor: '#ED8482' }]}
					onPress={takePhoto}>
					<View style={styles.wrapMakeBtn} >
						<Text style={styles.buttonText}>Сделать фото</Text>
					</View>
				</TouchableOpacity>
			</View>
			{image && <Image style={styles.image} source={{ uri: image }} />}
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: 350,
		marginTop: 15,
		borderRadius: 20
	},
	createBtn: {
		width: '100%',
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		padding: 10
	},
	wrapMakeBtn: {
		marginTop: 15,
		alignSelf: 'center'
	},
	wrapMakeBtn: {
		alignItems: 'center',
	},
	makePostBtn: {
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


