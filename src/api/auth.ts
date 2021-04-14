/*
 * @Date: 2021-04-14 16:30:27
 * @LastEditors: Timothy
 * @LastEditTime: 2021-04-14 17:15:18
 * @Description: auth module
 */
import request from '@/utils/request'
import { AxiosResponse } from 'axios'
export interface User{
    user:{
      email: string,
      password: string,
      username: string,
    }
}
export interface RegisterData{
    user:{
      bio: string,
      createdAt:string
      email: string
      id: number
      image: string
      token: string
      updatedAt:string
      username: string
    }
}

export const register = (data: User) :Promise<AxiosResponse<RegisterData>> => request({ method: 'POST', url: '/api/users', data })
