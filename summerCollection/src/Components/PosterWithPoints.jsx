import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

function PosterWithPoints({ image, points }) {

    function priviousHandler() {
        if (activePoints > 0) {
            setActivePoints(activePoints - 1)
        }
    }

    function nextHandler() {
        if (activePoints < image.length - 1) {
            setActivePoints(activePoints + 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setActivePoints((prev) => (prev < image.length - 1 ? prev + 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, [image.length]);

    const [activePoints, setActivePoints] = useState(0)
    return (
        <>

            <div className="poster-with-buttons">
                <div className="poster-section">
                    <div className="privious">
                        <button onClick={priviousHandler}>
                            <FaAngleLeft />
                        </button>
                    </div>

                    <img className="ac" src={image[activePoints]}
                        alt="Poster Image "
                    />

                    <img className="dc" src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/app_ban_obUM6Zb.jpg?format=webp&w=768&dpr=2.0"/>

                    <div className="next">
                        <button onClick={nextHandler}>
                            < FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>

            <div className="points">
                {
                    points.map((_, index) => (
                        <button key={index} onClick={() => setActivePoints(index)}>
                            <div className={`main-points ${activePoints === index ? "active" : ""}`}>
                            </div>
                        </button>
                    ))
                }
            </div>
        </>
    )
}

export default PosterWithPoints;