'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { access } from 'fs'

export async function login(formData: FormData) {
  const supabase = await createClient()
  
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  
  const { error } = await supabase.auth.signInWithPassword(data)
  console.log(data)
  if (error) {
    console.log('erroare',error)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
export async function signUpGoogle() {

  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `http://${process.env.NODE_URL}/auth/callback`,
      queryParams:{
        access_type:"offline",
        prompt:"consent"
      }
    },
  })

  if (data.url) {
    redirect(data.url) 
  }  
}
export async function signOut() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
}