import React from "react"
import Link from "next/link"

export default function RightCard({
  pid,
  thumbnail,
  price,
  discountPercentage,
  title,
  rating,
  description,
}) {
  return (
    <div className="flex-auto flex-col z-20 transition duration-300 ease-in-out hover:scale-110">
      <Link href={`/products/${pid}`}>
        <div
          style={{
            filter: "drop-shadow(2px 20px 50px #000000)",
          }}
          className="w-[160px] h-[160px] text-xs cursor-pointer flex flex-row rounded-s-xl bg-white md:max-w-xl"
        >
          <div className="p-2 flex flex-col text-xs bg-white flex-grow rounded-s-xl">
            <h5 className="font-medium w-28 text-teal-500 border rounded-xl flex items-center justify-center">
              {title}
            </h5>
            <p className="text-neutral-600 h-20 overflow-y-hidden">
              {description}
            </p>
            <p className="rounded-full relative bg-red-600  text-center text-sm font-medium text-white origin-bottom -rotate-12 mt-2">
              {discountPercentage}%
            </p>
          </div>
          <img
            style={{
              animationDelay: "200ms",
              borderTopRightRadius: "var(--br-x) var(--br-y)",
              "--br-x": "100px",
              "--br-y": "200px",
              borderBottomRightRadius: "40px",
            }}
            className="w-full object-cover hover:scale-125 transition-transform duration-500"
            src={thumbnail}
            alt=""
          />
        </div>
      </Link>
    </div>
  )
}
