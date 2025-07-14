"use client"

import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/joy"
import axios from "axios"
import Lottie from "lottie-react"
import Animation from "../../assets/Loading_car.json"
import { Bookmark } from "lucide-react"
import React, { useEffect, useState } from "react"

const PopularCars = () => {
  const [Popular, setPopular] = useState([])
  const [loading, setLoading] = useState(true)

  const getPopularCars = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKENDURLCAR + "/popular"
      )
      setPopular(response.data.cars)
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPopularCars()
  }, [])

  const skeletons = Array.from({ length: 6 })

  return (
    <>
      {loading
        ? <Lottie animationData={Animation}/>
        : Popular.map((popular, index) => (
            <Card sx={{ width: 420 }} key={index}>
              <div className="flex justify-between">
                <div>
                  <Typography level="title-lg">{popular.name}</Typography>
                  <Typography level="body-sm">{popular.brand}</Typography>
                </div>
                <IconButton
                  aria-label="bookmark car"
                  variant="plain"
                  color="neutral"
                  size="sm"
                >
                  <Bookmark className="hover:text-amber-300" />
                </IconButton>
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                  src={popular.imageUrl}
                  srcSet={popular.imageUrl}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">Price:</Typography>
                  <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                    {popular.price} DT
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Buy car"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  Buy
                </Button>
              </CardContent>
            </Card>
          ))}
    </>
  )
}

export default PopularCars
