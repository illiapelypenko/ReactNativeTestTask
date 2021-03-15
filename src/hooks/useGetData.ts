import { useDispatch } from 'react-redux';
import { fetchPosts, fetchUsers, fetchComments } from '../store/actions/actions';


export const useGetData = () => {  
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
    dispatch(fetchComments());
  };

  return getData;
}
