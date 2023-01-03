import Auth from './Auth';
import Chat from './Chat';
import Home from './Home';
import Landing from './Landing';
import Profile from './Profile';

export default {
  ...Home,
  ...Chat,
  ...Auth,
  ...Profile,
  ...Landing,
};
