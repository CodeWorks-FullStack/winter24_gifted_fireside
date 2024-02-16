import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js"

class GiftsService {
  async createGift(giftFormData) {
    const response = await api.post('api/gifts', giftFormData)
    console.log('created gift', response.data);
    const newGift = new Gift(response.data)
    AppState.gifts.unshift(newGift)
  }
  async getGifts() {
    const response = await api.get('api/gifts')
    console.log('got gifts', response.data);
    const newGifts = response.data.map(giftPOJO => new Gift(giftPOJO))
    AppState.gifts = newGifts
  }

  async updateGift(giftId) {
    const updateData = { opened: true }

    const response = await api.put(`api/gifts/${giftId}`, updateData)
    console.log('updated gift', response.data);

    const giftIndex = AppState.gifts.findIndex(gift => gift.id == giftId)

    if (giftIndex == -1) { return }

    const updatedGift = new Gift(response.data)

    AppState.gifts.splice(giftIndex, 1, updatedGift)
  }

}

export const giftsService = new GiftsService()