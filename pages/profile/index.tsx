import { enterChat } from '@/app/api/profile'
import Layout from '@/app/layout'
import CustomButton from '@/components/atoms/CustomButton'
import type { NextPageWithLayout } from '@/pages/_app'
import { useState, type ReactElement } from 'react'
 
const Todos: NextPageWithLayout = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = async () => {
    await enterChat({
      username: username || '',
      password: password || ''
    })
  }

  return (
    <>
      <div className="text-2xl mx-5 mb-5">Perfil</div>
      <div className='border border-gray-200 shadow-lg w-4/12 p-5 ml-5'>
        <div>
          Entrar
        </div>
        <div className='grid grid-cols-2'>
          <div className='mt-5'>
            <input placeholder="Usuário" className="border-blue-500" name="username" value={username}></input>
          </div>
          <div className='mt-5 ml-3'>
            <input placeholder="Senha" className="border-blue-500" name="password" value={password}></input>
          </div>
          <div className='mt-5'>
            <CustomButton text='Entrar' targetFunction={submit}></CustomButton>
          </div>
          <div className='text-blue-400 mt-5 ml-3 text-center'>Esqueceu a senha?</div>
        </div>
      </div>
    </>
  )
}

Todos.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout name='Perfil'>
      {page}
    </Layout>
  )
}
 
export default Todos
