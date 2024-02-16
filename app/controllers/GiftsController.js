import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
  constructor () {
    console.log('gifts loaded');
    AppState.on('account', this.getGifts)
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