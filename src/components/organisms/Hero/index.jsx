import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useFetchData } from "@hooks/index";
import { getHeroImgUrl } from "@utils/index";
import { Button } from "@components/atoms";
import { Link } from "react-router-dom";
export const Hero = () => {
  const { data } = useFetchData("/movie/popular");
  console.log(data?.results);
  return (
    <section className="flex items-center bg-white dark:bg-zinc-900">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper  "
      >
        {data?.results.slice(0, 3).map((item, idx) => (
          <SwiperSlide key={idx} className="mt-[10vh] flex justify-center">
            <div className="relative flex items-center justify-center">
              <img
                src={getHeroImgUrl(item.backdrop_path)}
                alt=""
                className="w-[90%] rounded-lg  object-cover  brightness-50 md:w-[70%]"
              />
              <div className="absolute bottom-0 left-[20rem] top-[20rem] flex h-full w-[50vw] flex-col items-start justify-start text-left    text-white">
                <div className="date flex flex-col gap-5 ">
                  <h1 className="mt-2 text-3xl">{item?.title}</h1>
                  <h1 className="mt-2 text-xl">{item?.overview}</h1>
                  <Button className="bg-red-700 p-2 text-xl" size="w-20 h-fit ">
                    <Link to={`/movie/${item.id}`}>Detail</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
