import React, { ChangeEvent, useEffect, useState } from 'react';
import Input from './../../Atoms/Input/';
import * as S from './styles';

type Option = {
  name: string;
};

type AutoCompleteProps = {
  label?: string;
  placeholder?: string;
  optionsArray: Option[];
};

const AutoComplete = ({ optionsArray }: AutoCompleteProps) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setOptions(optionsArray);
  }, [optionsArray]);

  const setResultsSearch = (results: string) => {
    setSearch(results);
    setDisplay(false);
  };

  return (
    <S.Container>
      <Input
        placeholder="Search city"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setDisplay(true);
          setSearch(event.currentTarget.value);
        }}
        value={search}
      />
      {display && (
        <S.List>
          {options
            .filter(({ name }) => name.indexOf(search.toLocaleLowerCase()) > -1)
            .map((item: Option) => {
              return (
                <S.Item
                  onClick={() => setResultsSearch(item.name)}
                  key={item.name}
                >
                  {item.name}
                </S.Item>
              );
            })}
        </S.List>
      )}
    </S.Container>
  );
};

export default AutoComplete;
