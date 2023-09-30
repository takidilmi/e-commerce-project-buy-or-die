import React, { useEffect, useState } from "react"
import { fetcher } from "@/Utils/API"

const RandomImages = () => {
  const [imageUrls, setImageUrls] = useState([])
  const [currentImages, setCurrentImages] = useState([null, null, null])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetcher("products")
        if (data) {
          const products = data.products

          const selectedImages = products.map((product) => {
            const images = product.images
            const randomIndex = Math.floor(Math.random() * images.length)
            return images[randomIndex]
          })

          // Shuffle the array of image URLs
          const shuffledImages = selectedImages.sort(() => Math.random() - 0.5)

          setImageUrls(shuffledImages)
        }
      } catch (error) {
        console.error("Error fetching images:", error)
      }
    }

    fetchImages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const newImages = [...currentImages]
      newImages[currentIndex] =
        imageUrls[Math.floor(Math.random() * imageUrls.length)]
      setCurrentImages(newImages)
      setCurrentIndex((currentIndex + 1) % 3)
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, [currentImages, currentIndex, imageUrls])

  return (
    <div className="flex flex-col items-center text-13xl">
      <div className="flex flex-col items-center ">
        <b className="">Categories</b>
        <div className=" text-lg font-medium text-color-21 pb-20">
          Find what you are looking for
        </div>
      </div>

      <div
        style={{
          height: "700px",
          borderBottomLeftRadius: "var(--br-x) var(--br-y)",
          "--br-x": "100px",
          "--br-y": "100px",
          borderBottomRightRadius: "100px",
        }}
        className="bg-[#C1DCDC] p-5 overflow"
      >
        <div className="">
          <div className="flex item-center">
            <div className=" flex item-center gap-96">
              <div
                className="relative right-36 flex flex-col items-center"
                style={{
                  filter: "drop-shadow(-39px 28px 10px rgb(160, 0, 210))",
                  bottom: "150px",
                  animation: "fly 5s linear infinite",
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <img
                  className="rounded-xl w-[252px] border h-[412px] overflow-hidden object-cover transform hover:-translate-y-2 transition duration-300"
                  alt=""
                  src={currentImages[0]}
                />
                <b className="pt-7">text</b>
              </div>
              <div
                className="relative left-36 flex flex-col items-center"
                style={{
                  filter: "drop-shadow(39px 28px 10px rgba(193, 220, 220, 1))",
                  bottom: "150px",
                  animation: "fly 5s linear infinite",
                  transition: "opacity 0.3s ease-in-out",
                  animationDelay: "100ms",
                }}
              >
                <img
                  className="rounded-xl border w-[252px] h-[412px] overflow-hidden object-cover transform hover:-translate-y-2 transition duration-300"
                  alt=""
                  src={currentImages[2]}
                />
                <b className="pt-7">text</b>
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col items-center"
            style={{
              filter: "drop-shadow(0px 39px 10px #000000)",
              bottom: "250px",
              animation: "fly 5s linear infinite",
              transition: "opacity 0.3s ease-in-out",
              animationDelay: "200ms",
            }}
          >
            <img
              className="rounded-xl border w-[252px] h-[412px] overflow-hidden object-cover transform hover:-translate-y-2 transition duration-300"
              alt=""
              src={currentImages[1]}
            />
            <b className="pt-7">text</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomImages
