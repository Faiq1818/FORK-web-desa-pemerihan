"use client";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function Page() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {};

  console.log(title);

  return (
    <>
      <div className="m-10">
        {/* Input nama barang */}
        <div className="flex items-center gap-5 mb-5">
          <p>Nama Barang:</p>
          <input
            className="border px-2 py-1 border-gray-300 w-1/2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Input harga barang */}
        <div className="flex items-center gap-5 mb-5">
          <p>Harga:</p>
          <input
            className="border px-2 py-1 border-gray-300 w-1/2"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        {/* Input gambar */}
        <div className="flex items-center gap-5 mb-5">
          <p>Gambar utama:</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files?.[0] || null);
            }}
            className="flex-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="flex items-center gap-5 mb-5">
          <p>(Opsional) Gambar Tambahan 1</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files?.[0] || null);
            }}
            className="flex-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="flex items-center gap-5 mb-5">
          <p>(Opsional) Gambar Tambahan 2</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files?.[0] || null);
            }}
            className="flex-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Input deskripsi */}
        <div className="flex gap-5 mb-5 flex-col md:flex-row">
          <p>Masukan deskripsi barang:</p>
          <textarea
            className="border px-2 py-1 border-gray-300 w-full md:w-1/2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Tombol kirim */}
        <div className="my-5 flex justify-end">
          <div
            className="rounded-2xl text-sm px-4 py-2 bg-blue-50 text-blue-700 font-bold cursor-pointer hover:bg-blue-100"
            onClick={handleUpload}
          >
            <div className="flex items-center gap-2">
              <p>Kirim Artikel</p>
              <IoSend />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
