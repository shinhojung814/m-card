import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore'

import { store } from '@remote/firebase'
import { COLLECTIONS } from '@constants/index'
import { ApplyValues } from '@models/apply'

export async function applyCard(applyValues: ApplyValues) {
  return await addDoc(collection(store, COLLECTIONS.CARD_APPLY), applyValues)
}

export async function updateApplyCard({
  userId,
  cardId,
  applyValues,
}: {
  userId: string
  cardId: string
  applyValues: Partial<ApplyValues>
}) {
  const snapshot = await getDocs(
    query(
      collection(store, COLLECTIONS.CARD_APPLY),
      where('userId', '==', userId),
      where('cardId', '==', cardId),
    ),
  )

  const [applied] = snapshot.docs

  updateDoc(applied.ref, applyValues)
}
