import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const Title = styled.h3`
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 1.2rem;
`;

const Company = styled.p`
  color: #7f8c8d;
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 0.9rem;
`;

const ApplyButton = styled.a`
  display: inline-block;
  background-color: #2ecc71;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  align-self: flex-start;
  transition: background-color 0.3s;

  &:hover {
    background-color: #27ae60;
  }
`;

const JobCard = ({ title, company, url }) => {
  return (
    <Card>
      <div>
        <Title>{title}</Title>
        <Company>{company}</Company>
      </div>
      <ApplyButton href={url} target="_blank" rel="noopener noreferrer">
        Aplicar para Vaga
      </ApplyButton>
    </Card>
  );
};

export default JobCard;
