// comments reflect what went away/added with conversion from context to redux useSelector
import { /*useContext*/ useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux' //added
import { selectCategoriesMap } from '../../store/categories/categories.selector' //added
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
//import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  //const { categoriesMap } = useContext(CategoriesContext);
   
  const  categoriesMap  = useSelector(selectCategoriesMap); // added
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {  
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
