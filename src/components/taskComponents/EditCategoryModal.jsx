import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoryById } from '../../redux/reducers/categoriesSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { updateCategory } from '../../redux/reducers/categoriesSlice';


export default function EditCategoryModal({ onClose, categoryId }) {
    const dispatch = useDispatch();
    const { category, loading } = useSelector((state) => state.categories);
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        if (categoryId && !category) {  // Only fetch if categoryId is present and category is not already loaded
            dispatch(fetchCategoryById(categoryId));
        }
        
    }, [dispatch, categoryId, category]);

    useEffect(() => {
        if (category && category.name) {
            setCategoryName(category.name); // Set the category name in the input when data is fetched
        }
        
    }, [category]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCategory({ id: categoryId, name: categoryName }));
        onClose(); // Close the modal after updating

    };

    const handleCancel = () => {
        onClose(); // Close modal without saving changes
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
                <h2 className="text-customBlue900 font-montserrat text-[20px] font-bold mb-4">Edit Category</h2>
                <form
                    onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-customBlue900 mb-2 font-montserrat text-[18px] font-normal">
                            Category Name
                        </label>
                        <input
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-customBlue900  rounded-lg"
                            placeholder="Enter category name"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-gray-400 text-white hover:bg-gray-700 font-montserrat px-4 py-2 rounded-lg mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-customBlue900 hover:bg-[#000541] font-montserrat text-white px-4 py-2 rounded-lg"
                        >
                            Update Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

