import actions from '../actions/actions';
import mutations from '../mutations/mutations';
import getters from '../getters/getters';

// class Product {
//     constructor (title, vendor, color, material, price, description, ownerId, imageSrc = '', promo = false, id = null) {
//       this.id = id
//       this.title = title
//       this.description = description
//       this.price = price
//       this.props = [
//         { header: 'Производитель', value: vendor },
//         { header: 'Цвет', value: color },
//         { header: 'Материал', value: material },
//       ]
//       this.ownerId = ownerId
//       this.imageSrc = imageSrc
//       this.promo = promo
//     }
//   }

export default {
    state: {
        products : [
            {id: '0',
             title: 'Asus FX503VD',
            //  vendor: 'Asus',
            //  color: 'white',
            //  material: 'plastic',
             description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
             price: 984,
             props: [
                { header: 'Asus', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             quantity: 0,
             totalPrice: 0,  
             ownerId: 0,
             promo: false,
             imageSrc: 'images/ASUS_FX503_VD.jpg'},
            {id: '1',
             title: 'Lenovo IdeaPad L3-15',
             props: [
                { header: 'Lenovo', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: '15.6" 1920x1080 (Full HD), Intel Core i5 10210U, 1600 МГц, 4 Гб DDR-4, 256 Гб SSD, Intel UHD Graphics, Wi-Fi, Bluetooth, Cam, Windows 10 Home (64 bit), серый',
             price: 760,
             quantity: 0,
             totalPrice: 0, 
             ownerId: 0,
             promo: false,
             imageSrc: 'images/352527_1.jpg'},

             {id: '2',
             title: 'Asus FX503VD',
             props: [
                { header: 'Asus', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
             price: 984,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 0,
             promo: false,
             imageSrc: 'images/ASUS_FX503_VD.jpg'},

             {id: '3',
             title: 'ASUS TUF Gaming FX504GD',
             props: [
                { header: 'ASUS', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
             price: 1220,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 0,
             promo: false,
             imageSrc: 'images/ASUS_TUF_Gaming_FX504_GD.jpg'},

             {id: '4',
             title: 'HP Omen 17',
             props: [
                { header: 'HP', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core i7 7700HQ 2800 MHz/17.3"/1920x1080/12Gb/1128Gb HDD+SSD/DVD-RW/NVIDIA GeForce GTX 1060/Wi-Fi/Bluetooth/Windows 10 Home',
             price: 1600,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 5,
             promo: false,
             imageSrc: 'images/HP_Omen_17.jpg'},

             {id: '5',
             title: 'Acer Swift 5 SF514',
             props: [
                { header: 'Acer', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core i7 8550U 1800 MHz/14"/1920x1080/16Gb/512Gb SSD/DVD нет/Intel HD Graphics 620/Wi-Fi/Bluetooth/Windows 10 Home',
             price: 1100,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 0,
             promo: false,
             imageSrc: 'images/Acer_Swift_5.jpg'},


             {id: '6',
             title: 'Apple MacBook (MLHC2RU/A)',
             props: [
                { header: 'Apple', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
             price: 980,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 0,
             promo: false,
             imageSrc: 'images/Apple_macbook.jpg'},

             {id: '7',
             title: 'Lenovo Legion Y520',
             props: [
                { header: 'Lenovo', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
             price: 760,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 5,
             promo: false,
             imageSrc: 'images/Lenovo_Legion_Y520.jpg'},

             {id: '8',
             title: 'Asus FX503VD',
             props: [
                { header: 'Asus', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
             price: 984,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 0,
             promo: false,
             imageSrc: 'images/ASUS_FX503_VD.jpg'},

             {id: '9',
             title: 'ASUS TUF Gaming FX504GD',
             props: [
                { header: 'ASUS', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
             price: 1220,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 0,
             promo: false,
             imageSrc: 'images/ASUS_TUF_Gaming_FX504_GD.jpg'},

             {id: '10',
             title: 'HP Omen 17',
             props: [
                { header: 'HP', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core i7 7700HQ 2800 MHz/17.3"/1920x1080/12Gb/1128Gb HDD+SSD/DVD-RW/NVIDIA GeForce GTX 1060/Wi-Fi/Bluetooth/Windows 10 Home',
             price: 1600,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 0,
             promo: false,
             imageSrc: 'images/HP_Omen_17.jpg'},

             {id: '11',
             title: 'Acer Swift 5 SF514',
             props: [
                { header: 'Acer', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core i7 8550U 1800 MHz/14"/1920x1080/16Gb/512Gb SSD/DVD нет/Intel HD Graphics 620/Wi-Fi/Bluetooth/Windows 10 Home',
             price: 1100,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 0,
             promo: true,
             imageSrc: 'images/Acer_Swift_5.jpg'},


             {id: '12',
             title: 'Apple MacBook (MLHC2RU/A)',
             props: [
                { header: 'Apple', value: 'Asus' },
                { header: 'color', value: 'white' },
                { header: 'material', value: 'plastic' },
                
            ],
             description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
             price: 980,
             quantity: 0,
             totalPrice: 0,  
             ownerId: 5,
             promo: true,
             imageSrc: 'images/Apple_macbook.jpg'} 
         ],
        cart: [],
        cartCount: 0,
        totalPrice: 0
    },
    mutations,
    actions,
    getters

}
