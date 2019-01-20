import { Shop } from '../models';

export const SHOPS: Shop[] = [
    {
        id: 1,
        title: 'Kari',
        address: 'Денисовская ул., 8',
        schedule: '10:00 – 22:00',
        coordinates: [53.891989, 27.562050],
        goods: [
            {
                id: 1,
                title: 'regular trousers',
                description: '89% organic cotton, 5% polyester, 3% elastane, 3% PBT',
                price: 50,
            },
            {
                id: 2,
                title: 'slim trousers',
                description: '89% organic cotton, 5% polyester, 3% elastane, 3% PBT',
                price: 65,
            },
            {
                id: 3,
                title: 'straight trousers',
                description: '75.5% cotton, 23% polyester, 1.5% elastane',
                price: 45,
            },
        ]
    },
    {
        id: 2,
        title: 'Terranova',
        address: 'площадь Независимости, 3-2, ТЦ Столица',
        schedule: '10:00 – 22:00',
        coordinates: [53.894660, 27.546326],
        goods: [
            {
                id: 4,
                title: 'women drape pants',
                description: 'The smooth-textured material is silky and cool on the skin with a relaxing feel',
                price: 20,
            },
            {
                id: 5,
                title: 'eco tote bag',
                description: 'This bag saves plastic bottles from ending up in oceans, lakes, and landfills.',
                price: 120,
            },
            {
                id: 6,
                title: 't-shirt',
                description: 'A basic t-shirt with a straight cut that looks stylish all on its own.',
                price: 15,
            },
        ]
    },
    {
        id: 3,
        title: "Colin's",
        address: 'ул. Немига, 5',
        schedule: '10:00 – 22:00',
        coordinates: [53.902899, 27.550503],
        goods: [
            {
                id: 7,
                title: 'black kimono ',
                description: 'a kimono wrap dress in a black hue, wrap style with tie waist detail',
                price: 42,
            },
            {
                id: 8,
                title: 'white plaid tie front top',
                description: 'a long sleeve top featuring in a wrap over style with plunge neckline and tie waist',
                price: 37,
            },
            {
                id: 9,
                title: 'brown ruffle wrap over midi dress',
                description: 'a brown wrap over midi dress in allover spotted print, with ruffle front and hem detail',
                price: 45,
            },
        ]
    },
    {
        id: 4,
        title: "O'stin",
        address: 'просп. Дзержинского, 106',
        schedule: '10:00 – 22:00',
        coordinates: [53.858394, 27.476536],
        goods: [
            {
                id: 10,
                title: 'Mini Skirt',
                description: 'Skirt: Total Length 105cm/45", Waist 34cm/13.5". Elasticated Waist. Machine Washable. Model Wears Size 10',
                price: 16,
            },
            {
                id: 11,
                title: 'basic jersey bandeau',
                description: 'Total Length 24.5cm/9.5". Measured On UK Size 10. Model Wears UK Size 10.',
                price: 10,
            },
            {
                id: 12,
                title: 'the shoulder bodysuit',
                description: '95% Polyester 5% Elastane.Flat Measurements Not Worn:Total Length 58cm/23"Sleeve Length 51cm/20.5',
                price: 12,
            },
        ]
    },
    {
        id: 5,
        title: 'LC Waikiki',
        address: 'просп. Дзержинского, 106, ТЦ Магнит',
        schedule: '10:00 – 22:00',
        coordinates: [53.858288, 27.476716],
        goods: [
            {
                id: 13,
                title: 'midi dress with pockets',
                description: 'Material: Polyester + Cotton. Soft Material, Light And Comfortable, A Must-have Dress In Your Wardrobe',
                price: 19,
            },
            {
                id: 14,
                title: 'strap skater dress',
                description: '70% Rayon,30% Linen Fabric has no elasticity V-neck, twist front, button decoration, spaghetti strap, back bow tie design, above knee length',
                price: 27,
            },
            {
                id: 15,
                title: 'midi dress casual style',
                description: 'Material: 95% Polyester and 5% Spandex . non-flexible material, breathable and comfortable',
                price: 23,
            },
        ]
    },
    {
        id: 6,
        title: 'Koton',
        address: 'просп. Победителей, 9, 2, ТЦ Galleria Minsk',
        schedule: '10:00 – 22:00',
        coordinates: [53.908347, 27.549304],
        goods: [
            {
                id: 16,
                title: 'straight-cut jacket',
                description: 'Straight-cut jacket in woven fabric with notched lapels and welt front pockets with flap',
                price: 34,
            },
            {
                id: 17,
                title: 'off-the-shoulder sweatshirt',
                description: 'Soft, long-sleeved, off-the-shoulder sweatshirt with a printed pattern.',
                price: 13,
            },
            {
                id: 18,
                title: 'faux fur coat',
                description: 'Oversized coat in faux fur with notched lapels',
                price: 69,
            },
        ]
    },
]

