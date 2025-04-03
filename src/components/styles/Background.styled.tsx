import styled from "styled-components";

export const BkgIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const BkgList = styled.div`
  margin-bottom: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
    padding-left: 0.5em;
  }

  .place {
    margin-bottom: 0.275rem;
  }

  .years {
    color: ${({ theme }) => theme.colors?.text[200]};
  }

  .desc {
    padding-left: 1.7em;
    color: ${({ theme }) => theme.colors?.text[200]};
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.text[200]};
  text-decoration: none;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.primary};

  &:hover {
    border-bottom-style: solid;
  }
`;
