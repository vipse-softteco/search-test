import React from "react";

import Title from "../../../../components/Title";

import * as S from "./styled";

const SearchInput = ({ onChange, value }) => {
  return (
    <S.Wrapper>
      <Title>Search</Title>
      <S.Input placeholder="User Name" onChange={onChange} value={value} />
    </S.Wrapper>
  );
};

export default SearchInput;
