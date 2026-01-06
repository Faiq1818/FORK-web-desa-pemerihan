import { getShopItemData } from "@/services/getShopItemData-shopPage";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [shopItem, imageUrl] = await getShopItemData(slug);
  if (!shopItem) {
    return Response.json(
      {
        error: "Database error",
      },
      {
        status: 500,
      },
    );
  }

  return (
    <>
      <div className="flex justify-center gap-10 mt-20">
        <div className="w-72 h-72 items-center flex bg-slate-50 border rounded-2xl border-[#ACACAF]">
          {imageUrl ? (
            <img src={imageUrl} className="object-contain" />
          ) : (
            <div>gk ada gambar</div>
          )}
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-2 ">{shopItem.name}</h1>
          <p className="font-bold text-3xl">Rp. {shopItem.price}</p>
          <p className="font-bold text-xl mt-2">Contact</p>
          <p className="font-bold text-xl">{shopItem.contact}</p>
          <p className="whitespace-pre-line">{shopItem.description}</p>
        </div>
      </div>
    </>
  );
}
