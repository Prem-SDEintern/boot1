const service = require('../services/cartService');
const knex = require('../config/knex'); // adjust path if different

exports.addToCart = async (req, res) => {
  try {
    const result = await service.add(req.user.user_id, req.body.productId);
    if (result.error) return res.status(404).json(result);
    res.json(result);
  } catch (err) {
    console.error('Error in addToCart:', err);
    res.status(500).json({ error: 'Failed to add to cart' });
  }
};

exports.viewCart = async (req, res) => {
  try {
    const cart = await service.get(req.user.user_id);
    res.json({ cart });
  } catch (err) {
    console.error('Error in viewCart:', err);
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
};


exports.deleteCartItemById = async (req, res) => {
    const id = req.params.productId;

    console.log('Deleting cart item with id:', id);

    try {
        const deleted = await knex('carts').where({ id }).del();

        console.log('Deleted rows:', deleted);

        if (deleted) {
            res.status(200).json({ message: 'Cart item deleted successfully' });
        } else {
            res.status(404).json({ error: 'Cart item not found' });
        }
    } catch (error) {
        console.error('Error deleting cart item:', error);
        res.status(500).json({ error: 'Failed to delete cart item' });
    }
};
