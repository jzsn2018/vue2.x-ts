<!--
 * @Date: 2021-04-14 15:44:07
 * @LastEditors: Timothy
 * @LastEditTime: 2021-04-14 17:34:44
 * @Description: login index page
-->
<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign up</h1>
            <p class="text-xs-center">
              <a href="">Have an account?</a>
            </p>

            <ul class="error-messages">
              <li v-for="(err,key) in errors" :key="key">{{key}}:{{err.join(",")}}</li>
            </ul>

            <form @click.prevent="onSubmit">
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
import { register } from '@/api/auth'
export default Vue.extend({
  name: 'LoginPage',
  data () {
    return {
      user: {
        email: '',
        password: '',
        username: ''
      },
      errors: [],
      registerData: {}
    }
  },
  methods: {
    async onSubmit () {
      try {
        const { data } = await register({
          user: this.user
        })
        this.registerData = data
      } catch (err) {
        //! 【 重要 】获取接口返回的错误的信息 通过 err.response 获取
        this.errors = err.response.data.errors
      }
    }
  }
})
</script>
<style lang='less' scoped>
</style>
