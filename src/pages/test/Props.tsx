import Link from 'next/link'
import React from 'react'

interface PropsUser {
  name: string
  phone: string
  email?: string
  isRender: boolean
}
const user1 = {
  name: 'Khuất Thị Hoa',
  phone: '2343242432',
  email: 'khuatthihoautc@gmail.com',
  isRender: true,
}
const CheckProp: React.FC<PropsUser> = (props) => {
  return (
    <div>
     Tên: {props.name} <br/>
     Phone: {props.phone} <br/>
     Email: {props?.email} <br/>
     Giới Tính: {props.isRender?("Nữ"):("Nam")}
    </div>
  )
}

const Home: React.FC = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <h2>Hello</h2>
        <CheckProp {...user1} />      
      </header>
      <Link href="/test/State" legacyBehavior>
        <a>Next State</a>
      </Link>
    </div>
  )
}
export default Home


