import axios from "axios";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};


export function loginUsers(data1) {
  return (dispatch) => {
    console.log("api");
    dispatch(fetchUsersRequest());
    axios
      .get("http://localhost:3003/userData")
      .then((res) => {
        var user = res.data;
        console.log(user);
        var user1 = user.find(
          (values) =>
            values.name === data1.username && values.password === data1.password
        );
        console.log(user1);
        if (user1 === undefined) {
          throw res.error;
        }
        localStorage.setItem("login", JSON.stringify(true));
        localStorage.setItem("user", JSON.stringify(user1));
        localStorage.setItem("token", user1.id);
        dispatch(fetchUsersSuccess(user1));
        return res.data;
      })
      .catch((error) => {
        dispatch(fetchUsersFailure("UserName or Password "));
      });
  };
}
