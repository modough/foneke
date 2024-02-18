import './card.css';

const Card = ({ name, img, description, className, info }) => {

    return (
        <div className={className}>
            <div className='card-top'>
                <img src={img} alt='' />
                <h3>{name}</h3>
            </div>
            <div className='card-bottom'>
                <p className='card-description'>{description}</p>
                <p className='card-info'>{info}</p>
            </div>
        </div>
    )
}

export default Card