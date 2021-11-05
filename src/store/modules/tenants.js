const initialState = {
  tenants: [],
  selectedTenant: {},
  loading: false,
}

export default function reducer(state = initialState, action = {}) {
  console.log(action)
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true }
    case 'SUCCESS':
      return { ...state, tenants: action.result, loading: false }
    case 'FAILURE':
      return { ...state, loading: false, tenants: [] }
    case 'SELECT_TENANT':
      return { ...state, selectedTenant: action.tenant }
    default:
      return state
  }
}

export function listTenants() {
  return {
    types: ['LOADING', 'SUCCESS', 'FAILURE'],
    promise: (client) => client.get('/api/ListTenants').then((result) => result.data),
  }
}

export function getTenant({ tenant }) {
  // etc
  return {}
}

export function setTenant({ tenant }) {
  return {
    type: 'SELECT_TENANT',
    tenant,
  }
}