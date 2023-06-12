import React from 'react';
import Link from 'next/link';
import MenuDropdown from '~/components/elements/menu/MenuDropdown';
import MegaMenu from '~/components/elements/menu/MegaMenu';

const Menu = ({ source, className }) => {
    // Views
    console.log("source", source)
    let menuView;
    if (source && className != 'menu') {
        menuView = source.map((item) => {{
                return (
                    <li key={item.id} className='pl-3'>
                        <Link href={'/category/' + item.id}>
                            <a>
                                {item.icon && <img className='mr-3' src={item.icon} width={30} alt={item.title}/>}
                                {item.title}
                            </a>
                        </Link>
                    </li>
                );
            }
        });
    } else if (source && className == 'menu') {
            menuView = source.map((item) => {{
                return (
                    <li key={item.id} className='pl-3'>
                        <Link href={item.path}>
                            <a>
                                {item.icon && <img className='mr-3' src={item.icon} width={30} alt={item.title}/>}
                                {item.title}
                            </a>
                        </Link>
                    </li>
                );
            }
        });
    } else {
        menuView = (
            <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    Hech qanday menu yo'q.
                </a>
            </li>
        );
    }
    return <ul className={className}>{menuView}</ul>;
};

export default Menu;
