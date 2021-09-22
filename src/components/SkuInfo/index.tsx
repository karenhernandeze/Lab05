import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

/**
 * SkuInfo attributes 
 * @returns SkuInfo component
 */
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        }
    }),
);

const SkuInfo = () => {
    const classes = useStyles();
    const [color, setColor] = React.useState('');
    const [size, setSize] = React.useState('');
    const [quantity, setQuantity] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setColor(event.target.value as string);
    };

    const handleChangeSize = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSize(event.target.value as string);
    };

    const handleChangeQuantity = (event: React.ChangeEvent<{ value: unknown }>) => {
        setQuantity(event.target.value as string);
    };

    return (
        <div className="productInfo">
            <Grid container className="productGrid" spacing={2}>
                <Grid>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="color-label">Color</InputLabel>
                        <Select
                            labelId="color-label-id"
                            id="color-select"
                            value={color}
                            onChange={handleChange}
                            label="Color"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Black"}>Black</MenuItem>
                            <MenuItem value={"Blue"}>Blue</MenuItem>
                            <MenuItem value={"Gray"}>Gray</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="size-label">Size</InputLabel>
                        <Select
                            labelId="size-label-id"
                            id="size-select"
                            value={size}
                            onChange={handleChangeSize}
                            label="Size"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"30X32"}>30X32</MenuItem>
                            <MenuItem value={"26W X 30L"}>26W X 30L</MenuItem>
                            <MenuItem value={"27W X 30L"}>27W X 30L</MenuItem>
                            <MenuItem value={"29W X 32L"}>29W X 32L</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="quantity-label">Quantity</InputLabel>
                        <Select
                            labelId="quantity-label-id"
                            id="quantity-select"
                            value={quantity}
                            onChange={handleChangeQuantity}
                            label="Quantity"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>

                    <Button className={classes.formControl} variant="outlined">Add To Cart</Button>

                </Grid>
            </Grid>
        </div>
    )
}

export default SkuInfo;