import { useSelector } from 'react-redux';
import { RootState } from '../store/store.core';

export const useAppSelector = useSelector.withTypes<RootState>();
