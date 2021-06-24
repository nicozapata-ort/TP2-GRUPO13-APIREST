import dotenv from 'dotenv'

dotenv.config();


const getApiVisionKey = () => process.env.GOOGLE_APPLICATION_CREDENTIALS
const getMode = () => process.env.MODE || 'PROD'
const getCnxStr = () => process.env.CNX_STR

// export default {
//     getApiVisionKey: () => process.env.API_VISION_KEY,
//   }

export {
  getCnxStr, getMode, getApiVisionKey
}


