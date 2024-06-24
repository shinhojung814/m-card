import { User } from './user'

export interface Terms {
  id: string
  title: string
  link?: string
}

export interface ApplyValues {
  userId: User['uid']
  terms: Array<Terms['id']>
  appliedAt: Date
  cardId: string
}