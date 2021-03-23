import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CssBaseline,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';

export default function Product({ product }) {
  console.log(product.sources);
  return (
    <React.Fragment>
      <Container maxWidth="lg" component="main">
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="textPrimary"
        >
          {product.name}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          style={{ marginBottom: '70px' }}
        >
          {product.description}
        </Typography>

        <Grid container spacing={5} alignItems="flex-end">
          {product.sources.map((source) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={source.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt={source.imgAlt}
                  height="140"
                  image={source.img}
                  title="Contemplative Reptile"
                />
                <CardHeader
                  title={source.title}
                  subheader={source.description}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
                <CardContent>
                  <div>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ~${source.price}
                    </Typography>
                  </div>
                  {/* <ul>
                    {source.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul> */}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    aria-label={`Buy ${source.title}`}
                  >
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
