import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Link from "next/link";

function CreateAds() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  async function onSubmit(values) {
    const config = {
      url: "/api/create",
      data: values,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios(config);
      if (response.status == 200) {
        console.log(response);
        console.log(values);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="text-prime">
      <Link href="/">
        <div className="px-5 py-5 flex justify-between sticky top-0 bg-white z-10 border-b">
          <h2>Unggah Iklan</h2>
          <p className="border w-6 h-6 flex items-center justify-center text-red-600 border-red-600">
            X
          </p>
        </div>
      </Link>
      <form className="px-5 py-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3 className="font-semibold">Judul dan Informasi Iklan</h3>
          <p className="text-second pt-1 pb-3">
            Beri Judul iklan dan sedikit deskripsi tentang iklan anda. Semakin
            detail dan menarik maka semakin mudah orang untuk tertarik terhadap
            iklan anda.
          </p>
          <label htmlFor="title" className="sr-only">
            Judul Iklan
          </label>
          <div className="relative">
            <input
              {...register("title", { required: true })}
              type="text"
              autoComplete="name"
              className={`w-full shadow-sm py-3 text-prime px-4 mb-2 border-prime border placeholder-gray-400  ${
                errors.name
                  ? "focus:ring-red-500 border-red-500"
                  : "focus:ring-blue-500 focus:border-blue-500"
              }`}
              placeholder="Judul Iklan"
            />
            {/*errors.name && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-600"
                  aria-hidden="true"
                />
              </div>
            )*/}
          </div>
        </div>
        <div>
          <label htmlFor="description" className="sr-only">
            Informasi Iklan
          </label>
          <div className="relative">
            <textarea
              {...register("description", { required: true })}
              rows="4"
              className={`w-full shadow-sm py-3 text-prime px-4 mb-2 border-prime border placeholder-gray-400  ${
                errors.name
                  ? "focus:ring-red-500 border-red-500"
                  : "focus:ring-blue-500 focus:border-blue-500"
              }`}
              placeholder="Informasi Iklan"
            />
            {/*errors.name && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-600"
                  aria-hidden="true"
                />
              </div>
            )*/}
          </div>
        </div>
        <div>
          <h3 className="font-semibold py-3">Harga</h3>
          <div>
            <div className="relative flex">
              <label htmlFor="pricing" className="sr-only">
                Harga
              </label>
              <input
                {...register("pricing", { required: true })}
                type="text"
                autoComplete="name"
                className={`w-full shadow-sm py-3 text-prime px-4 border-prime border placeholder-gray-400  ${
                  errors.name
                    ? "focus:ring-red-500 border-red-500"
                    : "focus:ring-blue-500 focus:border-blue-500"
                }`}
                placeholder="Masukan Harga"
              />
              {/*errors.name && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-600"
                  aria-hidden="true"
                />
              </div>
            )*/}
              <div className="px-3"></div>
              <label htmlFor="priceType" className="sr-only">
                Bisa nego atau tidak
              </label>
              <select
                className="px-3 py-3 text-base border-prime border placeholder-gray-500 text-prime focus:outline-none sm:text-sm"
                defaultValue="Nego"
                {...register("priceType", { required: true })}
              >
                <option>Nego</option>
                <option>Harga Pas</option>
              </select>
            </div>
          </div>
        </div>
        <div className="relative">
          <h3 className="font-semibold py-3">Lokasi</h3>
          <label htmlFor="location" className="sr-only">
            Lokasi
          </label>
          <input
            {...register("location", { required: true })}
            type="text"
            autoComplete="name"
            className={`w-full shadow-sm py-3 text-prime px-4 border-prime border placeholder-gray-400  ${
              errors.name
                ? "focus:ring-red-500 border-red-500"
                : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            placeholder="Lokasi Iklan"
          />
          {/*errors.name && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-600"
                  aria-hidden="true"
                />
              </div>
            )*/}
        </div>
        <div className="relative">
          <h3 className="font-semibold py-3">Foto</h3>
          <label htmlFor="imgUrl" className="sr-only">
            Foto
          </label>
          <div className="flex space-x-3">
            <div className="w-24 h-24 border-2 border-dashed flex items-center justify-center text-4xl text-gray-300">
              <p>+</p>
            </div>
            <div className="w-24 h-24 border-2 border-dashed flex items-center justify-center text-4xl text-gray-300">
              <p>+</p>
            </div>
          </div>
        </div>
        {/*tambah video + foto */}
        <div className="flex justify-between pt-6 pb-3">
          <div className="flex flex-col justify-center">
            <p className="font-semibold">Tambahkan 3 foto</p>
            <p className="text-sm text-second">Rp. 15.000,00</p>
          </div>
          <button className="px-5 py-3 border border-prime">Pilih</button>
        </div>
        <div className="flex justify-between py-2">
          <div className="flex flex-col justify-center">
            <p className="font-semibold">Tambahkan video</p>
            <p className="text-sm text-second">Rp. 15.000,00</p>
          </div>
          <button className="px-5 py-3 border border-prime">Pilih</button>
        </div>
        <div className="w-full flex items-center py-8">
          <button
            className="w-full py-3 border bg-prime text-white border-prime"
            type="submit"
          >
            Unggah Iklan
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAds;
