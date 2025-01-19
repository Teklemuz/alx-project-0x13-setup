import { HEIGHT, WIDTH } from '@/constants'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const gptApiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;

  if (!gptApiKey) {
    return response.status(400).json({ error: 'API key is missing' });
  }

  const gptUrl = 'https://chatgpt-vision1.p.rapidapi.com/texttoimage3';

  const { prompt } = request.body;

  if (!prompt) {
    return response.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const apiResponse = await fetch(gptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': gptApiKey,  
        'X-RapidAPI-Host': 'chatgpt-vision1.p.rapidapi.com', 
      },
      body: JSON.stringify({
        prompt: prompt,  
        width: WIDTH,    
        height: HEIGHT,  
      }),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      return response.status(500).json({ error: errorData?.message || 'Failed to generate image' });
    }

    const data = await apiResponse.json();

    const imageUrl = data?.image_url || 'https://via.placeholder.com/600x400?text=Generated+Image';

    return response.status(200).json({ message: imageUrl });
  } catch (error) {
    console.error('Error in API route:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
};

export default handler;
