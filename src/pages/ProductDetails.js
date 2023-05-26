import { products } from "../dataFake";
const ProductDetail = (id) => {
    console.log(typeof id);
    const found = products.find((product)=>product.id === +id);
    if (!found.id) return 'ko tìm thấy';
    return `
        ${found.content}
    `;
};
export default ProductDetail;