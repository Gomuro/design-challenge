import {
  AppBar as MuiAppBar,
  Container,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import s from './AppBar.module.scss';
import Link from 'next/link';

export const AppBar = () => {
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <MuiAppBar
      elevation={1}
      color="transparent"
      position="static"
      className={s.AppBar}
    >
      <Container maxWidth="md" className={s.container}>
        <div className={s.logo}>
          <div style={{ display: displaySearch ? 'block' : 'none' }}>
            <div title="Google search results" className="gcse-search" />
          </div>

          <div style={{ display: displaySearch ? 'none' : 'block' }}>
            <Link passHref href="/">
              <a>
                <Image
                  src="/images/logo.svg"
                  width={250}
                  height={30}
                  alt="Hollowverse"
                />
                <Typography variant="body2" className={s.subtitle}>
                  Important people and facts
                </Typography>
              </a>
            </Link>
          </div>
        </div>

        <div className={s.search}>
          <IconButton
            aria-label="Search"
            onClick={() => setDisplaySearch(!displaySearch)}
            style={{ opacity: displaySearch ? 0.5 : 1 }}
            size="large"
          >
            {displaySearch ? <AiOutlineClose /> : <FaSearch />}
          </IconButton>
        </div>
      </Container>
    </MuiAppBar>
  );
};