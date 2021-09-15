// !Do not remove the Layout import
import Layout from '@layouts/StickyLayout';

// ** Components
// import CustomMenu from './components/Menu'
// import CustomNavbar from './components/Navbar'
// import CustomFooter from './components/Footer'

const StickyLayout = (props) => (
  <Layout
    // menu={props => <CustomMenu {...props} />}
    // navbar={props => <CustomNavbar {...props} />}
    // footer={props => <CustomFooter {...props} />}
    {...props}
  >
    {props.children}
  </Layout>
);

export default StickyLayout;
