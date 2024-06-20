import { collection, getDocs } from 'firebase/firestore'
import { store } from './firebase'

import { COLLECTIONS } from '@/constants'

export async function getCards() {
    const cardSnapshot = await getDocs(collection(store, COLLECTIONS.CARD))

    console.log('cardSnapshop', cardSnapshot)
}