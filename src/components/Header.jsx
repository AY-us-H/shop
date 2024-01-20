import classes from './header.module.css' 
import { BsFillTelephoneFill } from "react-icons/bs"; 
import { MdEmail } from "react-icons/md"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader   
import { Carousel } from 'react-responsive-carousel';  
import React, { useEffect } from 'react'; 
 
const Header = () => { 
    const carouselSettings = { 
        showThumbs: false, 
        infiniteLoop: true, 
        autoPlay: true, 
        interval: 2000, 
        transitionTime: 500, 
        showStatus: false, 
        showIndicators: true, 
        dynamicHeight: true, 
    }; 
    const bgList = [ 
        { 
            id: 1, 
            image: 
'https://cdn.freshtohome.com/media/banner/6c3627997d6b1eb2.jpg', 
        }, 
        { 
            id: 2, 
            image: 
'https://cdn.freshtohome.com/media/banner/8f7a29e9040ff7de.jpg', 
        }, 
        { 
            id: 3, 
            image: 
'https://cdn.freshtohome.com/media/banner/ccef744e82b6a1d6.jpg', 
        }, 
        { 
            id: 4, 
            image: 
'https://cdn.freshtohome.com/media/banner/2bb03a5849353c68.jpg', 
        }, 
        { 
            id: 5, 
            image: 
'https://cdn.freshtohome.com/media/banner/ae8b84466411f2d4.jpg', 
        }, 
        { 
            id: 6, 
            image: 
'https://cdn.freshtohome.com/media/banner/4cb4071dce2291de.jpg', 
        }, 
        { 
            id: 7, 
            image: 
'https://cdn.freshtohome.com/media/banner/8d9bff6b1a40c687.jpg', 
        }, 
    ]; 
    const carouselData = bgList.map((row) => { 
        return ( 
            <div key={row.id} className={classes.carouselItem}> 
                <img src={row.image} alt={`Image ${row.id}`} /> 
            </div> 
        ); 
    }); 
    const navigationItems = [ 
        { name: 'Fish & Seafood', image: 
'https://static.freshtohome.com/images/icons/category-icons/fish.png' }, 
        { name: 'Poultry', image: 
'https://static.freshtohome.com/images/icons/category-icons/chicken.png' }, 
        { name: 'Mutton', image: 
'https://static.freshtohome.com/images/icons/category-icons/mutton.png' }, 
        { name: 'Steaks & Fillet', image: 
'https://static.freshtohome.com/images/icons/category-icons/steaks.png' }, 
        { name: 'Ready to Cook', image: 
'https://static.freshtohome.com/images/icons/category-icons/readytocook.png' 
}, 
        {name: 'Vegetarian', image: 
'https://static.freshtohome.com/images/icons/category-icons/basket.png' }, 
    ]; 
    useEffect(() => { 
        // Create the before and after elements 
        const beforeElement = document.createElement('div'); 
        const afterElement = document.createElement('div'); 
 
        // Add the necessary styles to the before element 
        beforeElement.style.content = '""'; 
        beforeElement.style.display = 'table'; 
        beforeElement.style.width = '100%'; 
        beforeElement.style.height = '20px'; 
        beforeElement.style.background = 'linear-gradient(to bottom, rgba(0,0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%)'; 
        beforeElement.style.zIndex = '-1'; 
        afterElement.style.position = 'absolute'; 
        beforeElement.style.top = '0'; 
 
        // Add the necessary styles to the after element 
        afterElement.style.content = '""'; 
        afterElement.style.display = 'table'; 
        afterElement.style.width = '100%'; 
        afterElement.style.height = '20px'; 
        afterElement.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%)'; 
        afterElement.style.zIndex = '-1'; 
        afterElement.style.position = 'absolute'; 
        afterElement.style.bottom = '0'; 
 
        // Get the .nav-container element and append the before and after elements to it 
        const navContainer = document.getElementById('topNavContainer'); 
        navContainer.appendChild(beforeElement); 
        navContainer.appendChild(afterElement); 
 
        // Clean up by removing the elements when the component unmounts 
        return () => { 
            navContainer.removeChild(beforeElement); 
            navContainer.removeChild(afterElement); 
        }; 
    }, []); 
    return ( 
        <div> 
            <div className={classes.headercontainer}> 
                <div className={classes.leftcontent}> 
                    <span className={classes.contactinfo}><BsFillTelephoneFill 
/> 1800-313-3302 | <MdEmail /> customercare@freshtohome.com</span> 
                </div> 
                <div className={classes.rightcontent}> 
                    <span className={classes.headerlink}>Certificates</span> 
                    <span className={classes.headerlink}>|</span> 
                    <span className={classes.headerlink}>Why us</span> 
                    <span className={classes.headerlink}>|</span> 
                    <span className={classes.headerlink}>Newsroom</span> 
                    <span className={classes.headerlink}>|</span> 
                    <span className={classes.headerlink}>Sell-With-Us</span> 
 
                    <span className={classes.headerlink}>Bangalore / 
Karnataka</span> 
                </div> 
            </div> 
            <div className={classes.headerContent}> 
                <div className={classes.leftContentWrapper}> 
                    <div className={classes.imagefreshtohomeicon}> 
                        <img  src="https://static.freshtohome.com/images/logo/2021/logo-medium.png" 
                            alt="Your Photo" 
                            width="80" // Set the desired width 
                            height="60" // Set the desired height 
                            style={{ objectFit: 'contain' }} />  
                    </div> 
 
                    <div className={classes.searchBar}> 
                        {/* Add your search bar here */} 
                        <input type="text" placeholder="Search" /> 
 
                        {/* Add the search icon here */} 
                        <AiOutlineSearch className={classes.searchIcon} /> 
                    </div> 
                </div> 
 
                <div className={classes.rightContentWrapper}> 
                    <div className={classes.imagelogin}> 
                        <img className='imagelogin' 
                            src='https://encrypted
tbn1.gstatic.com/images?q=tbn:ANd9GcS13VjgCzvLxnwPAJBEMltYW9B1Q6cL418k8ICwWr3X
 ajaHVazm' 
                            alt="Yoursd Photo" 
                            width="40" // Set the desired width 
                            height="40" // Set the desired height 
                            style={{ objectFit: 'contain' }} 
                        /> 
                    </div> 
                    <div className={classes.bag}> 
                        <img className='bag' 
                            src='https://encrypted
tbn1.gstatic.com/images?q=tbn:ANd9GcTyxMrYeJBaPG8RtsFv0etJI
xJRRfUvc5pw6OBkAgj-Qt1l5-a' 
                            alt="bag image" 
                            width="40" // Set the desired width 
                            height="40" // Set the desired height 
                            style={{ objectFit: 'contain' }} 
                        /> 
                    </div> 
                </div> 
            </div> 
            <div className={classes.navcontainer} id="topNavContainer"> 
                <div className={classes.container} id="container"> 
                    <div className={classes.row}> 
                        <ul className={classes.nav}> 
                            {navigationItems.map(item => ( 
                                <li key={item.name} className={`level0 
${item.name.toLowerCase().replace(' ', '-')}`}> 
                                    <a 
href={`/${item.name.toLowerCase().replace(' ', '-')}`} className="level-top" 
data-hover={item.name}> 
                                        <img src={item.image} alt={item.name} 
/> 
                                        <span>{item.name}</span> 
                                         
                                    </a> 
                                     
                                </li> 
                            ))} 
                        </ul> 
                    </div> 
                </div> 
            </div> 
            <div className={classes.carouselContainer}> 
                <div className={classes.photoCarousel}> 
                    <Carousel {...carouselSettings}>{carouselData}</Carousel> 
                </div> 
            </div> 
             
        </div> 
    ) 
} 
 
export default Header;