import axios from 'axios';
import {MOVIE_END_POINT} from '../../config';
import {showErrMsg} from '../../utils/alerts';

export const _fetchMovies = async ({}) => {
  try {
    const resp = await axios.get(MOVIE_END_POINT);

    const {data} = resp;
    console.log('resp:', data);

    return data.results;
  } catch (error) {
    showErrMsg({
      text1: 'Sorry something went wrong',
    });
    console.log(error);
  }
};
