import "./index.css";
import { Grid, Paper, Typography } from "@material-ui/core";
import SkuInfo from "../SkuInfo";

// Id
// Name
// Description
const ProductInfo=()=>{
    return (
        <div className="productInfo">
            <Grid container className="productGrid" spacing={2}>
              <Grid item lg={4}>
                <Paper className="largeImage" >
                  <img src="https://dummyimage.com/500x500/000/0011ff" alt="Levi's 501 Original Fit Jeans Jeans para Hombre"/>
                </Paper>
              </Grid>

              <Grid item lg={8} container>
                <Grid item lg={12}>
                  <Typography className="productName" variant="h1">
                    Levi's 501 Original Fit Jeans Jeans para Hombre
                  </Typography>
                </Grid>
                <Grid item lg={12}>
                  <Typography>
                    100% algodón, Cierre de Cremallera, Lavar a máquina, Jeans corte ajustado, Pierna ajustada, Stretch especial que te brinda mayor movilidad
                  </Typography>                
                </Grid>
                <Grid item lg={2}>
                  <Typography className="dollars crossedout">
                    1027.24
                  </Typography>                
                </Grid>
                <Grid item lg={2}>
                  <Typography className="dollars">
                    706.93
                  </Typography>                
                </Grid> 
                <Grid item lg={12}/>  
              </Grid>
              
              <SkuInfo/>

            </Grid>
        </div>
    )
} 
 
export default ProductInfo;