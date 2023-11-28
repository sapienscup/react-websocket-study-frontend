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
      <div className='mx-5'>
        <div className="text-2xl mb-5">Perfil</div>
        <div className="border border-gray-200 shadow-lg w-fit p-5">
          <div className='text-sm'>Entrar</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="mt-5">
              <input
                placeholder="Usuário"
                className="border-blue-500"
                name="username"
                onChange={e => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="mt-5">
              <input
                placeholder="Senha"
                className="border-blue-500"
                name="password"
                onChange={e => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="mt-5">
              <CustomButton text="Entrar" targetFunction={submit}></CustomButton>
            </div>
            <div className="text-blue-400 mt-5 text-center">Esqueceu a senha?</div>
          </div>
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
