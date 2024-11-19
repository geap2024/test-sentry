'use server'

import axios from 'axios';

async function testsentry() {
  const response  = await axios(
    `/test`,
  )
  
  if (response.status !== 200) throw new Error(response.statusText)

  return response
}

export default testsentry