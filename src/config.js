import dotenv from 'dotenv'

dotenv.config();

export default {
    getApiVisionKey: () => process.env.API_VISION_KEY
}