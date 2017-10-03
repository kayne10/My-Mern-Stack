export function userSignupRequest(user) {
  return dispatch => {
    return axios.post('/account/signup')
  }
}
