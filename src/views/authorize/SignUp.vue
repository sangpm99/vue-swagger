<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { HOST } from '../../enums/constants'

const userName = ref<string>('')

const email = ref<string>('')

const password = ref<string>('')

const confirmPassword = ref<string>('')

const reCaptcha = ref<string>('string')

const signup = async () => {
  const slug = '/Authorize/SignUp'
  const url = HOST + slug
  try {
    const response = await axios.post(url, {
      username: userName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      reCaptcha: reCaptcha.value
    })

    if (response.status === 200) {
      console.log(response.data)
    }
  } catch (err) {
    console.log('Lỗi fetch dữ liệu')
  }
}
</script>

<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-9 col-xl-7">
          <div class="card rounded-3">
            <div class="card-body p-4">
              <h4 class="text-center my-3 pb-3">Sign Up</h4>

              <form action="" method="POST" class="row mb-4 pb-2">
                <div class="col-12">
                  <div data-mdb-input-init class="form-outline">
                    <label for="" class="w-100 mb-2">
                      User name
                      <input type="text" class="form-control" v-model="userName" />
                    </label>
                    <br />
                    <label for="" class="w-100 mb-2">
                      Email
                      <input type="email" class="form-control" v-model="email" />
                    </label>
                    <br />
                    <label for="" class="w-100 mb-2">
                      Password
                      <input type="password" class="form-control" v-model="password" />
                    </label>
                    <br />
                    <label for="" class="w-100 mb-2">
                      Confirm Password
                      <input type="password" class="form-control" v-model="confirmPassword" />
                    </label>
                    <br />
                    <input
                      class="mt-2 btn btn-primary float-end"
                      type="submit"
                      value="Sign Up"
                      @click.prevent="signup"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
