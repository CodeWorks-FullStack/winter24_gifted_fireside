import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
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
}