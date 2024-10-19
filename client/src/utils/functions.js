import noimage from '../assets/noimage.jpg'

export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
}

export const defaultImage = () => {
    return noimage
}

