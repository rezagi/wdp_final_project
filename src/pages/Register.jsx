import React from 'react'
import '../App.css';
import { InputForm } from '../components/InputForm';



const Login = () => {
  return (

<div class="flex items-center justify-center">
        <div class="w-full max-w-md mt-20 mb-20">
          <form class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            <div
              class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
            Form Registration
            </div>

            <InputForm text={'Nama Lengkap'}
                name="nama_lengkap"
                required
                autofocus
                placeholder="Nama Lengkap" />


            <InputForm text={'Email'}
                name="email"
                v-model="form.email"
                type="email"
                required
                autofocus
                placeholder="Email" />


            <InputForm text={'No. KTP'}
                name="no_ktp"
                required
                autofocus
                placeholder="No. KTP" />


            <InputForm text={'Phone'}
                name="phone"
                required
                autofocus
                placeholder="Phone" />


            <InputForm text={'Password'}    
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
            />

             <div class="mb-6">
             <InputForm text={'Re-Type Password'}    
                v-model="form.password"
                type="password"
                placeholder="Re-Type Password"
                name="password2"
                required
            />
           </div>

            <div class="flex items-center justify-between">
              <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Register</button>
            </div>
            <div class="mt-6">
              Already Have an Account ? <a
                class="inline-block align-baseline font-normal text-blue-500 hover:text-blue-800"
                href="#"
              >
                Login Here
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2022 2022 PK ENTERTAINMENT GROUP INDONESIA. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
  );
}

export default Login