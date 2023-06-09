import axios from 'axios';
import { baseUrl, popularMovieUrl } from '../mainApi';

export const getVideoData=async()=>{
    return await axios.get('./mainData/video.json')
    .then(resp=>{
        return resp.data;
    })

}
export const getPopularMovieData=async()=>{
    return await axios.get(popularMovieUrl)
    .then(resp=>{
        return resp.data.results;
    })
}
const comedy="comedy";


export const getComedyMoviesData=async()=>{
    return await axios.get(baseUrl+comedy)
    .then(resp=>{
        return resp.data.results;
    })
}

const action="action";
export const getActionMoviesData=async()=>{
   return await axios.get(baseUrl+action)
    .then(resp=>{
        return resp.data.results;
    })
}

export const getMovieCastData=async()=>{
    return await axios.get('./mainData/movieCast.json')
    .then(resp=>{
       return resp.data
    })
}

export const getVideoDetails=async()=>{
    return await axios.get('./mainData/videoDetails.json')
    .then(resp=>{
        return resp.data;
    })
}

const hard="hard";
export const getVideosDataForSlider= async()=>{
  return await axios.get(baseUrl+hard)
  .then(resp=>{
   return resp.data.results;
  })
}

export const getCommentData=async()=>{
    return await axios.get('./mainData/commentData.json')
    .then(resp=>{
        return resp.data
    })
}