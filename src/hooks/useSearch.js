import { useState, useEffect } from 'react'

const useSearch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const resp = await fetch(url)
      const data = await resp.json()
      setData(data)
      setIsLoading(false)
    }
    fetchData()
  }, [url])

  return { isLoading, data }
}

export default useSearch
