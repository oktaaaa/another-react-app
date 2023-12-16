import React from "react";
// const Home = React.lazy(() => import('./Home'))

// fakultas
const FakultasList = React.lazy(() => import('./Fakultas/List'))
const FakultasDetail = React.lazy(() => import('./Fakultas/Detail'))
const FakultasCreate = React.lazy(() => import('./Fakultas/Create'))
const FakultasUpdate = React.lazy(() => import('./Fakultas/Update'))

// prodi
const ProdiList = React.lazy(() => import('./Prodi/List'))
const ProdiCreate = React.lazy(() => import('./Prodi/Create'))
// const AuthLogin = React.lazy(() => import('./Auth/Login'))

const routes = [
    // {path: '/', Component: Home},
    {path: '/fakultas', Component: FakultasList,role: "all"},
    {path: '/fakultas/detail/:fakultasId', Component: FakultasDetail},
    
    {path: '/fakultas/create', Component: FakultasCreate},
    {path: '/fakultas/update/:fakultasId', Component: FakultasUpdate},

    {path: '/prodi', Component: ProdiList,role: "admin"},
    {path: '/prodi/create', Component: ProdiCreate},

    // {path: '/login', Component: AuthLogin}
]
export default routes
