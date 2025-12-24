"use client"
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

// kode ini gunanya biar react quill gk dirender secara ssr di development biar gk error
const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

export default function Page() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');

  const handleAddArticle = async () => {
    try {
      const token = localStorage.getItem("auth");

      const res = await fetch("http://localhost:3000/api/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title,
          content: value,
          featuredImageUrl: "xxxxxx",
          additionalImages: ["xxxxxx"]
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      alert("Berhasil terkirim")
    } catch (err) {
      alert("Gagal terkirim")
      console.error(err);
    }
  };

  return (
    <>
      <div className='m-10'>
        <div className='flex items-center gap-5 mb-5'>
          <p>Judul: </p>
          <input
            className='border px-2 py-1 border-gray-300 rounded-2xl'
            size={50}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <p>Isi artikel: </p>
        <ReactQuill theme="snow" value={value} onChange={setValue} />


        <div className="my-5 flex justify-end">
          <div
            className="border rounded-2xl py-1 px-2 bg-[#CFEAFF] text-[#008AFC] cursor-pointer hover:bg-[#8CCCFF]"
            onClick={handleAddArticle}
          >
            <p>Kirim Artikel</p>
          </div>
        </div>
      </div>
    </>
  )
}
