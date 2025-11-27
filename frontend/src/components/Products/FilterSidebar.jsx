import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams()  // x.com/?a=1&b=2
    const navigate = useNavigate()
    const [filters, setFilters] = useState({
        catagory: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 2000
    })
    const [priceRange, setPriceRange] = useState([0, 2000])
    const catagories = ["Top Wear", "Bottom Wear"]
    const colors = [
        "Red",
        "Blue",
        "Black",
        "Green",
        "Yellow",
        "Gray",
        "White",
        "Pink",
        "Beige",
        "Navy"
    ]
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

    const materials = [
        "Cotton",
        "Wool",
        "Denim",
        "Polyester",
        "Silk",
        "Linen",
        "Viscose",
        "Fleece"
    ]
    const brands = [
        "Urban Trends",
        "Modern Fit",
        "Gucchi",
        "Fashion Style",
        "Red Hunt",
        "Cool Dude"
    ]
    const genders = ["Men", "Women"]

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        setFilters({
            catagory: params.catagory || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 2000,
        })
        setPriceRange([0, params.maxPrice || 2000])
    }, [searchParams])

    const handleFilterChange=(e)=>{
        const {name, value, checked, type}=e.target
        // console.log({name, value, checked, type})
        let newFilters = {...filters}
        if(type==="checkbox"){
            if(checked){
                newFilters[name] = [...(newFilters[name] || []), value]
            }else{
                newFilters[name] = newFilters[name].filter((item) => item !== value)
            }
        }else{
            newFilters[name]=value
        }
        setFilters(newFilters)
        updateURLParams(newFilters)
        // console.log(newFilters)
    }
    const updateURLParams=(newFilters)=>{
        const params = new URLSearchParams()
        Object.keys(newFilters).forEach((key)=>{
            if(Array.isArray(newFilters[key]) && newFilters[key].length > 0){
                params.append(key, newFilters[key].join(","))
            }else if (newFilters[key]){
                params.append(key, newFilters[key])
            }
        })
        setSearchParams(params)
        navigate(`?${params.toString()}`) //eg..  ?catagory=Bottom+Wear&size=XS%2CS 
    }
    const handlePriceChange=(e)=>{
        const newPrice= e.target.value
        setPriceRange([0, newPrice])
        const newFilters = {...filters, minPrice:0, maxPrice:newPrice}
        setFilters(filters)
        updateURLParams(newFilters)
    }


    return (
        <div className='p-4'>
            <h3 className='text-xl font-bold text-black mb-4'>Filters</h3>
            {/* catagory Filter */}
            <div className='mb-6'>
                <label className='block text-black font-medium mb-2'>Catagory</label>
                {catagories.map((catagory) => (
                    <div key={catagory} className='flex items-center mb-1'>
                        <input
                            type="radio"
                            name="catagory"
                            value={catagory}
                            onClick={handleFilterChange}
                            checked={filters.catagory === catagory}
                            className='mr-2 h-4 w-4 accent-brand-colo text-blue-500 focus:ring-blue-400 border-gray-300 cursor-pointer' />
                        <span className='text-gray-700'>{catagory}</span>
                    </div>
                ))}
            </div>
            {/* Gender Filter */}
            <div className='mb-6'>
                <label className='block text-black font-medium mb-2'>Gender</label>
                {genders.map((gender) => (
                    <div key={gender} className='flex items-center mb-1'>
                        <input
                            type="radio"
                            name="gender"
                            value={gender}
                            onClick={handleFilterChange}
                            checked={filters.gender === gender}
                            className='mr-2 h-4 w-4 accent-brand-colo text-blue-500 focus:ring-blue-400 border-gray-300 cursor-pointer' />
                        <span className='text-gray-700'>{gender}</span>
                    </div>
                ))}
            </div>
            {/* color Filter section */}
            <div className='mb-6'>
                <label className='block text-black font-medium mb-2'> Color</label>
                <div className='flex flex-wrap gap-2'>
                    {colors.map((color) => (
                        <button
                            key={color}
                            name='color'
                            value={color}
                            onClick={handleFilterChange}
                            className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color ? "ring-2 ring-purple-800":""}`}
                            style={{ backgroundColor: color.toLowerCase() }}></button>
                    ))}
                </div>
            </div>
            {/* Size Filter section */}
            <div className='mb-6'>
                <label className='block text-black font-medium mb-2'>Size</label>
                {sizes.map((size) => (
                    <div key={size} className='flex items-center mb-1'>
                        <input 
                        type="checkbox" 
                        name='size' 
                        value={size}
                        onClick={handleFilterChange}
                        checked={filters.size.includes(size)}
                        className='mr-2 h-4 w-4 accent-brand-colo border-gray-300 cursor-pointer' />
                        <span className='text-gray-700'>{size}</span>
                    </div>
                ))}
            </div>
            {/* Material Filter section */}
            <div className='mb-6'>
                <label className='block text-black font-medium mb-2'>Material</label>
                {materials.map((material) => (
                    <div key={material} className='flex items-center mb-1'>
                        <input 
                        type="checkbox" 
                        name='material' 
                        value={material}
                        onClick={handleFilterChange}
                        checked={filters.material.includes(material)}
                        className='mr-2 h-4 w-4 accent-brand-colo border-gray-300 cursor-pointer' />
                        <span className='text-gray-700'>{material}</span>
                    </div>
                ))}
            </div>
            {/* Brand Filter section */}
            <div className='mb-6'>
                <label className='block text-black font-medium mb-2'>Brand</label>
                {brands.map((brand) => (
                    <div key={brand} className='flex items-center mb-1'>
                        <input 
                        type="checkbox" 
                        name='brand' 
                        value={brand}
                        onClick={handleFilterChange}
                        checked={filters.brand.includes(brand)}
                        className='mr-2 h-4 w-4 accent-brand-colo border-gray-300 cursor-pointer' />
                        <span className='text-gray-700'>{brand}</span>
                    </div>
                ))}
            </div>
            {/* price Range Filter */}
            <div className='mb-8'>
                <label className='block text-black font-medium'>Price Range</label>
                <input 
                type="range" 
                name='priceRange' 
                min={0} 
                max={2000} 
                value={priceRange[1]}
                onChange={handlePriceChange}
                className='w-full h-2 bg-gray-300 accent-brand-colo cursor-pointer rounded-lg appearance-none'/>
            <div className='flex justify-between text-gray-600 mt-1'>
                <span>₹0</span>
                <span>₹{priceRange[1]}</span>
            </div>
            </div>
        </div>
    )
}

export default FilterSidebar
