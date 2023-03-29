import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategories } from '../../store/categories/categories.action'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      //const categoryMap = await getCategoriesAndDocuments('categories');
      const categoriesArray = await getCategoriesAndDocuments('categories');
      //console.log(categoriesArray)
      
      dispatch(setCategories(categoriesArray))
    };

    getCategoriesMap();
  }, [dispatch]); //dispatch is not needed here - same linting problem as before

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
