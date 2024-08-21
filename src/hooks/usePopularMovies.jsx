import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovies = () => {
  return api.get(`/movie/popular`);
};

const fetchTopRated = () => {
  return api.get(`/movie/top_rated`);
};

const fetchUpcoming = () => {
  return api.get(`/movie/upcoming`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['popular-movie'],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};

export const useTopRatedQuery = () => {
  return useQuery({
    queryKey: ['top-rated'],
    queryFn: fetchTopRated,
    select: (result) => result.data,
  });
};

export const useUpcomingQuery = () => {
  return useQuery({
    queryKey: ['upcoming'],
    queryFn: fetchUpcoming,
    select: (result) => result.data,
  });
};
