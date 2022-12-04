import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import { ProductCard } from "./ProductCard";


interface Props {
    products: Product[];
  }

  interface ProductListProps {
    products: Product[];
  }
  
  export const ProductList = ({ products }: ProductListProps) => {
    return (
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    );
  };