import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native';
import { Post } from "../components/Post";
import { loadPosts } from "../store/posts/postsSlice";
import { DATA } from '../data';

export const MainScreen = ({ navigation }) => {

    const openPost = (post) => {
        navigation.navigate('PostTab', {
            screen: 'Post',
            params: { post },
        });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts(DATA));
    }, [dispatch]);

    const allPosts = useSelector(state => state.posts.allPosts);

    return (
        <View style={styles.container}>
            <FlatList
                data={allPosts}
                renderItem={({ item }) => <Post onOpen={() => openPost(item)} post={item} />}
                keyExtractor={post => post.id.toString()}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 20
    }
});