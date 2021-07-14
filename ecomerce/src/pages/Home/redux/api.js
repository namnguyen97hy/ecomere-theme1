import axiosClient from "../../../api/axiosClient";
const LIST_PRODUCT_URL = "/listProduct";
const LIST_CLIENT_REVIEW_URL = "/listClientReview";
const LIST_RECENT_NEWS_URL = "/listRecentNew";
const LIST_BRANDS_URL = "/listBrands"

const homePageApi = {
    getListProduct : () => {
        return new Promise((resolve, reject) => {
            return axiosClient
                .get(LIST_PRODUCT_URL)
                .then(res => resolve(res))
                .catch(error => reject(error))
            }
        )
    },
    getListClientReview : () => {
        return new Promise((resolve, reject) => {
            return axiosClient
                .get(LIST_CLIENT_REVIEW_URL)
                .then(res => resolve(res))
                .catch(error => reject(error))
            }
        )
    },
    getListRecentNews : () => {
        return new Promise((resolve, reject) => {
            return axiosClient
                .get(LIST_RECENT_NEWS_URL)
                .then(res => resolve(res))
                .catch(error => reject(error))
            }
        )
    },
    getListBrands: () => {
        return new Promise((resolve, reject) => {
            return axiosClient
                .get(LIST_BRANDS_URL)
                .then(res => resolve(res))
                .catch(error => reject(error))
            }
        )
    },

}
export default homePageApi