import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { AppHeaderButtons } from '../components/AppHeaderButtons';
import { toggleBooked } from '../store/action/post';


export const PostStack = ({ navigation }) => {
    const Stack = createStackNavigator();
    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.post.allPosts);

    const handleToggleBooked = useCallback((postId) => {
        dispatch(toggleBooked(postId));
    }, [dispatch]);

    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR,
            },
            headerTitleStyle: {
                fontFamily: 'open-bold',
                color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#CBCBCB',
            }
        }}>
            <Stack.Screen
                name='Post'
                component={PostScreen}
                options={({ route }) => {
                    const postId = route.params ? route.params.post.id : null;
                    const post = allPosts.find(p => p.id === postId);
                    const isBooked = post ? post.booked : false;

                    return {
                        title: post ? `Пост от ${new Date(post.date).toLocaleDateString()}` : 'Пост',
                        headerRight: () => post && (
                            <AppHeaderButtons
                                onPress={() => handleToggleBooked(post.id)}
                                iconName={isBooked ? 'star-sharp' : 'star-outline'}
                                iconStyle={styles.rightButton} />
                        ),
                        headerLeft: () => post && (
                            <AppHeaderButtons
                                onPress={() => navigation.goBack()}
                                iconName={'arrow-undo-sharp'}
                                iconStyle={styles.leftButton} />
                        ),
                    };
                }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    rightButton: {
        color: Platform.OS === 'android' ? '#CBCBCB' : THEME.MAIN_COLOR
    },
    leftButton: {
        color: Platform.OS === 'android' ? '#CBCBCB' : THEME.MAIN_COLOR
    }
})


