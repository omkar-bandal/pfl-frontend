import { useSelector } from 'react-redux';
import { RootState } from '../store/store.purchase';

export const useAppSelector = useSelector.withTypes<RootState>();
