import { createThirdwebClient } from "thirdweb"

if (!process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID) {
  throw new Error("NEXT_PUBLIC_THIRDWEB_CLIENT_ID is not set in environment variables")
}

console.log('process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID : ', process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID )
console.log('process.env.THIRDWEB_SECRET_KEY : ', process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY )

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
  secretKey: process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY
})

console.log('client in client.ts : ', client)