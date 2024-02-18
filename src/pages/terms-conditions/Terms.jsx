import { termsData } from '../../data/termsData';
import HeaderFooterLayout from '../../utils/HeaderFooterLayout';
import './terms.css';

const Terms = () => {
    return (
        <HeaderFooterLayout>
            <section className='terms'>
                <div className='terms-title'>
                    <h2>FoNéKe - Conditions Générales d&apos;Utilisation</h2>
                </div>
                <p>Ces conditions générales d&apos;utilisation régissent votre utilisation de l&apos;application de suivi fournie par FoNéKe. En téléchargeant, installant ou utilisant l&apos;Application, vous acceptez d&apos;être lié par ces Conditions. Si vous n&apos;acceptez pas ces Conditions, veuillez ne pas utiliser l&apos;Application.</p>
                {termsData.map((data) => (
                    <div key={data.title} className='terms-details'>
                        <h3 className='terms-details-title'>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                ))}
                <div>
                    <p>Si vous avez des questions concernant ces Conditions, veuillez nous contacter à contact@foneke.com.</p>
                    <p>Dernière mise à jour : 01/01/2024</p>
                </div>
            </section>
        </HeaderFooterLayout>
    )
}

export default Terms