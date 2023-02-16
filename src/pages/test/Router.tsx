// Router là một module cung cấp các tính năng routing cho ứng dụng của bạn.
// Nó cho phép bạn xác định các URL và xử lý tương tác với các trang tương ứng. 
//Router của Next.js hỗ trợ server side rendering và code splitting,
// giúp cho ứng dụng của bạn tải nhanh và tối ưu hóa SEO.
import Link from "next/link"
import React from "react"
export default function IndexPage() {
  return (
    <div>
      <Link href="/test/State">
        <a>My second state</a>
      </Link>
      {/* <Link href="/my-folder/about">
        <a>My third page</a>
      </Link> */}
    </div>
  )
}