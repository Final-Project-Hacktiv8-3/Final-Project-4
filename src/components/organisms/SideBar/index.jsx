import { getHeroImgUrl } from "@utils/index";
import empty from '../../../assets/empty.jpg'

export const SideBar = ({movies}) => {


  return (
    <>
            <div className="flex gap-4 relative">
            <div className="relative  flex-none">
               
                <img
                src={movies.backdrop_path ? getHeroImgUrl(movies.backdrop_path, "w400") :empty}
               
                loading="lazy" decoding="async" data-nimg="fill" 
                 className="w-36 h-20 rounded-lg object-cover duration-500 hover:brightness-75"
                
                />

            </div>
            <div className="space-y-1">
                <p className="text-sm font-semibold">{movies.title} <span>(2008)</span> </p>
                <p className="text-xs text-muted-foreground line-clamp-3">{movies.overview}</p></div>
            </div>
            <a className="absolute inset-0" href="/movie/8681"></a>

    </>
    
  );
};