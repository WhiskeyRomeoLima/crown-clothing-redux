// comments reflect what went away/added with conversion from context to redux useSelector
import { /*useEffect */ Fragment } from 'react';
import { useSelector } from 'react-redux' //added
import { selectCategoriesMap } from '../../store/categories/categories.selector' //added
//import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  //const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap) //added

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
