import db from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {UserState} from '@store/Slices/UserSlice';

export default {
  updateProfile: (uid: string, data: UserState) => {
    return db().ref(`/users/${uid}`).set(data);
  },
  getUser: async (uid: string) => {
    const snapshot = await db().ref(`/users/${uid}`).once('value');
    return snapshot.val();
  },
};
