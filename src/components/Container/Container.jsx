import Account from '../Account/Account'
import Title from '../Title/Title'

function Container() {
  return (
    <div className='container'>
      <Title>Smart Bank</Title>
      <section className='content'>
        <Account />
      </section>
    </div>
  )
}

export default Container
