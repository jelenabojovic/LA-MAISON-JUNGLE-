import basil from '../assets/images/plants/basil.jpg';
import cactus from '../assets/images/plants/cactus.jpg';
import calathea from '../assets/images/plants/calathea.jpg';
import lyrata from '../assets/images/plants/lyrata.jpg';
import mint from '../assets/images/plants/mint.jpg';
import monstera from '../assets/images/plants/monstera.jpg';
import olivier from '../assets/images/plants/olivier.jpg';
import pothos from '../assets/images/plants/pothos.jpg';
import succulent from '../assets/images/plants/pothos.jpg';

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		isSpecialOffer: false,
		water: 3,
		light: 2,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		isBestSale: false,
		isSpecialOffer: false,
		water: 1,
		light: 3,
		cover: lyrata,
		price: 16
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isBestSale: false,
		isSpecialOffer: true,
		water: 2,
		light: 1,
		cover: pothos,
		price: 9
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		isBestSale: false,
		isSpecialOffer: false,
		water: 3,
		light: 2,
		cover: calathea,
		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		isBestSale: false,
		isSpecialOffer: false,
		water: 1,
		light: 3,
		cover: olivier,
		price: 25
	},
	{
		name: 'cactus',
		category: 'plante grasse',
		id: '6uo',
		isBestSale: false,
		isSpecialOffer: false,
		water: 1,
		light: 2,
		cover: cactus,
		price: 6
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		isSpecialOffer: true,
		water: 3,
		light: 2,
		cover: basil,
		price: 5
	},
	{
		name: 'menthe',
		category: 'extérieure',
		id: '8fp',
		isBestSale: false,
		isSpecialOffer: true,
		water: 2,
		light: 2,
		cover: mint,
		price: 4
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		isBestSale: false,
		isSpecialOffer: false,
		water: 1,
		light: 2,
		cover: succulent,
		price: 8
	}
]