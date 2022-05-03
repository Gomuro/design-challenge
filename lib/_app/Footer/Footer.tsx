import { Container, Divider, Link, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Icon } from '~/lib/components/Icon';
import { FaCommentDots, FaInfoCircle, FaGift } from "react-icons/fa";
import s from './Footer.module.scss';
import { Separator } from '~/lib/components/Separator';

export const Footer = () => {
  return (
    <footer className={s.Footer}>
      <Separator />
      <Container maxWidth="md" className={s.content}>
          <Image
            className={s.image}
            width={50}
            height={50}
            layout="fixed"
            alt="Hollowverse"
            src="/images/letter-logo.png"
          />

<div className={s.items}>
          {(
            [
              [
                FaInfoCircle,
                <>About</>,
                <>
                  Hollowverse is about the important people and their beliefs.
                </>,
              ],
              [
                FaCommentDots,
                <>Contact</>,
                <>
                  Email us at{' '}
                  <Link
                    rel="noopener"
                    href="mailto:hollowverse@hollowverse.com"
                    target="_blank"
                    color="inherit"
                  >
                    hollowverse@hollowverse.com
                  </Link>
                  .
                </>,
              ],
              [
                FaGift,
                <>Copyrights</>,
                <>
                  We reserve none. Everything here is free, including{' '}
                  <Link
                    href="https://github.com/hollowverse/"
                    target="_blank"
                    color="inherit"
                    rel="noopener"
                  >
                    the code
                  </Link>
                  .
                </>,
              ],
            ] as const
          ).map(([IconComponent, head, paragraph], i) => {
            return (
              <div key={i}>
                <Typography variant="subtitle1" component="p">
                  <Icon component={IconComponent} style={{ fontSize: 16 }} />{' '}
                  {head}
                </Typography>

                <Typography variant="body2">{paragraph}</Typography>
              </div>
            );
          })}
        </div>
      </Container> 
    </footer>
  );
};
