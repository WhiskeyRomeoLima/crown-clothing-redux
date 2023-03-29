import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action'; //returns an action object that needs to be dispatched
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

const App = () => {
  const dispatch = useDispatch(); //useDispatch hook

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      //dispatch requires an action as an argument
      dispatch(setCurrentUser(user)); //imported from user.action.js which is where we created this action: setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
    });

    return unsubscribe;
  }, [dispatch]); //eliminate lint error by passing dispatch in the array - this useEffect will not run everytime dispatch changes as there is only dispatch (enforced by Redux)

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
