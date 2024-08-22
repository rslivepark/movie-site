import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchRelatedMovies = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}/recommendations`);
};

export const useRelatedMoviesQuery = (id) => {
  return useQuery({
    queryKey: ['related-movie', id],
    queryFn: fetchRelatedMovies,
    select: (result) => {
      return result.data;
    },
  });
};
