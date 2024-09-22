import {Outlet} from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const Dashboard = () => {
    return (
        <section className="drawer lg:drawer-open max-w-7xl mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-5 lg:m-12">
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-neutral btn-sm drawer-button lg:hidden mb-6">
                    Open Navbar
                </label>
                {/* Page content here */}

                <Outlet />
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"></label>
                {/* Sidebar content here */}

                <SideNav />
            </div>
        </section>
    );
};

export default Dashboard;
