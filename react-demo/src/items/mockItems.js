import { EventEmitter } from 'events';
import assign from 'object-assign';

const ProductStore = assign({}, EventEmitter.prototype, {
	items: {
		products: [
			{ id: 0, name: 'Samsung',
				price: 10000, quantity: 2 },
			{ id: 1, name: 'Motorola',
				price: 7000, quantity: 3 },
			{ id: 2, name: 'Redmi',
				price: 8000, quantity: 4 },
		]
	},
});

export default ProductStore;
