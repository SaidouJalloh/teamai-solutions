import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000"

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("auth_token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("auth_token")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  },
)

// API Functions
export const fetchTeam = async () => {
  const response = await api.get("/api/team")
  return response.data
}

export const fetchModels = async () => {
  const response = await api.get("/api/models-info")
  return response.data
}

export const submitContact = async (data: any) => {
  const response = await api.post("/api/contact", data)
  return response.data
}

export const fetchDiseaseInfo = async (diseaseId: string) => {
  const response = await api.get(`/api/disease-info/${diseaseId}`)
  return response.data
}

export const analyzeImage = async (formData: FormData) => {
  const response = await api.post("/api/analyze/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data
}

export default api
