import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawGifts() {
  const gifts = AppState.gifts
  let htmlString = ''
  gifts.forEach(gift => htmlString += gift.CardHTMLTemplate)
  setHTML('gifts', htmlString)
}

export class GiftsController {
  constructor () {
    console.log('gifts loaded');
    AppState.on('account', this.getGifts)
    AppState.on('gifts', _drawGifts)
  }

  // REVIEW GET/READ
  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  // REVIEW PUT/UPDATE
  async updateGift(giftId) {
    try {
      await giftsService.updateGift(giftId)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  // REVIEW POST/CREATE
  async createGift() {
    try {
      event.preventDefault()
      const form = event.target
      const giftFormData = getFormData(form)
      await giftsService.createGift(giftFormData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  // REVIEW DELETE/DESTROY
  async destroyGift(giftId) {
    try {
      const wantsToDestroy = await Pop.confirm('Are you sure you want to delete this?')

      if (!wantsToDestroy) {
        return
      }

      await giftsService.destroyGift(giftId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}