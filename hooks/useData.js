import { useState } from 'react';

const catagoryNames = []
const catagorisedProducts = {}
const allProducts = []


const useData = (data) => {
    const getCatagories = () => {
        for (let i = 0; i < data.length; i++) {
            allProducts.push(data[i])
            if (!(catagoryNames.includes(data[i].catagory))) {
                catagoryNames.push(data[i].catagory);
            }
            if (catagorisedProducts[data[i].catagory] !== undefined) {
                catagorisedProducts[data[i].catagory].push(data[i]);
            } else {
                catagorisedProducts[data[i].catagory || 'extras'] = [data[i]];
            }
        }
    }

    getCatagories();

    return true;
}

const useProcessedData = (options) => {
    return {
        catagoryNames: (options.catagoryNames ? catagoryNames : undefined),
        catagorisedProducts: (options.catagorisedProducts ? catagorisedProducts : undefined),
        allProducts: (options.allProducts ? allProducts : undefined)
    }
}

const searchProduct = (id) => {
    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i]._id === id) {
            return allProducts[i];
        }
    }
}

const useDataState = (value) => {
    return (useState(value ? value : null));
}

const getCatagoryIndex = (catagoryName) => {
    for (let i = 0; i < catagoryNames.length; i++) {
        if (catagoryNames[i] === catagoryName) return i
    }
    return -1
}

export {
    useData,
    useProcessedData,
    searchProduct,
    useDataState,
    getCatagoryIndex
}