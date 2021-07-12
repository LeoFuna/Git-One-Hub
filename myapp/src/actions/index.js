export const REQUEST_API = 'REQUEST_API'
export const REQUEST_ON_SUCCESS = 'REQUEST_ON_SUCCESS'
export const REQUEST_ON_ERROR = 'REQUEST_ON_ERROR'

const apiRequest = () => ({
  type: REQUEST_API,
});

const apiRequestSuccess = (data) => ({
  type: REQUEST_ON_SUCCESS,
  payload: data,
});

const apiRequestError = (error) => ({
  type: REQUEST_ON_ERROR,
  payload: error,
});

const handleApi = (request) => (
  async (dispatch) => {
    dispatch(apiRequest());
    const URL = `https://api.github.com/search/users?q=${ request }&per_page=5`;
    try {
      const response = await fetch(URL);
      const responseJson = await response.json();
      dispatch(apiRequestSuccess(responseJson));
    } catch (error) {
      console.error(error);
    }
  }
)

export { 
  handleApi,
};
