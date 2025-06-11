import PosterWithPoints from "./PosterWithPoints";
function Menpage(){
    const images=[
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_DulUBng.jpg?format=webp&w=1366&dpr=2.0",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_XBj4N0m.jpg?format=webp&w=1366&dpr=2.0",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_4_Hm9neKg.jpg?format=webp&w=1366&dpr=2.0"
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

export default Menpage;