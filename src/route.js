import React from "react";
const Home = React.lazy(() => import('./Home'))

// fakultas
const FakultasList = React.lazy(() => import('./Fakultas/List'))
const FakultasDetail = React.lazy(() => import('./Fakultas/Detail'))
const FakultasCreate = React.lazy(() => import('./Fakultas/Create'))
const FakultasUpdate = React.lazy(() => import('./Fakultas/Update'))

// prodi
const ProdiList = React.lazy(() => import('./Prodi/List'))


const routes = [
    {path: '/', Component: Home},
    {path: '/fakultas', Component: FakultasList},
    {path: '/fakultas/detail/:fakultasId', Component: FakultasDetail},
    
    {path: '/fakultas/create', Component: FakultasCreate},
    {path: '/fakultas/update/:fakultasId', Component: FakultasUpdate},

    {path: '/prodi', Component: ProdiList},
]
export default routes
