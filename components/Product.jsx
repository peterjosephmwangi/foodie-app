"use client";

import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <>
      <Link
        href={`/product/${product?.id}`}
        className="max-w-[220px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto"
      >
        <div className="w-[200px] h-[200px]">
          {product?.url ? (
            <Image
              alt="product image"
              width={200}
              height={200}
              className="rounded cursor-pointer"
              src={product.url}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ) : null}
        </div>
        <div className="pt-2 px-1">
          <div className="font-semibold text-[15px] hover:underline cursor-pointer">
            {product?.title}
          </div>
          <div className="font-extrabold">
            £{(product?.price / 100).toFixed(2)}
          </div>

          <div className="relative flex items-center text-[12px] text-gray-500">
            <div className="line-through">
              £{((product?.price * 1.2) / 100).toFixed(2)}
            </div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>
        </div>
      </Link>
    </>
  );
}
