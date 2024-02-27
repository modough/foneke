import { policy } from '../../data/policyData';
import './policy.css';

const Policy = () => {
    return (
        <>
            <section className='policy'>
                <div className='policy-title'>
                    <h2>FoNéKe - Régles de confidentialité</h2>
                </div>
                {policy.map((data) => (
                    <div key={data.name} className='policy-details'>
                        <h3 className='policy-details-title'>{data.name}</h3>
                        <div>
                            <p>{data.detailTitle}</p>
                            <p>{data.details?.map(detail => (
                                <li
                                    key={detail}
                                    className='list'
                                >
                                    {detail}
                                </li>
                            ))}</p>
                        </div>
                        <p>{data.description.map((desc) => (
                            <li
                                key={desc}
                                className={`${data.description.length > 1 ? 'list' : ''}`}
                            >
                                {desc}
                            </li>
                        )
                        )}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Policy