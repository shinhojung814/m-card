import { Terms, Option } from '@models/apply'

export const TERMS = [
  {
    id: '01',
    title: '카드 신청 관련 안내 및 필수 동의',
  },
  {
    id: '02',
    title: '(필수) 개인 정보 요약 동의서',
    link: 'https://www.google.com',
  },
] as Terms[]

export const SALARIES = [
  { label: '600만원 ~ 5,000만원', value: '600만원 ~ 5,000만원' },
  { label: '5,000만원 ~ 1억원', value: '5,000만원 ~ 1억원' },
  { label: '1억원 초과', value: '1억원 초과' },
] as Option[]

export const CREDIT_SCORES = [
  { label: '600점 이상', value: '600점 이상' },
  { label: '600점 미만', value: '600점 미만' },
] as Option[]

export const PAY_DATES = [
  { label: '1일', value: '1일' },
  { label: '25일', value: '25일' },
] as Option[]
