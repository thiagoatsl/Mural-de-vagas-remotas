import { useSelector } from 'react-redux';
import styled from 'styled-components';
import JobCard from './JobCard';

const ListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 40px auto;
  padding: 0 20px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-top: 40px;
`;

const ErrorMessage = styled(Message)`
  color: #e74c3c;
`;

const JobList = () => {
  const { list, status, error } = useSelector((state) => state.jobs);

  if (status === 'idle') {
    return <Message>Digite um termo acima para buscar vagas.</Message>;
  }

  if (status === 'loading') {
    return <Message>Carregando vagas...</Message>;
  }

  if (status === 'failed') {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (status === 'succeeded' && list.length === 0) {
    return <Message>Nenhuma vaga encontrada para este termo. Tente outro!</Message>;
  }

  return (
    <ListContainer>
      {list.map((job) => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company_name}
          url={job.url}
        />
      ))}
    </ListContainer>
  );
};

export default JobList;
