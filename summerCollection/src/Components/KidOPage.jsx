import PosterWithPoints from "./PosterWithPoints";
function Kid(){
    const images=[
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/HOMPAGE_MFj608Q.jpg?format=webp&w=1366&dpr=2.0",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_rC1Zs3c.jpg?format=webp&w=1366&dpr=2.0",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/HOMPAGE_MFj608Q.jpg?format=webp&w=1366&dpr=2.0"
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

export default Kid;