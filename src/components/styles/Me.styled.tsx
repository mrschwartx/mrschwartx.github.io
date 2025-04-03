import styled from "styled-components";

export const MeWrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  p {
    margin-top: 0.5rem;
    line-height: 1.5rem;
  }
`;

export const HighlightSpan = styled.span`
  font-weight: 700;
`;

export const HighlightAlt = styled.span`
  font-weight: 700;
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
