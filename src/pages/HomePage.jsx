import { Box, Button, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Stack maxWidth={720}>
          <Typography
            textAlign={'center'}
            variant="h1"
            sx={{ marginTop: 10, marginBottom: 6 }}
          >
            Your Phone Book
          </Typography>
          <Typography
            textAlign={'center'}
            variant="h3"
            sx={{ maxWidth: 650, mb: 8 }}
          >
            Connecting worlds in one touch: Phone Book is your key to endless
            connections!
          </Typography>
          <Button size="large" variant="contained" sx={{ height: 60 }}>
            <NavLink
              style={{
                width: '100%',
                color: '#fff',
                textDecoration: 'none',
              }}
              to={'/contacts'}
            >
              Get started!
            </NavLink>
          </Button>
        </Stack>
        <img
          style={{ marginTop: 16 }}
          src="https://media.istockphoto.com/id/891806246/photo/phone-book.jpg?s=170667a&w=0&k=20&c=yIAUskL8Hh9esHrW9sxBdSkzhaFL8xH_f6CJSCv-Ipk="
          alt="photobook"
        />
      </Box>
    </>
  );
}
