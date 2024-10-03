import React from 'react';
import { View, StyleSheet } from 'react-native';
import { JitsiMeeting } from '@jitsi/react-native-sdk';

const PiPComponent = () => {
  const config = {
    hideConferenceTimer: true,
    subject: 'React Native SDK',
    customToolbarButtons: [
      {
        icon: 'https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png',
        id: 'btn1',
        text: 'Button one',
      },
      {
        icon: 'https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png',
        id: 'btn2',
        text: 'Button two',
      },
    ],
  };

  const flags = {
    'call-integration.enabled': true,
    'fullscreen.enabled': false,
    'invite.enabled': true,
    'prejoinPageEnabled': false,
    'notifications.enabled': false,
  };

  const interfaceConfig = {
    SETTINGS_SECTIONS: ['language'], 
  };

  const eventListeners = {
    onConferenceBlurred: () => console.log('Conference blurred'),
    onConferenceFocused: () => console.log('Conference focused'),
    onAudioMutedChanged: (isMuted) => console.log('Audio muted changed:', isMuted),
    onConferenceJoined: () => console.log('Conference joined'),
    onConferenceLeft: () => console.log('Conference left'),
    onConferenceWillJoin: () => console.log('Conference will join'),
    onEnterPictureInPicture: () => console.log('Entered Picture-in-Picture mode'),
    onParticipantJoined: (participant) => console.log('Participant joined:', participant),
    onReadyToClose: () => console.log('Ready to close'),
    onVideoMutedChanged: (isMuted) => console.log('Video muted changed:', isMuted),
  };

  const token = 'your-jwt-token';

  return (
    <View style={styles.container}>
      <JitsiMeeting
        config={config}
        flags={flags}
        interfaceConfig={interfaceConfig}
        eventListeners={eventListeners}
        room="ashyellow"
        serverURL="https://meet.jit.si/AshYellow"
        style={styles.jitsiMeeting}
        token={token}
        userInfo={{
          avatarUrl: 'https://example.com/avatar.png',
          displayName: 'ayehsamalik',
          email: 'your.email@example.com',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jitsiMeeting: {
    width: '100%',
    height: '100%',
  },
});

export default PiPComponent;
