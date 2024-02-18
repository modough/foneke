import HeaderFooterLayout from '../../utils/HeaderFooterLayout';
import './legales.css';

const Legales = () => {
    return (
        <HeaderFooterLayout>
            <section className='legales'>
                <div className='legales-title'>
                    <h2>FoNéKe - Mentions Légales</h2>
                </div>
                <div>
                    <h3>Éditeur de l&apos;Application :</h3>
                    <p>
                        <li>FoNéKe</li>
                        <li>Villa numéro 165/K, Guédiawaye, Hamo 5, Dakar (Sénégal)</li>
                        <li>+ 33 06 51 66 52 09</li>
                        <li>contact@foneke.com</li>
                    </p>
                </div>
                <div>
                    <h3>Directeur de la publication :</h3>
                    <p>
                        <li>Pape Diallo</li>
                        <li>Villa numéro 165/K, Guédiawaye, Hamo 5, Dakar (Sénégal)</li>
                        <li>+ 33 06 51 66 52 09</li>
                        <li>contact@foneke.com</li>
                    </p>
                </div>
                <div>
                    <h3>Collecte et Traitement des Données Personnelles :</h3>
                    <p>Les informations recueillies sur l&rsquo;Application sont destinées à FoNéKe aux fins de suivre les utilisateurs ou les biens en temps réel ou à intervalles réguliers. Cela permet aux utilisateurs de connaître la localisation actuelle des biens ou des personnes concernées. Ces données sont traitées conformément à notre Politique de Confidentialité, disponible sur l&rsquo;Application.</p>
                    <p>Conformément à la Loi n° 78-17 du 6 janvier 1978 relative à l&#39;informatique, aux fichiers et aux libertés, vous disposez d&#39;un droit d&#39;accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous contactant à l&#39;adresse contact@foneke.com.</p>
                </div>
            </section>
        </HeaderFooterLayout>
    )
}

export default Legales