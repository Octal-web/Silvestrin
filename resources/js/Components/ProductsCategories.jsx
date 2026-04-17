import React, { useState } from 'react';

export const ProductsCategories = ({ brands, categories, hasChanged }) => {
    const [activeFilter, setActiveFilter] = useState('brands');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    React.useEffect(() => {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const marcaUrl = urlParams.get('marca');
        const categoriaUrl = urlParams.get('categoria');
        
        if (marcaUrl) {
            setSelectedBrand(marcaUrl);
            setActiveFilter('brands');
        } else if (categoriaUrl) {
            setSelectedCategory(categoriaUrl);
            setActiveFilter('categories');
        }
    }, []);

    const handleBrandClick = (brandSlug) => {
        setSelectedBrand(brandSlug);
        setSelectedCategory('');
        setActiveFilter('brands');
        
        const url = new URL(window.location);
        url.searchParams.set('marca', brandSlug);
        url.searchParams.delete('categoria');
        window.history.pushState({}, '', url);
        
        hasChanged(true);
    };

    const handleCategoryClick = (categorySlug) => {
        setSelectedCategory(categorySlug);
        setSelectedBrand('');
        setActiveFilter('categories');
        
        const url = new URL(window.location);
        url.searchParams.set('categoria', categorySlug);
        url.searchParams.delete('marca');
        window.history.pushState({}, '', url);
        
        hasChanged(true);
    };

    const handleFilterToggle = (filterType) => {
        setActiveFilter(filterType);
        
        if (filterType === 'brands') {
            setSelectedCategory('');
            const url = new URL(window.location);
            url.searchParams.delete('categoria');
            window.history.pushState({}, '', url);
        } else {
            setSelectedBrand('');
            const url = new URL(window.location);
            url.searchParams.delete('marca');
            window.history.pushState({}, '', url);
        }
        
        hasChanged(true);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        
        const url = new URL(window.location);
        if (e.target.value.trim()) {
            url.searchParams.set('q', e.target.value.trim());
        } else {
            url.searchParams.delete('q');
        }
        window.history.pushState({}, '', url);
        
        hasChanged(true);
    };

    React.useEffect(() => {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const pesquisaUrl = urlParams.get('q');
        
        if (pesquisaUrl) {
            setSearchTerm(pesquisaUrl);
        }
    }, []);

    return (
        <aside className="w-full md:w-80 md:mr-12 mb-8 md:mb-0">
            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Pesquisar produtos..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-4 py-3 pr-10 text-sm border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex mb-6">
                <button
                    onClick={() => handleFilterToggle('brands')}
                    className={`flex-1 py-2 px-4 rounded-l-3xl border ${
                        activeFilter === 'brands'
                            ? 'bg-primary text-white font-bold border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    Marcas
                </button>
                <button
                    onClick={() => handleFilterToggle('categories')}
                    className={`flex-1 py-2 px-4 rounded-r-3xl border ${
                        activeFilter === 'categories'
                            ? 'bg-primary text-white font-bold border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    Categorias
                </button>
            </div>

            {activeFilter === 'brands' && (
                <div className="bg-primary rounded-3xl px-6 py-8">
                    <h3 className="text-white text-xl font-semibold mb-2">Marcas:</h3>
                    <ul className="space-y-1">
                        {brands?.map((brand) => (
                            <li key={brand.id}>
                                <button
                                    onClick={() => handleBrandClick(brand.slug)}
                                    className={`w-full text-left py-1 px-3 rounded text-lg transition-colors ${
                                        selectedBrand === brand.slug
                                            ? 'bg-white bg-opacity-20 text-white font-medium'
                                            : 'text-white hover:bg-black hover:bg-opacity-10'
                                    }`}
                                >
                                    {brand.nome}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {activeFilter === 'categories' && (
                <div className="bg-secondary rounded-3xl px-6 py-8">
                    <h3 className="text-white text-xl font-semibold mb-2">Categorias:</h3>
                    <ul className="space-y-1">
                        <li>
                            <button
                                onClick={() => {
                                    setSelectedCategory('');
                                    const url = new URL(window.location);
                                    url.searchParams.delete('categoria');
                                    window.history.pushState({}, '', url);
                                    hasChanged(true);
                                }}
                                className={`w-full text-left py-1 px-3 rounded text-lg transition-colors ${
                                    selectedCategory === '' 
                                        ? 'bg-white bg-opacity-20 text-white font-medium'
                                        : 'text-white hover:bg-black hover:bg-opacity-10'
                                }`}
                            >
                                Todas
                            </button>
                        </li>
                        {categories?.map((category) => (
                            <li key={category.id}>
                                <button
                                    onClick={() => handleCategoryClick(category.slug)}
                                    className={`w-full text-left py-1 px-3 rounded text-lg transition-colors ${
                                        selectedCategory === category.slug
                                            ? 'bg-white bg-opacity-20 text-white font-medium'
                                            : 'text-white hover:bg-black hover:bg-opacity-10'
                                    }`}
                                >
                                    {category.nome}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </aside>
    );
};