import React, { useState, useEffect } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

const SearchResults = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/products`);
                const data = await response.json();
                console.log(data); // Verifica que sea un array
                setProducts(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Error al obtener los productos.');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Listado de Productos</h1>

            <label htmlFor="category">Filtrar por Categoría:</label>
            <select id="category" onChange={handleCategoryChange} value={selectedCategory}>
                <option value="">Todas</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                        <p>Categoría: {product.category}</p>
                        <p>Calificación: {product.rating.rate} ⭐ (Total de reseñas: {product.rating.count})</p>
                        <img src={product.image} alt={product.title} width="100" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
