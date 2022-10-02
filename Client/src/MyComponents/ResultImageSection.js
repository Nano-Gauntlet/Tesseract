import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ResultImageSection({itemData}) {
  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={12}>
        {itemData.map((item) => (
          <ImageListItem key={item._id}>
            <img
              src={`${item.preview_image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.preview_image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={(e) => {
                e.preventDefault();
                window.open(`${item.url}`, '_blank');
            }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
