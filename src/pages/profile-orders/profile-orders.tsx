import { ProfileOrdersUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import {
  getOrders,
  getUserState
} from '../../services/slices/userSlice/userSlice';
import { useDispatch, useSelector } from '../../services/store';
import { getFeeds } from '../../services/slices/feedSlice/feedSlice';
import { Preloader } from '@ui';

export const ProfileOrders: FC = () => {
  const { userOrders, request } = useSelector(getUserState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
    dispatch(getFeeds());
  }, []);

  if (request) {
    return <Preloader />;
  }

  return <ProfileOrdersUI orders={userOrders} />;
};
