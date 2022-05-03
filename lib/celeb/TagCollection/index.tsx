import { Chip, Container, Typography } from '@mui/material';
import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import s from './TagCollection.module.scss';

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <Container maxWidth="lg" className={s.TagCollection}>
      <Container>
        {tags.regular.map((t) => (
          <Chip
            key={t.tag.name}
            label={t.tag.name}
            className={s.tag}
            variant="outlined"
          />
        ))}
      </Container>

      {tags.lowConfidence.length > 0 && (
        <Container maxWidth="lg" className={s.lowConfidence}>         
        <div>
          <Typography 
          variant="h4" 
          component="p"
          className={s.tag}
          display="inline"
          >
            Maybe
          </Typography>
          {tags.lowConfidence.map((t) => (
            <Chip
              key={t.tag.name}
              label={t.tag.name}
              className={s.tag}
              variant="outlined"
            />

          ))}
        </div>
        </Container>
      )}
    </Container>
  );
};
