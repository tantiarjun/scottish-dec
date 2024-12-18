import React, { useState } from "react";
import styles from "./Shop.module.css";

const HeartIcon = ({ filled }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "red" : "none"} stroke="#FFA500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

const FeaturedProducts = () => {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (productId) => {
        setFavorites(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    const events = [
        { name: "Durga Puja", image: "durgapuja.png" },
        { name: "International Yoga Day", image: "yoga.png" },
        { name: "International Dance Day", image: "dance.png" },
        { name: "Janmashtami", image: "janamsthami.png" },
        { name: "Diwali", image: "diwali.png" },
        { name: "Onam", image: "rangoli.png" },
        { name: "New Year", image: "newyear.png" },
        { name: "Foundation Day", image: "foundationday.png" },
        { name: "Holi", image: "holi.png" }
    ];

    const categories = [
        { name: "Men's T-Shirt", image: "mens-tshirt.png", width: 617, height: 504 },
        { name: "Souvenirs", image: "souvenirs.png", width: 617, height: 388 },
        { name: "Women's T-Shirt", image: "womens-tshirt.png", width: 617, height: 504 },
        { name: "Kid's T-Shirt", image: "kids-tshirt.png", width: 617, height: 388 },
    ];
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Featured Products</h2>
            <div className={styles.productsGrid}>
                <div className={styles.mainProduct}>
                    <img src="Images/shop/tshirt.png" alt="T-Shirt White H8" className={styles.mainproductImage} />
                    <div className={styles.mainproductInfo}>
                        <h3 className={styles.productName}>T-Shirt White H8</h3>
                        <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur</p>
                        <p className={styles.productPrice}>£ 50.99</p>
                    </div>
                </div>
                <div className={styles.secondaryProducts}>
                    <div className={styles.productCard}>
                        <img src="Images/shop/coin.png" alt="Gold Souvenir Coin" className={styles.productImage} />
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>Gold Souvenir Coin</h3>
                            <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur</p>
                            <p className={styles.productPrice}>
                                <span className={styles.oldPrice}>£140.90</span> £120.99
                            </p>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <img src="Images/shop/ball.png" alt="Christmas Souvenir" className={styles.productImage} />
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>Christmas Souvenir</h3>
                            <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur</p>
                            <p className={styles.productPrice}>
                                <span className={styles.oldPrice}>£140.90</span> £120.99
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.ourProductsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.heading}>Our Products</h2>
                    <a href="#" className={styles.seeAll}>See All</a>
                </div>
                <div className={styles.ourProductsGrid}>
                    {[
                        { id: 1, name: 'Black Block Print', image: 'black.png', price: 50.99 },
                        { id: 2, name: 'Crystal Lamps', image: 'lamp.png', price: 70.99 },
                        { id: 3, name: 'Indian Print Pots', image: 'pots.png', price: 60.99 },
                        { id: 4, name: 'Plain White TEE', image: 'shirt.png', price: 100.99 },
                        { id: 5, name: 'Black Energized Crystal Bracelet', image: 'band.png', price: 40.99 },
                        { id: 6, name: 'Graditude TEE', image: 'redshirt.png', price: 120.99 }
                    ].map((product) => (
                        <div key={product.id} className={styles.ourProductCard}>
                            <img
                                src={`Images/shop/${product.image}`}
                                alt={product.name}
                                className={styles.ourProductImage}
                            />
                            <h3 className={styles.ourProductTitle}>{product.name}</h3>
                            <p className={styles.ourProductDescription}>Lorem ipsum dolor sit amet, consectetur</p>
                            <p className={styles.ourProductPrice}>£ {product.price}</p>
                            <div className={styles.ourProductActions}>
                                <button className={styles.shopNowBtn}>Add to Cart</button>
                                <button
                                    className={styles.favoriteBtn}
                                    onClick={() => toggleFavorite(product.id)}
                                >
                                    <HeartIcon filled={favorites[product.id]} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.searchByEventsSection}>
                <h2 className={styles.heading}>Search By Events</h2>
                <div className={styles.eventsGrid}>
                    {events.map((event, index) => (
                        <div key={index} className={styles.eventCard}>
                            <img src={`Images/shop/${event.image}`} alt={event.name} className={styles.eventImage} />
                            <div className={styles.eventOverlay}>
                                <p className={styles.eventName}>{event.name}</p>
                                <img src="Images/shop/bar.png" alt="Decorative bar" className={styles.decorativeBar} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.shopByCategorySection}>
                <h2 className={styles.heading}>Shop By Category</h2>
                <div className={styles.categoriesGrid}>
                    {categories.map((category, index) => (
                        <div key={index} className={`${styles.categoryCard} ${styles[`category${index + 1}`]}`}>
                            <div className={styles.categoryName}>{category.name}</div>
                            <img
                                src={`Images/shop/${category.image}`}
                                alt={category.name}
                                className={styles.categoryImage}
                                width={category.width}
                                height={category.height}
                            />
                        </div>
                    ))}
                </div>
                <button className={styles.shopNowButton}>Shop Now</button>
            </section>
        </div>
    );
};

export default FeaturedProducts;