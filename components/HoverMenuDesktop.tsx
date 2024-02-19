import { Grid, Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface Options {
  name?: string;
  category?: string[];
  featured?: string[];
  More?: string[];
  nameCat?: string;
  nameFeat?: string;
  nameMore?: string;
  imageData?: string[];
  imageDescription?: string[];
}

interface HoverMenuDesktop {
  options: Options[];
  isHoverd?: string;
  setHover: (hover: string) => void;
  setIsOpen: (hover: boolean) => void;
}

function HoverMenuDesktop(props: PropsWithChildren<HoverMenuDesktop>) {
  const { options, isHoverd, setHover } = props;
  const Options = options.filter((item) => isHoverd === item.name);

  return (
    isHoverd && (
      <>
        <Box
          onMouseLeave={() => {
            setHover('');
          }}
          sx={{
            position: 'absolute',
            zIndex: '1000',
            width: '100%',
            height: '480px',
            backgroundColor: '#fff',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Container>
            <Grid container spacing={1} columns={15}>
              <Grid item md={3} sm={4} xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '20px',
                  }}
                >
                  {Options.map((item) => (
                    <Typography>{item.nameCat}</Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {Options.map((item) =>
                    item.category?.map((item) => (
                      <Typography sx={{ color: '#404040' }}>{item}</Typography>
                    ))
                  )}
                </Box>
              </Grid>
              <Grid item md={2} sm={4} xs={12}>
                <Box
                  sx={{
                    color: '#0C0C0C',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '20px',
                  }}
                >
                  {Options.map((items) => (
                    <Typography>{items.nameFeat}</Typography>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {Options.map((items) =>
                    items.featured?.map((items) => (
                      <Typography sx={{ color: '#404040' }}>{items}</Typography>
                    ))
                  )}
                </Box>
              </Grid>
              <Grid item md={2} sm={4} xs={12}>
                <Box
                  sx={{
                    color: '#0C0C0C',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '20px',
                  }}
                >
                  {Options.map((items) => (
                    <Typography>{items.nameMore}</Typography>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {Options.map((items) =>
                    items.More?.map((items, index) => (
                      <Typography sx={{ color: '#404040' }} key={index}>
                        {items}
                      </Typography>
                    ))
                  )}
                </Box>
              </Grid>

              {Options.map((item) => {
                if (isHoverd !== item.name) return null;
                const gridSize = item.imageData?.length === 2 ? 4 : 2.5;

                return item.imageData?.map((imageUrl, index) => (
                  <Grid item xs={gridSize} key={index}>
                    <Box>
                      <Image
                        src={imageUrl}
                        width={400}
                        height={400}
                        style={{ objectFit: 'cover', width: '100%' }}
                        alt="images for banner when user hover on links"
                      />

                      {item.imageDescription && (
                        <Typography>{item.imageDescription[index]}</Typography>
                      )}
                    </Box>
                  </Grid>
                ));
              })}
            </Grid>
          </Container>
        </Box>
      </>
    )
  );
}

export default HoverMenuDesktop;