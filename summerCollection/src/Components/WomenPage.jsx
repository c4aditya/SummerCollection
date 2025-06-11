import PosterWithPoints from "./PosterWithPoints";
function Women(){
     const images=[
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_rKw7EMf.jpg?format=webp&w=1366&dpr=2.0",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_Page_Banner_gX3YbkL.jpg?format=webp&w=1366&dpr=2.0",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage-2_rLrhIaV.jpg?format=webp&w=1366&dpr=2.0"
        ]
    const points =[
        "Points1",
        "Points2",
        "Points3",

    ]    
    return(
        <>
         <PosterWithPoints image={images} points={points} />
        </>
    )
}

export default Women;