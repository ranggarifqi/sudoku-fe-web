// import * as crypto from 'crypto'
import { Buffer } from 'buffer'
import * as CryptoJS from 'crypto-js'

window.Buffer = Buffer

export const decodeSolution = (base64str: string): number[][] => {
  if (base64str === "") {
    return []
  }
  const wordArr = CryptoJS.enc.Base64.parse(base64str);
  const decoded = CryptoJS.enc.Utf8.stringify(wordArr)
  return JSON.parse(decoded)
}