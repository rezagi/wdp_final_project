import React from 'react'
// import '../App.css';
import "../styles/style.css"
import { InputForm } from '../components/InputForm';
import TextLabel from '../components/TextLabel';



const Login = () => {
  return (

<div class="flex items-center justify-center">
        <div class="w-full max-w-md mt-20 mb-20">
          <form class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            <div
              class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              Concert Order Information
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

            <TextLabel text={'Event Date'} />
                <div class="mb-4 text-gray-700">
                    <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:shadow-outline">
                        <option value="default">Event Date</option> 
                        <option value="day1">23 November 2022, Jakarta</option>
                        <option value="day2">24 November 2022, Jakarta</option>
                   </select>
                </div>
                <TextLabel text={'Payment Method'} />
                <div class="mb-4 text-gray-700">
                    <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:shadow-outline">
                        <option value="default">Payment - Method</option> 
                        <option value="bca">BCa - 17264871</option>
                        <option value="bsi">BSI - 98172424</option>
                   </select>
                </div>
            <div class="flex items-center justify-between">
            <InputForm text={'Redeem Voucher'}
                name="voucher"
                required
                autofocus
                placeholder="Voucher Code" />
              <button class="ml-2 mt-2.5 px-2 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Use Voucher</button>
            </div>
            <div class="mt-5">
            <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Buy Ticket</button>
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