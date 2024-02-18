import { howitworkData } from '../../data/howitworkData';
import HeaderFooterLayout from '../../utils/HeaderFooterLayout';
import FleetSection from '../fleetSection/FleetSection';
import './howItWork.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HowItWork = () => {


    return (
        <HeaderFooterLayout>
            <section className='howitwork'>
                <div className='howitwork-wrapper'>
                    <div className='title'>
                        <h2>
                            Comment ça marche ?
                        </h2>
                    </div>
                    <div className='stepsDiv'>
                        <Carousel
                            autoPlay
                            infiniteLoop
                            swipeable
                            stopOnHover
                            showThumbs={false}
                        >
                            <div className="steps">
                                <h3 className='facile'>C&rsquo;est facile</h3>
                            </div>
                            {howitworkData.map((data) =>
                                <div key={data.title} className='steps'>
                                    <h3 className="step-title">{data.title}</h3>
                                    <img src={data.img} alt='' />
                                    <p className='description'>{data.description}</p>
                                    <p>{data.time}</p>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
            </section>
            <FleetSection />
        </HeaderFooterLayout>
    )
}

export default HowItWork