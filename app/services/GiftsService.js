import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const response = await api.get('api/gifts')
    console.log('got gifts', response.data);
    const newGifts = response.data.map(giftPOJO => new Gift(giftPOJO))
    AppState.gifts = newGifts
  }


}

export const giftsService = new GiftsService()