import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CategoryRepository from '~/repositories/CategoryRepository';

// const Links = {
//     consumerElectric: [
//         {
//             text: 'Air Conditioners',
//             url: '/shop',
//         },
//         {
//             text: 'Audios & Theaters',
//             url: '/shop',
//         },
//         {
//             text: 'Car Electronics',
//             url: '/shop',
//         },
//         {
//             text: 'Office Electronics',
//             url: '/shop',
//         },
//         {
//             text: 'TV Televisions',
//             url: '/shop',
//         },
//         {
//             text: 'Washing Machines',
//             url: '/shop',
//         },
//     ],
//     clothingAndApparel: [
//         {
//             text: 'Printers',
//             url: '/shop',
//         },
//         {
//             text: 'Projectors',
//             url: '/shop',
//         },
//         {
//             text: 'Scanners',
//             url: '/shop',
//         },
//         {
//             text: 'Store & Business',
//             url: '/shop',
//         },
//         {
//             text: '4K Ultra HD TVs',
//             url: '/shop',
//         },
//         {
//             text: 'LED TVs',
//             url: '/shop',
//         },
//         {
//             text: 'OLED TVs',
//             url: '/shop',
//         },
//     ],
//     gardenAndKitchen: [
//         {
//             text: 'Cookware',
//             url: '/shop',
//         },
//         {
//             text: 'Decoration',
//             url: '/shop',
//         },
//         {
//             text: 'Furniture',
//             url: '/shop',
//         },
//         {
//             text: 'Garden Tools',
//             url: '/shop',
//         },
//         {
//             text: 'Garden Equipments',
//             url: '/shop',
//         },
//         {
//             text: 'Powers And Hand Tools',
//             url: '/shop',
//         },
//         {
//             text: 'Utensil & Gadget',
//             url: '/shop',
//         },
//     ],
//     healthAndBeauty: [
//         {
//             text: 'Hair Care',
//             url: '/shop',
//         },
//         {
//             text: 'Decoration',
//             url: '/shop',
//         },
//         {
//             text: 'Makeup',
//             url: '/shop',
//         },
//         {
//             text: 'Body Shower',
//             url: '/shop',
//         },
//         {
//             text: 'Skin Care',
//             url: '/shop',
//         },
//         {
//             text: 'Cologine',
//             url: '/shop',
//         },
//         {
//             text: 'Perfume',
//             url: '/shop',
//         },
//     ],
//     jewelryAndWatch: [
//         {
//             text: 'Necklace',
//             url: '/shop',
//         },
//         {
//             text: 'Pendant',
//             url: '/shop',
//         },
//         {
//             text: 'Diamond Ring',
//             url: '/shop',
//         },
//         {
//             text: 'Sliver Earing',
//             url: '/shop',
//         },
//         {
//             text: 'Leather Watcher',
//             url: '/shop',
//         },
//         {
//             text: 'Gucci',
//             url: '/shop',
//         },
//     ],
//     computerAndTechnology: [
//         {
//             text: 'Desktop PC',
//             url: '/shop',
//         },
//         {
//             text: 'Laptop',
//             url: '/shop',
//         },
//         {
//             text: 'Smartphones',
//             url: '/shop',
//         },
//         {
//             text: 'Tablet',
//             url: '/shop',
//         },
//         {
//             text: 'Game Controller',
//             url: '/shop',
//         },
//         {
//             text: 'Audio & Video',
//             url: '/shop',
//         },
//         {
//             text: 'Wireless Speaker',
//             url: '/shop',
//         },
//     ],
// };



const Links = ({data}) => (
    <div className="ps-footer__links">
        {data.map((item) => (
            <p> 
                <Link href={`/category/${item.id}`} key={item.id}>
                        <a> <strong className='mr-0'> {item.title}:</strong></a>
                </Link>
                    {
                        (item.children.length > 0) && item.children.map(subItem => {
                            return <Link href={`/category/${subItem.id}`} key={subItem.id}>
                            <a>{subItem.title}</a>
                        </Link>
                        })
                    }
            </p>
        ))}
    </div>
);


export default function FooterLinks() {
    const [cateogries, setCategories] = useState([])

    useEffect(() => {
        CategoryRepository.getCategories().then(data => {
            if (data) {
                console.log("footer", data);
                setCategories(data);
            }
        })
    },[])

  return (
    <>
        {
            (cateogries.length > 0) &&  <Links data={cateogries}></Links>
        }
    </>
  )
}

