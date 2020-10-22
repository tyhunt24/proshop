import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_REVIEW_REQUEST,
    PRODUCT_REVIEW_SUCCESS,
    PRODUCT_REVIEW_FAIL,
    PRODUCT_TOP_FAIL,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_REQUEST,
} from "../constants/productConstants"
import axios from "axios"


export const listProducts = (keyword = "") => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })

        const {
            data
        } = await axios.get(`/api/products?keyword=${keyword}`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message
        })
    }
}

export const topRatedProducts = () => async dispatch => {
  try {
      dispatch({
          type: PRODUCT_TOP_REQUEST
      })

      const {
          data
      } = await axios.get(`/api/products/top`)

      dispatch({
          type: PRODUCT_TOP_SUCCESS,
          payload: data
      })

  } catch (err) {
      dispatch({
          type: PRODUCT_TOP_FAIL,
          payload: err.response && err.response.data.message ?
              err.response.data.message : err.message
      })
  }
}

export const listProductDetails = id => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })

        const {
            data
        } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message
        })
    }
}

export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch({
          type: PRODUCT_CREATE_REQUEST,
        })
    
        const {
          userLogin: { userInfo },
        } = getState()
    
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
    
        const { data } = await axios.post(`/api/products`, {}, config)
    
        dispatch({
          type: PRODUCT_CREATE_SUCCESS,
          payload: data,
        })
      }catch (err) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message
        })
    }
}

export const updateProduct = (product) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(
        `/api/products/${product._id}`,
        product,
        config
      )
  
      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      })
    } catch (err) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: err.response && err.response.data.message ?
                err.response.data.message : err.message
        })
    }
}

export const productReviewCreate = (productId, review) => async (dispatch, getState) => {
  try {
    dispatch({type: PRODUCT_REVIEW_REQUEST})

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/products/${productId}/reviews`, review, config)

    dispatch({
      type: PRODUCT_REVIEW_SUCCESS
    })
   
  } catch (err) {
    dispatch({
      type: PRODUCT_REVIEW_FAIL,
      payload: err.response && err.response.data.message ?
          err.response.data.message : err.message
  })
  }
}