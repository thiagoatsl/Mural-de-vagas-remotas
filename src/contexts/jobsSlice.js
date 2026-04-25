import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Dicionário extenso para traduzir termos em português para inglês na busca
const ptToEnMap = {
  // Engenharia e Desenvolvimento
  "engenheiro": "engineer",
  "engenheira": "engineer",
  "desenvolvedor": "developer",
  "desenvolvedora": "developer",
  "programador": "developer",
  "programadora": "developer",
  "front-end": "frontend",
  "back-end": "backend",
  "full-stack": "fullstack",
  "jogos": "game",
  
  // Dados e IA
  "dados": "data",
  "cientista": "scientist",
  "inteligência": "ai",
  "artificial": "ai",
  "aprendizado": "learning",
  
  // Design e Produto
  "produto": "product",
  "projetos": "project",
  "designer": "designer",
  "gráfico": "graphic",
  "interface": "ui",
  
  // Gestão e Negócios
  "gerente": "manager",
  "gestor": "manager",
  "gestora": "manager",
  "diretor": "director",
  "diretora": "director",
  "líder": "lead",
  "executivo": "executive",
  "vendas": "sales",
  "comercial": "commercial",
  "negócios": "business",
  
  // Marketing e Conteúdo
  "marketing": "marketing",
  "conteúdo": "content",
  "redator": "writer",
  "redatora": "writer",
  "escritor": "writer",
  "mídias": "social",
  "redes": "social",
  
  // Suporte e RH
  "suporte": "support",
  "atendimento": "customer",
  "cliente": "customer",
  "recursos": "human",
  "humanos": "resources",
  "recrutador": "recruiter",
  
  // Qualidade e Infraestrutura
  "teste": "test",
  "testador": "tester",
  "qualidade": "qa",
  "segurança": "security",
  "redes": "network",
  
  // Níveis
  "estagio": "intern",
  "estágio": "intern",
  "estagiario": "intern",
  "estagiário": "intern",
  "junior": "junior",
  "júnior": "junior",
  "pleno": "mid",
  "senior": "senior",
  "sênior": "senior"
};

// Action assíncrona para buscar as vagas
export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://remotive.com/api/remote-jobs?search=${searchTerm}`);
      
      // Busca pelo termo original ou pelo termo traduzido
      const searchLower = searchTerm.toLowerCase().trim();
      const translatedTerm = ptToEnMap[searchLower] || searchLower;

      const filteredJobs = response.data.jobs.filter(job => {
        const titleLower = job.title.toLowerCase();
        const companyLower = job.company_name.toLowerCase();
        
        return titleLower.includes(searchLower) || 
               titleLower.includes(translatedTerm) ||
               companyLower.includes(searchLower) || 
               companyLower.includes(translatedTerm);
      });
      
      return filteredJobs;
    } catch (error) {
      return rejectWithValue(error.message || 'Erro ao buscar vagas.');
    }
  }
);

const initialState = {
  list: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default jobsSlice.reducer;
