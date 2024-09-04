const API_URL = 'https://fakestoreapi.com/products'

export const getProducts = async (limit) => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}`)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw error
  }
}
