import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchJobs } from '../contexts/jobsSlice';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #3498db;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: #e74c3c;
  font-size: 14px;
  margin-top: -10px;
`;

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [validationError, setValidationError] = useState('');
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.jobs);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setValidationError('Por favor, digite um termo para buscar (ex: React, Python).');
      return;
    }

    setValidationError('');
    dispatch(fetchJobs(searchTerm.trim()));
  };

  return (
    <FormContainer>
      <Title>Mural de Vagas Remotas</Title>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Busque por tecnologia, cargo ou empresa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {validationError && <ErrorText>{validationError}</ErrorText>}
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Buscando...' : 'Buscar Vagas'}
        </Button>
      </StyledForm>
    </FormContainer>
  );
};

export default SearchForm;
