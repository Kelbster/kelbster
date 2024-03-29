import styled from 'styled-components';
import { fontSpace, H1, H3, P } from '../../styles/typography';
import { gray200, darkBlue600, darkBlue500 } from '../../styles/colors';
import { Container } from '../../styles/layout';
import mediaQuery from '../../styles/media-query';

export const RecentWorkStyled = styled.div`
  background: ${darkBlue600};
  width: 100%;
  color: ${gray200};
  text-transform: uppercase;
  padding-top: 80px;
`;

export const ContainerWorkGrid = styled(Container)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 16px;
  margin: 90px auto 110px;

  ${mediaQuery.mobile`
    display: block;
    margin: 60px auto 110px;
  `}
`;

export const H1Work = styled(H1)`
  margin: 0;
`;

export const Blurb = styled.a`
  display: block;
  color: inherit;
  cursor: pointer;
  font-family: ${fontSpace};
  margin-bottom: 24px;
  text-decoration: none;

  ${mediaQuery.mobile`
    margin: 16px 0 0;
  `}
`;

export const H3Blurb = styled(H3)`
  color: ${gray200};
  display: inline-block;
  margin: 0;
  padding: 0 4px 0 2px;

  ${Blurb}:hover & {
    background: ${gray200};
    color: ${darkBlue500};
  }
`;

export const PBlurb = styled(P)`
  font-size: 1.6rem;
  line-height: 1.4;

  ${mediaQuery.mobile`
    font-size: 1.32rem;
  `}
`;
