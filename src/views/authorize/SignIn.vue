<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'

const email = ref('')

const password = ref('')

const reCaptcha = ref('string')

const rememberMe = ref(false)

const login = async () => {
  const url = 'https://api.cyberonegate.com/id/Authorize/SignIn'
  try {
    const response = await axios.post(url, {
      email: email.value,
      password: password.value,
      reCaptcha: reCaptcha.value,
      rememberMe: rememberMe.value
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
              <h4 class="text-center my-3 pb-3">Login</h4>

              <form action="" method="POST" class="row mb-4 pb-2">
                <div class="col-12">
                  <div data-mdb-input-init class="form-outline">
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
                    <input type="checkbox" class="form-check-input me-2" v-model="rememberMe" />
                    <label for="">Remember me?</label>
                    <br />
                    <input
                      class="mt-2 btn btn-primary float-end"
                      type="submit"
                      value="Login"
                      @click.prevent="login"
                    />
                    <br />
                    <p class="text-center mt-5">
                      Don't have an account?
                      <RouterLink to="/authorize/signup">Sign Up</RouterLink>
                    </p>
                    <p class="text-center mt-2">
                      <RouterLink to="/authorize/forgotpassword">Forgot password?</RouterLink>
                    </p>
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
