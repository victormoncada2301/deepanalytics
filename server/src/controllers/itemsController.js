const axios = require('axios');

/* Endpoint para obtener las mejores productos */
const getProducts = async (req, res) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products", {});
        const matches = response.data;
        res.json(matches);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({ error: 'Error al obtener las productos' });
    }
};

/* Endpoint para obtener las mejores productos */
const getProductForCategory = async (req, res) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products/categories", {});
        const matches = response.data;
        res.json(matches);
    } catch (error) {
        console.error("Error al obtener los productos por categoria:", error);
        res.status(500).json({ error: 'Error al obtener las productos' });
    }
};

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene todos los productos
 *     description: Este endpoint devuelve todos los productos.
 *     responses:
 *                
 *       500:
 *         description: Error al obtener productos
 */


/**
 * @swagger
  * /api/product/category:
 *   get:
 *     summary: Obtiene todos los productos por categoria
 *     description: Este endpoint devuelve todos los productos por categoria
 *     responses:
 *                
 *       500:
 *         description: Error al obtener productos
 */

module.exports = {
    getProducts, getProductForCategory
};
