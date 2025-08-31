const products = require('../data/products')

// These are CRUD operations
// code will change when connected to moongoose

const resolvers = {
    Query : {
        products: () => products,

        product: (_,{id}) => products.find((item)=> item.id === id)
    },


    Mutation : {
        createProduct: (_, { title, category, price, inStock })=>{
            const newlyCreatedProduct = {
                id: String(products.length + 1),
                title,
                category,
                price,
                inStock,
            };
            products.push(newlyCreatedProduct);
            return newlyCreatedProduct;
        },

        updateProduct:(_,{ id, ...updates})=>{
            const index = products.findIndex((prod) => prod.id === id);
            if (index === -1) return null;

            const updatedProduct = {
                ...products[index],
                ...updates,
            };
            products[index] = updatedProduct;
            return updatedProduct;
        },

        deleteProduct: (_, { id }) => {
            const index = products.findIndex((prod) => prod.id === id);
            if (index === -1) return false;

            products.splice(index, 1);
            return true;
        },

    }
}

/*
const resolvers = {
    Query: {
        products: async () => await Product.find({}),
        product: async (_, { id }) => await Product.findById(id),
    },

    Mutation: {
        createProduct: async (_, args) => {
            const newlyCreatedProduct = new Product(args);
            return await newlyCreatedProduct.save();
        },

        updateProduct: async (_, { id, ...updatedFields }) => {
            return await Product.findByIdAndUpdate(id, updatedFields, { new: true });
        },

        deleteProduct: async (_, { id }) => {
            const deletedProduct = await Product.findByIdAndDelete(id);
            return !!deletedProduct;
        },
    },
};
*/

module.exports = resolvers;