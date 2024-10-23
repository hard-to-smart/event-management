import noimage from '../assets/noimage.jpg'


export const defaultImage = () => {
    return noimage
}
export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
}


export const sortByPrice = (products, min, max)=>{
    return products.filter((product) => product.price >= min && product.price<= max);
 }

