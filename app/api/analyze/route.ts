// import { handleApiError } from '@/lib/errors'
// import { rateLimiter } from '@/lib/middlewares/rateLimiter'

import { NextResponse, NextRequest } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()
    
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input: text is required' },
        { status: 400 }
      )
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const prompt = `Please summarize this document in clear, concise bullet points. Focus on key findings, main arguments, and critical data. Document content:\n\n${text}`
    const result = await model.generateContent(prompt)
    const response = result.response

    if (!response || !response.text()) {
      console.log("here");      
      throw new Error('Failed to analyze document')
    }

    const summary = response.text()

    return NextResponse.json({ summary }, {status: 200})


    // const response = await fetch('https://api.deepseek.com/chat/completions', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
    //   },
    //   body: JSON.stringify({
    //     model: "deepseek-chat",
    //     messages: [{
    //       role: "user",
    //       content: `Please summarize this document in clear, concise bullet points. Focus on key findings, main arguments, and critical data. Document content: ${text}`
    //     }],
    //     temperature: 0.7
    //   })
    // })
    
    // if (!response.ok) {
    //   console.log("here we");      
    //   const error = await response.json()
    //   console.log(error);      
    //   throw new Error(error.message || 'Failed to analyze document')
    // }
    
    // const data = await response.json()
    // return NextResponse.json({ summary: data.choices[0].message.content })

  } catch (error) {
    console.log(error);    
    return NextResponse.json({ error: "Internal server error."}, {status: 500})
  }
}