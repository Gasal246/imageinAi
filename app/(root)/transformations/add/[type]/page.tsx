import Header from '@/components/Shared/Header'
import TransformationForm from '@/components/Shared/TransformationForm'
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const AddTransformationTypePage = async ({ params: { type }}: SearchParamProps ) => {

  const { userId } = auth()
  if(!userId) redirect('/sign-in')
  const user = await getUserById(userId)

  const transformaiton = transformationTypes[type]

  return (
    <>
      <Header title={transformaiton.title} subtitle={transformaiton.subTitle} />
      <section className='mt-10'>
        <TransformationForm action='Add' userId={user._id} type={transformaiton.type as TransformationTypeKey} creditBalance={user.creditBalance} />
      </section>
    </>
  )
}

export default AddTransformationTypePage