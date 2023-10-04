import { api } from "@/libs/axios"
import { User } from "@/types/auth"

export class AuthService {
  getNonce(address: string) {
    return api.request<{
      nonce: string
    }>({
      method: "GET",
      url: "/auth/get-nonce/",
      params: {
        address,
      },
    })
  }

  login(address: string, sign: string) {
    return api.request<{
      userInfo: User
      token: string
    }>({
      method: "POST",
      url: "/auth/login/",
      data: {
        address,
        sign,
      },
    })
  }
}