import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action assíncrona para buscar as vagas
export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://remotive.com/api/remote-jobs`);
      
      // A Remotive API atualmente ignora o parâmetro de busca e retorna apenas as últimas 20 vagas.
      // Para o projeto funcionar corretamente, fazemos o filtro localmente:
      const filteredJobs = response.data.jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
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
