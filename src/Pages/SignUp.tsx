import React from "react"

const SignUp = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#f8f6ef] p-4">
      <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        <section className="flex flex-col items-center space-y-8">
          <div className="flex items-center justify-center w-48 h-48 bg-white rounded-full">
            <span className="text-2xl font-bold">Logo</span>
          </div>
          <button className="w-48 h-12 bg-[#a855f7] text-white">로그인 없이 시작</button>
        </section>
        <section className="flex flex-col items-center p-8 space-y-4 bg-[#e9e7e2] rounded-lg">
          <input type="email" placeholder="이메일을 입력해주세요" className="w-64 h-12 px-4 py-2 bg-white rounded-md" />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="w-64 h-12 px-4 py-2 bg-white rounded-md"
          />
          <button className="w-64 h-12 bg-gray-300 text-gray-700">로그인하기</button>
          <button className="w-64 h-12 bg-gray-300 text-gray-700">회원가입하기</button>
          <section className="flex space-x-4">
            <button className="w-16 h-16 bg-yellow-400">
                카카오
            </button>
            <button className="w-16 h-16 bg-green-500">
                네이버
            </button>
            <button className="w-16 h-16 bg-white">
                구글
            </button>
          </section>
        </section>
      </section>
    </main>
  )
}

export default SignUp
