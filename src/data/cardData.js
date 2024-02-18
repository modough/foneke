import geoImg from '../assets/Geolocation.png';
import carImg from '../assets/Fleet_icon.png';
import metricImg from '../assets/Metrics.png';
import Howitworks_2 from '../assets/Howitworks_2.png';
import Howitworks_1 from '../assets/Howitworks_1.png';
import Howitworks_3 from '../assets/Howitworks_3.png';

export const cardData = [
    {
        name: 'Géolocalisation',
        description: 'Une solution de géolocalisation simple pour petites entreprises pour suivre en temps réel vos équipes et diminuer vos coûts.',
        img: geoImg
    },
    {
        name: 'Flotte',
        description: 'Géolocalisation des véhicules d’entreprises TPE et PME, pour piloter le parc de véhicules, poids lourds et engins à distance.',
        img: carImg
    },
    {
        name: 'Analytics',
        description: 'Géolocalisation de véhicules d’entreprise pour piloter votre activité en toutes options, améliorer votre qualité de service et diminuer les coûts de votre flotte.',
        img: metricImg
    }
];

export const stepList = [
    {
        title: 'Solution conçue et développée par nos soins',
        description: 'Les solutions app et web  de Fonéke ont été conçues et développées par nos soins. Elles peuvent évoluer en fonction de vos besoins : partenariat B&B, édition de rapports spécifiques, logos et accès personnalisés, etc. Sur simple contact par mail ou par téléphone, nous définissons avec vous les fonctionnalités nécessaires pour répondre au mieux à vos besoins.'
    },
    {
        title: 'Cartes SIM local',
        description: 'Pour communiquer leurs positions GPS, les balises GPS  utilisent des cartes SIM locale : la carte SIM choisit en permanence le réseau GSM le plus performant.'
    },
    {
        title: 'Balises GPS de qualité',
        description: 'Nos balises GPS  sont très simples à connecter dans un véhicule. Selon votre besoin, nous vous fournissons des modèles 100% étanches.'
    },
];

export const secondCardData = [
    {
        name: 'Information en temps réel',
        description: 'Toutes les informations de votre flotte accessible en temps.',
        img: Howitworks_1
    },
    {
        name: 'Application mobile',
        description: "Accéder à toute votre flotte à l'aide de votre téléphone Mobile à tout moment.",
        img: Howitworks_2
    },
    {
        name: 'Suivi personnalisé',
        description: 'Choisissez de suivre un ou plusieurs équipements en particulier de votre flotte.',
        img: Howitworks_3
    }
];