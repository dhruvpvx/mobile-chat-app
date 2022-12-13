import Auth from './Auth';
import Chat from './Chat';
import Home from './Home';
import Profile from './Profile';

export default {
  ...Home,
  ...Chat,
  ...Auth,
  ...Profile,
};
