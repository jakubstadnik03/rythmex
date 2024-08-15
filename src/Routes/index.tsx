import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './allRoutes';
import Layout from '../Layout';

const Routing = () => {
    return (
        <React.Fragment>
            <Routes>
                {routes.map((route: any, idx: number) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={
                            <Layout
                                isNoFooter={route.isNoFooter}
                                isPages={route.isPages}
                                isWithoutLayout={route.isWithoutLayout}
                                isMultiPage={route.isMultiPage}
                                isNavBarLight={route.isNavBarLight}
                                isTopbar={route.isTopbar}
                                isTopbar2={route.isTopbar2}
                            >
                                <route.component />
                            </Layout>
                        }
                    />
                ))}
            </Routes>
        </React.Fragment>
    );
};

export default Routing;
