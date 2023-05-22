const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg">
        <div className="bg-[#282C34] shadow-lg shadow-[#1E1F24] w-full rounded-lg p-8 mb-8">
          <div className="flex flex-col items-center gap-1 mb-8">
            <h1 className="text-xl text-[#E6E5E8] font-bold">Bienvenido</h1>
            <p className="text-[#ADB0BB] text-sm">
              Ingresa con tu correo electrónico y tu contraseña
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                className="w-full border bg-gray-200 py-2 px-10 rounded-md outline-none"
                placeholder="Ingresa tu correo"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-[#3C6E71]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full bg-gray-200 border py-2 px-10 rounded-md outline-none"
                placeholder="Ingresa tu contraseña"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-[#3C6E71]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#FB9678] py-2 px-4 text-white rounded-md hover:bg-[#ED7B5A] transition-colors"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
        <span className="flex items-center text-[#ADB0BB] justify-center gap-2">
          ¿Olvidaste tu contraseña?{' '}
          <a href="#" className="text-[#03C9D7]">
            Recuperar
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;
