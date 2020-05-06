import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../config/theme'

import Container from './Container'

const Header = ({ dark, bgColor = 'none', siteTitle, headerColor }) => (
  <header
    css={css`
      width: 100%;
      flex-shrink: 0;
      background: none;
      padding: 20px 0 0 0;
      background: ${dark ? '#090909' : `${bgColor}` || 'none'};
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={css`
          width: 100%;
          font-size: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${headerColor};
          a {
            color: ${headerColor ? headerColor : theme.brand.primary};
          }
          a:hover {
            color: ${headerColor === theme.colors.white
              ? 'white'
              : theme.colors.link_color_hover};
          }
        `}
      >
        <Link to="/" aria-label="go to homepage" activeClassName="active">
          {siteTitle}
        </Link>
        <div
          css={css`
            font-size: 18px;
            line-height: 1.25;
            display: flex;
            align-items: center;
            a {
              color: '#fbfbfb';
              text-decoration: none;
              & + a {
                margin-left: 32px;
              }
            }
            .active {
              display: none;
              visibility: hidden;
            }
          `}
        >
          <Link
            to="/writing"
            activeClassName="active"
            aria-label="View writing"
          >
            Writing
          </Link>
          <Link
            to="/talks"
            activeClassName="active"
            aria-label="View about page"
          >
            JavaScript Talks & Interviews
          </Link>
        </div>
      </nav>
    </Container>
  </header>
)

export default Header
