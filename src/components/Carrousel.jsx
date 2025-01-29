import { useRef } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5Vg7WDkIka6XQ0to9iEYumlHFSoY0IkQWrJhlnQzFyBWJmwJkzpInOAnoOOa4UBLMYU&usqp=CAU",
  "https://media.istockphoto.com/id/482779158/es/foto/estilo-boho-girls-hands-looking-femenina-con-muchos-anillos.jpg?s=612x612&w=0&k=20&c=Zk3oPf_Di-qKIgrFP3Jvf0ZCBHJp-axrBLQ37o5ewnY=",
  "https://acdn.mitiendanube.com/stores/001/419/929/products/img_20230303_2112361-1ade31b269188e65a916778906133433-1024-1024.jpg",
  "https://acdn.mitiendanube.com/stores/001/019/611/products/279101341_715579946452850_1402280651726738510_n1-7f797d3520c0194ab816510924542511-240-0.jpg"
];

const Carrousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box py="10">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        style={{ width: "50vw", height: "40vh" }} // Tamaño fijo para centrar
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Box
              as="img"
              src={src}
              alt={`Slide ${index + 1}`}
              width="100%"
              maxHeight="100%"
              objectFit="cover"
              display="block"
              mx="auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botón para ir atrás */}
      <IconButton
        ref={prevRef}
        aria-label="Previous Slide"
        icon={<ChevronLeftIcon boxSize={8} />}
        position="absolute"
        left="20px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="10"
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        _hover={{ bg: "black" }}
      />

      {/* Botón para ir adelante */}
      <IconButton
        ref={nextRef}
        aria-label="Next Slide"
        icon={<ChevronRightIcon boxSize={8} />}
        position="absolute"
        right="20px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="10"
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        _hover={{ bg: "black" }}
      />
    </Box>
  );
};

export default Carrousel;
