import React, { useEffect, useState } from "react"
import { fetcher } from "@/Utils/API"
import styles from "@/styles/RandomImg.module.css"

const RandomImages = () => {
  const [imageUrls, setImageUrls] = useState([])
  const [currentImages, setCurrentImages] = useState([null, null, null])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchImages = async () => {
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
    <div className="flex justify-center mt-20">
      <div
        style={{
          border: "",
          color: "#405454",
          fontSize: "36px",
          fontFamily: "Satoshi",
          fontWeight: 400,
          lineHeight: "22px",
          wordWrap: "break-word", //
        }}
        className={`${styles.randomWidth} w-[1290px] h-[770px] rounded-xl bg-[#C1DCDC]`}
      >
        <div className=" flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <b className={`${styles.catText}`}>Categories</b>
            <div
              style={{
                color: "#405454",
                fontSize: "30px",
                fontFamily: "Satoshi",
                fontWeight: 400,
                lineHeight: "40px",
                wordWrap: "break-word",
              }}
              className={`${styles.catText}`}
            >
              Find what you are looking for
            </div>
          </div>

          <div
            style={{
              borderBottomLeftRadius: "var(--br-x) var(--br-y)",
              "--br-x": "100px",
              "--br-y": "100px",
              borderBottomRightRadius: "100px",
            }}
          >
            <div
              className={`flex flex-col relative justify-center items-center`}
              style={{
                color: "#405454",
                fontSize: "28px",
                fontFamily: "Satoshi",
                fontWeight: 400,
                lineHeight: "22px",
                wordWrap: "break-word",
              }}
            >
              <div className="h-[480px] w-[890px] flex flex-row justify-evenly ">
                <div
                  className={`${styles.randomGap} flex flex-row relative bottom-36 gap-96 `}
                >
                  <div
                    className="flex flex-col items-center"
                    style={{
                      filter: "drop-shadow(-10px 19px 20px #000000)",

                      animation: "fly 5s linear infinite",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <img
                      className={`${styles.randomImage1} rounded-xl border border-gray-600 w-[252px] h-[412px] `}
                      alt=""
                      src={currentImages[0]}
                    />
                    <b className={`${styles.textImage} pt-7 text-black`}>
                      LUXURIOUS
                    </b>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{
                      filter: "drop-shadow(10px 19px 20px #000000)",

                      animation: "fly 5s linear infinite",
                      transition: "opacity 0.3s ease-in-out",
                      animationDelay: "100ms",
                    }}
                  >
                    <img
                      className={`${styles.randomImage1} rounded-xl border border-gray-600 w-[252px] h-[412px] `}
                      alt=""
                      src={currentImages[2]}
                    />
                    <b className={`${styles.textImage} pt-7 text-black`}>
                      REVOLUTIONARY
                    </b>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.randomStyle} flex relative bottom-96 h-[480px] w-[890px] justify-center`}
                style={{
                  filter: "drop-shadow(0px 19px 20px #000000)",
                  animation: "fly 5s linear infinite",
                  transition: "opacity 0.3s ease-in-out",
                  animationDelay: "200ms",
                }}
              >
                <div className={`flex flex-col items-center`}>
                  <img
                    className={`${styles.randomImage} rounded-xl border border-gray-600 w-[252px] h-[412px] `}
                    alt=""
                    src={currentImages[1]}
                  />
                  <b className={`${styles.textImage} pt-7 text-black`}>
                    EFFICIENT
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomImages
