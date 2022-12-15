import React, {useCallback} from 'react';
import {ChatCell, Container} from '@components';
import HomeHeader from './HomeHeader';
import db from '@react-native-firebase/database';
import {FlatList} from 'react-native';
import {UserState} from '@store/Slices/UserSlice';
import {useAppSelector} from '@store';

type Props = {};

const HomeScene = (_props: Props) => {
  const userData = useAppSelector(state => state.user);
  const [chatUsers, setChatUsers] = React.useState<UserState[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const loadUsers = useCallback(() => {
    setRefreshing(true);
    db()
      .ref('/users')
      .once('value')
      .then(snapshot => {
        const users: UserState[] = snapshot.val();
        setChatUsers(
          Object.values(users).filter(user => user.id !== userData.id),
        );
      })
      .finally(() => setRefreshing(false));
  }, [userData]);

  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <Container>
      <HomeHeader />
      <FlatList
        refreshing={refreshing && chatUsers.length === 0}
        onRefresh={loadUsers}
        data={chatUsers}
        renderItem={({item}) => <ChatCell {...item} />}
      />
    </Container>
  );
};

export default HomeScene;
