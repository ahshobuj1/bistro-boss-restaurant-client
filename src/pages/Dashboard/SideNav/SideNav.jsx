import useAdmin from '../../../hooks/useAdmin/useAdmin';
import AdminNav from './AdminNav/AdminNav';
import CommonNav from './CommonNav/CommonNav';
import UserNav from './UserNav/UserNav';

const SideNav = () => {
    const [isAdmin] = useAdmin();
    console.log('admin check ', isAdmin);

    return (
        <ul className="menu bg-[#D1A054] min-h-screen w-60 p-5 uppercase text-black">
            {isAdmin ? <AdminNav></AdminNav> : <UserNav></UserNav>}

            <div className="divider"></div>

            <CommonNav></CommonNav>
        </ul>
    );
};

export default SideNav;
