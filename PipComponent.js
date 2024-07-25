import React, { useEffect, useState } from 'react';
import { StyleSheet, View, NativeModules, AppState, Button } from 'react-native';
import Video from 'react-native-video';

const PipComponent = () => {
    const { PipModule } = NativeModules;
    const [backgroundDetected, setBackgroundDetected] = useState(false);

    // Detect when app is in background and enter PiP mode
    useEffect(() => {
        const appStatus = AppState.addEventListener('change', (state) => {
            if (state === 'background') {
                setBackgroundDetected(true);
                PipModule.enterPipMode();
            } else {
                setBackgroundDetected(false);
            }
        });

        return () => {
            appStatus.remove();
        };
    }, [PipModule]);

    return (
        <View style={styles.container}>
            <Video
                source={{ uri: 'https://www.example.com/video.mp4' }}
                style={styles.videoContainer}
                fullscreen
                repeat
                playInBackground
                pictureInPicture
                posterResizeMode="cover"
                resizeMode="cover"
                poster="https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg"
            />

            {!backgroundDetected && (
                <Button
                    onPress={() => {
                        PipModule.enterPipMode();
                    }}
                    title="PIP"
                />
            )}
        </View>
    );
};

export default PipComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoContainer: {
        width: '100%',
        height: 300,
    },
});
