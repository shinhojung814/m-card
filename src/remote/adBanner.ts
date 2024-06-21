import { collection, getDocs } from 'firebase/firestore'
import { store } from './firebase'

import { COLLECTIONS } from '@/constants'
import { AdBanner } from '@/models/card'

export async function getAdBanners() {
  const cardSnapshot = await getDocs(collection(store, COLLECTIONS.ADBANNER))
  return cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AdBanner),
  }))
}
