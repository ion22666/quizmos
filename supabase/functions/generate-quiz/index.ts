import 'https://deno.land/x/xhr@0.3.0/mod.ts'
import { CreateCompletionRequest } from 'https://esm.sh/openai@3.1.0'

Deno.serve(async (req) => {
  const { query } = await req.json()

  return query;
})