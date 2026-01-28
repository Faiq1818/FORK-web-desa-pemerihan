import prisma from "@/libs/prisma";
import { getPresignedDownloadUrl } from "@/libs/awsS3Action";
import { ShopItems } from "@/generated/prisma/client";
import { cache } from "react";

type ShopItemResult = [ShopItems | null, (string | null)[]];

export const getShopItemData = cache(
  async (slug: string): Promise<ShopItemResult> => {
    try {
      const itemShop = await prisma.shopItems.findUnique({
        where: { slug: slug },
      });

      if (!itemShop) {
        return [null, [null]];
      }

      const uploadPromises = itemShop.imagesUrl.map(async (currentFile) => {
        let imageUrl = null;
        if (itemShop.imagesUrl) {
          const result = await getPresignedDownloadUrl(currentFile);
          if (result.success && result.url) {
            imageUrl = result.url;
          }
        }
        return imageUrl;
      });

      const imageUrlArray = await Promise.all(uploadPromises);

      return [itemShop, imageUrlArray];
    } catch (error) {
      console.error("Error getting article:", error);
      return [null, [null]];
    }
  },
);
