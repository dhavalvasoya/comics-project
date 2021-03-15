import axios from "axios";

export const FETCH_COMICS_REQUEST = "FETCH_COMICS_REQUEST";
export const FETCH_COMICS_SUCCESS = "FETCH_COMICS_SUCCESS";
export const FETCH_COMICS_FAILURE = "FETCH_COMICS_FAILURE";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_COMICS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_COMICS_SUCCESS,
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_COMICS_FAILURE,
    payload: error,
  };
};

export  function  comicsAPI(increment,number){
    return(dispatch) => {
        dispatch(fetchUsersRequest())
        console.log("ertwerwerwerwer");
        axios.get(`https://gateway.marvel.com/v1/public/comics?limit=${increment}&offset=${number}&ts=1&hash=866ddc8bf8343c53f45a710a0deb34c0&apikey=8b0c1cf5084a6b18d0034b1096ece30d`)
        .then((res) => {
            var user = res.data
            console.log(res.data);
            dispatch(fetchUsersSuccess(user))
            return res.data
        })
        .catch((err) => {
            dispatch(fetchUsersFailure(err))
        })
    }
}
// export function comicsAPI(){
//     return(dispatch) => {
//         dispatch(fetchUsersRequest())
//         console.log("ertwerwerwerwer");
//         axios.get("https://gateway.marvel.com/v1/public/comics?limit=8&offset=8&ts=1&hash=866ddc8bf8343c53f45a710a0deb34c0&apikey=8b0c1cf5084a6b18d0034b1096ece30d")
//         .then((res) => {
//             var user = res.data
//             console.log(res.data);
//             dispatch(fetchUsersSuccess(user))
//             return res.data
//         })
//         .catch((err) => {
//             dispatch(fetchUsersFailure(err))
//         })
//     }
// }


